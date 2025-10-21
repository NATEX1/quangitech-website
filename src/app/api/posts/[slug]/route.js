import path from "path";
import { mkdir, writeFile } from "fs/promises";
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";


export async function GET(req, { params }) {
  const { slug } = await params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        category: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { slug } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const post = await prisma.post.findUnique({ where: { slug } });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await prisma.post.delete({ where: { slug } });

    return NextResponse.json(
      { message: `Deleted item with slug: ${slug}` },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { slug: postSlug } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const formData = await req.formData();

  const title = formData.get("title")?.toString();
  const slug = formData.get("slug")?.toString();
  const excerpt = formData.get("excerpt")?.toString();
  const content = formData.get("content")?.toString();
  const status = formData.get("status")?.toString();
  const postType = formData.get("postType")?.toString();
  const isFeatured = formData.get("isFeatured") === "true";
  const metaTitle = formData.get("metaTitle")?.toString();
  const metaDescription = formData.get("metaDescription")?.toString();
  const metaKeyword = formData.get("metaKeyword")?.toString();
  const categoryId = formData.get("categoryId")?.toString();

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
    const updatedPost = await prisma.post.update({
      where: { slug: postSlug },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(excerpt && { excerpt }),
        ...(content && { content }),
        ...(status && { status }),
        ...(postType && { postType }),
        isFeatured,
        ...(metaTitle && { metaTitle }),
        ...(metaDescription && { metaDescription }),
        ...(metaKeyword && { metaKeyword }),
        ...(categoryId && { category: { connect: { id: categoryId } } }),
        ...(thumbnailPath && { thumbnail: thumbnailPath }),
        updatedAt: new Date(),
        publishedAt: status === "published" ? new Date() : null,
      },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
