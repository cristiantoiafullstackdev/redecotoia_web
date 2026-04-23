/* SINTAXIS: JavaScript (ES6 Modules)
   ESTE BLOQUE: Importación del componente Image de Next.js para optimización de carga de recursos visuales.
*/
import Image from 'next/image'

/* SINTAXIS: React Functional Component (Sección Hero)
   ESTE BLOQUE: Componente de impacto visual inicial que utiliza una imagen de fondo y texto superpuesto.
*/
export default function Hero() {
  
  /* SINTAXIS: JavaScript (Variables y Template Literals)
     ESTE BLOQUE: Lógica para construir la URL de WhatsApp. Utiliza variables de entorno (process.env) para 
     mantener la seguridad de los datos y 'encodeURIComponent' para formatear correctamente el mensaje.
  */
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent(process.env.NEXT_PUBLIC_HABLEMOS_MESSAGE || '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="hero" className="relative top-40 lg:top-26 w-full overflow-hidden bg-[#3A3C40]">
      
      {/* 1. CONTENEDOR DE IMAGEN: Capa base de la sección.
          SINTAXIS: JSX + Tailwind (Posicionamiento Relativo)
          ESTE BLOQUE: Renderiza la imagen principal. El atributo 'priority' indica a Next.js que cargue 
          esta imagen primero por estar por encima del pliegue (LCP).
      */}
      <div className="relative h-auto w-full">
        <Image
          src="/images/photo-hero.png"
          alt="Climatización Redeco Toia"
          width={1920}
          height={600}
          className="block h-auto w-full object-cover"
          priority
        />
        
        {/* Capa oscura (Overlay): Div absoluto que oscurece la imagen para mejorar la legibilidad del texto blanco */}
        <div className="absolute inset-0 bg-[#3A3C40]/40" aria-hidden="true" />
      </div>

      {/* 2. CAPA DE CONTENIDO: Superpuesta a la imagen.
          SINTAXIS: JSX + Flexbox (Centrado vertical)
          ESTE BLOQUE: Utiliza 'absolute inset-0' para ocupar todo el espacio del Hero y 'items-center' 
          para centrar el texto verticalmente sobre la imagen.
      */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-360 px-6 text-white md:px-20 lg:px-40">
          
          {/* Etiqueta superior: Texto pequeño decorativo con borde lateral dorado */}
          <p className="mb-2 text-xs">
            <span className="bg-[#3A3C40]/70 border-l-3 border-[#F6B426] px-4 py-1 font-medium tracking-wide">
              Soluciones Integrales de Climatización y Energía.
            </span>
          </p>

          {/* Título Principal (H1): Definido con tamaños responsivos (text-2xl a text-5xl) */}
          <h1 className="mb-2 max-w-xl text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Servicios de Electricidad y Refrigeración en Córdoba
          </h1>

          {/* Descripción: Texto secundario con opacidad para no competir visualmente con el título */}
          <p className="mb-4 max-w-lg text-sm leading-relaxed text-gray-100 opacity-90 md:text-base">
            ¿Necesitas mantenimiento preventivo o reparaciones urgentes? Garantizamos el confort de tu hogar y empresa...
          </p>

          {/* Botón de Acción (CTA): 
              SINTAXIS: HTML Anchor Tag + Lógica de Hover
              ESTE BLOQUE: Link externo a WhatsApp que abre en pestaña nueva. Incluye un span absoluto que 
              crea el efecto de "esquina blanca" que crece al pasar el mouse (group-hover).
          */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden bg-[#F6B426] px-12 py-4 font-bold text-[#3A3C40] transition-all"
          >
            <span className="relative my-auto z-10">Solicitar presupuesto técnico</span>
            
            {/* Efecto decorativo en hover: Cambia su tamaño de w-8 a w-24 */}
            <span className="absolute bottom-0 right-0 h-8 w-8 rounded-tl-full bg-white transition-all duration-300 ease-out group-hover:h-24 group-hover:w-24" />
          </a>
          
        </div>
      </div>
    </section>
  )
}