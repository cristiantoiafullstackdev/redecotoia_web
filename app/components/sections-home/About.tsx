'use client';
import Image from 'next/image';
// import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'enfoque' | 'mision' | 'valores'>('enfoque')
  return (
    <section id="about" className="w-full bg-[#dbdbdb]">
      <div className="w-4/5 mx-auto flex items-center justify-between gap-8 my-20">
        <div className="relative w-4/5 h-80 p-8">
          <Image 
            src="/images/photo-about.png" 
            alt="Imagen grande" 
            className="w-full shadow-lg"
            width={600}
            height={400}
            />
          <Image 
            src="/images/photo-about2.png" 
            alt="Imagen pequeña" 
            className="absolute -bottom-8 right-0 w-40 border-12 border-white"
            width={90}
            height={60}
          />
        </div> 
        <div className="w-4/5 flex flex-col p-8">
          <div className="w-md">
            <h5 className="text-xs font-bold mb-2 text-[#1C1F35]">
              <span className="border-l-4 px-4 py-1 border-[#F6B426] bg-[#3A3C40]/20">
                Sobre Nosotros
              </span>
            </h5>
            <h2 className="text-xl font-bold mb-4 text-[#1C1F35]">
              Nuestra trayectoria en confort y Energía
            </h2>
            <p className="text-xs mt-2 text-[#1C1F35]">
              Implementamos soluciones técnicas de alta precisión para garantizar que cada sistema eléctrico y de climatización funcione al máximo rendimiento, priorizando siempre la seguridad y la eficiencia energética de nuestros clientes.
            </p>
          </div>
          <div className="flex flex-col h-28 mt-8 gap-4">
            <div className="bg-white flex w-full p-1"> 
              <button 
                onClick={() => setActiveTab('enfoque')}
                className={`flex-1 py-2 text-[#1C1F35] font-semibold transition-colors ${
                  activeTab === 'enfoque' 
                  ? 'bg-[#F6B426]' 
                  : 'hover:bg-[#dbdbdb]/70 cursor-pointer'
                }`}
              >
                Nuestro enfoque
              </button>
              
              <button 
                onClick={() => setActiveTab('mision')}
                className={`flex-1 py-2 text-[#1C1F35] font-semibold transition-colors ${
                  activeTab === 'mision' 
                  ? 'bg-[#F6B426]' 
                  : 'hover:bg-[#dbdbdb]/70 cursor-pointer'
                }`}
              >
                Misión
              </button>

              <button 
                onClick={() => setActiveTab('valores')}
                className={`flex-1 py-2 text-[#1C1F35] font-semibold transition-colors ${
                  activeTab === 'valores' 
                  ? 'bg-[#F6B426]' 
                  : 'hover:bg-[#dbdbdb]/70 cursor-pointer'
                }`}
              >
                Valores
              </button>
            </div>
            <div className='w-md'>
              {activeTab === 'enfoque' && (
                <p className="text-[#1C1F35] text-xs mb-2">
                  En RedecoToia, nos especializamos en transformar espacios a través de un mantenimiento integral de excelencia. Contamos con un equipo de técnicos certificados dedicados a la instalación y reparación de aires acondicionados y sistemas eléctricos residenciales e industriales. Nuestro compromiso es brindar una respuesta rápida y soluciones duraderas que superen las expectativas de calidad.
                </p>
              )}
              {activeTab === 'mision' && (
                <p className="text-[#1C1F35] text-xs mb-2">
                  Nuestra misión es proporcionar soluciones integrales en climatización y electricidad que garanticen la seguridad y el confort de nuestros clientes. Nos enfocamos en la excelencia técnica y el uso de tecnologías eficientes para optimizar el consumo energético y prolongar la vida útil de cada equipo.
                </p>
              )}
              {activeTab === 'valores' && (
                <p className="text-[#1C1F35] text-xs mb-2">
                  Compromiso: Calidad garantizada en cada instalación y reparación.<br/>
                  Transparencia: Presupuestos claros y asesoramiento honesto.<br/>
                  Seguridad: Cumplimiento estricto de las normas eléctricas vigentes.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
