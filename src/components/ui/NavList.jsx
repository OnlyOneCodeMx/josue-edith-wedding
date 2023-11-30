export default function NavList({ tailwindClass }) {
  return (
    <>
      <a
        href="#"
        className={`${tailwindClass} hover:bg-[#85BFAB] text-white px-3 py-2 rounded-md font-medium`}>
        Inicio
      </a>

      <a
        href="#nuestroDia"
        className={`${tailwindClass} text-black hover:bg-[#85BFAB] hover:text-black px-3 py-2 rounded-md font-medium`}>
        Nuestro día
      </a>

      <a
        href="#nuestraHistoria"
        className={`${tailwindClass} text-black hover:bg-[#85BFAB] hover:text-black px-3 py-2 rounded-md font-medium`}>
        Nuestra historia
      </a>

      <a
        href="#ceremonia"
        className={`${tailwindClass} text-black hover:bg-[#85BFAB] hover:text-black px-3 py-2 rounded-md font-medium`}>
        Ceremonia
      </a>

      <a
        href="#hospedaje"
        className={`${tailwindClass} text-black hover:bg-[#85BFAB] hover:text-black px-3 py-2 rounded-md font-medium`}>
        Hospedaje
      </a>
      <a
        href="#galeria"
        className={`${tailwindClass} text-black hover:bg-[#85BFAB] hover:text-black px-3 py-2 rounded-md font-medium`}>
        Galería
      </a>
      <a
        href="#regalos"
        className={`${tailwindClass} text-black hover:bg-[#85BFAB] hover:text-black px-3 py-2 rounded-md font-medium`}>
        Mesa de regalos
      </a>
      <a
        href="#"
        className={`${tailwindClass} text-black hover:bg-[#85BFAB] hover:text-black px-3 py-2 rounded-md font-medium`}>
        Confirmación
      </a>
    </>
  );
}
