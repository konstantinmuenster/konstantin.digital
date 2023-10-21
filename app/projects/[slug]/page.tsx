import { type Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { allProjects } from '@/.contentlayer/generated';

import { Label } from '@/components/Label';
import { ImageWithZoom } from '@/components/Image';

import { TaskCard } from '../_components/TaskCard';

const getProjectBySlug = (slug: string) => {
  const project = allProjects.find(project => project.slug === slug);
  if (!project) throw new Error(`Project not found for slug: ${slug}`);
  return project;
};

const Tagline = ({ children }: { children: React.ReactNode }) => (
  <span className="mb-4 block text-sm font-semibold uppercase tracking-wide">
    {children}
  </span>
);

const imageRotations = [
  'xl:rotate-2',
  'xl:-rotate-2',
  'xl:rotate-2',
  'xl:-rotate-2',
];

const Project = ({ params }: { params: { slug: string } }) => {
  const project = getProjectBySlug(params.slug);

  return (
    <main className="pb-24">
      <div className="px-container mx-auto max-w-container">
        <div className="mx-auto max-w-5xl py-8 md:py-16">
          <Link
            href="/projects"
            className="a-reset block opacity-75 hover:opacity-100"
            aria-label="Navigate to projects listing"
          >
            <ArrowLeft />
          </Link>
          <h1 className="pt-8 font-accent text-4xl font-medium md:pt-16 md:text-5xl">
            {project.title}
          </h1>
          <span className="block py-5 text-xl">{project.subtitle}</span>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
              {project.role && <Label size="lg">{project.role}</Label>}
              {project.space && (
                <Label color="gray" size="lg">
                  {project.space}
                </Label>
              )}
              {project.externals?.Website && (
                <span className="block px-2 text-sm opacity-50">
                  Visit{' '}
                  <a
                    href={project.externals.Website}
                    className="a-reset underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.externals.Website.substring(8)}
                  </a>
                </span>
              )}
            </div>
            {project.externals?.ProductHunt && (
              <div
                dangerouslySetInnerHTML={{
                  __html: project.externals.ProductHunt,
                }}
              />
            )}
          </div>
        </div>
        {project.cover?.src && (
          <div className="relative">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={1200}
              height={630}
              quality={100}
              className="rounded-2xl ring-4 ring-mint ring-offset-2 dark:ring-mint/80 dark:ring-offset-black"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-2 left-0 -ml-[5%] h-[15%] w-[110%] rounded-md bg-black-50 shadow-[0_-5px_5px_-5px_rgba(0,0,0,.4)] dark:bg-black dark:shadow-[0_-5px_5px_-5px_rgba(255,255,255,.1)]"
            />
          </div>
        )}
        <div className="mx-auto mb-16 mt-4 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-[2fr_1fr] lg:gap-28">
          {project.background?.html && (
            <div>
              <Tagline>Background</Tagline>
              <div
                dangerouslySetInnerHTML={{ __html: project.background.html }}
                className="text-lg md:text-xl"
              />
            </div>
          )}
          {project.stack?.length && (
            <div>
              <Tagline>Tech Stack</Tagline>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.stack.map(technology => (
                  <Label
                    key={technology}
                    size="lg"
                    className="select-none border border-violet/50 bg-transparent text-[#777777] dark:border-violet/30 dark:bg-black dark:text-[#8C8C8C]"
                  >
                    {technology}
                  </Label>
                ))}
              </div>
            </div>
          )}
        </div>
        {project.responsibilities?.length && (
          <div className="mx-auto grid w-full max-w-5xl">
            <Tagline>How I Helped</Tagline>
            <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.responsibilities.map(markdown => (
                <TaskCard key={markdown.html} title={markdown} />
              ))}
            </div>
          </div>
        )}
      </div>
      {project.carousel?.length && (
        <div className="px-container mx-auto my-16 grid max-w-[2000px] grid-cols-1 gap-20 overflow-hidden py-8 md:my-32 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {project.carousel.map((image, index) => {
            const rotation = imageRotations[index % imageRotations.length];
            return (
              <div
                key={image.src}
                className={clsx(
                  'relative mx-auto max-w-lg lg:max-w-none',
                  rotation
                )}
              >
                <div className="aspect-[16/9] h-full w-full overflow-hidden rounded-xl ring-2 ring-black-300 ring-offset-4 ring-offset-black-100 dark:ring-black-950 dark:ring-offset-black">
                  <ImageWithZoom
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={900}
                    className="bg-black-100 dark:bg-black-950"
                  />
                </div>
                {image.caption?.html && (
                  <div
                    className="absolute -bottom-8 w-full text-center text-sm opacity-50"
                    dangerouslySetInnerHTML={{ __html: image.caption.html }}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

/** EXPORTS */

export const generateStaticParams = async () => {
  return allProjects.map(project => ({ slug: project.slug }));
};

type GenerateMetadataParams = { params: { slug: string } };
export const generateMetadata = (props: GenerateMetadataParams): Metadata => {
  const project = getProjectBySlug(props.params.slug);
  return {
    title: project.title,
    description: project.subtitle,
    keywords: project.tags,
    twitter: {
      title: project.title,
      description: project.subtitle,
      site: '@kmuenster',
    },
    alternates: {
      canonical: `https://konstantin.digital/projects/${project.slug}`,
    },
  };
};

export default Project;
