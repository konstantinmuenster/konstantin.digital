import { ComponentProps, FC } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const label = tv({
  base: 'rounded-full font-bold',
  variants: {
    color: {
      violet:
        'bg-[#E9D9FF] text-[#9D68E9] dark:bg-[#1B0040] dark:text-[#AC7EEC]',
      mint: 'bg-[#DAFFF4] text-[#65C8AA] dark:bg-[#003F2C] dark:text-[#77CEB4]',
      sun: 'bg-[#FFF0B2] text-[#ECBC00] dark:bg-[#665200] dark:text-[#FFCD06]',
    },
    size: {
      md: 'px-[10px] py-[5px] text-sm',
      lg: 'px-[16px] py-[8px] text-base',
    },
  },
  defaultVariants: {
    color: 'violet',
    size: 'md',
  },
});

type LabelVariants = VariantProps<typeof label>;

type LabelProps = LabelVariants & ComponentProps<'span'>;

export const Label: FC<LabelProps> = ({
  children,
  color,
  className,
  size,
  ...rest
}) => {
  return (
    <span className={label({ color, className, size })} {...rest}>
      {children}
    </span>
  );
};