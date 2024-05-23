import { Habilidades } from "./habilidades";

export function ContainerHabilidades({ titulo }) {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mt-4 animate-slide-right">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{titulo}</h3>
      <div className="flex flex-wrap justify-center">
        <Habilidades habilidad="HTML" />
        <Habilidades habilidad="CSS" />
        <Habilidades habilidad="JavaScript" />
        <Habilidades habilidad="React" />
        <Habilidades habilidad="Wordpress" />
        <Habilidades habilidad="PHP" />
        <Habilidades habilidad="SASS" />
        <Habilidades habilidad="GIT" />
        <Habilidades habilidad="Github" />
        <Habilidades habilidad="Responsive Design" />
        <Habilidades habilidad="Terminal" />
        <Habilidades habilidad="Python" />
        <Habilidades habilidad="API" />
        <Habilidades habilidad="SQL" />
        <Habilidades habilidad="MySQL" />
      </div>
    </div>
  );
}