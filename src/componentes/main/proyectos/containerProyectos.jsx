import { Titulo } from "../../general/titulo";
import { Proyecto } from "./proyectos";

export function ContainerProyectos() {
    return (
      <div className="container mx-auto px-4 md:px-12 xl:px-20 max-w-7xl my-12 md:my-20">
        <Titulo titulo="PROYECTOS" sobre="Aquí podréis ver unos proyectos que he hecho yo y sus respectivas páginas." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-12">
          <Proyecto 
            imagen="https://i.imgur.com/gj6tGBt.png" 
            titulo="Tetris" 
            parrafo="Este proyecto revivifica el clásico juego de Tetris, creado originalmente en 1984, adaptándolo para la web. La implementación hace uso intensivo de JavaScript, empleando técnicas avanzadas de manejo de arrays y una integración con bases de datos para guardar puntuaciones y configuraciones de usuario, lo que permite una experiencia interactiva y dinámica en la web."
            link="https://davidvaldezategarciallefia.github.io/DavidValdezateGarciaM6H7TetrisFinal/"
          />
          <Proyecto 
            imagen="https://i.imgur.com/iIdNhah.png" 
            titulo="Incidencias" 
            parrafo="Este proyecto desarrolla una solución web para la gestión de incidencias informáticas en un entorno educativo. Utilizando técnicas de manipulación del DOM y delegación de eventos en JavaScript, el sistema permite una gestión de roles diferenciada para personalizar la experiencia del usuario según sus permisos. Se integra además con una base de datos para el almacenamiento eficiente de las incidencias reportadas."
            link="https://davidvaldezate2324dawm6projectegestioinc.onrender.com"
          />
          <Proyecto 
            imagen="https://i.imgur.com/N00oOXc.png" 
            titulo="Vanilla" 
            parrafo="VanillaGames es un proyecto académico que facilita la visualización y gestión de proyectos estudiantiles. El sistema, desarrollado con JavaScript puro, implementa funciones avanzadas para la interacción con bases de datos y la administración de contenido, promoviendo una plataforma colaborativa y educativa para los estudiantes."
            link="https://davidvaldezategarciallefia.github.io/m9ValdezateVanillaMain/index"
          />
          <Proyecto 
            imagen="https://i.imgur.com/0ORyCS8.png" 
            titulo="Memory" 
            parrafo="Este juego interactivo de memoria utiliza cartas de Pokémon obtenidas a través de la PokeApi. Desarrollado con el framework React, el proyecto explora técnicas avanzadas como el uso de fetch para consumir APIs y la integración con bases de datos no locales mediante Supabase, ofreciendo una experiencia de juego moderna y responsive."
            link="https://david-valdezate-da-wm6-projecte-memory-v1.vercel.app"
          />
        </div>
      </div>
    );
}
