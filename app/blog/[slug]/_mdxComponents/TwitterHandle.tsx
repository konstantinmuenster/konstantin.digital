import { type FC } from 'react';

import { socials } from '@/config/navigation.config';
import { Twitter } from 'lucide-react';

const twitterUrl = socials.find(social => social.name === 'Twitter')?.href;
if (!twitterUrl) throw new Error('Twitter URL not found');

export const MdxTwitterHandle: FC = () => {
  const handle = twitterUrl.split('/@').pop();
  return (
    <span className="not-prose">
      <a
        href={twitterUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="a-reset group inline-flex cursor-pointer items-center justify-center gap-1 rounded-full bg-[#DFF1FD] px-2 py-0.5 align-middle text-sm text-twitter transition-all hover:bg-[#BFE3FB] dark:bg-[#052D49] dark:hover:bg-[#06395B]"
      >
        <Twitter
          size={16}
          className="fill-twitter transition-transform group-hover:rotate-[360deg]"
        />
        {handle}
      </a>
    </span>
  );
};
