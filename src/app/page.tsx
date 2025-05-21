'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import VistaAbout from "./about/Page";
import VistaProyectos from "./proyects/page";

export default function Home() {
  const router = useRouter();

  const navegarAProyectos = () => {
    const seccionProyectos = document.getElementById('proyectos');
    seccionProyectos?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <div
        id="presentacion"
        tabIndex={0}
        aria-label="Sección de presentación"
        style={{
          background:
            "linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen flex items-center justify-center text-BLACK text-5xl font-bold pb-[100px]"
      >
        <div className="bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-center font-bold text-[70px]" tabIndex={0}>
            HOLA, YO SOY KEVIN HUAMAN.
          </h1>
          <div className="font-normal text-2xl md:m-[40px] md:ps-[100px] md:pe-[100px] lg:ps-[150px] xl:ps-[450px] xl:pe-[450px] text-gray-700">
            <p className="text-center mt-4" tabIndex={0}>
              Un desarrollador web junior orientado a la creación y administración de datos de páginas webs.
            </p>
          </div>
          <div id="button" className="flex justify-center align-items-center">
            <button
              onClick={navegarAProyectos}
              className="bg-[#7843e9] hover:transition text-white font-bold py-2 px-4 rounded hover:-translate-y-2 transform duration-200 ps-[70px] pe-[70px] pt-[10px] pb-[10px] text-2xl m-[10px]"
              tabIndex={0}
              aria-label="Ver proyectos"
            >
              Proyectos
            </button>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="bg-gray-100 text-black p-4 font-bold text-[16px] pt-[100px]"
        tabIndex={0}
        aria-label="Sección sobre mí"
      >
        <VistaAbout />
      </div>
      <div
        id="proyectos"
        aria-label="Sección de proyectos"
      >
        <VistaProyectos />
      </div>
    </div>
  );
}