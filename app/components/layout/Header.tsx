/* SINTAXIS: Next.js / React (Directive)
   ESTE BLOQUE: Indica que el componente se debe ejecutar en el lado del cliente (permite el uso de Hooks y eventos del DOM).
*/
"use client";

/* SINTAXIS: JavaScript (ES6 Modules)
   ESTE BLOQUE: Importación de librerías de React, componentes de navegación de Next.js y recursos visuales (iconos).
*/
import Link from "next/link";
import { IconInstagram, IconWrapper } from "../ui/Icons";
import { useState, useEffect } from "react";

/* SINTAXIS: JavaScript (Arrays de Objetos)
   ESTE BLOQUE: Definición de datos estáticos para los enlaces de navegación y servicios para mantener el código limpio y escalable.
*/
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

/* SINTAXIS: React Functional Component (Exportación por defecto)
   ESTE BLOQUE: Definición de la función principal del Header.
*/
export default function Header() {
  
  /* SINTAXIS: React Hook (useState)
     ESTE BLOQUE: Estado local para rastrear qué sección de la página está visible en pantalla (Active Scroll).
  */
  const [activeSection, setActiveSection] = useState("");

  /* SINTAXIS: React Hook (useEffect) + Intersection Observer API
     ESTE BLOQUE: Lógica para detectar el scroll del usuario. Cambia el estado 'activeSection' cuando una sección entra en el 60% del viewport.
  */
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
    return () => observer.disconnect(); // Limpieza del observador al desmontar el componente
  }, []);

  /* SINTAXIS: JSX (JavaScript XML) + Tailwind CSS
     ESTE BLOQUE: Estructura visual del componente.
  */
  return (
    <header className="hidden md:block fixed w-full h-14 top-26 z-40 bg-[rgba(9,18,66,0.5)] backdrop-blur-md">
      <div className="lg:max-w-6xl h-full mx-auto flex items-center justify-between">
        
        {/* Navegación Principal: Mapeo de los enlaces definidos arriba */}
        <nav className="flex items-center text-white">
          {NAV_LINKS.map((link, index) => (
            <div key={link.id || index} className="flex h-full items-center">
              
              {/* Bloque de Servicios: Lógica condicional para insertar el dropdown antes de "Nosotros" (índice 1) */}
              {index === 1 && (
                <div className="group relative flex h-full items-center border-r-2 border-white px-10 transition-colors hover:text-[#F6B426] cursor-pointer">
                  <button className="flex items-center h-full outline-none">
                    Servicios <IconWrapper className="ml-2" />
                  </button>
                  
                  {/* Menú desplegable: Aparece al hacer hover sobre el contenedor 'group' */}
                  <div className="absolute left-1/2 top-full hidden w-40 -translate-x-1/2 bg-white text-black shadow-xl group-hover:block animate-in fade-in slide-in-from-top-2">
                    {/* Triangulito indicador decorativo */}
                    <div className="absolute -top-1.5 left-3/4 -translate-x-1/2 h-0 w-0 border-x-6 border-b-6 border-x-transparent border-b-white" />
                    
                    {/* Mapeo de links de servicios dentro del dropdown */}
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

              {/* Enlace individual: Aplica clase de color activo si el ID coincide con la sección en pantalla */}
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

        {/* Lado Derecho: Iconos de redes sociales y links externos */}
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
        </div>
      </div>

    </header>
  );
}