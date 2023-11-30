import CountDownTimer from './CountDownTimer';
import HeroSection from './HeroSection';
import HistorySection from './HistorySection';

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <CountDownTimer />
      <HistorySection />
    </main>
  );
}
