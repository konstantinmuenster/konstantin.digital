// import { navigation } from '@/config/navigation.config';
import { Button } from '../Button';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="px-container relative mx-auto flex max-w-container justify-between gap-8 py-5">
      <Logo iconRotated textHidden />
      <nav className="flex items-center gap-12">
        {/* {navigation.slice(1).map(({ name, href }) => {
          return (
            <Button as="a" variant="text" href={href} key={href}>
              {name}
            </Button>
          );
        })} */}
        <div className="fixed right-[4.25rem] top-[1.75rem]">
          <Button as="a" href="/contact" size="sm">
            hey@konstantin.digital
          </Button>
        </div>
      </nav>
    </header>
  );
};
