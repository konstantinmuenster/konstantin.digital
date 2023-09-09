import Image from 'next/image';
import { FC } from 'react';

type ReviewCardProps = {
  name: string;
  bio: string;
  avatar: string;
  text: string;
  url: string;
};

export const ReviewCard: FC<ReviewCardProps> = props => {
  const getHost = (url: string) => {
    try {
      return new URL(url).host;
    } catch {
      return undefined;
    }
  };

  return (
    <div className="h-min w-full flex-1 rounded-lg border border-violet bg-white p-8 shadow-sm dark:border-black-400 dark:bg-black/90 md:max-w-sm">
      <div className="flex gap-2">
        <Image
          src={props.avatar}
          width={80}
          height={80}
          alt={props.name}
          className="h-11 w-11 rounded-full"
        />
        <div className="flex flex-col">
          {props.name}
          <span className="text-sm opacity-70">{props.bio}</span>
        </div>
      </div>
      <p className="my-4 text-sm opacity-70">{props.text}</p>
      <div className="text-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${props.url}`}
          alt={props.url}
          className="mr-2 inline-block rounded-full border border-black-200 p-[2px] dark:border-black-700"
        />
        <a
          href={props.url}
          rel="noopener noreferrer"
          target="_blank"
          className="!font-normal"
        >
          {getHost(props.url)}
        </a>
      </div>
    </div>
  );
};
