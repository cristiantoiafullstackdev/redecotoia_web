"use client";
import Image from "next/image";
import { useState } from "react";

const TABS_CONTENT = {
  enfoque: {
    title: "Nuestro enfoque",
    text: "En RedecoToia, nos especializamos en transformar espacios a través de un mantenimiento integral de excelencia. Contamos con un equipo de técnicos certificados dedicados a la instalación y reparación de aires acondicionados y sistemas eléctricos residenciales e industriales. Nuestro compromiso es brindar una respuesta rápida y soluciones duraderas que superen las expectativas de calidad.",
  },
  mision: {
    title: "Misión",
    text: "Nuestra misión es proporcionar soluciones integrales en climatización y electricidad que garanticen la seguridad y el confort de nuestros clientes. Nos enfocamos en la excelencia técnica y el uso de tecnologías eficientes para optimizar el consumo energético y prolongar la vida útil de cada equipo.",
  },
  valores: {
    title: "Valores",
    text: "Compromiso: Calidad garantizada en cada instalación y reparación. Transparencia: Presupuestos claros y asesoramiento honesto. Seguridad: Cumplimiento estricto de las normas eléctricas vigentes.",
  },
};

type TabType = keyof typeof TABS_CONTENT;

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("enfoque");

  return (
    <section id="about" className="w-full bg-[#dbdbdb] py-24 px-6 font-rubik">
      {/* Contenedor principal con altura sincronizada */}
      <div className="mx-auto flex max-w-286 flex-col items-stretch justify-between gap-24 lg:flex-row">
        
        {/* BLOQUE DE IMÁGENES */}
        <div className="relative w-full lg:w-1/2 min-h-100">
          {/* Imagen Principal */}
          <div className="h-full w-full overflow-hidden">
            <Image
              src="/images/photo-about.png"
              alt="Instalación de aire acondicionado"
              width={600}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Imagen Pequeña con borde idéntico al fondo */}
          <div className="absolute -bottom-12 -right-12 w-48 overflow-hidden border-18 border-[#dbdbdb] md:w-48">
            <Image
              src="/images/photo-about2.png"
              alt="Técnico trabajando"
              width={90}
              height={60}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* BLOQUE DE CONTENIDO (Ajustado para igualar altura) */}
        <div className="flex w-full flex-col justify-between lg:w-1/2 py-2">
          
          {/* Encabezado */}
          <div>
            <h5 className="mb-4 inline-block text-xs font-bold tracking-wider text-[#1C1F35]">
              <span className="border-l-4 border-[#F6B426] bg-[#3A3C40]/20 px-4 py-1.5">
                Sobre Nosotros
              </span>
            </h5>
            <h2 className="text-3xl font-bold leading-tight text-[#1C1F35] md:text-4xl">
              Nuestra trayectoria en <br /> confort y Energía
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#1C1F35]">
              Implementamos soluciones técnicas de alta precisión para garantizar que cada sistema eléctrico y de climatización funcione al máximo rendimiento, priorizando siempre la seguridad y la eficiencia energética de nuestros clientes.
            </p>
          </div>

          {/* SECCIÓN DE TABS (Acciones y animaciones originales mantenidas) */}
          <div className="mt-8">
            <div className="bg-white flex w-full p-1 shadow-sm mb-4">
              {(Object.keys(TABS_CONTENT) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-[#1C1F35] font-semibold transition-colors duration-300 ${
                    activeTab === tab
                      ? "bg-[#F6B426]"
                      : "hover:bg-[#dbdbdb]/70 cursor-pointer"
                  }`}
                >
                  {TABS_CONTENT[tab].title}
                </button>
              ))}
            </div>

            {/* Texto del Tab con altura controlada */}
            <div className="min-h-25">
              <p className="text-[#1C1F35] text-xs leading-relaxed animate-in fade-in slide-in-from-bottom-1 duration-500">
                {TABS_CONTENT[activeTab].text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}