import { ReviewCard } from '@/components/Card';

export const ReviewsSection = () => {
  return (
    <div className="relative mb-16 bg-violet/40 dark:bg-violet/90 md:mb-32">
      <div className="px-container mx-auto max-w-container pb-16 pt-12 md:py-24">
        <h3 className="mb-5 mt-4 text-center font-accent text-4xl font-medium dark:text-black md:text-5xl">
          What others say about my work.
        </h3>
        <p className="my-5 text-center text-xl dark:text-black dark:opacity-90">
          Some nice words from nice people I have worked with.
        </p>
        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
    name: 'Paolo Castro',
    bio: 'Co-Founder & CTO',
    avatar: '/images/projects/lazy/paolo.jpeg',
    text: "“What sets Konstantin apart is his ability to approach problems from multiple angles and, importantly, his knack for selecting the most effective solution.\n\nBut it's not just his tech skills that shine, Konstantin's always got a smile on his face, and he's the ultimate team player. He's the kind of colleague who makes the office a better place. I can't recommend Konstantin enough, he's not just a top-notch developer, he's the kind of person you want on your team.”",
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
    name: 'Alexander Ulmer',
    bio: 'Founder',
    avatar: '/images/projects/dskrpt/alexander.jpg',
    text: "“I had the pleasure of working with Konstantin at dskrpt, where he played a pivotal role in helping us redesign our central frontend component. Konstantin's JavaScript expertise, especially in ProseMirror, is remarkable and his meticulous organisational skills and deep product understanding make him an exceptional self-starter who consistently delivers high-quality work. What truly sets Konstantin apart is his passion for the product and his genuine dedication to understanding our users' problems.”",
    url: 'https://dskrpt.de',
  },
  {
    name: 'Peter Membrey',
    bio: 'Chief Engineering Officer',
    avatar: '/images/reviews/pete-m.jpeg',
    text: "“If you're looking for someone to partner with, who you can trust to look after not just your site design and implementation now, but also be able to adapt the design to your future needs, who uses open source off the shelf components where it makes sense, but can customise or create any feature (with great code quality) when necessary, who turns around complete sites quickly, and small tweaks even faster, then look no further.”",
    url: 'https://expressvpn.com/',
  },
  {
    name: 'Brendan Horan',
    bio: 'Distinguished Engineer',
    avatar: '/images/reviews/brendan-h.jpeg',
    text: '“Working with Konstantin was a very refreshing change. Konstantin from the very start ensured communications were sent out, and boards were updated. Tasks assigned and detailed steps of what he was doing or what he needed from me. Given we had to work in full async due to timezone differences not once did I feel I did not know the progress of the work. I would have no issues working with Konstantin again or recommending him to anyone. It was a lot of fun and in the end, I got exactly what I had in mind and more.”',
    url: 'https://horan.hk/',
  },
  {
    name: 'Giacomo Hendel',
    bio: 'Founder',
    avatar: '/images/projects/vykee/giacomo-hendel.jpeg',
    text: '“Konstantin is one of the most talented developers I know and have worked with. Besides being a word-class engineer, he is also great in product management and asks the right questions – the result is a 10/10 product.”',
    url: 'https://vykee.co',
  },
];
