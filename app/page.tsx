/* IMPORTACIÓN DE SECCIONES:
   Cada componente representa una parte lógica de la página principal.
   Esto permite que, si querés cambiar algo en el formulario, 
   solo editás el archivo 'Contacto.tsx' sin riesgo de romper el Hero.
*/
import Hero from "@/app/components/sections-home/Hero";
import ServicesCategoriesSection from "@/app/components/sections-home/ServicesCategoriesSection";
import Maintenance from "@/app/components/sections-home/Maintenance";
import Contacto from "@/app/components/sections-home/Contacto";
import About from "@/app/components/sections-home/About";

export default function Home() {
  return (
    /* CONTENEDOR PRINCIPAL:
       - 'flex flex-col': Apila las secciones una debajo de la otra.
       - 'items-center': Asegura que el contenido esté centrado horizontalmente.
       - 'min-h-screen': Garantiza que el fondo cubra al menos el alto total de la pantalla.
    */
    <div className="flex flex-col min-h-screen items-center justify-center"> 
     <Hero />
     <ServicesCategoriesSection />
     <Maintenance />
     <About />
     <Contacto />
    </div>
  );
}