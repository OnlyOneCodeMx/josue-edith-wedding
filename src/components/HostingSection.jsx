import CardLocation from './ui/CardLocation';
import elDiamante from './../assets/elDiamante.jpeg';
import laCabaña from './../assets/laCabaña.jpeg';
import hotelReal from './../assets/hotelReal.jpeg';
export default function CeremonySection() {
  return (
    <section
      id="hospedaje"
      className="min-h-[559px] max-w-sm pt-16 pb-16 lg:max-w-6xl border-b border-gray-300 text-center">
      <h2 className="font-courgette text-4xl lg:text-5xl mb-12">Hospedaje</h2>
      <div className="flex flex-col lg:flex-row lg:gap-5 gap-5">
        <CardLocation
          img={elDiamante}
          title="Cabañas el Diamante"
          phone="9191149889"
          location="Carretera Jitotol-Soyalo, 29761 Jitotol"
          mapLink="https://maps.app.goo.gl/3gSTJXUx1BizXFx4A"
          cardSmall
        />

        <CardLocation
          img={laCabaña}
          title="La Cabaña"
          phone="9616687296"
          location="Carretera Jitotol-Soyalo, 29761 Jitotol"
          mapLink="https://maps.app.goo.gl/tb7SPZzgr2YtUMyP6"
          cardSmall
        />

        <CardLocation
          img={hotelReal}
          title="Hotel Real Turqueza"
          phone="9191475089"
          location="Primera ote s/n, Sta Teresa, 29760 Jitotol"
          mapLink="https://maps.app.goo.gl/Yo7FMbqyQ7JQtwg19"
          cardSmall
        />
      </div>
    </section>
  );
}
