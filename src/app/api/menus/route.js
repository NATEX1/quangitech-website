import { PrismaClient } from "@/generated/prisma";
import {  NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const menus = await prisma.menu.findMany({
      include: {
        items: {
          where: { parentId: null },
          include: { children: true },
          orderBy: { sortOrder: "asc" },
        },
      },
    });
    return NextResponse.json(menus);
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json(
      { error: "Failed to fetch menus" },
      { status: 500 }
    );
  }
}
