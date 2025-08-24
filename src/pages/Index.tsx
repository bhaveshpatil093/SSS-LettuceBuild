
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import InteractiveForestSection from '@/components/InteractiveForestSection';
import ScratchSection from '@/components/ScratchSection';
import ScheduleSection from '@/components/ScheduleSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ScratchSection />
      <ChallengeSection />
      <InteractiveForestSection />
      <ScheduleSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
