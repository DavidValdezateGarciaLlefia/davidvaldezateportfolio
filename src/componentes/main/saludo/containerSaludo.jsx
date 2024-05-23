import { ContainerSocial } from "./containerSocial";
import { Saludo } from "./saludo";

export function ContainerSaludo() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764523_1280.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative text-white p-12 w-full md:w-3/4">
          <Saludo 
            nombre="Hola, soy David Valdezate" 
            descripcion="Soy un programador web entusiasta, recientemente graduado del curso de Desarrollo de Aplicaciones Web 2 (DAW2), con habilidades sólidas en HTML, CSS, JavaScript y frameworks modernos como React.js." 
          />
        </div>
      </div>
      <div className="bg-white bg-opacity-10 w-full md:w-1/2 flex justify-center items-center p-4">
        <ContainerSocial />
      </div>
    </div>
  );
}