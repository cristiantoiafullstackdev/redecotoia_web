"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu } from "./Icons";

interface DropDownMenuProps {
  id: string;
  name: string;
  href?: string;
  type: "internal" | "external";
}

const LINKS: DropDownMenuProps[] = [
  { id: "electricity", name: "Electricidad", href: "/servicios/electricidad", type: "internal" },
  { id: "refrigeration", name: "Refrigeración", href: "/servicios/refrigeracion", type: "internal" },
  { id: "maintenance", name: "Mantenimiento", href: "/servicios/mantenimiento", type: "internal" },
];

export function DropDownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md"
        aria-label="Menu Desplegable"
      >
        <IconMenu className="text-white"/>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full w-40 -translate-x-1/2 bg-white text-black shadow-xl animate-in fade-in slide-in-from-top-2">
          {LINKS.map((link) =>
            link.type === "internal" ? (
              <Link
                key={link.id}
                href={link.href!}
                className="block px-6 py-3 text-sm hover:bg-[#DBDBDB] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.id}
                href={link.href!}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-sm hover:bg-[#DBDBDB] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}
