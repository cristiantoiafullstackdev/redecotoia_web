'use client';
import Image from 'next/image';
// import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'enfoque' | 'mision' | 'valores'>('enfoque')
  return (
    <section id="about" className="mt-8 min-h-100 px-54 flex gap-2">
      <div className="relative w-full max-h-80 p-8">
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
          className="absolute -bottom-1 right-0 w-40 border-12 border-white"
          width={90}
          height={60}
        />
       
      </div> 
      <div className="w-full flex flex-col p-8">
        <div className="max-w-md">
          <h5 className="text-xs font-bold mb-2">
            <span className="border-l-4 px-4 border-[#F6B426]">
              Sobre Nosotros
            </span>
          </h5>
          <h2 className="text-xl font-bold">
            Nuestra trayectoria en confort y Energía
          </h2>
          <p className="text-gray-600 text-xs mt-2">
            Implementamos soluciones técnicas de alta precisión para garantizar que cada sistema eléctrico y de climatización funcione al máximo rendimiento, priorizando siempre la seguridad y la eficiencia energética de nuestros clientes.
          </p>
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex gap-4 mb-2">
            <button 
              onClick={() => setActiveTab('enfoque')}
              className={`p-2 font-semibold ${
                activeTab === 'enfoque' 
                ? 'border-b-2 border-[#F6B426] text-[#F6B426]' 
                : 'text-gray-500 hover:text-[#F6B426]'
              }`}
              >
              Nuestro Enfoque
            </button>
            <button 
              onClick={() => setActiveTab('mision')}
              className={`p-2 font-semibold ${
                activeTab === 'mision' 
                ? 'border-b-2 border-[#F6B426] text-[#F6B426]' 
                : 'text-gray-500 hover:text-[#F6B426]'
              }`}
              >
              Misión
            </button>
            <button 
              onClick={() => setActiveTab('valores')}
              className={`p-2 font-semibold ${
                activeTab === 'valores' 
                ? 'border-b-2 border-[#F6B426] text-[#F6B426]' 
                : 'text-gray-500 hover:text-[#F6B426]'
              }`}
              >
              Valores
            </button>
          </div>
          {/* Contenido dinámico */}
          {activeTab === 'enfoque' && (
            <p className="text-gray-600 text-xs mb-2">
              En RedecoToia, nos especializamos en transformar espacios a través de un mantenimiento integral de excelencia. Contamos con un equipo de técnicos certificados dedicados a la instalación y reparación de aires acondicionados y sistemas eléctricos residenciales e industriales. Nuestro compromiso es brindar una respuesta rápida y soluciones duraderas que superen las expectativas de calidad.
            </p>
          )}
          {activeTab === 'mision' && (
            <p className="text-gray-600 text-xs mb-2">
              Nuestra misión es proporcionar soluciones integrales en climatización y electricidad que garanticen la seguridad y el confort de nuestros clientes. Nos enfocamos en la excelencia técnica y el uso de tecnologías eficientes para optimizar el consumo energético y prolongar la vida útil de cada equipo.
            </p>
          )}
          {activeTab === 'valores' && (
            <p className="text-gray-600 text-xs mb-2">
              Compromiso: Calidad garantizada en cada instalación y reparación.<br/>
              Transparencia: Presupuestos claros y asesoramiento honesto.<br/>
              Seguridad: Cumplimiento estricto de las normas eléctricas vigentes.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
