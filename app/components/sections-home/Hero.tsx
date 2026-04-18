import Image from 'next/image'

export default function Hero() {
  // Extraemos la lógica del link para que el JSX sea más limpio
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent(process.env.NEXT_PUBLIC_HABLEMOS_MESSAGE || '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="hero" className="relative mt-26 w-full overflow-hidden bg-[#3A3C40]">
      {/* 1. Contenedor de Imagen con Relación de Aspecto */}
      <div className="relative h-auto w-full">
        <Image
          src="/images/photo-hero.png"
          alt="Climatización Redeco Toia"
          width={1920}
          height={600}
          className="block h-auto w-full object-cover"
          priority
        />
        {/* Capa oscura (Overlay) unificada */}
        <div className="absolute inset-0 bg-[#3A3C40]/40" aria-hidden="true" />
      </div>

      {/* 2. Capa de Contenido: Centrada verticalmente mediante Flexbox */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-360 px-6 text-white md:px-20 lg:px-40">
          
          {/* Etiqueta superior */}
          <p className="mb-2 text-xs">
            <span className="bg-[#3A3C40]/70 border-l-3 border-[#F6B426] px-4 py-1 font-medium tracking-wide">
              Soluciones Integrales de Climatización y Energía.
            </span>
          </p>

          {/* Título: Controlamos el ancho para evitar los <br/> manuales */}
          <h1 className="mb-2 max-w-xl text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Mantén tu Hogar y Empresa a la Temperatura Ideal
          </h1>

          {/* Descripción: leading-relaxed para mejor lectura */}
          <p className="mb-2 max-w-lg text-sm leading-relaxed text-gray-100 opacity-90 md:text-base">
            Ofrecemos servicios profesionales de instalación y mantenimiento preventivo. 
            Nos aseguramos de que tu sistema eléctrico sea seguro (ERSEP Categoría III) 
            y que tu aire acondicionado funcione eficientemente cuando más lo necesitas.
          </p>

          {/* Botón de Acción (CTA) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden bg-[#F6B426] px-12 py-4 font-bold text-[#3A3C40] transition-all"
          >
            <span className="relative my-auto z-10">Hablemos</span>
            {/* Efecto de esquina blanca en hover */}
            <span className="absolute bottom-0 right-0 h-8 w-8 rounded-tl-full bg-white transition-all duration-300 ease-out group-hover:h-24 group-hover:w-24" />
          </a>
          
        </div>
      </div>
    </section>
  )
}