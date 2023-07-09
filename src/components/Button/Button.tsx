import { useMemo, type ComponentProps, type FC, type ReactNode } from 'react';

import Link, { LinkProps } from 'next/link';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'rounded-full px-[20px] py-[10px]',
  variants: {
    variant: {
      accent: 'bg-blue-500 text-white',
      primary: 'bg-black text-white',
      secondary: 'bg-purple-500 text-white',
      text: 'group relative rounded-md bg-transparent p-[10px] text-black',
    },
    size: {
      sm: 'text-base font-normal',
      md: 'text-lg font-medium',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof button>;

type CommonButtonProps = ButtonVariants & {
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = { as: 'a' } & CommonButtonProps & Omit<LinkProps, 'as'>;
type ActionButtonProps = { as: 'button' } & CommonButtonProps &
  ComponentProps<'button'>;

type ButtonProps = ActionButtonProps | LinkButtonProps;

export const Button: FC<ButtonProps> = props => {
  // We can't descructure all the props here because of
  // https://stackoverflow.com/questions/69023997/typescript-discriminated-union-narrowing-not-working
  const { variant, children } = props;

  const combinedChildren = useMemo(() => {
    return (
      <>
        {children}
        {variant === 'text' && (
          <span className="absolute bottom-0 left-[50%] h-1 w-1 rounded-[1px] bg-violet opacity-0 transition-all group-hover:opacity-100" />
        )}
      </>
    );
  }, [children, variant]);

  if (props.as === 'a') {
    const { size, variant, className, ...rest } = props;
    return (
      <Link
        role="button"
        className={button({ size, variant, className })}
        {...rest}
      >
        {combinedChildren}
      </Link>
    );
  }

  if (props.as === 'button') {
    const { size, variant, className, ...rest } = props;
    return (
      <button className={button({ size, variant, className })} {...rest}>
        {combinedChildren}
      </button>
    );
  }

  throw new Error('Invalid button type');
};
