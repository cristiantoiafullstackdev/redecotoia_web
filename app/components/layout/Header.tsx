'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible para marcar como activo
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full h-14 flex justify-around  items-center  bg-[rgba(9,18,66,0.5)] backdrop-blur-md">
      <nav className="text-white flex space-x-5">
        <Link href="/" className={`pr-6 border-r-2 border-white hover:text-[#F6B426] ${
            activeSection === "" ? "text-[#F6B426]" : ""
          }`}>
          Inicio
        </Link>
        <div className="relative group pr-6 border-r-2 border-white">
          <Link
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-[#F6B426] flex items-center"
          >
            Servicios
            <Image
              src="/icons/icon-wrapper.svg"
              alt="Icono de Wrapper"
              width={10}
              height={10}
              className="inline-block ml-2"
            />
          </Link>
          {/* Menú desplegable */}
          <div className="absolute left-0 hidden w-40 bg-white text-black shadow-md group-hover:block">
            <div className="absolute -top-1 left-17 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-white"></div>
            <Link
              href="/servicios/electricidad"
              className="block px-4 py-2 hover:bg-gray-200 hover:text-[#F6B426]"
            >
              Electricidad
            </Link>
            <Link
              href="/servicios/refrigeracion"
              className="block px-4 py-2 hover:bg-gray-200 hover:text-[#F6B426]"
            >
              Refrigeración
            </Link>
            <Link
              href="/servicios/mantenimiento"
              className="block px-4 py-2 hover:bg-gray-200 hover:text-[#F6B426]"
            >
              Mantenimiento
            </Link>
          </div>
        </div>
        <Link href="#about"  className={`pr-6 border-r-2 border-white hover:text-[#F6B426] ${
            activeSection === "about" ? "text-[#F6B426]" : ""
          }`}>
          Nosotros
        </Link>
        <Link href="#contacto" className={`pr-6 border-r-2 border-white hover:text-[#F6B426] ${
            activeSection === "contacto" ? "text-[#F6B426]" : ""
          }`}>
          Contacto
        </Link>
      </nav>
      <div className="flex items-center h-full">
        <a 
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="px-4"
        >          
          <Image
            src="/icons/icon-instagram.svg"
            alt="Icono de Instagram"
            width={28}
            height={28} 
            className="hover:opacity-30 transition-opacity duration-300"
          />
        </a>
        <a  
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_SOLICITAR_PRESUPUESTO_MESSAGE || '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="px-4 flex items-center text-sm bg-white hover:bg-[#F6B426] duration-200 text-black h-full"
        >
          Solicitar Presupuesto
        </a>
      </div>

      <a
        href="https://wa.me/5493515930609?text=Hola%2C%20quer%C3%ADa%20consultarte%20sobre%20tus%20servicios..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed -bottom-92 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full border shadow-lg z-50"
        aria-label="WhatsApp"
      >
        <Image src="/icons/icon-whatsapp.svg" alt="WhatsApp" width={32} height={32} />
      </a>

      
    </header>
  )
}
