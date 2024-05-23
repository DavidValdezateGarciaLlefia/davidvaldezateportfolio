export function Footer({ titulo, parrafo }) {
    return (
      <footer className="bg-black text-white w-full pt-10 pb-10">
        <div className=" pt-12 mx-auto max-w-6xl"> 
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col items-center md:items-start mb-8"> 
              <h1 className="text-2xl font-bold mb-6">{titulo}</h1> 
              <p className="w-full md:w-3/4 text-center md:text-left text-sm">{parrafo}</p>
            </div>
            <div className="flex flex-col items-center md:items-start mb-8"> 
              
              
            </div>
          </div>
        </div>
        <div className="text-xs py-4 text-center border-t border-gray-600 max-w-6xl mx-auto"> 
          <p className="mt-10">© Copyright 2024. Made by {titulo}</p>
        </div>
      </footer>
    );
  }
  