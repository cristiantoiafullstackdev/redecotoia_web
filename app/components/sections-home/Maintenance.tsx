
export default function Maintenance() {
  return (
    <section id="maintenance" className="py-12 px-54">
      <div className="mb-8 text-center">
        <h5 className="text-xs font-bold mb-4">
          <span className="border-l-4 border-[#F6B426] pl-4">
            Planes de Mantenimientos
          </span>
        </h5>
        <h2 className="text-3xl font-bold mb-4">
          Nuestros Mejores Precios
        </h2>
      </div> 
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-center min-w-72 py-12 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Basic</h3>     
            <h2 className="text-2xl font-semibold">$100mil / mensual</h2>    
          </div>
          <div className="w-4/5 gap-2 mx-auto">
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          </div>
          <div className="group inline-block mt-6">
            <a
              href="https://wa.me/5493515930609"
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
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          </div>
          <div className="group inline-block mt-6">
            <a
              href="https://wa.me/5493515930609"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-[#F6B426] text-[#3A3C40] font-bold py-3 px-10 overflow-hidden"
            >
              <span className="relative z-10">Elegir Plan</span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
            </a>
          </div>
        </div>     
        <div className="text-center min-w-72 py-12 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Premium</h3>     
            <h2 className="text-2xl font-semibold">$400mil / mensual</h2>    
          </div>
          <div className="w-4/5 gap-2 mx-auto">
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
            <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          </div>
          <div className="group inline-block mt-6">
            <a
              href="https://wa.me/5493515930609"
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
