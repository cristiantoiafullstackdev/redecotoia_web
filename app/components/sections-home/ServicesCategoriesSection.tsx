import { IconElectricidad, IconMantenimiento, IconRefrigeracion } from "../ui/Icons";
import Link from "next/link";

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

export default function ServicesCategoriesSection() {
  return (
    <section id="services" className="w-full bg-[#DBDBDB] py-20 px-6">
      <div className="max-w-286 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Título de Sección: Ocupa el espacio necesario, no uno fijo */}
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

        {/* Grid de Servicios: Se ajusta solo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full">
          {SERVICES.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="flex gap-4">
                <div className="w-16 shrink-0 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
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