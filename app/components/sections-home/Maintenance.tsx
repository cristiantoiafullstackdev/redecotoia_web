
export default function Maintenance() {
  return (
    <section id="maintenance" className="py-12 px-54">
      <div className="w-full mb-8">
        <h5 className="px-4 text-xs mx-auto font-bold mb-4 border-l-3 border-[#F6B426]">Planes de Mantenimientos</h5>
        <h2 className="text-2xl font-bold">
          Nuestros Mejores Precios
        </h2>
      </div> 
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 min-w-64 text-center">
          <h3 className="text-lg font-semibold mb-2">Basic</h3> 
          <h2 className="text-xl font-semibold mb-2">$100mil / mensual</h2> 
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <div className="group inline-block mt-6">
            <a
              href="https://wa.me/5493515930609"
              target="_blank"
              rel="noopener noreferrer"
              className="relative my-6 inline-block bg-[#091242] text-white font-bold py-2 px-10 overflow-hidden"
            >
              <span className="relative z-10">Elegir Plan</span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#1F2A69] rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
            </a>
          </div>
        </div>
        <div className="bg-[#091242] text-white p-6 min-w-64 text-center">
          <h3 className="text-lg font-semibold mb-2">Standard</h3> 
          <h2 className="text-xl font-semibold">$200mil / mensual</h2>    
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <div className="group inline-block mt-6">
            <a
              href="https://wa.me/5493515930609"
              target="_blank"
              rel="noopener noreferrer"
              className="relative my-6 inline-block bg-[#F6B426] text-[#3A3C40] font-bold py-2 px-10 overflow-hidden"
            >
              <span className="relative z-10">Elegir Plan</span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
            </a>
          </div>
        </div>     
        <div className="p-6 min-w-64 text-center">
          <h3 className="text-lg font-semibold mb-2">Premium</h3>     
          <h2 className="text-xl font-semibold">$400mil / mensual</h2>    
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <p className="text-gray-600 border-b border-gray-300 p-4">Arreglo</p>
          <div className="group inline-block mt-6">
            <a
              href="https://wa.me/5493515930609"
              target="_blank"
              rel="noopener noreferrer"
              className="relative my-6 inline-block bg-[#091242] text-white font-bold py-2 px-10 overflow-hidden"
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
