// "use client";
// import { useState } from "react";
// import { IconHorario, IconEmail, IconPhone } from "../ui/Icons";
// interface ContactFormData {
//   name: string;
//   email: string;
//   phone: string;
//   serviceType: string;
//   message: string;
// }

// export default function Contacto() {

//   const [form, setForm] = useState<ContactFormData>({
//       name: "",
//       email: "",
//       phone: "",
//       serviceType: "",
//       message: ""
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//       // Validaciones básicas
//     if (!form.name || !form.email || !form.phone || !form.serviceType || !form.message) {
//       alert("Por favor completa todos los campos.");
//       return;
//     }

//     // Validación de email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(form.email)) {
//       alert("Por favor ingresa un email válido.");
//       return;
//     }

//     // Validación de teléfono (ejemplo simple: solo números y mínimo 8 dígitos)
//     const phoneRegex = /^[0-9]{8,}$/;
//     if (!phoneRegex.test(form.phone)) {
//       alert("Por favor ingresa un teléfono válido.");
//       return;
//     }

//     try {
//     const res = await fetch("/api/route-contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });
//     const data = await res.json();

//     if (data.success) {
//       alert("Mensaje enviado correctamente");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         serviceType: "",
//         message: ""
//       });
//       } else {
//         alert("Error al enviar el mensaje");
//       }
//     } catch (error) {
//       console.log(error)
//       alert("Hubo un problema con el servidor");
//     }

//     const res = await fetch("/api/route-contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });
//     const data = await res.json();
//     if (data.success) {
//       alert("Mensaje enviado correctamente");
//     } else {
//       alert("Error al enviar el mensaje");
//     }
//   };


//   return (
//     <section id="contacto" className="px-54 py-12">
//       <div className="w-full p-12 bg-[#091242] text-center">
//         <h5 className="text-xs text-white font-bold mb-4">
//           <span className="border-l-3 border-[#F6B426] px-4 py-1 bg-[#3A3C40]/50">
//             Contacto
//           </span>
//         </h5>
//         <h2 className="text-2xl font-bold text-white">Solicita tu Presupuesto hoy mismo</h2> 
//         <p className="text-white text-xs p-4">
//           Dejanos tus datos y contanos qué necesitás. Nuestro equipo técnico se pondrá en contacto <br/>
//            con vos a la brevedad para brindarte la mejor solución en electricidad y climatización.
//         </p>
//         <div className="mt-4 flex px-4 space-x-24">
//           <div className="space-y-5 flex flex-col items-center">
//             <div className="w-14 h-14 p-2.5 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
//                 <IconHorario />
//             </div>
//             <p className="text-white text-xs">
//               Lun - Sab 9:00 - 18:00 <br />
//               Domingo Cerrado 
//             </p>
//           </div>
//           <a 
//             href="mailto:toiacristiandaniel@gmail.com"
//             className="space-y-5 flex flex-col items-center"
//           >
//             <div className="w-14 h-14 p-2.5 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
//               <IconEmail />
//             </div>
//             <p className="text-white text-xs">
//               E-mail: <br />
//               toiacristiandaniel@gmail.com
//             </p>
//           </a>
//           <a
//             href="https://wa.me/5493515930609"
//             target="_blank"
//             rel="noopener noreferrer" 
//             className="text-white text-xs"
//           >
//             <div className="space-y-5 flex flex-col items-center">
//               <div className="w-14 h-14 p-2.5 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
//                 <IconPhone />
//               </div>
//               <p>
//                 Celular: <br />
//                 (351) 593 0609
//               </p>
//             </div>
//           </a>
//         </div>

//         <form  onSubmit={handleSubmit} className="mt-8">
//           <div className="grid grid-cols-2 text-white gap-4">
//             <div>
//               <input 
//                 type="text" 
//                 id="nombre" 
//                 placeholder="Nombre Completo*" 
//                 className="w-full p-2 text-white border border-white outline-none"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })} 
//               />
//             </div>
//             <div>
//               <input 
//                 type="email" 
//                 id="email" 
//                 placeholder="Email*" 
//                 className="w-full p-2 text-white border border-white  outline-none"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })} 
//               />
//             </div>
//             <div>
//               <input 
//                 type="text" 
//                 id="phone" 
//                 placeholder="Teléfono*" 
//                 className="w-full p-2 text-white border border-white outline-none"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })} 
//               />
//             </div>
//             <select
//               id="serviceType"
//               name="serviceType"
//               required
//               aria-label="Tipo de servicio"
//               value={form.serviceType} 
//               onChange={(e) => setForm({ ...form, serviceType: e.target.value })} // Cambiado a setForm
//               className="border border-white p-2 focus:ring-2 focus:ring-blue-500 outline-none text-white cursor-pointer"
//             >
//               <option value="" disabled hidden>
//                 Tipo de Servicio*
//               </option>
//               <option value="electricidad" className="text-[#111C55]">Electricidad</option>
//               <option value="refrigeracion" className="text-[#111C55]">Refrigeración</option>
//               <option value="mantenimientos" className="text-[#111C55]">Mantenimientos</option>
//             </select>
//           </div>
//           <div className="mt-4">
//             <textarea 
//               id="mensaje" 
//               placeholder="Mensaje*" 
//               className="w-full p-3 text-white border border-white outline-none" 
//               rows={4} 
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//             />
//           </div>
//           <div className="group inline-block mt-4">
//             <button
//               type="submit"
//               className="relative inline-block bg-[#F6B426] text-[#3A3C40] font-bold py-2 px-10 overflow-hidden"
//             >
//               <span className="relative z-10 text-[#23212A]">Enviar Formulario</span>
//               <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
//             </button>
//           </div>
//         </form>
//       </div> 
//     </section>
//   )
// }

"use client";
import { useState } from "react";
import { IconHorario, IconEmail, IconPhone } from "../ui/Icons";

interface ContactFormData {
  name: string; email: string; phone: string; serviceType: string; message: string;
}

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<ContactFormData>({
    name: "", email: "", phone: "", serviceType: "", message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setForm({ name: "", email: "", phone: "", serviceType: "", message: "" });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Error en el servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Estilos mejorados para inputs
  const inputBaseStyles = "w-full p-4 bg-transparent text-white border border-white outline-none transition-all duration-300 text-sm";
  const placeholderStyles = "placeholder:text-white/40 focus:placeholder:text-transparent";

  return (
    <section id="contacto" className="w-full bg-[#dbdbdb] py-20 px-6 font-rubik flex justify-center">
      <div className="w-246 h-auto min-h-230 bg-[#091242] p-12 md:p-20 flex flex-col justify-center shadow-2xl">
        
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
            Dejanos tus datos y contanos qué necesitás. Nuestro equipo técnico se pondrá en contacto 
            con vos a la brevedad para brindarte la mejor solución en electricidad y climatización.
          </p>
        </div>

        {/* Info de contacto */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0">
              <IconHorario />
            </div>
            <p className="text-white text-xs leading-tight">Lun - Sab 9:00 - 18:00 <br /> Domingo Cerrado</p>
          </div>

          <a href="mailto:toiacristiandaniel@gmail.com" className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0 group-hover:border-[#F6B426] transition-colors">
              <IconEmail />
            </div>
            <p className="text-white text-xs leading-tight group-hover:text-[#F6B426] transition-colors">E-mail: <br /> toiacristiandaniel@gmail.com</p>
          </a>

          <a href="https://wa.me/5493515930609" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-14 h-14 bg-[#111C55] border-2 border-[#273270] rounded-full shrink-0 group-hover:border-[#F6B426] transition-colors">
              <IconPhone />
            </div>
            <p className="text-white text-xs leading-tight group-hover:text-[#F6B426] transition-colors">Celular: <br /> (351) 593 0609</p>
          </a>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Nombre Completo *" 
              className={`${inputBaseStyles} ${placeholderStyles}`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
            />
            <input 
              type="email"  
              placeholder="Email *" 
              className={`${inputBaseStyles} ${placeholderStyles} focus:border-[#F6B426]`}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="Teléfono *" 
              className={`${inputBaseStyles} ${placeholderStyles} focus:border-[#F6B426]`}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })} 
            />
            
            <div className="relative">
              <select
                required
                value={form.serviceType} 
                onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                className={`${inputBaseStyles} cursor-pointer appearance-none text-sm font-bold tracking-wider ${
                  form.serviceType === "" ? "text-white/40" : "text-white"
                }`}
              >
                <option value="" disabled hidden>Tipo de Servicio *</option>
                <option value="electricidad" className="bg-white text-black">Electricidad</option>
                <option value="refrigeracion" className="bg-white text-black">Refrigeración</option>
                <option value="mantenimientos" className="bg-white text-black">Mantenimientos</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/60 text-xl">▾</div>
            </div>
          </div>

          <textarea 
            placeholder="Mensaje *" 
            className={`${inputBaseStyles} ${placeholderStyles} focus:border-[#F6B426] resize-none`} 
            rows={6} 
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
          />

          {/* BOTÓN CON ANIMACIÓN ORIGINAL */}
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
                <span className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24"></span>
              </button>
            </div>
          </div>
        </form>
      </div> 
    </section>
  );
}