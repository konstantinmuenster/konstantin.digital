import { AboutSection } from './_sections/About';
import { CTASection } from './_sections/CTA';
import { ChallengesSection } from './_sections/Challenges';
import { CompaniesSection } from './_sections/Companies';
import { HeroSection } from './_sections/Hero';
import { ServicesSection } from './_sections/Services';

const Home = () => {
  return (
    <main className="py-8">
      <HeroSection />
      <CompaniesSection />
      <ChallengesSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
};

export default Home;
