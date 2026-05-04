"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { IconClose, IconMenu, IconWrapper, LogoRedecoToia } from "./Icons";

interface DropDownMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NAV_LINKS = [
  { id: "inicio", name: "Inicio", href: "/" },
  { id: "nosotros", name: "Nosotros", href: "#about" },
  { id: "contacto", name: "Contacto", href: "#contacto" },
];

const SERVICE_LINKS = [
  { id: "electricity", name: "Electricidad", href: "/servicios/electricidad" },
  { id: "refrigeration", name: "Refrigeración", href: "/servicios/refrigeracion" },
  { id: "maintenance", name: "Mantenimiento", href: "/servicios/mantenimiento" },
];

export function DropDownMenu({ isOpen, setIsOpen }: DropDownMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  // 🔹 Función para cerrar menú y resetear submenu
  const handleClose = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="block lg:hidden relative z-50">
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md transition-transform active:scale-95 hover:scale-105"
        aria-label="Menu Desplegable"
      >
        <IconMenu className="text-white h-8 w-8" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Fondo oscurecido mostrando el sitio detrás */}
          <div
            className="w-[10%] backdrop-brightness-50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Panel menú (90% derecha, full height, fondo azul topbar) */}
          <div className="w-[90%] h-full bg-[#091242] text-white shadow-2xl overflow-y-auto">
            {/* Logo completo + botón cierre */}
            <div className="flex justify-between items-center p-4 border-b border-[#F6B426]">
              <LogoRedecoToia />
              <button
                onClick={handleClose}
                className="bg-[#F6B426] p-1 rounded"
                aria-label="Cerrar menú"
              >
                <IconClose className="h-6 w-6 text-[#091242]" />
              </button>
            </div>

            {/* Links principales */}
            <div className="flex flex-col divide-y divide-[#F6B426]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="block px-6 py-4 text-sm font-rubik hover:bg-[#F6B426] hover:text-[#091242] transition-colors"
                  onClick={handleClose}
                >
                  {link.name}
                </Link>
              ))}

              {/* Submenu Servicios con toggle */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-6 py-4 text-sm font-rubik hover:bg-[#F6B426] hover:text-[#091242] transition-colors"
                >
                  <span>Servicios</span>
                  <IconWrapper className={`ml-2 transform transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="flex flex-col divide-y divide-[#F6B426]">
                    {SERVICE_LINKS.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        className="block px-8 py-3 text-sm hover:bg-[#F6B426] hover:text-[#091242] transition-colors"
                        onClick={handleClose}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
