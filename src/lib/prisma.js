import { PrismaClient } from "@/generated/prisma";

let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient({ log: ["query"] });
}

prisma = global.prisma;

export default prisma;
