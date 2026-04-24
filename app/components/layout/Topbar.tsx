/* SINTAXIS: Next.js / React (Directive)
   ESTE BLOQUE: Define que el componente se renderiza en el cliente para manejar interacciones y lógica de UI.
*/
"use client";

/* SINTAXIS: JavaScript (ES6 Modules)
   ESTE BLOQUE: Importación de utilidades de navegación y componentes de iconos personalizados.
*/
import Link from "next/link";
import { LogoRedecoToia, IconHorario, IconEmail, IconPhone, IsotipoRedecoToia } from "../ui/Icons";

/* SINTAXIS: TypeScript (Interface)
   ESTE BLOQUE: Define la estructura de datos para la información de contacto, asegurando que cada objeto tenga las propiedades correctas (tipado estricto).
*/
interface ContactInfo {
  id: string;
  icon: React.ReactNode;
  label: string;
  subLabel: string;
  type: "text" | "link";
  href?: string;
}

/* SINTAXIS: TypeScript (Typed Array)
   ESTE BLOQUE: Datos fuente para la barra superior. Centraliza la información para facilitar cambios en horarios o contactos.
*/
const CONTACT_INFO: ContactInfo[] = [
  {
    id: "schedule",
    icon: <IconHorario />,
    label: "Lun - Sáb 9:00 - 18:00",
    subLabel: "Domingo Cerrado",
    type: "text",
  },
  {
    id: "email",
    icon: <IconEmail />,
    label: "E-mail:",
    subLabel: "toiacristiandaniel@gmail.com",
    href: "mailto:toiacristiandaniel@gmail.com",
    type: "link",
  },
  {
    id: "phone",
    icon: <IconPhone />,
    label: "Celular:",
    subLabel: "(351) 593 0609",
    href: "https://wa.me/5493515930609",
    type: "link",
  },
];

/* SINTAXIS: React Functional Component (Topbar)
   ESTE BLOQUE: Componente contenedor que renderiza el Logo y mapea los ítems de contacto en un diseño responsivo.
*/
export default function Topbar() {
  return (
    <div className="w-full py-6 bg-[#091242] z-50">
      <div className="mx-auto flex lg:max-w-6xl lg:px-8 items-center justify-between">
        
        {/* Logo con link a Inicio y efectos de escala al interactuar */}
        <Link href="/" className="transition-transform hover:scale-105 active:scale-95 hidden lg:block">
          <LogoRedecoToia />
        </Link>
         <Link href="/" className="transition-transform hover:scale-105 active:scale-95 block lg:hidden">
          <IsotipoRedecoToia />
        </Link>

        {/* Contenedor de items: Mapea el array CONTACT_INFO pasando todas las propiedades (spread operator) */}
        <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap">
          {CONTACT_INFO.map((item) => (
            <ContactItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* SINTAXIS: React Functional Component (Internal / Child)
   ESTE BLOQUE: Componente especializado en renderizar cada ítem de contacto con lógica visual dinámica.
*/
function ContactItem({ icon, label, subLabel, href, type }: ContactInfo) {
  
  /* SINTAXIS: JavaScript (Lógica de clases condicionales)
     ESTE BLOQUE: Define constantes para aplicar estilos de Tailwind según si el ítem es clickeable (link) o meramente informativo (text).
  */
  const isLink = type === "link";
  
  // Clases para el contenedor principal: Activa hover solo si es link
  const containerClasses = `group flex items-center gap-4 text-white transition-transform duration-300 ${isLink ? "hover:scale-105" : ""}`;
  
  // Clases para el círculo del icono: Cambia el borde a dorado (#F6B426) en hover si es link
  const iconBoxClasses = `flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#273270] bg-[#111C55] transition-colors duration-300 ${isLink ? "group-hover:border-[#F6B426]" : ""}`;
  
  // Clases para la tipografía: Aplica el color dorado en hover si es link
  const textClasses = `transition-colors duration-300 ${isLink ? "group-hover:text-[#F6B426]" : ""}`;

  /* SINTAXIS: JSX Variable
     ESTE BLOQUE: Almacena la estructura visual común del ítem para evitar repetición de código (DRY).
  */
  const content = (
    <div className={containerClasses}>
      <div className={iconBoxClasses}>
        {icon}
      </div>
      
      <div className="text-xs leading-relaxed">
        <p className={`font-medium ${textClasses}`}>{label}</p>
        <p className={`opacity-80 ${textClasses}`}>{subLabel}</p>
      </div>
    </div>
  );

  /* SINTAXIS: JavaScript (Conditional Rendering)
     ESTE BLOQUE: Determina si el componente devuelve un tag <a> (enlace externo) o un <div> (texto plano).
  */
  if (isLink && href) {
    return (
      <a 
        href={href} 
        // Lógica de seguridad para links de WhatsApp
        target={href.includes("wa.me") ? "_blank" : undefined}
        rel={href.includes("wa.me") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}