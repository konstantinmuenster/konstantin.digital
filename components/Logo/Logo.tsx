import type { FC } from 'react';
import clsx from 'clsx';

type LogoProps = {
  iconSize?: number;
  iconRotated?: boolean;
  iconColor?: string;
  textHidden?: boolean;
  textSize?: string;
  textColor?: string;
};

export const Logo: FC<LogoProps> = props => {
  const iconSize = props.iconSize ?? 44;
  const iconColor = props.iconColor ?? '#CEAFFA';

  const textSize = props.textSize ?? 24;

  return (
    <div className="flex items-center justify-start gap-3">
      <svg
        style={{ width: iconSize }}
        className={clsx('block', props?.iconRotated && '-rotate-2')}
        viewBox="0 0 89 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 9.368A9.368 9.368 0 0 1 9.368 0h70.264A9.368 9.368 0 0 1 89 9.368v70.264A9.368 9.368 0 0 1 79.632 89H9.368A9.368 9.368 0 0 1 0 79.632V9.368Z"
          fill={iconColor}
        />
        <path
          d="M15.478 60.205c0-1.668 1.39-3.021 3.106-3.021h9.697c1.715 0 3.105 1.353 3.105 3.021v9.435c0 1.669-1.39 3.022-3.105 3.022h-9.697c-1.715 0-3.106-1.353-3.106-3.022v-9.435ZM47.365 71.638a2.254 2.254 0 0 0 1.89 1.024H60.09c1.824 0 2.89-2.045 1.84-3.528l-14.69-20.73a2.23 2.23 0 0 1 .15-2.767l14.235-16.124c1.277-1.447.245-3.716-1.69-3.716h-10.03c-.646 0-1.26.276-1.688.757L31.95 44.887a2.23 2.23 0 0 0-.203 2.696l15.618 24.055Z"
          fill="#000"
        />
      </svg>
      {!props.textHidden && (
        <span
          className="font-accent text-2xl font-bold tracking-wider"
          style={{ fontSize: textSize }}
        >
          Konstantin
        </span>
      )}
    </div>
  );
};
