import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth" // ไฟล์ config next-auth ของคุณ
import prisma from "@/lib/prisma"


export async function POST(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // เช็ค role
    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await req.json()
    const { menuId, name, url, parentId } = body

    let sortOrder

    if (parentId) {
      const maxSort = await prisma.menuItem.aggregate({
        _max: { sortOrder: true },
        where: { menuId, parentId }
      })
      sortOrder = (maxSort._max.sortOrder ?? 0) + 1
    } else {
      const maxSort = await prisma.menuItem.aggregate({
        _max: { sortOrder: true },
        where: { menuId, parentId: null }
      })
      sortOrder = (maxSort._max.sortOrder ?? 0) + 1
    }

    const newItem = await prisma.menuItem.create({
      data: {
        menuId,
        name,
        url,
        sortOrder,
        parentId: parentId || null
      }
    })

    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    console.error("Error creating menu item: ", error)
    return NextResponse.json(
      { error: "Failed to create menu item" },
      { status: 500 }
    )
  }
}
