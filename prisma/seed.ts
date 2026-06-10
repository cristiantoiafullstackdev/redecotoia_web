// prisma/seed.ts
/* IMPORTACIONES Y CONFIGURACIÓN INICIAL
   - dotenv/config: Carga las variables del archivo .env para que Prisma sepa a dónde conectarse.
   - categories/services: Importas tus archivos JSON locales donde tienes escrita la 
     información de los servicios (títulos, precios, rutas de fotos).
*/
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

// Importamos los JSON
import categories from "./data/categories.json";
import services from "./data/services.json";

/* CONEXIÓN A LA BASE DE DATOS
   Utiliza el mismo patrón del adaptador que vimos antes para asegurar que la 
   comunicación con Neon sea fluida durante el proceso de carga.
*/
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Iniciando el proceso de Seeding para Redeco Toia...");

  /* 1. CARGAR CATEGORÍAS (Upsert)
     - SINTAXIS: upsert ({ where, update, create })
     - ESTE BLOQUE: Si la categoría con ese ID ya existe, solo la 
       actualiza (update). Si no existe, la crea (create).
  */
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: { name: cat.name },
      create: { id: cat.id, name: cat.name },
    });
  }
  console.log("✅ Categorías cargadas.");

  /* 2. LIMPIEZA TOTAL DE SERVICIOS
     Esto elimina el problema de duplicados antes de insertar los nuevos servicios.
  */
  await prisma.service.deleteMany({});
  console.log("🗑️ Tabla de servicios limpia.");

  /* 3. CARGAR SERVICIOS (Create)
     - ESTE BLOQUE: Al estar la tabla limpia, inserta directamente cada servicio 
       usando 'create' evitando el error de restricciones únicas de PostgreSQL.
  */
  for (const svc of services) {
    await prisma.service.create({
      data: {
        title: svc.title,
        description: svc.description,
        imagePath: svc.imagePath,
        price: svc.price,
        minUnits: svc.minUnits || 1,
        currency: svc.currency || "ARS",
        categoryId: svc.categoryId,
      },
    });
  }
  console.log("✅ Base de datos actualizada con todos los servicios.");
}

/* GESTIÓN DEL PROCESO
   - catch: Si algo falla, te avisa por consola.
   - finally: Desconecta Prisma de la base de datos para no dejar conexiones colgadas.
*/
main()
  .catch((e) => {
    console.error("❌ Error en el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🏁 Proceso finalizado.");
  });