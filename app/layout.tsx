import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importamos el Navbar que creamos en la carpeta de components
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quintaesencia | Centro Artístico",
  description: "Un espacio creado para el arte, la creatividad y la conexión auténtica. Experiencias creativas y galería virtual.",
  keywords: ["arte", "talleres", "galería", "creatividad", "artistas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Cambiamos lang="en" por lang="es"
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 3. Colocamos el Navbar aquí para que sea global */}
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}