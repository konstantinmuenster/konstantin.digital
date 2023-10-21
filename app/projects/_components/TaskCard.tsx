import { FC } from 'react';
import clsx from 'clsx';

import { type Markdown } from 'contentlayer/core';

import { Avatar } from '@/components/Avatar';
import { Label } from '@/components/Label';

type TaskCardProps = {
  title: Markdown;
  className?: string;
};

export const TaskCard: FC<TaskCardProps> = ({ title, className }) => {
  const project = deriveProjectFromTitle(title.raw);

  return (
    <div>
      <div
        className={clsx(
          'select-none rounded-xl bg-black-200 px-8 pb-6 pt-8 ring-inset ring-black-300/80 transition-all hover:ring-2 dark:bg-black-950 dark:ring-black-800',
          className
        )}
      >
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: title.html }}
        />
        <div className="mt-4 flex items-center gap-4">
          <Avatar size={28} />
          <div>
            <Label color={project.color}>{project.name}</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

const deriveProjectFromTitle = (
  title: string
): { name: string; color: 'sun' | 'mint' | 'gray' | 'violet' } => {
  if (title.toLowerCase().includes('text editor'))
    return { name: 'Text Editor', color: 'sun' };

  if (title.toLowerCase().includes('user'))
    return { name: 'Product', color: 'violet' };

  return { name: 'Frontend', color: 'mint' };
};
