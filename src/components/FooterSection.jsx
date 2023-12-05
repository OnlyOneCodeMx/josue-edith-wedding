import footerImg from './../assets/footer.jpeg';
export default function Footer() {
  return (
    <footer className="relative h-[450px] w-screen flex flex-col items-center justify-center">
      <div
        className="absolute md:bg-top z-0 bg-cover bg-center h-full w-full lg:bg-top flex items-center justify-center brightness-75 max-w-5xl"
        style={{ backgroundImage: `url(${footerImg})` }}></div>
      <h2 className="font-courgette text-5xl md:text-6xl text-white z-10 ">
        ¡Te esperamos!
      </h2>
    </footer>
  );
}
