"use client";
import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <main className="min-h-screen pt-28 bg-[#f8f9fa]">
      <section className="max-w-7xl mx-auto px-12 py-10 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col gap-6">
          <div className="flex flex-col -space-y-1">
            <h1 className="text-7xl font-bold titulo-quintaesencia text-[#2d2d44]">
              Centro Artístico
            </h1>
            <p className="text-4xl md:text-5xl font-bold text-[#2d2d44] whitespace-nowrap">
              Experiencias creativas
            </p>
          </div>

          <div className="text-[17px] leading-relaxed text-gray-600 font-light max-w-xl text-justify">
            Un espacio <span className="text-[#f29278] font-medium">creado para el arte, la creatividad y la conexión auténtica.</span> Celebramos la expresión artística en todas sus formas. Ofrecemos <span className="text-[#db5c8d] font-medium">talleres presenciales, clases personalizadas,</span> experiencias creativas para eventos privados y una <span className="text-[#a366ab] font-medium">galería virtual</span> que da visibilidad a artistas emergentes. Nuestro objetivo es <span className="text-[#7a7adb] font-medium">impulsar el talento,</span> fomentar la colaboración y brindar un espacio donde cada persona pueda <span className="text-[#5ca9e6] font-medium">conectar con su esencia a través del arte.</span>
          </div>

          <div className="flex gap-4 pt-2">
            <button className="flex items-center gap-3 bg-[#2d2d44] text-white px-7 py-3 rounded-full text-[15px] font-bold hover:bg-[#1a1a2e] transition-all shadow-md active:scale-95">
              <Image src="/usuario.png" alt="" width={18} height={18} />
              Unirse a la comunidad
            </button>

            {/* ENLACE AL CALENDARIO */}
            <Link href="/calendario">
              <button className="flex items-center gap-3 border-[2px] border-[#2d2d44] text-[#2d2d44] px-7 py-3 rounded-full text-[15px] font-bold bg-[#f8f9fa] hover:bg-[#e9ecef] transition-all cursor-pointer active:scale-95 group">
                <Image 
                  src="/calendario.png" 
                  alt="" 
                  width={18} 
                  height={18} 
                  className="group-hover:invert transition-all" 
                />
                Calendario de actividades
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-lg border-white border-4">
          <Image
            src="/Playa.png"
            alt="Quintaesencia Beach"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
        </div>
      </section>
    </main>
  );
}