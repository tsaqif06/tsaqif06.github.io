const config = {
  github: {
    username: 'tsaqif06',
    sortBy: 'updated',
    limit: 6,
    exclude: {
      forks: false,
      projects: [
        'go-fiber-gorm-learn',
        'belajar-golang',
        'belajar-laravel',
        'belajar-mvc-php',
        'gogoblesan',
        'Tsaqif06',
        'tsaqif06.github.io',
        'oop-php',
        'belajar-php',
        'tugas-sekolah-2023',
        'playing-with-color-js',
        'layouting-vanilla-css',
        'belajar-python',
        'cplusplus-smk-semester1',
        'smkcoding-csharp',
        'js-lanjutan',
        'belajar-bs5-grid-responsive',
        'javascript-backend-learning',
        'simashmvc',
        'ecommercev2',
        'surat-menyurat',
        'dev-ppk',
        'E-PNBP',
      ],
    },
  },
  social: {
    linkedin: 'ahmad-tsaqif',
    facebook: '',
    instagram: 'ahmadtsaqif.al',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://tsaqif06.github.io',
    phone: '',
    email: 'ahmadtsaqifal6@gmail.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  // },
  skills: [
    'PHP',
    'Laravel',
    'Golang',
    'JavaScript',
    'MySQL',
    'Git',
    'Jquery',
    'JWT',
    'CSS',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'PT. Tiga Pilar Garuda',
      position: 'Back End Developer',
      from: 'January 2024',
      to: 'December 2024',
      companyLink: 'https://3-pilar.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'SMKN 4 Malang',
      degree: 'Software Engineering',
      from: 'July 2022',
      to: 'Juny 2025',
    },
  ],

  externalProjects: [
    {
      title: 'SIPARMA',
      description:
        'SIPARMA is a web-based platform that provides information about tourist attractions in Malang and facilitates online ticket purchases, helping tourists easily access travel details and read tourism-related articles. For my school final project, I led the team, focusing on backend development and coordinating members to ensure smooth project execution.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/siparma.png',
      link: 'https://siparma.catalogrpl.com/',
    },
    {
      title: 'SAKIP',
      description:
        'SAKIP is a web-based platform designed to enhance government agency accountability by simplifying the submission and tracking of performance reports for regional offices like the Land Affairs Office of Malang Regency, where I led the backend development.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/sakip.png',
      link: 'https://dev.unimasoft.id/unimasoft-sakip/',
    },
    {
      title: 'SIPENA',
      description:
        'SIPENA is a custom platform that streamlines apartment rental management in Malang, handling payments and automated resident reminders. I led backend development, ensuring secure server operations and implementing core functionality.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/sipena.png',
      link: 'https://sipena.site',
    },
    {
      title: 'Edugator',
      description:
        'Edugator (Education Game Generator) is a platform that creates educational games with customizable cards to make learning fun for children. I contributed by developing the payment system, managing the REST API, and maintaining the server infrastructure for a seamless user experience.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/edugator.png',
      link: 'https://dev.birosolusi.com/edugator',
    },
    {
      title: 'RN Billing Service',
      description:
        'RN Billing Service is a comprehensive platform for managing internet billing and service operations, where I handled the development of the payment gateway, managed the REST API, and ensured server reliability to support platform functionality and user demands.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/rnbilling.png',
      link: 'https://dev.birosolusi.com/rn-billing-service',
    },
    {
      title: 'TSCode',
      description:
        'TSCode is a personal project developed to convert URLs into QR codes. This project was primarily created as a way to enhance my skills in backend development and improve my proficiency in web technologies. It demonstrates my ability to handle smaller-scale projects with precision and efficiency.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/tscode.png',
      link: 'https://tscode.atsaqif.repl.co',
    },
    {
      title: 'SinBar TIK',
      description:
        'SinBar TIK or Sinau Bareng TIK is an educational platform created to assist teachers in delivering informatics lessons to their students. I collaborated with other team members on this project and contributed as the primary programmer, focusing on implementing the platform’s core technical components.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/sinbartik.png',
      link: 'https://sinbar-tik.vercel.app',
    },
  ],
  blog: {
    source: '',
    username: '',
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    hideAvatarRing: false,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  // footer: `Made with ❤️`,
};

export default config;
