import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="w-full mt-26 relative">
      <Image
        src="/images/photo-hero.png"
        alt="imagen Redeco Toia"
        width={1920}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#3A3C40]/40"></div>
      <div className="absolute top-1/4 ml-40 text-white px-4">
        <p className="text-xs mb-2">
          <span className="border-l-3 border-[#F6B426] px-4 py-1 bg-[#3A3C40]/70">
            Soluciones Integrales de Climatización y Energía.
          </span>
        </p>
        <h1 className="text-5xl font-bold mb-4">
          Mantén tu Hogar y <br />
          Empresa a la <br />
          Temperatura Ideal
        </h1>
        <p className="text-sm mb-6">
          Ofrecemos servicios profesionales de instalación y mantenimiento  <br />
          preventivo. Nos aseguramos de que tu sistema eléctrico sea  <br />
          seguro (ERSEP Categoría III) y que tu aire acondicionado funcione de  <br />
          manera eficiente cuando mas lo necesitas.
        </p>
        <div className="group inline-block">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_HABLEMOS_MESSAGE || '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block bg-[#F6B426] text-[#3A3C40] font-bold py-2 px-10 overflow-hidden"
          >
            <span className="relative z-10">Hablemos</span>
            <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
          </a>
        </div>
      </div>
    </section>
  )
}
