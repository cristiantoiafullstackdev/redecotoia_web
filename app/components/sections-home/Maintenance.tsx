
// export default function Maintenance() {
//   return (
//     <section id="maintenance" className="bg-[#FAFAFA] py-12 px-54">
//       <div className="mb-8 text-center">
//         <h5 className="text-xs font-bold mb-4">
//           <span className="border-l-3 border-[#F6B426] px-4 py-1 bg-[#3A3C40]/20">
//             Planes de Mantenimientos
//           </span>
//         </h5>
//         <h2 className="text-3xl font-bold mb-4">
//           Nuestros Mejores Precios
//         </h2>
//       </div> 
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="text-center min-w-72 py-12 space-y-8 bg-[#DBDBDB]">
//           <div>
//             <h3 className="text-xl text-[#1C1F35] font-semibold mb-6">Basic</h3>     
//             <h2 className="text-2xl text-[#1C1F35] font-semibold">$100mil / mensual</h2>    
//           </div>
//           <div className="w-4/5 gap-2 mx-auto">
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">Electricidad</p>
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">Refrigeración</p>
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">2 Visitas al mes (hasta 3hs)</p>
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">1 urgencia (hasta 3hs)</p>
//           </div>
//           <div className="group inline-block mt-6">
//             <a
//               href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_ELEGIR_PLAN_BASIC_MESSAGE || '')}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative inline-block bg-[#091242] text-white font-bold py-3 px-10 overflow-hidden"
//             >
//               <span className="relative z-10">Elegir Plan</span>
//               <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#1F2A69] rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
//             </a>
//           </div>
//         </div>
//         <div className="bg-[#091242] text-white text-center min-w-72 py-12 space-y-8">
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Standard</h3> 
//             <h2 className="text-2xl font-semibold">$200mil / mensual</h2>    
//           </div>
//           <div className="w-4/5 gap-2 mx-auto">
//             <p className="text-white border-b border-[#1F2A69] p-4">Electricidad</p>
//             <p className="text-white border-b border-[#1F2A69] p-4">Refrigeración</p>
//             <p className="text-white border-b border-[#1F2A69] p-4">4 Visitas al mes (hasta 3hs)</p>
//             <p className="text-white border-b border-[#1F2A69] p-4">1 urgencia (hasta 3hs)</p>
//           </div>
//           <div className="group inline-block mt-6">
//             <a
//               href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_ELEGIR_PLAN_STANDARD_MESSAGE || '')}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative inline-block bg-[#F6B426] text-[#23212A] font-bold py-3 px-10 overflow-hidden"
//             >
//               <span className="relative z-10">Elegir Plan</span>
//               <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
//             </a>
//           </div>
//         </div>     
//         <div className="text-center min-w-72 py-12 space-y-8 bg-[#DBDBDB]">
//           <div>
//             <h3 className="text-xl text-[#1C1F35] font-semibold mb-6">Premium</h3>     
//             <h2 className="text-2xl text-[#1C1F35] font-semibold">$400mil / mensual</h2>    
//           </div>
//           <div className="w-4/5 gap-2 mx-auto">
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">Electricidad</p>
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">Refrigeración</p>
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">8 Visitas al mes (hasta 3hs)</p>
//             <p className="text-[#1C1F35] border-b border-gray-500 p-4">1 urgencia (hasta 3hs)</p>
//           </div>
//           <div className="group inline-block mt-6">
//             <a
//               href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_ELEGIR_PLAN_PREMIUM_MESSAGE || '')}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative inline-block bg-[#091242] text-white font-bold py-3 px-10 overflow-hidden"
//             >
//               <span className="relative z-10">Elegir Plan</span>
//               <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#1F2A69] rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
//             </a>
//           </div>
//         </div>
//       </div>
//       </section>
//   )
// }



"use client";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  whatsappMessage: string;
}

const PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$100mil",
    features: ["Electricidad", "Refrigeración", "2 Visitas al mes (hasta 3hs)", "1 urgencia (hasta 3hs)"],
    whatsappMessage: process.env.NEXT_PUBLIC_ELEGIR_PLAN_BASIC_MESSAGE || "",
  },
  {
    id: "standard",
    name: "Standard",
    price: "$200mil",
    isFeatured: true,
    features: ["Electricidad", "Refrigeración", "4 Visitas al mes (hasta 3hs)", "1 urgencia (hasta 3hs)"],
    whatsappMessage: process.env.NEXT_PUBLIC_ELEGIR_PLAN_STANDARD_MESSAGE || "",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$400mil",
    features: ["Electricidad", "Refrigeración", "8 Visitas al mes (hasta 3hs)", "1 urgencia (hasta 3hs)"],
    whatsappMessage: process.env.NEXT_PUBLIC_ELEGIR_PLAN_PREMIUM_MESSAGE || "",
  },
];

export default function Maintenance() {
  return (
    <section id="maintenance" className="bg-[#FAFAFA] py-20 px-6 font-rubik">
      <div className="mx-auto max-w-300">
        
        {/* Cabecera idéntica */}
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ name, price, features, isFeatured, whatsappMessage }: PricingPlan) {
  // Estilos de la tarjeta
  const cardStyles = isFeatured 
    ? "bg-[#091242] text-white shadow-2xl scale-105 z-10" 
    : "bg-[#DBDBDB] text-[#1C1F35]";
    
  const borderStyles = isFeatured ? "border-[#1F2A69]" : "border-gray-500/30";

  // --- LÓGICA DE BOTONES (Respetando tus estilos originales) ---
  const buttonBg = isFeatured ? "bg-[#F6B426]" : "bg-[#091242]";
  const buttonText = isFeatured ? "text-[#23212A]" : "text-white";
  const cornerBg = isFeatured ? "bg-white" : "bg-[#1F2A69]";

  return (
    <div className={`flex flex-col items-center py-14 px-12 text-center transition-all duration-300 hover:-translate-y-1 ${cardStyles}`}>
      <div className="mb-10">
        <h3 className="mb-4 text-2xl font-bold tracking-tight">{name}</h3>
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm opacity-70">/ mensual</span>
        </div>
      </div>

      <div className="mb-10 w-full">
        {features.map((feature, idx) => (
          <p key={idx} className={`border-b py-4 text-sm font-medium ${borderStyles} last:border-0`}>
            {feature}
          </p>
        ))}
      </div>

      {/* Botón con tu animación original mantenida si o si */}
      <div className="group inline-block mt-auto">
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-block ${buttonBg} ${buttonText} font-bold py-3 px-10 overflow-hidden transition-colors`}
        >
          <span className="relative z-10">Elegir Plan</span>
          {/* El detalle de la esquina expansible */}
          <span className={`absolute bottom-0 right-0 w-8 h-8 ${cornerBg} rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24`}></span>
        </a>
      </div>
    </div>
  );
}



