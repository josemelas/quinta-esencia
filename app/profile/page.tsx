'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Datos de ejemplo para la galería de "Me gusta"
const likedImages = [
  { id: 1, src: '/galeria/fotografia/desierto.png', alt: 'Arte digital 1' },
  { id: 2, src: '/galeria/fotografia/money.png', alt: 'Fotografía 1' },
  { id: 3, src: '/galeria/fotografia/oleaje.png', alt: 'Pintura 1' },
  { id: 4, src: '/galeria/fotografia/flores.png', alt: 'Dibujo 1' },
  { id: 5, src: '/galeria/pintura/cactus.png', alt: 'Arte digital 2' },
  { id: 6, src: '/galeria/pintura/tundra.png', alt: 'Fotografía 2' },
  { id: 7, src: '/galeria/pintura/retrato.png', alt: 'Pintura 2' },
  { id: 8, src: '/galeria/pintura/flor.png', alt: 'Dibujo 2' },
];

// Datos de ejemplo para los talleres
const joinedWorkshops = [
  { id: 1, title: 'Taller de Pintura al Óleo', date: '2024-08-15', time: '10:00 AM' },
  { id: 2, title: 'Clase de Dibujo de Retratos', date: '2024-09-01', time: '2:00 PM' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('talleres');
  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Banner y foto de perfil */}
        <div className="relative h-64 rounded-t-2xl bg-cover bg-center" style={{ backgroundImage: "url('/galeria/banner.png')" }}>
          <div className="absolute -bottom-16 left-10">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <Image
                src="/galeria/perfil.jpg"
                alt="Foto de perfil"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Información del usuario */}
        <div className="bg-white pt-20 pb-8 px-10 rounded-b-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#2d2d44]">Nombre de Usuario</h1>
          <p className="text-gray-500 mt-1">@usuario</p>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Pequeña biografía del artista. Apasionado por la acuarela y la fotografía de paisajes. Explorando nuevas formas de expresión y conectando con otros creativos.
          </p>
        </div>

        {/* Feed del perfil (Talleres y Me Gusta) */}
        <div className="mt-8">
          {/* Pestañas de navegación */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('talleres')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'talleres'
                  ? 'text-[#7a7adb] border-b-2 border-[#7a7adb]'
                  : 'text-gray-500 hover:text-[#7a7adb]'
              }`}
            >
              Talleres
            </button>
            <button
              onClick={() => setActiveTab('likes')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'likes'
                  ? 'text-[#7a7adb] border-b-2 border-[#7a7adb]'
                  : 'text-gray-500 hover:text-[#7a7adb]'
              }`}
            >
              Me Gusta
            </button>
          </div>

          {/* Contenido de las pestañas */}
          <div className="py-8">
            {activeTab === 'talleres' && (
              <div className="grid gap-6">
                <h2 className="text-2xl font-bold text-[#2d2d44]">Mis Talleres</h2>
                {joinedWorkshops.map((workshop) => (
                  <div key={workshop.id} className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg text-[#db5c8d]">{workshop.title}</h3>
                      <p className="text-gray-500 text-sm">{workshop.date} a las {workshop.time}</p>
                    </div>
                    <Link href="/calendario">
                      <button className="text-sm font-medium text-white bg-[#5ca9e6] px-5 py-2 rounded-full hover:bg-opacity-90 transition-all">
                        Ver en Calendario
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'likes' && (
              <div>
                <h2 className="text-2xl font-bold text-[#2d2d44]">Galería de Me Gusta</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {likedImages.map((image) => (
                    <div key={image.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}