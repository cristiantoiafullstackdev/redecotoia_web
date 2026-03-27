import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-14 flex justify-between items-center px-54 bg-[rgba(9,18,66,0.5)] backdrop-blur-md">
      <nav className="text-white flex space-x-5">
        <Link href="/" className="pr-6 border-r-2 border-white hover:text-[#F6B426]">
          Inicio
        </Link>
        <div className="relative group pr-6 border-r-2 border-white">
          <Link
            href="#services"
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
        <Link href="#about" className="pr-6 border-r-2 border-white hover:text-[#F6B426]">
          Nosotros
        </Link>
        <Link href="#contacto" className="pr-6 border-r-2 border-white hover:text-[#F6B426]">
          Contato
        </Link>
      </nav>
      <div className="flex items-center space-x-10 h-full">
        <a 
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >          
          <Image
            src="/icons/icon-instagram.svg"
            alt="Icono de Instagram"
            width={20}
            height={20}
        />
        </a>
        <a  
        href="https://wa.me/5493515930609"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="px-4 flex items-center text-sm bg-white hover:bg-[#F6B426] text-black h-full"
        >
          Solicitar Presupuesto
        </a>
      </div>
      
    </header>
  )
}
