import CountDownTimer from './CountDownTimer';
import HeroSection from './HeroSection';
import HistorySection from './HistorySection';
import CeremonySection from './CeremonySection';
import HostingSection from './HostingSection';
import GalerySection from './GalerySection';
import ConfirmationSection from './ui/ConfirmationSection';

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <CountDownTimer />
      <HistorySection />
      <CeremonySection />
      <HostingSection />
      <GalerySection />
      <ConfirmationSection />
    </main>
  );
}
