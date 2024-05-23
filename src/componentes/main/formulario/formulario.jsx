import { Titulo } from "../../general/titulo";
import { BotonGeneral } from "../../general/botonGen";


export function Formulario() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <img
        src="https://cdn.pixabay.com/photo/2015/11/26/07/47/hands-1063442_1280.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 container mx-auto px-4 md:px-12 xl:px-20 max-w-7xl text-white">
        <Titulo titulo="CONTACTO" sobre="Si te ha gustado mi perfil, y quieres colaborar conmigo, aquí tienes las maneras para poder contactarme." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img src="https://www.svgrepo.com/show/380067/phone-call.svg" alt="Teléfono" className="w-16 h-16 mb-4 filter invert animate-float" />
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Teléfono</h3>
              <p className="text-lg">+34 624 637 904</p>
            </div>
          </div>
          <div className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img src="https://www.svgrepo.com/show/501544/email.svg" alt="Correo Electrónico" className="w-16 h-16 mb-4 filter invert animate-float" />
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Correo Electrónico</h3>
              <p className="text-lg">davidvaldezategarcia2004@gmail.com</p>
            </div>
          </div>
          <div className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img src="https://www.svgrepo.com/show/521725/linkedin.svg" alt="LinkedIn" className="w-16 h-16 mb-4 filter invert animate-float" />
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
              <BotonGeneral nombre="Visita mi LinkedIn" link="https://www.linkedin.com/in/david-valdezate-garcía-ab8a1724b/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
