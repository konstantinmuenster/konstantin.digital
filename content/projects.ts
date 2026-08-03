export type Project = {
  name: string;
  role: string;
  years: string;
  url: string;
  logo: string;
};

export const studio: Project = {
  name: 'cobuild',
  role: 'Managing Director',
  years: '2025–Today',
  url: 'https://cobuild.digital/',
  logo: '/logos/cobuild.svg',
};

export const products: Project[] = [
  {
    name: 'Sevenflow',
    role: 'Fractional CTO & Product Engineer',
    years: '2026–Today',
    url: 'https://sevenflow.de/',
    logo: '/logos/sevenflow.svg',
  },
  {
    name: 'Tuuul',
    role: 'Fractional CTO & Product Engineer',
    years: '2024–Today',
    url: 'https://tuuul.de/',
    logo: '/logos/tuuul.svg',
  },
  {
    name: 'medmingle',
    role: 'Fractional CTO & Product Engineer',
    years: '2024–Today',
    url: 'https://medmingle.de/',
    logo: '/logos/medmingle.png',
  },
  {
    name: 'Akindi',
    role: 'Product Engineer',
    years: '2023–2025',
    url: 'https://akindi.com/',
    logo: '/logos/akindi.svg',
  },
  {
    name: 'vykee',
    role: 'Product Engineer',
    years: '2023–2024',
    url: 'https://vykee.co/',
    logo: '/logos/vykee.png',
  },
  {
    name: 'dskrpt',
    role: 'Product Engineer',
    years: '2023–2024',
    url: 'https://dskrpt.de/',
    logo: '/logos/dskrpt.svg',
  },
  {
    name: 'Lazy',
    role: 'AI Product Engineer',
    years: '2021–2024',
    url: 'https://lazy.so/',
    logo: '/logos/lazy.png',
  },
];
