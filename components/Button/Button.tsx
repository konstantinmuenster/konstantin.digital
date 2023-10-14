import { useMemo, type ComponentProps, type FC, type ReactNode } from 'react';

import Link, { LinkProps as NextLinkProps } from 'next/link';
import { VariantProps, tv } from 'tailwind-variants';

import { isInternal } from '@/utils/isInternal';

const button = tv({
  base: 'focus-default inline-block flex-shrink-0 cursor-pointer rounded-full px-[20px] py-[10px] !font-medium transition-colors',
  variants: {
    variant: {
      primary: 'bg-black text-white dark:bg-white dark:text-black',
      secondary: 'bg-purple-500 text-white',
      text: 'group relative rounded-md bg-transparent p-[10px] text-black dark:text-white',
      gray: 'bg-black-200 text-black hover:bg-black-300 dark:bg-black-800 dark:text-white hover:dark:bg-black-700',
      label: '!px-4 !py-2 hover:bg-black-200 dark:hover:bg-black-800',
    },
    size: {
      sm: 'text-base font-normal',
      md: 'text-lg font-normal',
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

type LinkButtonProps = { as: 'a' } & CommonButtonProps & ComponentProps<'a'>;

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

  const isInternalLink = props.as === 'a' && isInternal(props.href);

  if (props.as === 'a' && isInternalLink) {
    const { size, variant, className, as, ...rest } = props;
    return (
      <Link
        role="button"
        className={button({ size, variant, className })}
        {...(rest as NextLinkProps<{}>)}
      >
        {combinedChildren}
      </Link>
    );
  }

  if (props.as === 'a' && !isInternalLink) {
    const { size, variant, className, as, ...rest } = props;
    return (
      <a
        role="button"
        className={button({ size, variant, className })}
        {...rest}
      >
        {combinedChildren}
      </a>
    );
  }

  if (props.as === 'button') {
    const { size, variant, className, as, ...rest } = props;
    return (
      <button className={button({ size, variant, className })} {...rest}>
        {combinedChildren}
      </button>
    );
  }

  throw new Error('Invalid button type');
};
