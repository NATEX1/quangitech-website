import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const { sortOrder } = await req.json();

    const updatedItem = await prisma.menuItem.update({
      where: { id: id },
      data: { sortOrder },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update menu item" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const deletedItem = await prisma.menuItem.delete({
      where: { id: id },
    });

    return NextResponse.json(deletedItem, { status: 200 });
  } catch (error) {
    console.error("Failed to delete menu item:", error);
    return NextResponse.json(
      { error: "Failed to delete menu item" },
      { status: 500 }
    );
  }
}
