/* CONFIGURACIÓN GLOBAL DE PRISMA
   Este archivo le indica a Prisma dónde encontrar cada pieza del rompecabezas
   sin tener que configurarlo en el package.json o por consola.
*/
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  /* RUTA DEL ESQUEMA
     Define la ubicación exacta de tu archivo 'schema.prisma'. 
     Es el mapa que Prisma usa para generar el cliente y las tablas.
  */
  schema: "prisma/schema.prisma",
  /* CONFIGURACIÓN DE MIGRACIONES Y SEEDING
     - path: Indica dónde se guardará el historial de cambios de tu base de datos.
     - seed: Define el comando exacto para llenar la base de datos. 
       Al usar 'tsx', permites que Next.js ejecute directamente el archivo TypeScript 
       sin necesidad de compilarlo manualmente a JS primero.
  */
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  /* FUENTE DE DATOS (DATABASE CONNECTION)
     - Usa la función 'env()' para inyectar de forma segura tu DATABASE_URL.
     - Al estar centralizado aquí, te aseguras de que tanto el cliente en el 
       frontend como las herramientas de consola (CLI) usen la misma conexión.
  */
  datasource: {
    url: env("DATABASE_URL"),
  },
});  