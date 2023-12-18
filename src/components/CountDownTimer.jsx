import useCountdown from './ui/useCountDown';

export default function CountDownTimer() {
  const targetDate = '2024-07-23'; // Cambia esto a la fecha de tu boda
  const timeLeft = useCountdown(targetDate);

  return (
    <section
      id="nuestroDia"
      className="flex flex-col text-center max-w-sm pt-10 pb-16 mt-16 lg:max-w-6xl border-b border-gray-300">
      <h2 className="font-courgette text-4xl lg:text-5xl">
        Viernes, 23 de <span className="text-[#bf8599]">Julio</span> <br />
        2024
      </h2>
      <div className="flex gap-1 items-center text-slate-100 my-10 text-xl lg:text-3xl">
        <div className=" flex flex-col justify-center gap-1 w-full bg-[#bf8599] h-20 font-roboto">
          {timeLeft.days}
          <h3 className=" text-xs lg:text-base">DIAS</h3>
        </div>
        <div className=" flex flex-col justify-center gap-1 w-full bg-[#bf8599] h-20 font-roboto">
          {timeLeft.hours}
          <h3 className=" text-xs lg:text-base">HORAS</h3>
        </div>
        <div className=" flex flex-col justify-center gap-1 w-full bg-[#bf8599] h-20 font-roboto">
          {timeLeft.minutes}
          <h3 className=" text-xs lg:text-base">MINUTOS</h3>
        </div>
        <div className=" flex flex-col justify-center gap-1 w-full bg-[#bf8599] h-20 font-roboto">
          {timeLeft.seconds}
          <h3 className=" text-xs lg:text-base">SEGUNDOS</h3>
        </div>
      </div>
      <p className="a text-lg font-roboto text-slate-600 lg:text-2xl lg:px-28 px-4">
        Siempre soñamos con encontrar a la persona ideal y ese sueño se ha hecho
        realidad, el amor nació entre nosotros y ha crecido día a día; por eso,
        queremos unirnos en matrimonio para vivir felices toda la vida.
      </p>
    </section>
  );
}
