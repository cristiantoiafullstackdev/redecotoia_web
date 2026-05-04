/* SINTAXIS: Next.js (Server Components) + Prisma
   ESTE BLOQUE: Importas la instancia de Prisma y el componente Image de Next.js.
   Nota que la función es 'async', lo que permite hacer consultas a la base de datos
   directamente en el cuerpo del componente.
*/
import prisma from "@/lib/prisma";

export default async function RefrigeracionPage() {
  /* LÓGICA DE DATOS: Prisma Query
     ESTE BLOQUE: Realiza una consulta a la tabla 'service'. 
     - 'where': Filtra solo los que pertenecen a la categoría 2 (Refrigeración).
     - 'select': Solo trae los campos necesarios, optimizando la velocidad y la memoria.
  */
  const services = await prisma.service.findMany({
    where: { categoryId: 2 },
    select: {
      id: true,
      title: true,
      description: true,
      imagePath: true,
      price: true,
      currency: true,
    },
  });

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent(process.env.NEXT_PUBLIC_HABLEMOS_MESSAGE || '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


  return (
    <div className="w-full mt-2 mb-10">
      {/* LAYOUT PRINCIPAL: 
          'mt-48' asegura que el contenido baje lo suficiente para no quedar 
          oculto tras un header fijo (si lo hubiera).
      */}
      <div className="mt-48 max-w-72 md:max-w-286 min-h-screen mx-auto">
        
        {/* ENCABEZADO DE SECCIÓN:
            Usa el mismo estilo visual (border-l-4 y bg) que vimos en los componentes 
            anteriores para mantener la coherencia de marca.
        */}
        <h5 className="mb-4 inline-block text-xs font-bold tracking-wider text-[#1C1F35]">
          <span className="border-l-4 border-[#F6B426] bg-[#3A3C40]/20 px-4 py-1.5">
            Servicios
          </span>
        </h5>
        <h1 className="text-3xl font-bold mb-10 text-[#1C1F35]">Refrigeración</h1>

        {/* GRID DINÁMICO: 
            SINTAXIS: Tailwind Responsive Grid
            ESTE BLOQUE: Se adapta de 1 columna (móvil) a 2 (tablet) y 3 (escritorio).
            Usa 'gap-16' para dar mucho aire entre las tarjetas de servicio.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service) => (
            /* TARJETA DE SERVICIO:
               Presenta un diseño minimalista con bordes solo en la parte superior e izquierda, 
               creando un efecto visual moderno y ligero.
            */
            <div 
              key={service.id}
              className="min-w-60 min-h-80 p-8 border-t border-l border-[#3A3C40] flex flex-col"
            >
              <h2 className="text-2xl min-h-26 font-normal mb-2 text-[#1C1F35]">
                {service.title}
              </h2>
              <p className="text-[#1C1F35] min-h-30 mb-2">{service.description}</p>
              
              {/* FORMATEO DE MONEDA:
                  SINTAXIS: .toLocaleString('es-AR')
                  ESTE BLOQUE: Formatea el precio automáticamente con puntos y comas 
                  según el estándar de Argentina (ej: 1.500,00).
              */}
              <p className="text-[#1C1F35] text-xl mb-6 font-semibold text-start">
                {service.currency} {service.price.toLocaleString('es-AR')}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block overflow-hidden bg-[#091242] p-4 text-white text-center transition-all"
              >
                <span className="relative my-auto z-10 font-semibold">Consultar por WhatsApp</span>
                {/* Efecto decorativo en hover: Cambia su tamaño de w-8 a w-24 */}
                <span className="absolute bottom-0 right-0 h-8 w-8 rounded-tl-full bg-[#1F2A69] transition-all duration-300 ease-out group-hover:h-24 group-hover:w-24" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-[#1C1F35]">
          <span className="font-bold">
            ¿Necesitás instalar o mejorar tu sistema de climatización en Córdoba?<br/> 
          </span>
          En Redeco Toia trabajamos con todas las normas de seguridad y las herramientas adecuadas para lograr una instalación segura y eficiente que maximice la vida útil de tu equipo. Haz clic en el botón de WhatsApp y asegura el confort de tu propiedad.
        </p>
      </div>
    </div>
  );
}