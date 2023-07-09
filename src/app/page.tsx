import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Home = () => {
  return (
    <div data-page-root>
      <Header />
      <main className="px-container mx-auto max-w-container py-8">
        <div className="mx-auto flex h-[calc(100vh-15rem)] max-h-[600px] max-w-2xl flex-col items-center justify-center">
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
            <Button as="a" href="/contact" className="my-8 inline-block">
              Get in touch
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
