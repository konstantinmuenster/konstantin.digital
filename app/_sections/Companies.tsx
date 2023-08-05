import Image from 'next/image';

export const CompaniesSection = () => {
  return (
    <div className="relative mb-16 bg-violet">
      <div className="px-container mx-auto flex max-w-container">
        {companies.map(company => {
          return (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="a-reset flex items-center justify-center px-8 py-8"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={company.width || 140}
                height={company.height || 40}
                className="object-contain opacity-80 grayscale dark:opacity-100"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const companies = [
  {
    name: 'OTTO',
    logo: '/images/companies/otto.svg',
    url: 'https://www.otto.de/',
    width: 100,
    height: 40,
  },
  {
    name: 'ABOUT YOU',
    logo: '/images/companies/about-you.svg',
    url: 'https://www.aboutyou.de/',
    width: 150,
    height: 40,
  },
  {
    name: 'Lazy',
    logo: '/images/companies/lazy-so.png',
    url: 'https://www.lazy.so/',
    width: 100,
    height: 40,
  },
  {
    name: 'Regioful',
    logo: '/images/companies/regioful-de.svg',
    url: 'https://www.regioful.de/',
    width: 140,
    height: 40,
  },
  //   {
  //     name: 'Leadquelle',
  //     logo: '/images/companies/leadquelle.svg',
  //     url: 'https://www.leadquelle.net/',
  //     width: 150,
  //     height: 40,
  //   },
  {
    name: 'dskrpt',
    logo: '/images/companies/dskrpt.svg',
    url: 'https://www.dskrpt.de/',
    width: 100,
    height: 40,
  },
  {
    name: 'Lost Nomad Brewing',
    logo: '/images/companies/lostnomad.svg',
    url: 'https://www.lostnomadbrewing.com/',
    width: 150,
    height: 40,
  },
  {
    name: 'KABO KAFFEE',
    logo: '/images/companies/kabo.png',
    url: 'https://www.kabo-kaffee.de/',
    width: 40,
    height: 40,
  },
];
