"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function ApartadoPintura() {
  // Lista de tus nuevas pinturas
  const obras = [
    { id: 1, src: '/galeria/pintura/tundra.png', titulo: 'Tundra', artista: 'Artista Pendiente' },
    { id: 2, src: '/galeria/pintura/mafia.png', titulo: 'Mafia', artista: 'Artista Pendiente' },
    { id: 3, src: '/galeria/pintura/flor.png', titulo: 'Flor', artista: 'Artista Pendiente' },
    { id: 4, src: '/galeria/pintura/circo.png', titulo: 'Circo', artista: 'Artista Pendiente' },
    { id: 5, src: '/galeria/pintura/cactus.png', titulo: 'Cactus', artista: 'Artista Pendiente' },
    { id: 6, src: '/galeria/pintura/flamingo.png', titulo: 'Flamingo', artista: 'Artista Pendiente' },
    { id: 7, src: '/galeria/pintura/retrato.png', titulo: 'Retrato', artista: 'Artista Pendiente' },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#f8f9fa] px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Botón Volver con el color morado de la categoría */}
        <Link href="/galeria" className="text-gray-400 hover:text-[#a366ab] transition-colors flex items-center gap-2 mb-10 text-xs font-bold uppercase tracking-widest cursor-pointer group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Regresar a categorías
        </Link>

        {/* Título Pintura con degradado morado */}
        <div className="mb-16 pb-2">
          <h1 className="text-6xl font-black bg-gradient-to-r from-[#a366ab] to-[#2d2d44] bg-clip-text text-transparent italic inline-block leading-tight">
            Pintura
          </h1>
          <div className="h-1.5 w-16 bg-[#a366ab] mt-1 rounded-full"></div>
        </div>

        {/* Grid de Pinturas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {obras.map((obra) => (
            <Link 
              href={`/artistas/${obra.artista.toLowerCase().replace(/\s+/g, '-')}`} 
              key={obra.id} 
              className="group relative h-[300px] rounded-[25px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer block"
            >
              <Image 
                src={obra.src} 
                alt={obra.titulo} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              
              {/* Overlay con información en tonos morados */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {obra.titulo}
                </h3>
                <p className="text-[#a366ab] text-xs font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {obra.artista}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}