import type { Metadata } from 'next';

import { allProjects } from '@/.contentlayer/generated';

import { CTA } from '@/components/CTA';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/Card';
import { Sparkles } from '@/components/Icon';
import { Fragment } from 'react';

const projects = [
  {
    name: 'Freelance',
    items: allProjects.filter(project => project.role !== 'Open Source'),
  },
  {
    name: 'Open Source',
    items: allProjects.filter(project => project.role === 'Open Source'),
  },
];

const Projects = () => {
  return (
    <main className="px-container mx-auto max-w-container pb-24">
      <Hero
        className="py-16 md:py-32"
        minHeight={false}
        title={<HeroTitle />}
        description="A small collection of freelance and open-source projects I worked on. Learn more about how my favorite projects look like."
        // actions={<HeroActions />}
      />
      <div className="mx-auto mb-24 mt-12 flex max-w-5xl flex-col gap-12">
        {projects.map(project => {
          return project.items.length > 0 ? (
            <div key={project.name}>
              <h2
                id={project.name.toLowerCase().replace(' ', '-')}
                className="scroll-m-8 font-accent text-xl font-medium tracking-wide md:text-2xl"
              >
                {project.name}
              </h2>
              <div className="my-6 flex flex-col gap-8 md:my-12">
                {project.items.map((project, i) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Fragment key={project.name} />
          );
        })}
      </div>
      <CTA variant="sun" />
    </main>
  );
};

const HeroTitle = () => {
  return (
    <span className="relative">
      <span>Case Studies</span>
      <Sparkles className="absolute -right-12 -top-10 hidden sm:block" />
    </span>
  );
};

const HeroActions = () => {
  return (
    <div className="mt-8">
      {projects.map((project, i, arr) => {
        return (
          <Button
            key={project.name}
            as="a"
            variant="gray"
            href={`#${project.name.toLowerCase().replace(' ', '-')}`}
            className={i === arr.length - 1 ? '' : 'mr-4'}
          >
            {project.name}
          </Button>
        );
      })}
    </div>
  );
};

/** EXPORTS */

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'A collection of freelance and open-source projects.',
  alternates: {
    canonical: `https://konstantin.digital/projects`,
  },
};

export default Projects;
