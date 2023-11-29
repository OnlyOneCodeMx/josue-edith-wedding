import CountDownTimer from './CountDownTimer';
import HeroSection from './HeroSection';

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <CountDownTimer />
    </main>
  );
}
