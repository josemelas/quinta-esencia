"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const datosFotos: any = {
  "verano": { titulo: "EL VERANO", autor: "ROCIO CAMPA", artistaSlug: "rocio-campa", año: "2025", src: "/galeria/fotografia/verano.png", descripcion: "FOTOGRAFÍA LIFESTYLE CAPTURADA EN ÁNGULO CENITAL. RESALTA TONOS CÁLIDOS Y CONTRASTE SUAVE ENTRE LA PISCINA Y EL ENTORNO RÚSTICO." },
  "paisaje": { titulo: "PAISAJE", autor: "JOSE VALLEJO", artistaSlug: "jose-vallejo", año: "2025", src: "/galeria/fotografia/paisaje.png", descripcion: "CAPTURA DE LA NATURALEZA EN SU ESTADO MÁS PURO, ENFOCADA EN LA ILUMINACIÓN NATURAL DEL ATARDECER." },
  "flores": { titulo: "FLORES", autor: "ANA SOFÍA", artistaSlug: "ana-sofia", año: "2025", src: "/galeria/fotografia/flores.png", descripcion: "MACROFOTOGRAFÍA QUE EXPLORA LAS TEXTURAS Y COLORES VIBRANTES DE LA FLORA LOCAL." },
  "money": { titulo: "MONEY", autor: "JOSE VALLEJO", artistaSlug: "jose-vallejo", año: "2025", src: "/galeria/fotografia/money.png", descripcion: "FOTOGRAFÍA CONCEPTUAL QUE JUEGA CON LA SIMBOLOGÍA DEL VALOR Y EL INTERCAMBIO." },
  "yates": { titulo: "YATES", autor: "JOSE VALLEJO", artistaSlug: "jose-vallejo", año: "2025", src: "/galeria/fotografia/yates.png", descripcion: "VISTA NÁUTICA QUE CAPTURA LA ELEGANCIA DE LAS EMBARCACIONES SOBRE EL AGUA CRISTALINA." },
  "oleaje": { titulo: "OLEAJE", autor: "JOSE VALLEJO", artistaSlug: "jose-vallejo", año: "2025", src: "/galeria/fotografia/oleaje.png", descripcion: "FOTOGRAFÍA DE ALTA VELOCIDAD QUE CONGELA EL MOVIMIENTO DEL MAR." },
  "desierto": { titulo: "DESIERTO", autor: "ANA SOFÍA", artistaSlug: "ana-sofia", año: "2025", src: "/galeria/fotografia/desierto.png", descripcion: "EXPLORACIÓN VISUAL DE LAS DUNAS DONDE LA LUZ CENITAL CREA PATRONES GEOMÉTRICOS." },
  "union": { titulo: "UNIÓN", autor: "CARLOS RUIZ", artistaSlug: "carlos-ruiz", año: "2025", src: "/galeria/fotografia/union.png", descripcion: "OBRA QUE SIMBOLIZA LA CONEXIÓN HUMANA UTILIZANDO UNA COMPOSICIÓN ORGÁNICA." }
};

export default function DetalleObra() {
  const { id } = useParams();
  const obra = datosFotos[id as string];

  if (!obra) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e2e4e7]">
        <h1 className="text-2xl font-black text-[#2d2d44] uppercase tracking-tighter italic">Obra no encontrada</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#e2e4e7] px-12">
      <div className="max-w-7xl mx-auto">
        
        <Link 
          href="/galeria/fotografia" 
          className="inline-flex items-center gap-2 mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#2d2d44] hover:opacity-60 transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver a fotografías
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-[55%]">
            <div className="relative h-[550px] w-full rounded-sm overflow-hidden shadow-2xl bg-white">
              <Image src={obra.src} alt={obra.titulo} fill className="object-cover" priority />
            </div>
            <div className="mt-6 flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-[#5ca9e6]"></div>
               <span className="text-[10px] font-black uppercase tracking-widest text-[#2d2d44]">Fotografía</span>
            </div>
          </div>

          <div className="w-full lg:w-[45%] text-[#2d2d44]">
            <h1 className="text-5xl font-black mb-10 tracking-tighter italic">"{obra.titulo}"</h1>
            
            <div className="space-y-6">
              <p className="text-xs font-bold tracking-widest uppercase">
                AUTOR: 
                <Link href={`/artistas/${obra.artistaSlug}`} className="underline underline-offset-4 decoration-2 hover:text-[#5ca9e6] transition-colors ml-1">
                  {obra.autor}
                </Link>
              </p>
              <p className="text-xs font-bold tracking-widest uppercase">AÑO: {obra.año}</p>
              
              <div className="pt-6 border-t border-gray-300">
                <p className="text-[11px] leading-relaxed font-bold tracking-[0.15em] text-justify opacity-80 uppercase">
                  DESCRIPCIÓN: {obra.descripcion}
                </p>
              </div>

              <button className="mt-12 w-full max-w-[240px] bg-[#2d2d44] text-white py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#3d3d5c] transition-all shadow-xl active:scale-95">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}