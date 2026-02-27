"use client";
import React, { useState } from 'react';

const datosTalleres: any = {
  AGOSTO: [
    { id: 1, dia: 6, nombre: 'SÁBADO', titulo: 'Pinta tu taza en cerámica', color: 'bg-[#a366ab]', hex: '#a366ab', hora: '6:00 PM - 8:00 PM', instructor: 'ROCIO CAMPA', descripcion: 'PIEZA DE CERÁMICA, GUÍA PASO A PASO, PINCELES, PIGMENTOS ILIMITADOS, QUEMA FINAL DE LA PIEZA, SNACKS Y BEBIDAS.' },
    { id: 2, dia: 13, nombre: 'SÁBADO', titulo: 'Pinta tu regalo para papá', color: 'bg-[#a366ab]', hex: '#a366ab', hora: '6:00 PM - 8:00 PM', instructor: 'ARTISTA INVITADO', descripcion: 'MATERIALES INCLUIDOS PARA CREAR UN REGALO ÚNICO Y ESPECIAL.' },
    { id: 3, dia: 18, nombre: 'JUEVES', titulo: 'Teje tu portavasos en crochet', color: 'bg-[#f29278]', hex: '#f29278', hora: '5:00 PM - 7:00 PM', instructor: 'MARÍA LÓPEZ', descripcion: 'APRENDE PUNTOS BÁSICOS Y LLÉVATE TU SET DE PORTAVASOS.' },
    { id: 4, dia: 28, nombre: 'DOMINGO', titulo: 'Introducción al dibujo', color: 'bg-[#db5c8d]', hex: '#db5c8d', hora: '10:00 AM - 1:00 PM', instructor: 'CARLOS RUIZ', descripcion: 'DOMINA LAS LUCES Y SOMBRAS CON CARBONCILLO.' },
  ],
  SEPTIEMBRE: [
    { id: 5, dia: 12, nombre: 'VIERNES', titulo: 'Fotografía de Paisaje Urbano', color: 'bg-[#5ca9e6]', hex: '#5ca9e6', hora: '4:00 PM - 7:00 PM', instructor: 'JOSE MELAS', descripcion: 'DOMINA LA COMPOSICIÓN Y LA LUZ NATURAL EN ENTORNOS URBANOS. INCLUYE RECORRIDO Y EDICIÓN BÁSICA.' },
  ]
};

const meses = ["AGOSTO", "SEPTIEMBRE"];

export default function CalendarioPage() {
  const [mesActualIndex, setMesActualIndex] = useState(0);
  const [tallerSeleccionado, setTallerSeleccionado] = useState<any>(null);

  const mesNombre = meses[mesActualIndex];
  const talleresDelMes = datosTalleres[mesNombre] || [];

  const cambiarMes = (direccion: number) => {
    setTallerSeleccionado(null);
    setMesActualIndex((prev) => {
      if (direccion === 1) return (prev + 1) % meses.length;
      return prev === 0 ? meses.length - 1 : prev - 1;
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#e2e4e7] px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Título del Mes */}
        <div className="flex items-center justify-center gap-12 mb-16">
          <button onClick={() => cambiarMes(-1)} className="text-4xl font-black text-[#2d2d44] hover:scale-125 transition">❮</button>
          <h1 className="text-6xl font-black text-[#2d2d44] tracking-[0.3em] uppercase italic">{mesNombre}</h1>
          <button onClick={() => cambiarMes(1)} className="text-4xl font-black text-[#2d2d44] hover:scale-125 transition">❯</button>
        </div>

        {/* Contenedor Principal con items-center para centrar la descripción */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* CALENDARIO */}
          <div className="w-full lg:w-[60%] grid grid-cols-7 gap-3">
            {Array.from({ length: 28 }, (_, i) => i + 1).map((dia) => {
              const taller = talleresDelMes.find((t: any) => t.dia === dia);
              const esSeleccionado = tallerSeleccionado?.id === taller?.id;
              
              return (
                <div 
                  key={dia} 
                  onClick={() => taller && setTallerSeleccionado(taller)}
                  className={`h-32 rounded-[25px] p-4 flex flex-col cursor-pointer transition-all duration-300 ${
                    taller 
                      ? `${taller.color} text-white shadow-lg ${esSeleccionado ? 'scale-105 ring-4 ring-white' : 'opacity-90 hover:opacity-100'}` 
                      : 'bg-white text-[#2d2d44] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="uppercase text-[10px] font-black tracking-tighter opacity-70">
                      {dia % 7 === 1 ? 'Lunes' : dia % 7 === 2 ? 'Martes' : dia % 7 === 3 ? 'Miércoles' : dia % 7 === 4 ? 'Jueves' : dia % 7 === 5 ? 'Viernes' : dia % 7 === 6 ? 'Sábado' : 'Domingo'}
                    </span>
                    <span className="text-2xl font-black">{dia < 10 ? `0${dia}` : dia}</span>
                  </div>
                  {taller && (
                    <div className="mt-auto">
                      <p className="text-[11px] font-bold leading-tight line-clamp-2 italic mb-1 uppercase">{taller.titulo}</p>
                      <span className="bg-black/20 text-[9px] uppercase font-bold py-0.5 px-2 rounded w-fit">Taller</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* DETALLES CENTRADOS */}
          <div className="w-full lg:w-[40%] flex items-center justify-center min-h-[400px]"> 
            {tallerSeleccionado ? (
              <div className="animate-in fade-in zoom-in-95 duration-500 w-full">
                <h2 className="text-5xl font-black uppercase leading-tight mb-8 italic" style={{ color: tallerSeleccionado.hex }}>
                  TALLER {tallerSeleccionado.titulo}
                </h2>
                
                <div className="space-y-6 text-[#2d2d44] font-bold tracking-[0.15em] uppercase text-sm">
                  <p>{tallerSeleccionado.nombre} {tallerSeleccionado.dia} DE {mesNombre}</p>
                  <p>{tallerSeleccionado.hora}</p>
                  <p className="text-xs leading-relaxed opacity-70 font-bold tracking-widest">{tallerSeleccionado.descripcion}</p>
                  
                  <div className="pt-6 border-t border-gray-400">
                    <p className="text-xs">IMPARTIDO POR: <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:opacity-60">{tallerSeleccionado.instructor}</span></p>
                  </div>
                </div>

                <button 
                  className="mt-12 w-full text-white py-5 rounded-[25px] font-black text-xl transition-all uppercase shadow-2xl hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: tallerSeleccionado.hex }}
                >
                  Inscribirse
                </button>
              </div>
            ) : (
              <div className="text-[#2d2d44] text-center lg:text-left">
                <h2 className="text-4xl font-black uppercase mb-8 italic leading-tight">SELECCIONA TU PRÓXIMO TALLER</h2>
                <p className="text-sm font-bold opacity-60 leading-relaxed uppercase tracking-[0.2em]">
                  Explora nuestras experiencias creativas de {mesNombre}. Selecciona un día marcado para ver los detalles.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}