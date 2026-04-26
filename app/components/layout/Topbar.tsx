import Link from "next/link";
import { ContactItems } from "../ui/ContsctItems";
import { DropDownMenu } from "../ui/DropDownMenu";
import { LogoRedecoToia, IsotipoRedecoToia, IconWhatsApp } from "../ui/Icons";

export default function Topbar() {
  return (
    <div className="w-full py-6 bg-[#091242] z-50">
      <div className="mx-auto flex lg:max-w-6xl px-8 items-center justify-between">
        <Link href="/" className="transition-transform hover:scale-105 active:scale-95 hidden lg:block">
          <LogoRedecoToia />
        </Link>
        <Link href="/" className="transition-transform hover:scale-105 active:scale-95 block lg:hidden">
          <IsotipoRedecoToia />
        </Link>
        <ContactItems />
        <DropDownMenu />
      </div>
      
      {/* WhatsApp Flotante: Usa variables de entorno para el número y posicionamiento fijo (fixed) */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed lg:mt-100 2xl:mt-150 lg:right-12 2xl:right-20 z-50 transition-transform hover:scale-110 active:scale-95 drop-shadow-md hidden lg:block"
        aria-label="WhatsApp Flotante"
      >
        <IconWhatsApp className="lg:h-18 lg:w-18 2xl:h-24 2xl:w-24" />
      </a>
    </div>
  );
}
