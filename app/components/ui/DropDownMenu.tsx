"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { IconClose, IconMenu } from "./Icons";

// 1. Interfaz para los links
interface LinkItem {
  id: string;
  name: string;
  href?: string;
  type: "internal" | "external";
}

// 2. Interfaz para las Props del componente (Soluciona el error de TS)
interface DropDownMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LINKS: LinkItem[] = [
  { id: "electricity", name: "Electricidad", href: "/servicios/electricidad", type: "internal" },
  { id: "refrigeration", name: "Refrigeración", href: "/servicios/refrigeracion", type: "internal" },
  { id: "maintenance", name: "Mantenimiento", href: "/servicios/mantenimiento", type: "internal" },
];

export function DropDownMenu({ isOpen, setIsOpen }: DropDownMenuProps) {
  return (
    <div className="block lg:hidden relative z-50">
      {/* BOTÓN HAMBURGUESA: Siempre visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md transition-transform active:scale-95 hover:scale-105"
        aria-label="Menu Desplegable"
      >
        <IconMenu className="text-white h-8 w-8" />
      </button>

      {/* PANEL DESPLEGABLE */}
      {isOpen && (
        <div className="absolute -right-24 top-full mt-2 w-48 -translate-x-1/2 bg-white text-black shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          
          {/* BOTÓN DE CIERRE (X): Se muestra solo cuando el menú está abierto */}
          <div className="flex justify-end p-2">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-black p-1 transition-colors bg-[#091242]"
              aria-label="Cerrar menú"
            >
              <IconClose className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col">
            {LINKS.map((link) =>
              link.type === "internal" ? (
                <Link
                  key={link.id}
                  href={link.href!}
                  className="block px-6 py-4 text-sm font-rubik hover:bg-[#F6B426] hover:text-white transition-colors border-b border-gray-100 last:border-none"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.id}
                  href={link.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 text-sm font-rubik hover:bg-[#F6B426] hover:text-white transition-colors border-b border-gray-100 last:border-none"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}