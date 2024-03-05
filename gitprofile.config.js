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
      ],
    },
  },
  social: {
    linkedin: 'ahmad-tsaqif',
    facebook: '',
    instagram: 'a.tsaqif_al',
    youtube: 'tsaqifgaming',
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
      from: 'March 2023',
      to: 'Present',
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
      from: '2022',
      to: 'Present',
    },
  ],

  externalProjects: [
    {
      title: 'SIPENA',
      description:
        'SIPENA is a website created to meet the specific needs of flats in the city of Malang, which aims to provide smooth management of house rental payments and convenient reminders for its residents. Here, I am the leader for this website, more precisely in the back end',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/sipena.png',
      link: 'https://sipena.site',
    },
    {
      title: 'Edugator',
      description:
        'Edugator or Education Game Generator is a website that can process cards where these cards can be made into educational games for children, via REST API. Here, I am in charge of creating the payment method, managing the REST API and managing the server',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/edugator.png',
      link: 'https://dev.birosolusi.com/edugator',
    },
    {
      title: 'RN Billing Service',
      description:
        'RN Billing Service is a web to manage internet billing payments and also manage the internet. Here, I am in charge of creating the payment method, managing the REST API and managing the server',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/rnbilling.png',
      link: 'https://dev.birosolusi.com/rn-billing-service',
    },
    {
      title: 'TSCode',
      description:
        'TSCode is a website for changing URLs into QRcodes, this website is only intended to improve my skills',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/tscode.png',
      link: 'https://tscode.atsaqif.repl.co',
    },
    {
      title: 'SinBar TIK',
      description:
        'SinBar TIK or Sinau Bareng TIK is a website to help teachers teach informatics material to their students. I made this with my other friends and here I am as a programmer',
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
