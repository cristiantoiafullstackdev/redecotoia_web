"use client";
import { useState } from "react";
import Image from "next/image"

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function Contacto() {

  const [form, setForm] = useState<ContactFormData>({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      // Validaciones básicas
    if (!form.name || !form.email || !form.phone || !form.serviceType || !form.message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Por favor ingresa un email válido.");
      return;
    }

    // Validación de teléfono (ejemplo simple: solo números y mínimo 8 dígitos)
    const phoneRegex = /^[0-9]{8,}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Por favor ingresa un teléfono válido.");
      return;
    }

    try {
    const res = await fetch("/api/route-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (data.success) {
      alert("Mensaje enviado correctamente");
      setForm({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
      });
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.log(error)
      alert("Hubo un problema con el servidor");
    }

    const res = await fetch("/api/route-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      alert("Mensaje enviado correctamente");
    } else {
      alert("Error al enviar el mensaje");
    }
  };


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
        <div className="mt-4 flex px-4 space-x-24">
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

        <form  onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-2 text-white gap-4">
            <div>
              <input 
                type="text" 
                id="nombre" 
                placeholder="Nombre Completo" 
                className="w-full p-2 text-white border border-white outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
              />
            </div>
            <div>
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                className="w-full p-2 text-white border border-white  outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
              />
            </div>
            <div>
              <input 
                type="text" 
                id="phone" 
                placeholder="Teléfono" 
                className="w-full p-2 text-white border border-white outline-none"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} 
              />
            </div>
            <select
              id="serviceType"
              name="serviceType"
              required
              aria-label="Tipo de servicio"
              value={form.serviceType} 
              onChange={(e) => setForm({ ...form, serviceType: e.target.value })} // Cambiado a setForm
              className="border border-white p-2 focus:ring-2 focus:ring-blue-500 outline-none text-white"
            >
              <option value="" disabled hidden className="text-[#111C55]">
              -- Selecciona un tipo de servicio --
              </option>
              <option value="electricidad" className="text-[#111C55]">Electricidad</option>
              <option value="refrigeracion" className="text-[#111C55]">Refrigeración</option>
              <option value="mantenimientos" className="text-[#111C55]">Mantenimientos</option>
            </select>
          </div>
          <div className="mt-4">
            <textarea 
              id="mensaje" 
              placeholder="Mensaje" 
              className="w-full p-3 text-white border border-white outline-none" 
              rows={4} 
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
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
