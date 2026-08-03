export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: 'What do you do?',
    answer:
      'I build products from 0 to 1 as a product-minded CTO and engineer. In the early days I\'m your technical partner: picking an architecture you won\'t regret, building the first product version, and being in the code while we figure out what the product wants to be.',
  },
  {
    question: 'What does a Fractional CTO do?',
    answer:
      'Everything a CTO does, minus the full-time salary — strategy one day, hands-on building the next. The reason it works early on is that you don\'t yet need a tech team, you need one person who can make the call and then go implement it. I\'d rather help you stay small for longer than help you hire your way into complexity.',
  },
  {
    question: 'Isn\'t all of this easier now that AI writes the code?',
    answer:
      'Faster, yes — I use these tools every day and they\'ve changed how I work. But building got cheap while judgment didn\'t. It\'s never been easier to ship something that demos beautifully and falls over the first time real users and real data arrive. That gap is most of my job now.',
  },
  {
    question: 'What does cobuild do?',
    answer:
      'Some products are too ambitious for one person. That\'s why I founded cobuild — a SaaS product studio I run with a small group of senior engineers I\'ve worked with for years. When a project needs more hands, it goes there, and I stay involved.',
  },
  {
    question: 'Where are you based?',
    answer:
      'Near Hamburg, Germany. I work remotely with teams across Europe, and I like coming by in person for a kickoff or team event.',
  },
  {
    question: 'How do engagements work?',
    answer:
      'Ongoing part-time or scoped to a project, depending on what the product needs. Send me a short email at hey@konstantin.digital telling me what you\'re building and what\'s in the way, and we\'ll take it from there on a call.',
  },
];
