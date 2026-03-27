import Hero from "@/app/components/sections-home/Hero";
import ServicesCategoriesSection from "@/app/components/sections-home/ServicesCategoriesSection";
import Maintenance from "@/app/components/sections-home/Maintenance";
import Contacto from "@/app/components/sections-home/Contacto";
import About from "@/app/components/sections-home/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center"> 
     <Hero />
     <ServicesCategoriesSection />
     <Maintenance />
     <About />
     <Contacto />
    </div>
  );
}