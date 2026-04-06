import Image from "next/image"
export default function Contacto() {
  return (
    <section id="contacto" className="px-54 py-12">
      <div className="w-full p-12 bg-[#091242] text-center">
        <h5 className="text-xs text-white font-bold mb-4">
          <span className="border-l-4 border-[#F6B426] pl-4">
            Contacto
          </span>
        </h5>
        <h2 className="text-2xl font-bold text-white">Solicita tu Presupuesto hoy mismo</h2> 
        <p className="text-white text-xs p-4">
          Dejanos tus datos y contanos qué necesitás. Nuestro equipo técnico se pondrá en contacto <br/>
           con vos a la brevedad para brindarte la mejor solución en electricidad y climatización.
        </p>
        <div className="mt-4 flex px-4 space-x-16">
          <div className="space-y-5 flex flex-col items-center">
            <div className="w-12 h-12 p-3 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
                <Image src="/icons/icon-horario.svg" alt="Horário" width={32} height={32} />
            </div>
            <p className="text-white text-xs">
              Lun - Sab 9:00 - 18:00 <br />
              Domingo Cerrado 
            </p>
          </div>
          <a 
            href="mailto:toiacristiandaniel@gmail.com"
            className="space-y-5 flex flex-col items-center"
          >
            <div className="w-12 h-12 p-3 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
              <Image src="/icons/icon-email.svg" alt="Email" width={32} height={32} />
            </div>
            <p className="text-white text-xs">
              E-mail: <br />
              toiacristiandaniel@gmail.com
            </p>
          </a>
          <a
            href="https://wa.me/5493515930609"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white text-xs"
          >
            <div className="space-y-5 flex flex-col items-center">
              <div className="w-12 h-12 p-3 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
                <Image src="/icons/icon-phone.svg" alt="Telefone" width={32} height={32} />
              </div>
              <p>
                Celular: <br />
                (351) 593 0609
              </p>
            </div>
          </a>
        </div>

        <form action="mailto:toiacristiandaniel@gmail.com" method="post" encType="text/plain" className="mt-8">
          <div className="grid grid-cols-2 text-white gap-4">
            <div>
              <input type="text" id="nombre" placeholder="Nombre Completo" className="w-full p-2 text-white border border-white" />
            </div>
            <div>
              <input type="email" id="email" placeholder="Email" className="w-full p-2 text-white border border-white" />
            </div>
              <div>
              <input type="text" id="telefono" placeholder="Teléfono" className="w-full p-2 text-white border border-white" />
            </div>
          <div>
            <input type="email" id="servicio" placeholder="Tipo de Servicio" className="w-full p-2 text-white border border-white" />
          </div>
        </div>
        <div className="mt-4">
          <textarea id="mensaje" placeholder="Mensaje" className="w-full p-3 text-white border border-white" rows={4} />
        </div>
        <div className="group inline-block mt-4">
          <button
            type="submit"
            className="relative inline-block bg-[#F6B426] text-[#3A3C40] font-bold py-2 px-10 overflow-hidden"
          >
            <span className="relative z-10">Enviar Formulario</span>
            <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
          </button>
        </div>
        </form>

      </div> 
    </section>
  )
}
