export default function NavList({ closeMenu, tailwindClass }) {
  return (
    <>
      <a
        onClick={closeMenu}
        href="#inicio"
        className={`${tailwindClass} bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Inicio
      </a>

      <a
        onClick={closeMenu}
        href="#nuestroDia"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Nuestro día
      </a>

      <a
        onClick={closeMenu}
        href="#nuestraHistoria"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Nuestra historia
      </a>

      <a
        onClick={closeMenu}
        href="#ceremonia"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Ceremonia
      </a>

      <a
        onClick={closeMenu}
        href="#hospedaje"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Hospedaje
      </a>
      <a
        onClick={closeMenu}
        href="#galeria"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Galería
      </a>
      <a
        onClick={closeMenu}
        target="_blank"
        rel="noreferrer"
        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51239772?_ga=2.236144514.2085329391.1688446634-758159452.16878957"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Mesa de regalos
      </a>
      <a
        onClick={closeMenu}
        href="#confirmacion"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Confirmación
      </a>
    </>
  );
}
