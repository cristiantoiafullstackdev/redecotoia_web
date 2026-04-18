"use client";
import Link from "next/link";
import { IconInstagram, IconWhatsApp, IconWrapper } from "../ui/Icons";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Inicio", href: "/", id: "" },
  { name: "Nosotros", href: "#about", id: "about" },
  { name: "Contacto", href: "#contacto", id: "contacto" },
];

const SERVICE_LINKS = [
  { name: "Electricidad", href: "/servicios/electricidad" },
  { name: "Refrigeración", href: "/servicios/refrigeracion" },
  { name: "Mantenimiento", href: "/servicios/mantenimiento" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-26 z-50 flex h-14 w-full items-center bg-[rgba(9,18,66,0.5)] backdrop-blur-md font-rubik">
      <div className="mx-auto flex h-full w-full max-w-300 items-center justify-between">
        
        {/* Navegación Principal */}
        <nav className="flex items-center text-white">
          {NAV_LINKS.map((link, index) => (
            <div key={link.id || index} className="flex h-full items-center">
              
              {/* Bloque de Servicios (Insertado antes de Nosotros) */}
              {index === 1 && (
                <div className="group relative flex h-full items-center border-r-2 border-white px-10 transition-colors hover:text-[#F6B426] cursor-pointer">
                  <button className="flex items-center h-full outline-none">
                    Servicios <IconWrapper className="ml-2" />
                  </button>
                  
                  {/* Menú desplegable centrado dinámicamente */}
                  <div className="absolute left-1/2 top-full hidden w-40 -translate-x-1/2 bg-white text-black shadow-xl group-hover:block animate-in fade-in slide-in-from-top-2">
                    {/* Triangulito indicador centrado */}
                    <div className="absolute -top-1.5 left-3/4 -translate-x-1/2 h-0 w-0 border-x-6 border-b-6 border-x-transparent border-b-white" />
                    
                    {SERVICE_LINKS.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-3 text-sm hover:bg-[#DBDBDB] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Links de Navegación: Simetría total con px-10 y h-full */}
              <Link
                href={link.href}
                className={`flex h-full items-center border-r-2 border-white px-10 transition-colors hover:text-[#F6B426] ${
                  activeSection === link.id ? "text-[#F6B426]" : ""
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Lado Derecho: Instagram y CTA */}
        <div className="flex h-full items-center">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-center px-6 text-white hover:text-[#F6B426] transition-all hover:opacity-50"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_SOLICITAR_PRESUPUESTO_MESSAGE || "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-center bg-white px-10 text-sm font-bold text-[#1C1F35] transition-all hover:bg-[#F6B426]"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>

      {/* WhatsApp Flotante (Fuera del contenedor principal para libertad de movimiento) */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-110 right-16 z-50 transition-transform hover:scale-110 active:scale-95 drop-shadow-md"
        aria-label="WhatsApp Flotante"
      >
        <IconWhatsApp className="h-18 w-18" />
      </a>
    </header>
  );
}