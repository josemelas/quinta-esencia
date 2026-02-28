"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function ApartadoFotografia() {
  const fotos = [
    { id: 1, src: '/galeria/fotografia/verano.png', titulo: 'Verano', slug: 'verano', artista: 'Rocio Campa' },
    { id: 2, src: '/galeria/fotografia/paisaje.png', titulo: 'Paisaje', slug: 'paisaje', artista: 'Jose Vallejo' },
    { id: 3, src: '/galeria/fotografia/flores.png', titulo: 'Flores', slug: 'flores', artista: 'Ana Sofía' },
    { id: 4, src: '/galeria/fotografia/money.png', titulo: 'Money', slug: 'money', artista: 'Jose Vallejo' },
    { id: 5, src: '/galeria/fotografia/yates.png', titulo: 'Yates', slug: 'yates', artista: 'Jose Vallejo' },
    { id: 6, src: '/galeria/fotografia/oleaje.png', titulo: 'Oleaje', slug: 'oleaje', artista: 'Jose Vallejo' },
    { id: 7, src: '/galeria/fotografia/desierto.png', titulo: 'Desierto', slug: 'desierto', artista: 'Ana Sofía' },
    { id: 8, src: '/galeria/fotografia/union.png', titulo: 'Unión', slug: 'union', artista: 'Carlos Ruiz' },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#f8f9fa] px-12">
      <div className="max-w-7xl mx-auto">
        
        <Link href="/galeria" className="text-gray-400 hover:text-[#5ca9e6] transition-colors flex items-center gap-2 mb-10 text-xs font-bold uppercase tracking-widest cursor-pointer group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Regresar a categorías
        </Link>

        <div className="mb-16 pb-2">
          <h1 className="text-6xl font-black bg-gradient-to-r from-[#5ca9e6] to-[#2d2d44] bg-clip-text text-transparent italic inline-block leading-tight">
            Fotografía
          </h1>
          <div className="h-1.5 w-16 bg-[#5ca9e6] mt-1 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fotos.map((foto) => (
            <Link 
              href={`/galeria/fotografia/${foto.slug}`} 
              key={foto.id} 
              className="group relative h-[300px] rounded-[25px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer block"
            >
              <Image
                src={foto.src}
                alt={foto.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {foto.titulo}
                </h3>
                <p className="text-[#5ca9e6] text-xs font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Ver detalles
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}