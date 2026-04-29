/* SINTAXIS: Next.js / React (Directive)
   ESTE BLOQUE: Habilita el modo cliente para usar el Hook 'useState' y permitir la interactividad de las pestañas.
*/
"use client";

/* SINTAXIS: JavaScript (ES6 Modules)
   ESTE BLOQUE: Importación del componente optimizado de imágenes de Next.js y el Hook de estado de React.
*/
import Image from "next/image";
import { useState } from "react";

/* SINTAXIS: JavaScript (Objeto de Configuración)
   ESTE BLOQUE: Diccionario de contenidos. Centraliza los textos de la sección para facilitar el mantenimiento y la lectura del código.
*/
const TABS_CONTENT = {
  enfoque: {
    title: "Nuestro enfoque",
    text: "En RedecoToia, nos especializamos en transformar espacios a través de un mantenimiento integral de excelencia...",
  },
  mision: {
    title: "Misión",
    text: "Nuestra misión es proporcionar soluciones integrales en climatización y electricidad que garanticen la seguridad...",
  },
  valores: {
    title: "Valores",
    text: "Compromiso: Calidad garantizada. Transparencia: Presupuestos claros. Seguridad: Cumplimiento de normas.",
  },
};

/* SINTAXIS: TypeScript (Type Inference)
   ESTE BLOQUE: Define un tipo basado en las llaves del objeto TABS_CONTENT ('enfoque' | 'mision' | 'valores') para evitar errores de escritura.
*/
type TabType = keyof typeof TABS_CONTENT;

/* SINTAXIS: React Functional Component (Sección Sobre Nosotros)
   ESTE BLOQUE: Componente principal que gestiona la presentación de la trayectoria y filosofía de la empresa.
*/
export default function About() {
  
  /* SINTAXIS: React Hook (useState con Generic de TypeScript)
     ESTE BLOQUE: Estado para controlar cuál pestaña está seleccionada actualmente. Por defecto inicia en 'enfoque'.
  */
  const [activeTab, setActiveTab] = useState<TabType>("enfoque");

  return (
    <section id="about" className="w-full bg-[#dbdbdb] py-12 md:py-12 px-6 font-rubik">
      
      {/* Contenedor principal: Usa flex-col para móvil y flex-row para pantallas grandes (lg) */}
      <div className="mx-auto flex max-w-6xl px-8 pt-8 md:pt-1 flex-col items-stretch justify-between lg:gap-24 lg:flex-row">
        
        {/* BLOQUE DE IMÁGENES: Composición con posición relativa para permitir el solapamiento */}
        <div className="relative w-full lg:w-1/2 h-50 lg:h-60 xl:h-80 mb-6 md:mb-12 lg">
          
          {/* Imagen Principal: Ocupa el contenedor base con efecto object-cover */}
          <div className="h-full w-full overflow-hidden">
            <Image
              src="/images/photo-about.png"
              alt="Instalación de aire acondicionado"
              width={600}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Imagen Secundaria: Flotante con posicionamiento absoluto y borde grueso que simula recorte */}
          <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-12 -right-4 md:-right-12 overflow-hidden border-12 md:border-18 border-[#dbdbdb] w-24 sm:w-36 md:w-48">
            <Image
              src="/images/photo-about2.png"
              alt="Técnico trabajando"
              width={90}
              height={60}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* BLOQUE DE CONTENIDO: Textos informativos y sistema de pestañas interactivo */}
        <div className="flex w-full flex-col justify-between lg:w-1/2 py-2">
          
          {/* Encabezado: Título con decoración de borde lateral y subtítulo principal */}
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
              Implementamos soluciones técnicas de alta precisión para garantizar que cada sistema eléctrico y de climatización funcione al máximo rendimiento...
            </p>
          </div>

          {/* SECCIÓN DE TABS: Navegación entre Enfoque, Misión y Valores */}
          <div className="mt-8">
            <div className="bg-white flex w-full p-1 shadow-sm mb-4">
              {/* Iteración sobre las llaves del objeto para generar los botones dinámicamente */}
              {(Object.keys(TABS_CONTENT) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  /* Estilos Dinámicos: Cambia a amarillo (#F6B426) si la pestaña es la activa */
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

            {/* Contenedor de Texto: Posee una altura mínima para evitar saltos bruscos al cambiar de contenido */}
            <div className="min-h-25">
              <p className="text-[#1C1F35] text-xs leading-relaxed animate-in fade-in slide-in-from-bottom-1 duration-500">
                {/* Muestra el texto correspondiente al estado activeTab */}
                {TABS_CONTENT[activeTab].text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}