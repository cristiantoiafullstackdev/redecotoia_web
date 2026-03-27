// prisma/seed.ts
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

// Importamos los JSON
import categories from "./data/categories.json";
import services from "./data/services.json";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Iniciando el proceso de Seeding para Redeco Toia...");

  // 1. Cargar Categorías
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: { name: cat.name },
      create: { id: cat.id, name: cat.name },
    });
  }
  console.log("✅ Categorías cargadas.");

  // 2. Cargar Servicios
  for (const svc of services) {
    await prisma.service.create({
      data: {
        title: svc.title,
        categoryId: svc.categoryId,
        description: "Servicio profesional garantizado por Redeco Toia."
      },
    });
  }
  console.log("✅ Servicios vinculados correctamente.");
}

main()
  .catch((e) => {
    console.error("❌ Error en el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🏁 Proceso finalizado.");
  });