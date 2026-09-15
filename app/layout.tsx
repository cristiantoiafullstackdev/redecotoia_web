import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Topbar from "@/app/components/layout/Topbar";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

/* CONFIGURACIÓN DE FUENTE: Rubik
   ESTE BLOQUE: Cargás la fuente de Google directamente. Al elegir los pesos 400, 500 y 700, 
   te asegurás de tener cubierto el cuerpo de texto, los subtítulos y los títulos destacados.
*/
const font = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
}); 

/* SEO & METADATA: 
   ESTE BLOQUE: Es vital para el posicionamiento. 
   - 'title': Lo que aparece en la pestaña del navegador.
   - 'openGraph': Cómo se ve tu web cuando alguien comparte el link por WhatsApp o redes.
   - 'canonical': Le dice a Google cuál es la URL principal, evitando problemas de contenido duplicado.
*/
export const metadata: Metadata = {
  metadataBase: new URL("https://redecotoia.vercel.app"),
  title: "Redeco Toia | Servicios eléctricos en Córdoba",
  description: "Servicios eléctricos normalizados para hogares y empresas en Córdoba.",
  keywords: ["electricista Córdoba", "instalaciones eléctricas", "servicios urgencia", "Redeco Toia"],
  openGraph: {
    title: "Redeco Toia - Servicios eléctricos",
    description: "Catálogo de servicios eléctricos normalizados en Córdoba.",
    url: "https://redecotoia.vercel.app",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://redecotoia.vercel.app",
  },
  verification: {
    google: ""
  },
  icons: {
    icon: "/favicon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${font.className} min-h-screen flex flex-col`}>

        {/* NAVEGACIÓN FIJA: 
            Usás 'fixed' y 'z-50' para que el Topbar y el Header siempre estén visibles 
            arriba mientras el usuario scrollea, lo cual es clave para la conversión.
        */}
        <div className="flex flex-col space-x-0 fixed w-full z-50">
        <Topbar />
        <Header />
        </div>

        {/* CONTENIDO DINÁMICO: 
            La clase 'grow' en el <main> hace que, si una página tiene poco contenido, 
            el Footer se mantenga siempre al final de la pantalla y no "flote" en el medio.
        */}
        <main className="grow">
          {children} {/* Aquí se inyecta cada página (Electricidad, Mantenimiento, etc.) */}
        </main>
        <Footer />

        {/* VERCEL SPEED INSIGHTS: 
            Herramienta genial para medir el rendimiento real de tu web una vez desplegada.
        */}
        <SpeedInsights />
      </body>
    </html>
  );
}
