import heroImage from './../assets/3Timeline-hero.jpeg';
import josueImage from './../assets/josue.jpeg';
import edithImage from './../assets/edith.jpeg';
import corazon1 from './../assets/corazon1.png';
import Card from './ui/Card';
import { JOSUE, EDITH } from './constants';

export default function HeroSection() {
  return (
    <>
      <section className="relative h-screen w-full px-4 lg:flex lg:items-center lg:justify-center lg:py-9 md:h-full">
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center lg:bg-top brightness-50"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}></div>
        <div className=" relative z-20 max-w-6xl">
          <h1 className="text-center py-14 text-5xl md:text-6xl text-slate-100 font-courgette lg:my-36">
            ¡Contraeremos Matrimonio!
          </h1>
          <div className="flex flex-col items-center lg:flex-row">
            <Card
              name={JOSUE.name}
              lastName={JOSUE.lastName}
              image={josueImage}
              phrase={JOSUE.frase}
            />

            <img className="w-24 h-24 lg:w-32 lg:h-32" src={corazon1} alt="" />

            <Card
              name={EDITH.name}
              lastName={EDITH.lastName}
              image={edithImage}
              phrase={EDITH.frase}
              reverse
            />
          </div>
        </div>
      </section>
    </>
  );
}
