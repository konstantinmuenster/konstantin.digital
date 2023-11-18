import type { FC } from 'react';

import type { Project } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import { Label } from '../Label';

type ProjectCardProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
  className,
  priority,
}) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      role="button"
      aria-label={`Visit project: ${project.title}`}
      className="a-reset focus-default inline-block w-full cursor-pointer rounded-2xl transition-all hover:ring-2 hover:ring-black-200 hover:ring-offset-2 dark:hover:ring-black-900 dark:hover:ring-offset-black"
    >
      <div
        className={clsx(
          'group relative flex min-h-min cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl bg-black-200 px-6 transition-all dark:bg-black-900 md:flex-row md:gap-6 md:px-9 lg:items-end lg:gap-12',
          className
        )}
      >
        <div className="flex-shrink-0 pt-6 md:py-6 lg:py-9">
          <span className="absolute right-6 top-6 text-xs font-medium uppercase tracking-wider text-black-500 md:left-9 md:top-9">
            {project.period}
          </span>
          <h3 className="mb-6 flex items-center gap-2 pt-8 font-accent text-3xl font-medium tracking-wide md:pt-16 md:text-4xl lg:pt-24">
            {project.title}{' '}
            <ArrowRight className="stroke-violet/80 transition-all group-hover:translate-x-1 group-hover:stroke-violet" />
          </h3>
          <span className="text-lg">{project.subtitle}</span>
          <div className="my-6 flex max-w-xs flex-wrap gap-2">
            {project.role && <CustomLabel>{project.role}</CustomLabel>}
            {project.space && <CustomLabel>{project.space}</CustomLabel>}
            {project.tags?.map(tag => (
              <CustomLabel key={tag}>{tag}</CustomLabel>
            ))}
          </div>
        </div>
        <div className="pr-6">
          {project.cover?.src && (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={600}
              height={340}
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="translate-y-6 -rotate-2 rounded-lg bg-black-50 ring-4 ring-mint ring-offset-2 transition-all group-hover:translate-y-4 group-hover:-rotate-1 group-hover:ring-violet dark:bg-black dark:ring-mint/80 dark:ring-offset-black"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

const CustomLabel = ({ children }: { children?: string }) => {
  return (
    <Label className="bg-[#e2e2e2] text-[#888888] dark:bg-[#242424] dark:text-[#8b8b8b]">
      {children}
    </Label>
  );
};
