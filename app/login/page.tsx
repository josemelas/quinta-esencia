'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f8f9fa] pt-20">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-bold text-[#2d2d44] titulo-quintaesencia mb-2">
            Bienvenido
          </h1>
          <p className="text-gray-500">Inicia sesión para continuar</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a7adb]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a7adb]"
            />
          </div>
          <div className="text-right -mt-2">
            <Link href="#" className="text-sm text-[#5ca9e6] hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Link href="/profile">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#2d2d44] text-white px-7 py-3 rounded-full text-[15px] font-bold hover:bg-[#1a1a2e] transition-all shadow-md cursor-pointer hover:shadow-lg active:scale-95"
            >
              Iniciar Sesión
            </button>
          </Link>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link href="/register" className="font-medium text-[#db5c8d] hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}