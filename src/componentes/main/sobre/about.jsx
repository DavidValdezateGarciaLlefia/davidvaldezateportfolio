export function About({ titulo, sobre }) {
  return (
    <div className="text-center mb-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl mx-auto">
        {titulo}
        <span className="block h-1 bg-purple-500 " style={{ width: '30px', margin: 'auto', borderRadius: '25px', marginTop: '10px' }}></span>
      </h2>
    </div>
  );
}