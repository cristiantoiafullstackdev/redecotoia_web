import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function ElectricidadPage() {
const services = await prisma.service.findMany({
  where: { categoryId: 3 },
  select: {
    id: true,
    title: true,
    description: true,
    imagePath: true,
    price: true,
    currency: true,
  },
});
  

  return (
    <div className="mt-40 px-54 py-8 bg-amber-100 w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-10">Mantenimientos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id}>
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p>{service.description}</p>
            <p className="text-blue-600 font-semibold">
              {service.currency} {service.price.toLocaleString('es-AR')}
            </p>
            {/* Importante: usar imagePath */}
            <Image src={service.imagePath} alt={service.title} className="w-full h-auto" width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}

