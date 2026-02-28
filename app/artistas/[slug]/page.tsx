"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const datosArtistas: any = {
  "rocio-campa": {
    nombre: "ROCIO CAMPA",
    foto: "/artistas/rocio.png",
    especialidades: [{ nombre: "ARTESANÍA", color: "bg-[#f29278]" }, { nombre: "PINTURA", color: "bg-[#a366ab]" }],
    talleres: ["PINTA TU TAZA EN CERÁMICA", "PINTA TU LIENZO"],
    semblanza: "ARQUITECTA Y CERAMISTA. SU ENFOQUE SE CENTRA EN LA UTILIDAD DEL OBJETO ARTÍSTICO, BUSCANDO QUE EL ARTE NO SOLO SE VEA, SINO QUE SE TOQUE Y SE USE EN EL DÍA A DÍA.",
    frase: "EL BARRO TIENE MEMORIA; CADA PIEZA CUENTA LA HISTORIA DE LAS MANOS QUE LO MOLDEARON.",
    galeriaPersonal: ["/galeria/artesania/taza1.png", "/galeria/artesania/taza2.png", "/galeria/artesania/taza3.png", "/galeria/artesania/taza4.png"]
  },
  "maria-lopez": {
    nombre: "MARÍA LÓPEZ",
    foto: "/artistas/maria.png",
    especialidades: [{ nombre: "ARTESANÍA", color: "bg-[#f29278]" }],
    talleres: ["TEJE TU PORTAVASOS EN CROCHET"],
    semblanza: "EXPERTA EN FIBRAS NATURALES. MARÍA HA RESCATADO TÉCNICAS DE TEJIDO TRADICIONAL PARA ADAPTARLAS A DISEÑOS CONTEMPORÁNEOS Y FUNCIONALES PARA EL HOGAR.",
    frase: "TEJER ES UNA FORMA DE MEDITACIÓN ACTIVA DONDE CADA NUDO ES UN PENSAMIENTO CONSCIENTE.",
    galeriaPersonal: ["/galeria/artesania/tejido1.png", "/galeria/artesania/tejido2.png", "/galeria/artesania/tejido3.png", "/galeria/artesania/tejido4.png"]
  },
  "carlos-ruiz": {
    nombre: "CARLOS RUIZ",
    foto: "/artistas/carlos.png",
    especialidades: [{ nombre: "DIBUJO", color: "bg-[#db5c8d]" }],
    talleres: ["INTRODUCCIÓN AL DIBUJO", "CARBONCILLO AVANZADO"],
    semblanza: "DIBUJANTE ACADÉMICO. SU TRABAJO SE ESPECIALIZA EN EL ESTUDIO DE LA ANATOMÍA HUMANA Y EL MANEJO DRAMÁTICO DE LAS LUCES Y LAS SOMBRAS.",
    frase: "EL DIBUJO ES LA HONESTIDAD DEL ARTE; NO HAY LUGAR PARA ESCONDER EL ERROR, SOLO PARA APRENDER DE ÉL.",
    galeriaPersonal: ["/galeria/dibujo/rostro1.png", "/galeria/dibujo/mano1.png", "/galeria/dibujo/dibujo1.png", "/galeria/dibujo/dibujo2.png"]
  },
  "jose-vallejo": {
    nombre: "JOSE VALLEJO",
    foto: "/artistas/jose.png",
    especialidades: [{ nombre: "FOTOGRAFÍA", color: "bg-[#5ca9e6]" }],
    talleres: ["FOTOGRAFÍA DE PAISAJE URBANO", "EDICIÓN DIGITAL"],
    semblanza: "ESTUDIANTE DE INGENIERÍA EN SISTEMAS Y FOTÓGRAFO DOCUMENTAL. INTERESADO EN CAPTURAR LA INTERACCIÓN ENTRE LA ARQUITECTURA MODERNA Y LA LUZ NATURAL EN LAS HORAS DORADAS.",
    frase: "LA CÁMARA ES UN INSTRUMENTO QUE ENSEÑA A LA GENTE CÓMO VER EL MUNDO SIN UNA CÁMARA.",
    galeriaPersonal: ["/galeria/fotografia/yates.png", "/galeria/fotografia/oleaje.png", "/galeria/fotografia/verano.png", "/galeria/fotografia/paisaje.png"]
  },
  "ana-sofia": {
    nombre: "ANA SOFÍA",
    foto: "/artistas/ana.png",
    especialidades: [{ nombre: "PINTURA", color: "bg-[#a366ab]" }, { nombre: "FOTOGRAFÍA", color: "bg-[#5ca9e6]" }],
    talleres: ["ACUARELA EXPERIMENTAL", "TEORÍA DEL COLOR"],
    semblanza: "PINTORA ABSTRACTA. EXPLORA LA PSICOLOGÍA DEL COLOR Y CÓMO LAS DIFERENTES TONALIDADES AFECTAN EL ESTADO DE ÁNIMO DEL ESPECTADOR.",
    frase: "EL COLOR ES UN PODER QUE INFLUYE DIRECTAMENTE EN EL ALMA.",
    galeriaPersonal: ["/galeria/pintura/tundra.png", "/galeria/pintura/mafia.png", "/galeria/pintura/flor.png", "/galeria/pintura/circo.png"]
  },
  "elena-garza": {
    nombre: "ELENA GARZA",
    foto: "/artistas/elena.png",
    especialidades: [{ nombre: "ARTESANÍA", color: "bg-[#f29278]" }, { nombre: "DIBUJO", color: "bg-[#db5c8d]" }],
    talleres: ["CREA TU REGALO PARA PAPÁ", "ESCULTURA EN MINIATURA"],
    semblanza: "ARTISTA MULTIDISCIPLINARIA. ELENA UTILIZA MATERIALES RECICLADOS PARA CREAR PIEZAS DE ARTE QUE INVITAN A LA REFLEXIÓN SOBRE EL CONSUMO.",
    frase: "EL ARTE ESTÁ EN LO QUE OTROS CONSIDERAN DESECHO.",
    galeriaPersonal: ["/galeria/artesania/pieza1.png", "/galeria/artesania/pieza2.png", "/galeria/artesania/pieza3.png", "/galeria/artesania/pieza4.png"]
  }
};

export default function PerfilArtista() {
  const { slug } = useParams();
  const artista = datosArtistas[slug as string];
  if (!artista) return <div className="pt-40 text-center font-black uppercase italic text-2xl">Artista no encontrado</div>;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#e2e4e7] px-12 text-[#2d2d44]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[350px_1fr] gap-16">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
            <Image src={artista.foto} alt={artista.nombre} fill className="object-cover" />
          </div>
          <h1 className="text-5xl font-black mb-4 italic tracking-tighter">{artista.nombre}</h1>
          <div className="flex flex-wrap gap-3">
            {artista.especialidades.map((esp: any) => (
              <div key={esp.nombre} className="flex items-center gap-2 opacity-80">
                <div className={`w-3 h-3 rounded-full ${esp.color}`}></div>
                <span className="text-[9px] font-black uppercase tracking-widest">{esp.nombre}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-4 italic">Artista Formador</h2>
            <p className="text-xs font-bold leading-relaxed opacity-70 uppercase tracking-widest mb-4 max-w-2xl">
              MAESTRO QUE TRANSFORMA SU EXPERIENCIA EN CONOCIMIENTO A TRAVÉS DE TALLERES QUE INSPIRAN Y ENSEÑAN.
            </p>
            <p className="text-xs font-black uppercase tracking-widest">
              TALLERES IMPARTIDOS: <span className="underline underline-offset-4 decoration-2">{artista.talleres.join(", ")}.</span>
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-6 italic">Semblanza</h2>
            <div className="space-y-6 text-xs font-bold leading-relaxed opacity-70 uppercase tracking-[0.15em] text-justify max-w-3xl">
              <p>{artista.semblanza}</p>
              <p>{artista.frase}</p>
            </div>
          </section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artista.galeriaPersonal.map((img: string, i: number) => (
              <div key={i} className="relative h-48 rounded-sm overflow-hidden shadow-lg bg-white">
                <Image src={img} alt="Obra personal" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}