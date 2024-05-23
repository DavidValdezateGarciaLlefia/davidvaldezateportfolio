export function ListaMenu({ palabraMenu, href }) {
  return (
    <li>
      <a href={href} className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">
        {palabraMenu}
      </a>
    </li>
  );
}