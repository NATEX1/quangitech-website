import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
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
  try {
    const { id } = await params;

    await prisma.post.delete({ where: { id } });
    return NextResponse.json(
      { message: `Deleted item with id: ${id}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}
