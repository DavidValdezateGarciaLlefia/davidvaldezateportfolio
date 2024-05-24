import { useState } from "react";
import { Avatar } from "./avatar";
import { ListaMenu } from "./menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full shadow-xl bg-black border-gray-200 px-4 py-2.5 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Avatar avatar={"https://i.imgur.com/X82wxBu.png"} nombre={"DAVID VALDEZATE"} />

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 mt-4 bg-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:bg-transparent">
            <ListaMenu palabraMenu={"HOME"} href="#saludodiv" />
            <ListaMenu palabraMenu={"SOBRE MI"} href="#sobre-mi" />
            <ListaMenu palabraMenu={"TRAYECTORIA"} href="#trayectoria" />
            <ListaMenu palabraMenu={"PROYECTOS"} href="#proyectos" />
            <ListaMenu palabraMenu={"CONTACTO"} href="#contacto" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
