export function Titulo({ titulo, sobre }) {
  return (
    <div className="text-center mb-10 px-4 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        {titulo}
       
      </h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg">{sobre}</p>
    </div>
  );
}