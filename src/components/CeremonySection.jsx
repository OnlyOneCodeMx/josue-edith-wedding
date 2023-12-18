import CardLocation from './ui/CardLocation';
import elDiamante from './../assets/elDiamante.jpeg';

export default function CeremonySection() {
  return (
    <section
      id="ceremonia"
      className="lg:px-60 max-w-sm min-h-[559px] pt-16 pb-16 lg:max-w-6xl border-b border-gray-300 text-center">
      <h2 className="font-courgette text-4xl lg:text-5xl mb-16">Ceremonia</h2>
      <CardLocation
        img={elDiamante}
        title="La Ceremonia"
        date="Viernes, 23 de Julio del 2024"
        hour="2:30 PM"
        location="Cabañas el Diamante"
        mapLink="https://maps.app.goo.gl/3gSTJXUx1BizXFx4A"
      />
    </section>
  );
}
