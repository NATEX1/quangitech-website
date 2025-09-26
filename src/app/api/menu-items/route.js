import { PrismaClient } from "@/generated/prisma";
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { menuId, name, url, parentId } = body;

    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload?.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let sortOrder;

    if (parentId) {
      const maxSort = await prisma.menuItem.aggregate({
        _max: { sortOrder: true },
        where: {
          menuId,
          parentId: parentId,
        },
      });
      sortOrder = (maxSort._max.sortOrder ?? 0) + 1;
    } else {
      const maxSort = await prisma.menuItem.aggregate({
        _max: { sortOrder: true },
        where: {
          menuId,
          parentId: null,
        },
      });
      sortOrder = (maxSort._max.sortOrder ?? 0) + 1;
    }

    const newItem = await prisma.menuItem.create({
      data: {
        menuId,
        name,
        url,
        sortOrder,
        parentId: parentId || null,
      },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Error creating menu item: ", error);
    return NextResponse.json(
      { error: "Failed to create menu item" },
      { status: 500 }
    );
  }
}
