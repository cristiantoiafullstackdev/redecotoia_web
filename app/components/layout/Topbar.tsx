"use client";
import Link from "next/link";
import { LogoRedecoToia, IconHorario, IconEmail, IconPhone } from "../ui/Icons";

interface ContactInfo {
  id: string;
  icon: React.ReactNode;
  label: string;
  subLabel: string;
  type: "text" | "link";
  href?: string;
}

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

export default function Topbar() {
  return (
    <div className="w-full bg-[#091242] py-6 font-rubik">
      <div className="mx-auto flex w-full max-w-300 flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:gap-0">
        
        <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
          <LogoRedecoToia />
        </Link>

        <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap">
          {CONTACT_INFO.map((item) => (
            <ContactItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, subLabel, href, type }: ContactInfo) {
  // 1. Definimos las clases condicionales para el efecto HOVER
  const isLink = type === "link";
  
  // Clases para el contenedor principal (escala)
  const containerClasses = `group flex items-center gap-4 text-white transition-transform duration-300 ${isLink ? "hover:scale-105" : ""}`;
  
  // Clases para el borde del círculo (solo si es link)
  const iconBoxClasses = `flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#273270] bg-[#111C55] transition-colors duration-300 ${isLink ? "group-hover:border-[#F6B426]" : ""}`;
  
  // Clases para el texto (solo si es link)
  const textClasses = `transition-colors duration-300 ${isLink ? "group-hover:text-[#F6B426]" : ""}`;

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

  if (isLink && href) {
    return (
      <a 
        href={href} 
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