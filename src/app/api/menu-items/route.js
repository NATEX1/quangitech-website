import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { menuId, name, url } = body;

    // Get the current max sortOrder for this menu
    const maxSort = await prisma.menuItem.aggregate({
      _max: { sortOrder: true },
      where: { menuId },
    });

    const sortOrder = (maxSort._max.sortOrder ?? 0) + 1;

    // Create new menu item
    const newItem = await prisma.menuItem.create({
      data: {
        menuId,
        name,
        url,
        sortOrder,
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
