import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { verifyToken } from "@/lib/jwt"; // your own JWT helper

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to load categories" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload?.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, description, slug } = await req.json();

    // 4. Create new category
    const newCategory = await prisma.category.create({
      data: { name, slug, description },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}
