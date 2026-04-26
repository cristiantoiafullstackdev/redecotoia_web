import { IconEmail, IconHorario, IconPhone } from "./Icons";

interface ContactInfoProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  subLabel?: string;
  href?: string;
  type: "link" | "text";
}

const CONTACT_INFO: ContactInfoProps[] = [
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

export function ContactItems() {
  return (
    <div className="hidden lg:flex flex-wrap justify-center gap-8 lg:flex-nowrap">
      {CONTACT_INFO.map((item) => {
        if (item.type === "link" && item.href) {
          return (
            <a
              key={item.id}
              href={item.href}
              target={item.href.includes("wa.me") ? "_blank" : undefined}
              rel={item.href.includes("wa.me") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0 group-hover:border-[#F6B426] transition-colors">
                {item.icon}
              </div>
              <div className="text-xs leading-tight">
                <p className="text-white font-medium group-hover:text-[#F6B426] transition-colors">
                  {item.label}
                </p>
                {item.subLabel && (
                  <p className="text-white opacity-80 group-hover:text-[#F6B426] transition-colors">
                    {item.subLabel}
                  </p>
                )}
              </div>
            </a>
          );
        }

        // Caso horario (texto plano, sin hover ni pointer)
        return (
          <div key={item.id} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0">
              {item.icon}
            </div>
            <div className="text-xs leading-tight">
              <p className="text-white font-medium">{item.label}</p>
              {item.subLabel && (
                <p className="text-white opacity-80">{item.subLabel}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
