import { Icono } from "./iconos";

export function ContainerSocial() {
  return (
    <div className="w-full h-full bg-black bg-opacity-15 flex flex-col justify-around items-center text-4xl md:text-6xl text-white font-bold uppercase">
      <a 
        href="#sobre-mi" 
        className="hover:bg-red-600 hover:bg-opacity-50 transition duration-300 block p-4 rounded border border-white w-full text-center" 
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        Sobre mí
      </a>
      <a 
        href="#trayectoria" 
        className="hover:bg-red-600 hover:bg-opacity-50 transition duration-300 block p-4 rounded border border-white w-full text-center" 
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        Trayectoria
      </a>
      <a 
        href="#proyectos" 
        className="hover:bg-red-600 hover:bg-opacity-50 transition duration-300 block p-4 rounded border border-white w-full text-center" 
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        Proyectos
      </a>
      <a 
        href="#contacto" 
        className="hover:bg-red-600 hover:bg-opacity-50 transition duration-300 block p-4 rounded border border-white w-full text-center" 
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        Contacto
      </a>
    </div>
  );
}