import CountDownTimer from './CountDownTimer';
import HeroSection from './HeroSection';
import HistorySection from './HistorySection';
import CeremonySection from './CeremonySection';

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <CountDownTimer />
      <HistorySection />
      <CeremonySection />
    </main>
  );
}
