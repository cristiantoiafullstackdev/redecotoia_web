/* SINTAXIS: Next.js / React (Directive)
   ESTE BLOQUE: Habilita el modo cliente para gestionar eventos de usuario y acceso a variables de entorno en el navegador.
*/
"use client";

/* SINTAXIS: TypeScript (Interface)
   ESTE BLOQUE: Define el contrato de datos para los planes. El uso de '?' en 'isFeatured' indica que es una propiedad opcional.
*/
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  whatsappMessage: string;
}

/* SINTAXIS: TypeScript (Typed Array)
   ESTE BLOQUE: Colección de datos de los planes. Observa cómo 'whatsappMessage' se alimenta de variables de entorno específicas para cada plan.
*/
const PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Plan Basic",
    description: "(Ideal para mantenimiento esencial)",
    price: "$120mil",
    features: ["Electricidad", "Refrigeración", "2 Visitas al mes (hasta 3hs)", "1 urgencia (50% desc.)"],
    whatsappMessage: process.env.NEXT_PUBLIC_ELEGIR_PLAN_BASIC_MESSAGE || "",
  },
  {
    id: "standard",
    name: "Plan Standard",
    description: "(La opción más elegida)",
    price: "$240mil",
    isFeatured: true, // Propiedad clave para cambiar el estilo visual
    features: ["Electricidad", "Refrigeración", "4 Visitas al mes (hasta 3hs)", "1 urgencia (50% desc.)"],
    whatsappMessage: process.env.NEXT_PUBLIC_ELEGIR_PLAN_STANDARD_MESSAGE || "",
  },
  {
    id: "premium",
    name: "Plan Premium",
    description: "(Máxima eficiencia)",
    price: "$480mil",
    features: ["Electricidad", "Refrigeración", "8 Visitas al mes (hasta 3hs)", "1 urgencia (hasta 3hs)"],
    whatsappMessage: process.env.NEXT_PUBLIC_ELEGIR_PLAN_PREMIUM_MESSAGE || "",
  },
];

/* SINTAXIS: React Functional Component (Contenedor de Mantenimiento)
   ESTE BLOQUE: Estructura la sección de precios utilizando un Grid responsivo que se adapta de 1 a 3 columnas.
*/
export default function Maintenance() {
  return (
    <section id="maintenance" className="bg-[#FAFAFA] py-20 px-6 font-rubik">
      <div className="mx-auto max-w-300">
        
        {/* Cabecera de sección con decoración de borde lateral */}
        <div className="mb-16 text-center">
          <h5 className="mb-4 inline-block text-xs font-bold">
            <span className="bg-[#3A3C40]/10 border-l-4 border-[#F6B426] px-4 py-1.5 tracking-wider">
              Planes de Mantenimientos
            </span>
          </h5>
          <h2 className="text-4xl font-bold text-[#1C1F35]">
            Nuestros Mejores Precios
          </h2>
        </div>

        {/* Grid de Tarjetas: Mapea el array PLANS para renderizar múltiples PlanCard */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* SINTAXIS: React Functional Component (Sub-componente PlanCard)
   ESTE BLOQUE: Recibe las propiedades de cada plan y aplica lógica condicional para el diseño.
*/
function PlanCard({ name, description, price, features, isFeatured, whatsappMessage }: PricingPlan) {
  
  /* SINTAXIS: JavaScript (Lógica de estilos dinámicos)
     ESTE BLOQUE: Define clases de Tailwind basadas en si el plan es el "Destacado" (isFeatured). 
     Esto permite que un solo componente tenga dos apariencias distintas (oscuro/claro).
  */
  const cardStyles = isFeatured 
    ? "bg-[#091242] text-white shadow-2xl scale-105 z-10" // Plan destacado: más grande y oscuro
    : "bg-[#DBDBDB] text-[#1C1F35]"; // Plan normal: gris claro
    
  const borderStyles = isFeatured ? "border-[#1F2A69]" : "border-gray-500/30";
  
  const buttonBg = isFeatured ? "bg-[#F6B426]" : "bg-[#091242]";
  const buttonText = isFeatured ? "text-[#23212A]" : "text-white";
  const cornerBg = isFeatured ? "bg-white" : "bg-[#1F2A69]";

  return (
    <div className={`flex flex-col items-center py-14 px-12 text-center transition-all duration-300 hover:-translate-y-1 ${cardStyles}`}>
      
      {/* Encabezado del Plan: Nombre, descripción y precio */}
      <div className="mb-10">
        <h2 className="mb-1 text-3xl font-bold tracking-tight">{name}</h2>
        <p className="text-sm mb-6">{description}</p>
        <div className="flex items-center justify-center gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm opacity-70">/ mensual</span>
        </div>
      </div>

      {/* Lista de Características: Mapea el array de strings 'features' */}
      <div className="mb-10 w-full">
        {features.map((feature, idx) => (
          <p key={idx} className={`border-b py-4 text-sm font-medium ${borderStyles} last:border-0`}>
            {feature}
          </p>
        ))}
      </div>

      {/* Botón de Acción con Animación:
          ESTE BLOQUE: Genera el link de WhatsApp codificando el mensaje único del plan.
          Mantiene el efecto visual del "esquinero" que se expande al hacer hover.
      */}
      <div className="group inline-block mt-auto">
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-block ${buttonBg} ${buttonText} font-bold py-3 px-10 overflow-hidden transition-colors`}
        >
          <span className="relative z-10">Elegir Plan</span>
          {/* El detalle de la esquina expansible dinámico según el tema del plan */}
          <span className={`absolute bottom-0 right-0 w-8 h-8 ${cornerBg} rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24`}></span>
        </a>
      </div>
    </div>
  );
}