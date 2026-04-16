import Image from "next/image"

export default function ServicesCategoriesSection() {
  return (
    
      
    <section id="services" className="w-full bg-[#DBDBDB]">
      <div className='w-3/4 mx-auto flex justify-between gap-16 my-20'>
        <div className="w-1/3">
          <h5 className="w-3/4 px-4 py-1 text-xs font-bold mb-4 border-l-3 border-[#F6B426] bg-[#3A3C40]/20">
            A que nos Dedicamos</h5>
          <h2 className="w-full text-2xl font-bold">
            Garantizamos el <br />
            Confort de tu <br />
            Hogar y Empresa
          </h2>
        </div>
          
        <div className="w-full grid grid-cols-2 gap-12">
          
          <div className="flex">
            <Image src="/icons/icon-electricidad.svg" alt="Icono de Electricidad" className="mr-6" width={50} height={50} />
            <div className="pl-4 border-l border-[#1C1F35]">
              <h3 className="text-lg text-[#1C1F35] font-semibold hover:text-[#F6B426]">
                Electricidad <br/>
                Recidencial e Inductrial
              </h3>
              <p className="text-sm text-[#1C1F35]">
                Instalaciones seguras, tableros <br />
                eléctricos, iluminación Led y <br />
                reparación 24/7
              </p>
            </div>
          </div>
            
          <div className="flex">
            <Image src="/icons/icon-refrigeracion.svg" alt="Icono de Refrigeración" className="mr-6" width={50} height={50} />
            <div className="pl-4 border-l border-[#1C1F35]">
              <h3 className="text-lg text-[#1C1F35] font-semibold mb-2 hover:text-[#F6B426]">Aire Acondicionado</h3>
              <p className="text-sm text-[#1C1F35]">
                Instalación y mantenimiento de <br />
                sistemas de refrigeración para <br />
                hogares y empresas. 
              </p>
            </div>
          </div>

          <div className="flex">
            <Image src="/icons/icon-mantenimiento.svg" alt="Icono de Mantenimiento" className="mr-6" width={50} height={50} />
            <div className="pl-4 border-l border-[#1C1F35]">
              <h3 className="text-lg text-[#1C1F35] font-semibold mb-2 hover:text-[#F6B426]">Mantenimiento Preventivo</h3>
              <p className="text-sm text-[#1C1F35]">
                Planes mensuales para empresas<br />
                que aseguran el funcionamiento<br />
                óptimo de tus sistemas eléctricos<br />
                y de climatización. 
              </p>
            </div>
          </div>      
        </div>
      </div>  
    </section>
  )
}
