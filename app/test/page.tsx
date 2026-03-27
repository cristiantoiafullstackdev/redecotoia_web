
import prisma from "@/lib/prisma";

export default async function TestPage() {
  try {
    // Intentamos contar cuántas categorías hay (debería ser 0 ahora)
    const count = await prisma.category.count();
    return (
      // eslint-disable-next-line react-hooks/error-boundaries
      <div className="p-10 text-green-600">
        ¡Conexión exitosa! Categorías: {count}
      </div>
    );
  } catch (error) {
    return <div className="p-10 text-red-600">Error: {JSON.stringify(error)}</div>;
  }
}