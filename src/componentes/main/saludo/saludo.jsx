import { Boton } from "../../general/boton";

export function Saludo({ nombre, descripcion }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold">{nombre}</h1>
      <p className="mt-6 text-xl md:text-2xl">{descripcion}</p>
    </div>
  );
}