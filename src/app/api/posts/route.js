import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { PrismaClient } from "@/generated/prisma";
import { verifyToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function POST(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = verifyToken(token);
  if (!payload?.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();

  const title = formData.get("title")?.toString() || "";
  const slug = formData.get("slug")?.toString() || "";
  const excerpt = formData.get("excerpt")?.toString() || "";
  const content = formData.get("content")?.toString() || "";
  const status = formData.get("status")?.toString() || "draft";
  const postType = formData.get("postType")?.toString() || "post";
  const isFeatured = formData.get("isFeatured") === "true";
  const metaTitle = formData.get("metaTitle")?.toString() || "";
  const metaDescription = formData.get("metaDescription")?.toString() || "";
  const metaKeyword = formData.get("metaKeyword")?.toString() || "";
  const categoryId = formData.get("categoryId")?.toString()

  if (!title || !slug || !content || !categoryId) {
    return NextResponse.json(
      { error: "Title, slug, content, and categoryId are required" },
      { status: 400 }
    );
  }

  let thumbnailPath = null;
  const thumbnailFile = formData.get("thumbnail");

  if (thumbnailFile instanceof File) {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
    const filename = `${Date.now()}-${thumbnailFile.name.replace(/\s+/g, "-")}`;
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);
    thumbnailPath = `/uploads/${filename}`;
  } else if (typeof thumbnailFile === "string") {
    thumbnailPath = thumbnailFile;
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        status,
        postType,
        isFeatured,
        metaTitle,
        metaDescription,
        metaKeyword,
        category: { connect: { id: categoryId } },
        author: { connect: { id: payload.userId } },
        thumbnail: thumbnailPath,
        publishedAt: status === "published" ? new Date() : null,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatarUrl: true,
          },
        },
        category: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
