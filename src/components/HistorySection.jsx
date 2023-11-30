import HistoryCard from './ui/HistoryCard';
import firstTimeline from './../assets/1Timeline.jpeg';
import secondTimeline from './../assets/2Timeline.jpeg';
import thirdTimeline from './../assets/3Timeline-hero.jpeg';
export default function HistorySection() {
  return (
    <section className="flex flex-col items-center text-center w-96 pt-10 pb-16 lg:my-12 lg:max-w-6xl border-b border-gray-300 min-w-max">
      <h2 className="font-courgette text-4xl lg:text-5xl mb-12">
        Nuestra historia
      </h2>
      <div>
        <HistoryCard
          img={firstTimeline}
          altImg="Josue y Edith primera cita en un bosque"
          month="Feb"
          year="2020"
          title="La primera cita"
          description="Decidimos iniciar una aventura juntos."
        />
        <HistoryCard
          img={secondTimeline}
          altImg="Josue y Edith en una cita juntos en un restaurante"
          month="Nov"
          year="2021"
          title="La aventura continuó..."
          description="Nos fuimos conociendo mejor, continuamos esta aventura hasta donde nos lleve nuestro corazón."
          reverse
        />
        <HistoryCard
          img={thirdTimeline}
          altImg="las manos de Josue y Edith juntas mostrando el anillo y reloj de compromiso"
          month="Sep"
          year="2022"
          title="!Dijo que si!"
          description="Ahora comenzamos una nueva etapa de nuestra vida."
        />
      </div>
    </section>
  );
}
