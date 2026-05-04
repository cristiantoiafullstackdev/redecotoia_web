"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactItems } from "../ui/ContsctItems";
import { DropDownMenu } from "../ui/DropDownMenu";
import { LogoRedecoToia, IsotipoRedecoToia, IconWhatsApp } from "../ui/Icons";

export default function Topbar() {
  // Estado para controlar si el contenido del menú está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full py-6 bg-[#091242] z-50">
      <div className="mx-auto flex lg:max-w-6xl px-8 items-center justify-between">
        {/* Logo completo en desktop */}
        <Link
          href="/"
          className="transition-transform hover:scale-105 active:scale-95 hidden lg:block"
        >
          <LogoRedecoToia />
        </Link>

        {/* Isotipo en mobile */}
        <Link
          href="/"
          className="transition-transform hover:scale-105 active:scale-95 block lg:hidden"
        >
          <IsotipoRedecoToia />
        </Link>
        
        {/* Contactos en desktop */}
        <ContactItems />

        {/* Menú desplegable en mobile */}
        <DropDownMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
      
      {/* WhatsApp Flotante */}
      <a
        href={`https://wa.me//5493515930609?text=${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed mt-90 right-4 lg:mt-100 2xl:mt-150 lg:right-12 2xl:right-20 z-50 transition-transform hover:scale-110 active:scale-95 drop-shadow-md"
        aria-label="WhatsApp Flotante"
      >
        <IconWhatsApp className="h-18 w-18 2xl:h-24 2xl:w-24" />
      </a>
    </div>
  );
}
