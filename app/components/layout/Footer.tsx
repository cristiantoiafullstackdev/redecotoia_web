
export default function Footer() {
  return (
    <div className="bg-[#091242] text-white text-center py-6">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Redeco Toia. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
