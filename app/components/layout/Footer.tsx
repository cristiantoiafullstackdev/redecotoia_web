export default function Footer() {
  return (
    <footer className="w-full bg-[#091242] text-white py-12">
      {/* El container mx-auto asegura que el margen sea igual al de tu Topbar */}
      <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright a la izquierda */}
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Redeco Toia. Todos los derechos reservados.
        </p>
        
        {/* Créditos a la derecha */}
        <div className="text-sm">
          <span className="opacity-80">Creado por:</span>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-medium hover:scale-105 transition-transform"
          >
            <span className="ml-2 bg-linear-to-r from-[#FF00FF] via-[#d69bd6] to-[#FF00FF] bg-clip-text text-transparent animate-gradient-text">
              Agencia de Software <span className="text-lg ml-1 font-bold">ViiViX</span>
            </span>
          </a>
        </div>

      </div>
    </footer>
  )
}