
export function BotonGeneral({ nombre, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 transform hover:scale-105">
        {nombre}
      </button>
    </a>
  );
}