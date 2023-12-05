import { FaUser, FaEnvelope, FaPhoneAlt, FaComment } from 'react-icons/fa';

export default function ConfirmationSection() {
  return (
    <section
      id="confirmacion"
      className="flex flex-col items-center text-center w-full pt-10 pb-16 lg:my-6 lg:max-w-6xl border-b border-gray-300 px-2">
      <h2 className="font-courgette text-4xl lg:text-5xl lg:mb-8">
        Confirmacion
      </h2>
      <p className="font-roboto text-center text-2xl text-slate-600 w-full lg:w-4/5 my-9 lg:my-14">
        Por favor, confirma si asistirás al evento para que podamos asegurarnos
        de que tengas un asiento reservado.
      </p>

      <form
        className="w-full"
        action="https://getform.io/f/f0a3d982-8e4d-4f79-9d20-167f91a918cb"
        method="POST"
        encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2 font-roboto text-black">
          <div className="flex flex-col relative">
            <label className="uppercase text-sm py-2">Nombre</label>
            {/* TODO:Añadir iconos en los imputs, deberan de cambiar de color al hacer focus.
                Revisar el diseño en escritorio y añadir sombras en los imputs al hacer focus
            */}
            <input
              placeholder="Ingrese su nombre"
              className="border-2 rounded-lg  p-3 flex border-gray-300 focus:border-[#bf8599] focus:ring-1 focus:ring-[#bf8599] focus:outline-none focus:bg-[#f9d7e4] focus:shadow-lg"
              type="text"
              name="name"
              required
            />
            <FaUser className="absolute top-[53px] right-[18px] text-gray-400 focus:text-[#bf8599]" />
          </div>
          <div className="flex flex-col relative">
            <label className="uppercase text-sm py-2">Celular</label>
            <input
              placeholder="Ingrese su celular"
              className="appearance-none border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#bf8599] focus:ring-1 focus:ring-[#bf8599] focus:outline-none focus:bg-[#f9d7e4] focus:shadow-lg"
              type="number"
              name="name"
            />
            <FaPhoneAlt className="absolute top-[53px] right-[17px] text-gray-400" />
          </div>
        </div>
        <div className="flex flex-col py-2 relative">
          <label className="uppercase text-sm py-2">Correo</label>
          <input
            placeholder="Ingrese su correo"
            className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#bf8599] focus:ring-1 focus:ring-[#bf8599] focus:outline-none focus:bg-[#f9d7e4] focus:shadow-lg"
            type="email"
            name="email"
            required
          />
          <FaEnvelope className="absolute top-[61px] right-[18px] text-gray-400" />
        </div>
        <div className="flex flex-col py-2 relative">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            placeholder="Confirme su asistencia"
            className="border-2 rounded-lg p-3 border-gray-300 resize-none focus:border-[#bf8599] focus:ring-1 focus:ring-[#bf8599] focus:outline-none focus:bg-[#f9d7e4] focus:shadow-lg"
            type="text"
            name="message"
            rows="10"
            required></textarea>
          <FaComment className="absolute top-[61px] right-[18px] text-gray-400" />
        </div>
        <button className="bg-[#f9d7e4] lg:hover:bg-[#bf8599] lg:hover:text-black mt-4 w-full p-4 rounded-lg transition-all duration-500 ease-in-out text-base font-medium lg:hover:ring-[#f9d7e4] lg:hover:ring-2 ring-2 ring-[#bf8599] lg:hover:shadow-xl">
          Confirmar Asistencia
        </button>
      </form>
    </section>
  );
}
