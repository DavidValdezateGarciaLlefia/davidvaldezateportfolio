import { Titulo } from "../../general/titulo";
import { Proyecto } from "./proyectos";

export function ContainerProyectos() {
    return (
      <div className="container mx-auto px-4 md:px-12 xl:px-20 max-w-7xl">
        <Titulo titulo="PROYECTOS" sobre="Aquí podréis ver unos proyectos que he hecho yo y sus respectivas páginas." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Proyecto 
            imagen="https://i.imgur.com/gj6tGBt.png" 
            titulo="Tetris" 
            parrafo="El conocido juego de Tetris fue creado en 1984 y ha sido llevado a muchas plataformas, y aquí hay otro más pero para página web."
            link="https://davidvaldezategarciallefia.github.io/DavidValdezateGarciaM6H7TetrisFinal/"
          />
          <Proyecto 
            imagen="https://i.imgur.com/iIdNhah.png" 
            titulo="Incidencias" 
            parrafo="El propósito de este proyecto es recrear una página web para incidencias por roles para un colegio, y sus ordenadores."
            link="https://davidvaldezate2324dawm6projectegestioinc.onrender.com"
          />
          <Proyecto 
            imagen="https://i.imgur.com/N00oOXc.png" 
            titulo="Vanilla" 
            parrafo="VanillaGames es un proyecto creado para clase, el cual este tiene para ver proyectos creados por alumnos."
            link="https://davidvaldezategarciallefia.github.io/m9ValdezateVanillaMain/index"
          />
          <Proyecto 
            imagen="https://i.imgur.com/0ORyCS8.png" 
            titulo="Memory" 
            parrafo="Aquí hay un juego de memory con cartas de pokémon obtenidas a través de la API: PokeApi."
            link="https://david-valdezate-da-wm6-projecte-memory-v1.vercel.app"
          />
        </div>
      </div>
    );
  }