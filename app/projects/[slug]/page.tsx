import { type Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { allProjects } from '@/.contentlayer/generated';

import { Label } from '@/components/Label';

const getProjectBySlug = (slug: string) => {
  const project = allProjects.find(project => project.slug === slug);
  if (!project) throw new Error(`Project not found for slug: ${slug}`);
  return project;
};

const Project = ({ params }: { params: { slug: string } }) => {
  const project = getProjectBySlug(params.slug);
  return (
    <main className="px-container mx-auto max-w-container pb-24">
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
            {project.role && <Label>{project.role}</Label>}
            {project.space && <Label color="gray">{project.space}</Label>}
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
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={1200}
          height={630}
          quality={100}
          className="rounded-2xl ring-4 ring-mint ring-offset-2 dark:ring-offset-black"
        />
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
