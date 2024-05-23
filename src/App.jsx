import { Navbar } from './componentes/header/navbar';
import './App.css';
import { ContainerSaludo } from './componentes/main/saludo/containerSaludo';
import { ContainerSobre } from './componentes/main/sobre/containerSobre';
import { ContainerProyectos } from './componentes/main/proyectos/containerProyectos';
import { Formulario } from './componentes/main/formulario/formulario';
import { Footer } from './componentes/footer/footer';
import { Trayectoria } from './componentes/main/trayectoria/trayectoria';

function App() {
  return (
    <div className="bg-black w-full overflow-x-hidden">
      <Navbar />
      <div id="saludo" className="w-full"><ContainerSaludo /></div>
      <div id="sobre-mi" className="w-full"><ContainerSobre /></div>
      <div id="trayectoria" className="w-full"><Trayectoria /></div>
      <div id="proyectos" className="w-full mt-20 mb-20"><ContainerProyectos /></div>
      <div id="contacto" className="w-full"><Formulario /></div>
      <Footer
        titulo="David Valdezate"
        parrafo="Programador full-stack que hace aplicaciones web que suelen llevar al éxito del producto final en general."
      />
    </div>
  );
}

export default App;