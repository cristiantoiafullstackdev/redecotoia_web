import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full bg-[#091242]">
      <div className="flex py-6 px-54 items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo Redeco Toia" width={180} height={60} />
        </Link>
        <div className="flex px-4 space-x-5">
          <div className="flex items-center space-x-5">
            <div className="p-3 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
              <Image src="/icons/icon-horario.svg" alt="Horário" width={32} height={32} />
            </div>
            <p className="text-white text-xs">
              Lun - Sab 9:00 - 18:00 <br />
              Domingo Cerrado 
            </p>
          </div>
          <a 
            href="mailto:toiacristiandaniel@gmail.com"
            className="flex items-center space-x-2"
          >
            <div className="p-3 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
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
            <div className="flex items-center space-x-2">
              <div className="p-3 bg-[#111C55] border-2 border-[#273270] rounded-4xl">
                <Image src="/icons/icon-phone.svg" alt="Telefone" width={32} height={32} />
              </div>
              <p>
                Celular: <br />
                (351) 593 0609
              </p>
            </div>
          </a>
        </div>
      </div>

      
    </div>
  )
}
