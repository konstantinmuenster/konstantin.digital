import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Label } from '@/components/Label';
import { ThemeToggle } from '@/components/ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen" data-page-root>
      <Header />
      <main className="px-container mx-auto max-w-container flex-1 py-8">
        <div className="relative mb-16">
          <div className="relative mx-auto flex h-[calc(100vh-15rem)] max-h-[600px] max-w-2xl flex-col items-center justify-center">
            <h1 className="text-center">
              <span className="block font-accent text-7xl font-bold text-violet">
                Writing code,
              </span>
              <span className="block font-accent text-7xl font-bold">
                thinking product.
              </span>
            </h1>
            <p className="my-5 text-center text-xl">
              I help individuals and companies build better web applications.
              Available for freelance work in Hamburg or remote.
            </p>
            <div className="flex justify-center">
              <Label color="sun" size="lg" className="my-8 inline-block">
                Coming soon
              </Label>
            </div>
          </div>
          <ThemeToggle className="absolute bottom-0 left-0" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
