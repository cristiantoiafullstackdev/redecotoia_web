/* SINTAXIS: JavaScript (ES6 Modules)
   ESTE BLOQUE: Importación de iconos personalizados y el componente Link de Next.js para una navegación rápida entre páginas internas.
*/
import { IconElectricidad, IconMantenimiento, IconRefrigeracion } from "../ui/Icons";
import Link from "next/link";

/* SINTAXIS: JavaScript (Array de Objetos)
   ESTE BLOQUE: Estructura de datos que define los servicios. Incluye el componente del icono directamente como una propiedad para facilitar su renderizado dinámico.
*/
const SERVICES = [
  {
    title: "Electricidad Residencial e Industrial",
    description: "Instalaciones seguras, tableros eléctricos, iluminación Led y reparación 24/7.",
    href: "/servicios/electricidad",
    icon: <IconElectricidad />,
  },
  {
    title: "Aire Acondicionado",
    description: "Instalación y mantenimiento de sistemas de refrigeración para hogares y empresas.",
    href: "/servicios/refrigeracion",
    icon: <IconRefrigeracion />,
  },
  {
    title: "Mantenimiento Preventivo",
    description: "Planes mensuales para empresas que aseguran el funcionamiento óptimo de tus sistemas.",
    href: "/servicios/mantenimiento",
    icon: <IconMantenimiento />,
  },
];

/* SINTAXIS: React Functional Component (ServicesCategoriesSection)
   ESTE BLOQUE: Componente estructural que divide la pantalla en un encabezado lateral y una cuadrícula de servicios.
*/
export default function ServicesCategoriesSection() {
  return (
    <section id="services" className="w-full mt-26 bg-[#DBDBDB] py-28">
      <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* BLOQUE DE TÍTULO: 
            SINTAXIS: JSX + Tailwind (Layout)
            ESTE BLOQUE: Utiliza 'shrink-0' para mantener su tamaño en pantallas grandes. El tag <br/> condicional ('hidden md:block') controla el salto de línea según el dispositivo.
        */}
        <div className="shrink-0 lg:w-87.5">
          <h5 className="inline-block px-4 py-1 text-xs font-bold mb-4 border-l-3 border-[#F6B426] bg-[#3A3C40]/20 tracking-wider">
            A qué nos dedicamos
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1F35] leading-tight">
            Garantizamos el <br className="hidden md:block" />
            Confort de tu <br className="hidden md:block" />
            Hogar y Empresa
          </h2>
        </div>

        {/* GRID DE SERVICIOS: 
            SINTAXIS: JSX (Map Function)
            ESTE BLOQUE: Itera sobre el array SERVICES. Crea una cuadrícula de 1 columna en móvil y 2 columnas en tablets/escritorio (md:grid-cols-2).
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full">
          {SERVICES.map((service, index) => (
            /* Componente Link: Enuelve todo el servicio para que toda el área sea clickeable */
            <Link key={index} href={service.href} className="group">
              <div className="flex gap-4">
                
                {/* Contenedor del Icono: 
                    SINTAXIS: CSS Transitions
                    ESTE BLOQUE: Aplica un efecto de escala (scale-110) cuando el usuario pasa el mouse sobre cualquier parte del link (group-hover).
                */}
                <div className="w-16 shrink-0 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Contenedor de Texto: 
                    ESTE BLOQUE: Posee un borde lateral sutil y cambia el color del título al dorado (#F6B426) mediante la clase group-hover.
                */}
                <div className="pl-4 border-l border-[#1C1F35]/30">
                  <h3 className="text-lg text-[#1C1F35] font-bold mb-2 group-hover:text-[#F6B426] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1C1F35]/80 leading-relaxed max-w-70">
                    {service.description}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}