export default function Card({ name, lastName, image, phrase, reverse }) {
  return (
    <div className=" shadow-2xl relative flex flex-col items-center w-full max-w-md h-[266px] lg:h-80 bg-gray-50 lg:max-w-full">
      <div
        className={`flex w-full items-center justify-around ${
          reverse ? 'flex-row-reverse' : 'flex-row'
        }`}>
        <div
          className={`text-center justify-around w-full px-5 py-5 border-b border-gray-300 ${
            reverse ? ' pr-5' : 'pl-5'
          }`}>
          <h2 className="text-2xl md:text-4xl font-courgette text-[#bf8599]">
            {name}
          </h2>
          <p className="text-base md:text-xl text-slate-600 font-roboto">
            {lastName}
          </p>
        </div>
        <img
          className={`h-28 w-28 md:h-32 md:w-32 rounded-full ring-2 ring-white mt-5 ${
            reverse ? 'ml-5' : 'mr-5'
          }`}
          src={image}
          alt={`Imagen de ${name}`}
        />
      </div>
      <div className="px-5 py-5">
        <p className="text-base lg:text-xl text-slate-600 font-roboto">
          {phrase}
        </p>
      </div>
    </div>
  );
}
