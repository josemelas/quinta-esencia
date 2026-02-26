import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Artistas', href: '/artistas' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#2d2d44] text-white px-12 py-3 flex items-center justify-between shadow-md">
      {/* Logo minimalista todo blanco */}
      <Link href="/" className="text-xl font-light tracking-[0.3em] hover:opacity-80 transition-opacity">
        QUINTAESENCIA
      </Link>

      {/* Navegación con ligero relleno (font-semibold) y efecto de línea */}
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-semibold">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="relative group py-1">
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      <div className="flex gap-4">
        <Link href="/calendario" className="bg-[#f97316] hover:bg-orange-600 px-5 py-2 rounded-full text-[10px] font-bold uppercase transition-all flex items-center gap-2">
          <Image src="/calendario.png" alt="" width={12} height={12} className="invert" />
          Calendario
        </Link>
        <Link href="/login" className="bg-[#8b5cf6] hover:bg-[#7c3aed] px-5 py-2 rounded-full text-[10px] font-bold uppercase transition-all flex items-center gap-2 shadow-lg">
          <Image src="/usuario.png" alt="" width={12} height={12} className="invert" />
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;