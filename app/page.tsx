import { AboutSection } from './_sections/About';
import { CTASection } from './_sections/CTA';
import { ChallengesSection } from './_sections/Challenges';
import { CompaniesSection } from './_sections/Companies';
import { HeroSection } from './_sections/Hero';
import { ReviewsSection } from './_sections/Reviews';
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
      <ReviewsSection />
    </main>
  );
};

export default Home;
