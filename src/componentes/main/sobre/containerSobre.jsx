import { About } from "./about";
import { ContainerHabilidades } from "./containerHabilidades";
import { Titulo } from "../../general/titulo";
import { Conoceme } from "./conoceme";

export function ContainerSobre() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <div className="container mx-auto px-4 py-6">
        <Titulo titulo="SOBRE MÍ" />
        <div className="flex flex-col justify-between items-center w-full text-white">
        <Conoceme
  titulo="Perfil Profesional de David"
  parrafo1="Soy un <strong>Desarrollador FullStack</strong> comprometido con la creación de aplicaciones web robustas, manejando con destreza tanto el frontend como el backend para garantizar la excelencia y funcionalidad del producto final."
  parrafo2="Durante mi carrera profesional, he consolidado una amplia gama de habilidades técnicas en <strong>desarrollo web</strong>, lo cual me permite adaptarme y contribuir eficazmente en diversos proyectos tecnológicos."
  parrafo3="Estoy continuamente en búsqueda de oportunidades para <strong>trabajar</strong> que me permitan colaborar en entornos estimulantes, aprender nuevas tecnologías y contribuir al éxito de iniciativas ambiciosas. Si tienes una oportunidad que se ajusta a mi perfil, estaré encantado de explorar cómo podemos colaborar."
  imageUrl="https://i.imgur.com/X82wxBu.png"
/>
          <ContainerHabilidades titulo="Mis habilidades" />
        </div>
      </div>
    </div>
  );
}
