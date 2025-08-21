import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Maike Brito",
        email: "Mayk@email.com",
      },
      {
        name: "Diego Fernandes",
        email: "diego@email.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
