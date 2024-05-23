import { Titulo } from "../../general/titulo";
import { Habilidades } from "../sobre/habilidades";

export function Trayectoria() {
    return (
        <div className="relative w-full min-h-screen text-white flex items-center justify-center bg-black">
            <img
                src="https://cdn.pixabay.com/photo/2022/02/25/09/38/career-path-7033830_1280.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 container mx-auto px-4 md:px-12 xl:px-20 max-w-7xl">
                <Titulo titulo={'TRAYECTORIA'} sobre={'Aquí podréis ver en qué sitios estuve y colaboré a lo largo de mi carrera de programador'} />
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Programador Full-Stack en M-automoción</h3>
                        <h4 className="text-xl mb-2">Tiempo de estancia: 2023 Octubre - 2024 Junio</h4>
                        <p className="mb-4">En M-automoción, fui responsable del desarrollo y mantenimiento de aplicaciones web, utilizando tecnologías como Django y JavaScript para crear soluciones eficientes y escalables. Colaboré estrechamente con los equipos de diseño y producto para asegurar la mejor experiencia de usuario posible.</p>
                        <div className="flex flex-wrap">
                            <Habilidades habilidad="Django" />
                            <Habilidades habilidad="Python" />
                            <Habilidades habilidad="JavaScript" />
                            <Habilidades habilidad="HTML" />
                            <Habilidades habilidad="CSS" />
                            <Habilidades habilidad="API" />
                            <Habilidades habilidad="MySQL" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}