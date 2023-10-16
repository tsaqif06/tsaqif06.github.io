// gitprofile.config.js

const config = {
  github: {
    username: 'tsaqif06', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
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
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ahmad-tsaqif',
    facebook: '',
    instagram: 'a.tsaqif_al',
    youtube: 'tsaqifgaming', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://tsaqif06.github.io',
    phone: '',
    email: 'ahmadtsaqifal6@gmail.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
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

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SIPENA',
      description:
        'SIPENA is a website created to meet the specific needs of flats in the city of Malang, which aims to provide smooth management of house rental payments and convenient reminders for its residents. Here, I am the leader for this website, more precisely in the back end',
      imageUrl: 'src/assets/logofinal.png',
      link: 'https://sipena.site',
    },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    {
      title: 'TSCode',
      description:
        'TSCode is a website for changing URLs into QRcodes, this website is only intended to improve my skills',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/TSCode/main/img/favicon.ico',
      link: 'https://tscode.atsaqif.repl.co',
    },
    {
      title: 'SinBar TIK',
      description:
        'SinBar TIK or Sinau Bareng TIK is a website to help teachers teach informatics material to their students. I made this with my other friends and here I am as a programmer',
      imageUrl:
        'https://raw.githubusercontent.com/tsaqif06/SinBar-TIK/main/assets/images/logo.png',
      link: 'https://sinbar-tik.vercel.app',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
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

    // Custom theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
