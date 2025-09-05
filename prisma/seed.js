const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("123456", 10);

  // สร้างผู้ใช้ใหม่
  const user = await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      fullName: "Admin Art",
      avatarUrl: null,
    },
    include: {
      posts: true, // array relation
    },
  });

  console.log("✅ Created user:", user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

/* 

async function main() {
  // สร้างเมนู
  const navBarMenu = await prisma.menu.create({
    data: { name: "Navigation Bar" },
  });

  // สร้าง top-level items
  const homeItem = await prisma.menuItem.create({
    data: {
      name: "Home",
      url: "/home",
      sortOrder: 1,
      menuId: navBarMenu.id
    }
  });

  const aboutItem = await prisma.menuItem.create({
    data: {
      name: "About",
      url: "/about",
      sortOrder: 2,
      menuId: navBarMenu.id
    }
  });

  const productsItem = await prisma.menuItem.create({
    data: {
      name: "Products",
      url: "/products",
      sortOrder: 3,
      menuId: navBarMenu.id
    }
  });

  // สร้าง children ของ About
  await prisma.menuItem.create({
    data: {
      name: "Team",
      url: "/about/team",
      sortOrder: 1,
      menuId: navBarMenu.id,
      parentId: aboutItem.id
    }
  });

  await prisma.menuItem.create({
    data: {
      name: "Company",
      url: "/about/company",
      sortOrder: 2,
      menuId: navBarMenu.id,
      parentId: aboutItem.id
    }
  });

  console.log("Seeder completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
 */