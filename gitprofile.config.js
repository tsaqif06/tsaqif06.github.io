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
      title: 'SAKIP',
      description:
        'SAKIP (Sistem Akuntabilitas Kinerja Sistem Instansi Pemerintah) is a web-based platform developed to enhance institutional accountability within government agencies. It provides an efficient, interactive solution for submitting and tracking performance reports online, specifically designed for regional agencies such as the Land Affairs Office of Malang Regency. By simplifying the reporting process, SAKIP improves transparency, accountability, and operational efficiency. I played a key role in leading the development of this platform, focusing on backend architecture and functionality.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/Logo-SAKIP.png',
      link: 'https://dev.unimasoft.id/unimasoft-sakip/',
    },
    {
      title: 'SIPENA',
      description:
        'SIPENA is a custom-built platform designed to streamline rental management for apartment complexes in Malang. It facilitates efficient management of rental payments and provides automated reminders to residents. My role in this project involved leading the backend development, ensuring smooth and secure server operations, and implementing core functionality.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/sipena.png',
      link: 'https://sipena.site',
    },
    {
      title: 'Edugator',
      description:
        'Edugator, short for Education Game Generator, is a platform that generates educational games using customizable cards, designed to make learning fun for children. My contributions included developing the payment system, managing the REST API, and maintaining the server infrastructure to ensure a seamless experience for users.',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/tsaqif06.github.io/main/src/assets/edugator.png',
      link: 'https://dev.birosolusi.com/edugator',
    },
    {
      title: 'RN Billing Service',
      description:
        'RN Billing Service is a comprehensive platform for managing internet billing payments and overseeing internet service operations. I was responsible for developing the payment gateway, managing the REST API, and ensuring server reliability to support the platform’s functionality and user demands.',
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
