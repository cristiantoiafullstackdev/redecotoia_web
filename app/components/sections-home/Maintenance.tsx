
export default function Maintenance() {
  return (
    <section id="maintenance" className="bg-[#FAFAFA] py-12 px-54">
      <div className="mb-8 text-center">
        <h5 className="text-xs font-bold mb-4">
          <span className="border-l-3 border-[#F6B426] px-4 py-1 bg-[#3A3C40]/20">
            Planes de Mantenimientos
          </span>
        </h5>
        <h2 className="text-3xl font-bold mb-4">
          Nuestros Mejores Precios
        </h2>
      </div> 
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center min-w-72 py-12 space-y-8 bg-[#DBDBDB]">
          <div>
            <h3 className="text-xl text-[#1C1F35] font-semibold mb-6">Basic</h3>     
            <h2 className="text-2xl text-[#1C1F35] font-semibold">$100mil / mensual</h2>    
          </div>
          <div className="w-4/5 gap-2 mx-auto">
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">Electricidad</p>
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">Refrigeración</p>
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">2 Visitas al mes (hasta 3hs)</p>
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">1 urgencia (hasta 3hs)</p>
          </div>
          <div className="group inline-block mt-6">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_ELEGIR_PLAN_BASIC_MESSAGE || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-[#091242] text-white font-bold py-3 px-10 overflow-hidden"
            >
              <span className="relative z-10">Elegir Plan</span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#1F2A69] rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
            </a>
          </div>
        </div>
        <div className="bg-[#091242] text-white text-center min-w-72 py-12 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Standard</h3> 
            <h2 className="text-2xl font-semibold">$200mil / mensual</h2>    
          </div>
          <div className="w-4/5 gap-2 mx-auto">
            <p className="text-white border-b border-[#1F2A69] p-4">Electricidad</p>
            <p className="text-white border-b border-[#1F2A69] p-4">Refrigeración</p>
            <p className="text-white border-b border-[#1F2A69] p-4">4 Visitas al mes (hasta 3hs)</p>
            <p className="text-white border-b border-[#1F2A69] p-4">1 urgencia (hasta 3hs)</p>
          </div>
          <div className="group inline-block mt-6">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_ELEGIR_PLAN_STANDARD_MESSAGE || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-[#F6B426] text-[#23212A] font-bold py-3 px-10 overflow-hidden"
            >
              <span className="relative z-10">Elegir Plan</span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
            </a>
          </div>
        </div>     
        <div className="text-center min-w-72 py-12 space-y-8 bg-[#DBDBDB]">
          <div>
            <h3 className="text-xl text-[#1C1F35] font-semibold mb-6">Premium</h3>     
            <h2 className="text-2xl text-[#1C1F35] font-semibold">$400mil / mensual</h2>    
          </div>
          <div className="w-4/5 gap-2 mx-auto">
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">Electricidad</p>
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">Refrigeración</p>
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">8 Visitas al mes (hasta 3hs)</p>
            <p className="text-[#1C1F35] border-b border-gray-500 p-4">1 urgencia (hasta 3hs)</p>
          </div>
          <div className="group inline-block mt-6">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_ELEGIR_PLAN_PREMIUM_MESSAGE || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-[#091242] text-white font-bold py-3 px-10 overflow-hidden"
            >
              <span className="relative z-10">Elegir Plan</span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#1F2A69] rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
            </a>
          </div>
        </div>
      </div>
      </section>
  )
}
