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
    console.log("Token from cookie:", token); // <== log token

    /* if (!token) {
      console.log("No token found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    console.log("Payload after verifyToken:", payload); // <== log payload

    if (!payload?.userId) {
      console.log("Token invalid or missing userId");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, description, slug } = await req.json();
    console.log("Creating category with data:", { name, description, slug }); // <== log input */

    const newCategory = await prisma.category.create({
      data: { name, slug, description },
    });

    console.log("New category created:", newCategory); // <== log result
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/categories:", error);
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}

