/* SINTAXIS: Next.js / React (Directive)
   ESTE BLOQUE: Indica que el componente se ejecutará en el cliente para gestionar el estado del formulario y eventos de envío.
*/
"use client";

/* SINTAXIS: JavaScript (ES6 Modules)
   ESTE BLOQUE: Importación de Hooks esenciales y recursos visuales para la interfaz de contacto.
*/
import { useState } from "react";
import { IconHorario, IconEmail, IconPhone } from "../ui/Icons";

/* SINTAXIS: TypeScript (Interface)
   ESTE BLOQUE: Define el esquema de datos que el formulario debe recolectar, asegurando que no falte ningún campo obligatorio durante el desarrollo.
*/
interface ContactFormData {
  name: string; 
  email: string; 
  phone: string; 
  serviceType: string; 
  message: string;
}

/* SINTAXIS: React Functional Component (Sección de Contacto)
   ESTE BLOQUE: Componente principal que contiene la lógica de validación, el estado del formulario y la UI.
*/
export default function Contacto() {
  
  /* SINTAXIS: React Hooks (useState)
     ESTE BLOQUE: 'isSubmitting' controla el estado de carga del botón, mientras que 'form' almacena los valores actuales de los inputs.
  */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<ContactFormData>({
    name: "", email: "", phone: "", serviceType: "", message: ""
  });

  /* SINTAXIS: JavaScript (Async/Await & Fetch API)
     ESTE BLOQUE: Procesa el envío del formulario. Valida campos vacíos, envía los datos a una API interna y gestiona la respuesta (éxito o error).
  */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica de campos obligatorios
    if (!form.name || !form.email || !form.phone || !form.serviceType || !form.message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/route-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (data.success) {
        alert("Mensaje enviado correctamente");
        // Reinicio del formulario tras envío exitoso
        setForm({ name: "", email: "", phone: "", serviceType: "", message: "" });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Error en el servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* SINTAXIS: CSS Classes (Tailwind Abstraction)
     ESTE BLOQUE: Constantes que almacenan clases repetitivas de Tailwind para mantener el JSX más limpio y facilitar cambios de diseño globales.
  */
  const inputStyles = "w-full p-4 bg-transparent text-white border border-white outline-none text-sm";
  const labelStyles = "absolute left-4 -top-2.5 px-2 bg-[#091242] text-white text-sm tracking-wide";

  return (
    <section id="contacto" className="w-full bg-[#dbdbdb] py-20 px-6 font-rubik flex justify-center">
      <div className="w-246 h-auto min-h-230 bg-[#091242] p-12 md:p-20 flex flex-col justify-center shadow-2xl">
        
        {/* Encabezado de Sección: Título y bajada de texto explicativa */}
        <div className="text-center mb-16">
          <h5 className="mb-6 inline-block text-xs font-bold tracking-wider text-white">
            <span className="border-l-4 border-[#F6B426] bg-[#3A3C40]/50 px-4 py-1.5">
              Contacto
            </span>
          </h5>
          <h2 className="text-4xl font-bold text-white mb-6">
            Solicita tu Presupuesto hoy mismo
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80">
            Nuestro equipo técnico se pondrá en contacto con vos a la brevedad...
          </p>
        </div>

        {/* Tarjetas de Información Rápida: Horarios, Email y WhatsApp con efectos hover */}
        <div className="flex flex-row justify-center items-center gap-12 mb-16">
          {/* Bloque Horario */}
          <div className="md:flex md:items-center gap-1 md:gap-4 hidden">
            <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0">
              <IconHorario />
            </div>
            <p className="text-white text-xs leading-tight">Lun - Sab 9:00 - 18:00 <br /> Domingo Cerrado</p>
          </div>

          {/* Link de Email */}
          <a href="mailto:toiacristiandaniel@gmail.com" className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0 group-hover:border-[#F6B426] transition-colors">
              <IconEmail />
            </div>
            <p className="text-white text-xs leading-tight group-hover:text-[#F6B426] transition-colors hidden md:block">E-mail: <br /> toiacristiandaniel@gmail.com</p>
          </a>

          {/* Link de WhatsApp */}
          <a 
            href={`https://wa.me//5493515930609?text=${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0 group-hover:border-[#F6B426] transition-colors">
              <IconPhone />
            </div>
            <p className="text-white text-xs leading-tight group-hover:text-[#F6B426] transition-colors hidden md:block">Celular: <br /> (351) 593 0609</p>
          </a>
        </div>

        {/* Formulario Interactivo: Usa un grid para organizar inputs y actualización de estado OnChange */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            
            {/* Input Nombre */}
            <div className="relative">
              <input 
                type="text" id="nombre"
                className={`peer ${inputStyles}`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                placeholder="Ejemplo: Juan Perez" 
              />
              <label htmlFor="nombre" className={labelStyles}>Nombre Completo *</label>
            </div>

            {/* Input Email */}
            <div className="relative">
              <input 
                type="email" id="email"
                className={`peer ${inputStyles}`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                placeholder="Ejemplo: juan.perez@email.com"
              />
              <label htmlFor="email" className={labelStyles}>Email *</label>
            </div>

            {/* Input Teléfono */}
            <div className="relative">
              <input 
                type="text" id="phone"
                className={`peer ${inputStyles}`}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                placeholder="Ejemplo: 3515930609"
              />
              <label htmlFor="phone" className={labelStyles}>Teléfono *</label>
            </div>

            {/* Selector de Servicio: Menú desplegable personalizado */}
            <div className="relative">
              <select
                id="serviceType"
                required
                value={form.serviceType} 
                onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                className={`peer ${inputStyles} cursor-pointer appearance-none`}
              >
                <option value="" disabled hidden className="text-white/50">Selecciona un servicio</option>
                <option value="electricidad" className="bg-white text-black">Electricidad</option>
                <option value="refrigeracion" className="bg-white text-black">Refrigeración</option>
                <option value="mantenimientos" className="bg-white text-black">Mantenimientos</option>
              </select>
              <label htmlFor="serviceType" className={labelStyles}>Tipo de Servicio *</label>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/60 text-xl">▾</div>
            </div>
          </div>

          {/* Área de Texto (Mensaje) */}
          <div className="relative mt-8">
            <textarea 
              id="message"
              className={`peer ${inputStyles} resize-none`} 
              rows={5} 
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })} 
              placeholder="Ejemplo: Detalla tu consulta aquí..."
            />
            <label htmlFor="message" className={labelStyles}>Mensaje *</label>
          </div>

          {/* Botón de Envío: Incluye efecto visual en hover y estado de carga (disabled) */}
          <div className="flex justify-center mt-10">
            <div className="group inline-block relative overflow-hidden">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-block bg-[#F6B426] text-[#3A3C40] font-bold py-3 px-10 overflow-hidden"
              >
                <span className="relative z-10 text-[#23212A]">
                   {isSubmitting ? "Enviando..." : "Enviar Formulario"}
                </span>
                {/* Efecto de fondo circular al hacer hover */}
                <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
              </button>
            </div>
          </div>
        </form>
      </div> 
    </section>
  );
}