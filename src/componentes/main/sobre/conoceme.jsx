export function Conoceme({ titulo, parrafo1, parrafo2, parrafo3, imageUrl }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full">
      <div className="md:w-1/2 p-4 md:order-1">
        <img src={imageUrl} alt="David" className="rounded-lg shadow-lg mx-auto w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-4 md:order-2 text-white">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{titulo}</h3>
        <p className="mb-8 text-base md:text-lg leading-loose" dangerouslySetInnerHTML={{ __html: parrafo1 }}></p>
        <p className="mb-8 text-base md:text-lg leading-loose" dangerouslySetInnerHTML={{ __html: parrafo2 }}></p>
        <p className="mb-8 text-base md:text-lg leading-loose" dangerouslySetInnerHTML={{ __html: parrafo3 }}></p>
      </div>
    </div>
  );
}
