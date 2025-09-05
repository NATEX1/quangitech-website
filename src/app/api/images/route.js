import { NextRequest, NextResponse } from "next/server";
import { writeFile, readdir, unlink } from "fs/promises";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public", "uploads");

async function ensureUploadDir() {
  try {
    await readdir(uploadDir); 
  } catch {
    // สร้างโฟลเดอร์ก่อน
    await fs.promises.mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, ".keep"), "");
  }
}


export async function GET(req) {
  // Load images
  try {
    const files = await readdir(uploadDir);
    const images = files.map((file) => ({ url: `/uploads/${file}` }));
    return NextResponse.json(images);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to load images" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await ensureUploadDir();

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // ตั้งชื่อไฟล์ใหม่
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const filePath = path.join(uploadDir, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/${filename}`;
    return NextResponse.json({ link: imageUrl });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}



export async function DELETE(req) {
  try {
    // Froala may send src as form-data
    const formData = await req.formData();
    const src = formData.get("src")?.toString();

    if (!src) {
      return NextResponse.json({ error: "No src provided" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "public", src.replace(/^\/+/, ""));
    await fs.promises.unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete error:", err);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}






