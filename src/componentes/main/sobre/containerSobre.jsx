import { About } from "./about";
import { ContainerHabilidades } from "./containerHabilidades";
import { Titulo } from "../../general/titulo";
import { Conoceme } from "./conoceme";

export function ContainerSobre() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <div className="container mx-auto px-4 py-6">
        <Titulo titulo="SOBRE MÍ" />
        <div className="flex flex-col justify-between items-center w-full">
          <Conoceme
            titulo="Así es David"
            parrafo1="Soy un <strong>Programador FullStack</strong> dedicado al desarrollo de aplicaciones Web, manejando tanto el front-end como el back-end para asegurar el éxito del producto."
            parrafo2="A lo largo de mi carrera, he adquirido múltiples habilidades en <strong>desarrollo web</strong> y me esfuerzo por perfeccionar mis conocimientos constantemente."
            parrafo3="Estoy siempre abierto a nuevas oportunidades de <strong>trabajo</strong>, dispuesto a colaborar, aprender y crecer en entornos desafiantes. Si encuentras una oportunidad que se alinea con mis habilidades, no dudes en contactarme."
          />
          <ContainerHabilidades titulo="Mis habilidades" />
        </div>
      </div>
    </div>
  );
}