import { BotonGeneral } from "../../general/botonGen"


export function Proyecto({ imagen, titulo, parrafo, link }) {
    return (
      <div className="relative group">
        <img className="w-full h-[450px] max-w-[400] max-h-[500px] shadow-xl" src={imagen} alt="Project Thumbnail" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-center p-8">
          <h3 className="text-3xl font-bold mb-4 text-white">{titulo}</h3>
          <p className="text-base text-white mb-6">{parrafo}</p>
          <BotonGeneral nombre="ACCEDE" link={link} />
        </div>
      </div>
    );
  }