import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Topbar from "@/app/components/layout/Topbar";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const font = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
}); 

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Redeco Toia | Servicios eléctricos en Córdoba",
  description: "Servicios eléctricos normalizados para hogares y empresas en Córdoba.",
  keywords: ["electricista Córdoba", "instalaciones eléctricas", "servicios urgencia", "Redeco Toia"],
  openGraph: {
    title: "Redeco Toia - Servicios eléctricos",
    description: "Catálogo de servicios eléctricos normalizados en Córdoba.",
    url: "https://redeco-toia.vercel.app", // tu dominio real
    images: ["/og-image.jpg"], // poné una imagen en /public
  },
  alternates: {
    canonical: "https://redeco-toia.vercel.app",
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
        <div className="flex flex-col space-x-0 fixed w-full z-50">
        <Topbar />
        <Header />
        </div>
        <main className="grow">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
