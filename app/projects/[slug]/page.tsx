import { type Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { allProjects } from '@/.contentlayer/generated';

import { CTA } from '@/components/CTA';
import { Label } from '@/components/Label';
import { ImageWithZoom } from '@/components/Image';
import { BubbleHeart, BubbleSparkles, BubbleThumbsUp } from '@/components/Icon';

import { TaskCard } from '../_components/TaskCard';
import { HighlightContent } from '../_components/HighlightContent';

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
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="pt-8 font-accent text-4xl font-medium md:pt-16 md:text-5xl">
                {project.title}
              </h1>
              <span className="block pb-10 pt-5 text-xl">
                {project.subtitle}
              </span>
              <div className="flex flex-shrink-0 flex-wrap items-center gap-x-2 gap-y-4">
                {project.role && (
                  <Label className="px-[10px] py-[5px] text-sm md:px-[16px] md:py-[8px] md:text-base">
                    {project.role}
                  </Label>
                )}
                {project.space && (
                  <Label
                    color="gray"
                    className="px-[10px] py-[5px] text-sm md:px-[16px] md:py-[8px] md:text-base"
                  >
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
            </div>
            <div className="flex flex-col items-start justify-end lg:items-end">
              {project.period && (
                <span className="block py-2 text-right text-sm font-medium uppercase tracking-wider text-black-500">
                  {project.period}
                </span>
              )}
              {project.externals?.ProductHunt && (
                <div
                  className="mb-2 mt-4"
                  dangerouslySetInnerHTML={{
                    __html: project.externals.ProductHunt,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {project.cover?.src && (
          <div className="relative">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="rounded-2xl bg-black-100 dark:bg-black-950"
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
                    className="select-none border border-violet/50 bg-transparent text-[#777777] dark:border-violet/30 dark:bg-black dark:text-[#b8b8b8]"
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
      {project.carousel?.length ? (
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
                <div className="aspect-[16/9] h-full w-full overflow-hidden rounded-xl ring-2 ring-black-300 ring-offset-4 ring-offset-black-100 dark:ring-black-900 dark:ring-offset-black">
                  <ImageWithZoom
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 1600px"
                    className="bg-black-100 dark:bg-black-900"
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
      ) : (
        <div className="px-container mx-auto my-8 py-8 md:my-16" />
      )}
      <div className="px-container mx-auto grid max-w-6xl grid-cols-1 gap-32 lg:grid-cols-[2fr_1fr]">
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          {project.body.raw && (
            <div>
              <h2 className="mb-5 mt-4 font-accent text-4xl font-medium">
                Highlight of the Project
              </h2>
              <HighlightContent code={project.body.code} />
            </div>
          )}
          {project.review?.summary?.html && (
            <div className="flex flex-col gap-4 rounded-2xl bg-black-100 p-5 ring-2 ring-violet/50 ring-offset-4 transition-all duration-1000 hover:ring-violet/75 dark:bg-black-950 dark:ring-violet/20 dark:ring-offset-black dark:hover:ring-violet/50">
              <div
                className="prose leading-relaxed text-black/75 dark:prose-invert dark:text-white/75"
                dangerouslySetInnerHTML={{
                  __html: project.review.summary.html,
                }}
              />
              <div className="flex items-center gap-3 text-sm">
                {project.review.avatar?.src && (
                  <Image
                    src={project.review.avatar.src}
                    alt={project.review.avatar.alt}
                    width={24}
                    height={24}
                    className="rounded-full ring-1 ring-black-300 ring-offset-1 ring-offset-black-100 dark:ring-black-900 dark:ring-offset-black"
                  />
                )}
                <span>{project.review.biography}</span>
              </div>
            </div>
          )}
        </div>
        {project.achievements?.length && (
          <aside className="order-1 lg:order-2 lg:pt-16">
            <Tagline>Outcomes</Tagline>
            <div className="mt-8 flex flex-row flex-wrap gap-8 lg:mt-10 lg:flex-col lg:gap-10">
              {project.achievements.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="relative max-w-[280px] rounded-xl bg-black-200 px-6 py-6 text-lg ring-inset ring-black-300/80 transition-all duration-1000 hover:ring-2 dark:bg-black-900 dark:text-white/95 dark:ring-black-800"
                  >
                    {i === 0 && (
                      <BubbleThumbsUp className="absolute -right-2 -top-2 h-[48px] w-[48px]" />
                    )}
                    {i === 1 && (
                      <BubbleSparkles className="absolute -right-6 top-8 h-[48px] w-[48px]" />
                    )}
                    {i === 2 && (
                      <BubbleHeart className="absolute -right-4 bottom-4 h-[48px] w-[48px]" />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: v.html }} />
                  </div>
                );
              })}
            </div>
          </aside>
        )}
      </div>
      <div className="px-container mx-auto my-24 max-w-container">
        <CTA variant="mint" />
      </div>
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

export const runtime = 'nodejs';

export default Project;
