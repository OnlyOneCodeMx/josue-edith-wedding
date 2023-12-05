export default function NavList({ tailwindClass }) {
  return (
    <>
      <a
        href="#inicio"
        className={`${tailwindClass} bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Inicio
      </a>

      <a
        href="#nuestroDia"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Nuestro día
      </a>

      <a
        href="#nuestraHistoria"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Nuestra historia
      </a>

      <a
        href="#ceremonia"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Ceremonia
      </a>

      <a
        href="#hospedaje"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Hospedaje
      </a>
      <a
        href="#galeria"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Galería
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51239772?_ga=2.236144514.2085329391.1688446634-758159452.16878957"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Mesa de regalos
      </a>
      <a
        href="#confirmacion"
        className={`${tailwindClass} text-slate-950 hover:bg-[#f9d7e4] hover:text-black px-3 py-2 rounded-md font-medium transition-all duration-500 ease-in-out`}>
        Confirmación
      </a>
    </>
  );
}
