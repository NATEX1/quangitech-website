import { PrismaClient } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export const PUT = async (req, { params }) => {
  try {
    const { id: categoryId } = await params;
    const { name, slug, description } = await req.json();

    const updatedCategory = await prisma.category.update({
      where: { id: categoryId },
      data: { name, slug, description },
    });

    return NextResponse.json(updatedCategory, { status: 200 });
  } catch (error) {
    console.log("error: ", error.message);
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id: categoryId } = await params;

    await prisma.category.delete({
      where: { id: categoryId },
    });

    return NextResponse.json(
      { message: "Category deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("error: ", error.message);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
};
