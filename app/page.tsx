import { ChallengesSection } from './_sections/Challenges';
import { CompaniesSection } from './_sections/Companies';
import { HeroSection } from './_sections/Hero';

const Home = () => {
  return (
    <main className="flex-1 py-8">
      <HeroSection />
      <CompaniesSection />
      <ChallengesSection />
    </main>
  );
};

export default Home;
