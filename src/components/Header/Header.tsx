// import { navigation } from '@/config/navigation.config';
import { Button } from '../Button';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="px-container mx-auto flex max-w-container justify-between gap-8 py-8">
      <Logo iconRotated textHidden />
      <nav className="flex items-center gap-12">
        {/* {navigation.slice(1).map(({ name, href }) => {
          return (
            <Button as="a" variant="text" href={href} key={href}>
              {name}
            </Button>
          );
        })} */}
        <Button as="a" href="/contact" size="sm">
          hey@konstantin.digital
        </Button>
      </nav>
    </header>
  );
};
