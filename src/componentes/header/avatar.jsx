export function Avatar({ avatar, nombre }) {
    return (
      <a href="#" className="flex items-center space-x-3">
        <img src={avatar} className="w-[40px] md:w-[50px]" alt="Avatar" />
        <span className="self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white">
          {nombre}
        </span>
      </a>
    );
  }