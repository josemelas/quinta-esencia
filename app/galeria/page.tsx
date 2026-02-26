import Image from 'next/image';
import Link from 'next/link';

export default function GaleriaCategorias() {
  const categorias = [
    { nombre: 'Fotografía', src: '/galeria/fotografia.png', color: 'bg-[#5ca9e6]', href: '/galeria/fotografia' },
    { nombre: 'Pintura', src: '/galeria/pintura.png', color: 'bg-[#a366ab]', href: '/galeria/pintura' },
    { nombre: 'Dibujo', src: '/galeria/dibujo.png', color: 'bg-[#db5c8d]', href: '/galeria/dibujo' },
    { nombre: 'Artesanía', src: '/galeria/artesania.png', color: 'bg-[#f29278]', href: '/galeria/artesania' },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#f8f9fa] px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado Centralizado */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-bold titulo-quintaesencia">
            Galería de Arte
          </h1>
          <p className="text-gray-500 text-xl font-light mt-4 italic">
            Explora nuestra colección por categorías
          </p>
        </div>

        {/* Grid de 4 categorías centralizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          {categorias.map((cat) => (
            <div key={cat.nombre} className="flex flex-col items-center gap-6">
              
              {/* Círculo de color decorativo con el orden solicitado */}
              <div className={`w-5 h-5 rounded-full ${cat.color} shadow-sm`} />

              {/* Tarjeta con dimensiones ajustadas (menos larga) y sin borde blanco */}
              <Link 
                href={cat.href}
                className="relative h-[380px] w-full rounded-[30px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Imagen de fondo: Color inicial, B/N al pasar el mouse */}
                <Image
                  src={cat.src}
                  alt={cat.nombre}
                  fill
                  className="object-cover grayscale-0 group-hover:grayscale group-hover:scale-105 transition-all duration-700"
                />

                {/* Capa de oscurecimiento y Texto centralizado */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold tracking-[0.3em] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 uppercase">
                    {cat.nombre}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}