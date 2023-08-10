import { ReviewCard } from '@/components/Card';

export const ReviewsSection = () => {
  return (
    <div className="relative mb-8 bg-violet/40 md:mb-16">
      <div className="px-container mx-auto max-w-container py-16">
        <h3 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
          What others say about my work
        </h3>
        <p className="my-5 text-center text-xl">
          Some words from startups, NGOs, corporates I have worked with
        </p>
        <div className="flex flex-col flex-wrap gap-5 py-10 md:flex-row lg:gap-10">
          {reviews.map((review, index) => {
            return <ReviewCard {...review} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: 'Ahmed Menouni',
    bio: 'Co-Founder & CEO',
    avatar: '/images/reviews/ahmed.jpeg',
    text: "“You'd be hard-pressed to find someone as skilled and easy to work with as Konstantin.  Incredibly organized, methodical, and with an attention to detail, Konstantin is a rare engineer who brings a sense of design in addition to an ability to execute on technical requirements.”",
    url: 'https://lazy.so/',
  },
  {
    name: 'Peter Zimmerman',
    bio: 'Founder',
    avatar: '/images/reviews/pete-z.jpeg',
    text: "“Konstantin is a fantastic partner. Incredibly organized, methodical, and with an attention to detail, Konstantin is a rare engineer who brings a sense of design in addition to an ability to execute on technical requirements. I enjoyed working with him on my latest project for my business website, so much so that we've already scheduled a follow up project with a separate business in which I'm involved. Highly recommend. You'd be hard-pressed to find someone as skilled and easy to work with as Konstantin.”",
    url: 'https://lostnomadbrewing.com/',
  },
  {
    name: 'Peter Membrey',
    bio: 'Chief Engineering Officer',
    avatar: '/images/reviews/pete-m.jpeg',
    text: "“If you're looking for someone to partner with, who you can trust to look after not just your site design and implementation now, but also be able to adapt the design to your future needs, who uses open source off the shelf components where it makes sense, but can customise or create any feature (with great code quality) when necessary, who turns around complete sites quickly, and small tweaks even faster, then look no further.”",
    url: 'https://expressvpn.com/',
  },
];