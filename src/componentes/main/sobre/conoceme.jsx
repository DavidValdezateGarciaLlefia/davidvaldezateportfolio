export function Conoceme({ titulo, parrafo1, parrafo2, parrafo3 }) {
  return (
    <div className="mt-12 lg:mt-0 w-11/12 lg:w-4/5 mx-auto mb-4 text-left text-white animate-slide-left">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4">{titulo}</h3>
      <p className="mb-8 text-base md:text-lg leading-loose" dangerouslySetInnerHTML={{ __html: parrafo1 }}></p>
      <p className="mb-8 text-base md:text-lg leading-loose" dangerouslySetInnerHTML={{ __html: parrafo2 }}></p>
      <p className="mb-8 text-base md:text-lg leading-loose" dangerouslySetInnerHTML={{ __html: parrafo3 }}></p>
    </div>
  );
}