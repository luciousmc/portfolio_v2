const IMG_PATH = '/images/projects'

export const featured = [
  {
    name: 'Sheynanigans Bakery',
    description: 'A full stack e-commerce React app. ',
    tech: ['React', 'Express', 'Express Sessions', 'PostgreSQL', 'NodeJs'],
    live_link: 'http://sheynanigans.marlonclay.com',
    repo_link: 'http://github.com/luciousmc/sheynanigans-bakery',
    project_img: `${IMG_PATH}/sheynanigans_preview.png`,
  },
  {
    name: 'My Hero Memory',
    description:
      'A memory match game modeled after the popular anime My Hero Academia.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    live_link: 'https://my-hero-memory.marlonclay.com',
    repo_link: 'https://github.com/luciousmc/my-hero-memory',
    project_img: `${IMG_PATH}/my-hero-memory-preview.png`,
  },
  {
    name: 'Slack Clone',
    description:
      "A chat app clone created to learn and practice the new Firebase v9. The app utilizes Firebase's Auth, Firestore and Storage services",
    tech: ['React', 'Redux', 'Firebase', 'Styled Components'],
    live_link: 'https://r-slack-clone.web.app',
    repo_link: 'https://github.com/luciousmc/r-slack-clone',
    project_img: `${IMG_PATH}/slack-preview.png`,
  },
];

export const other = [
  {
    name: 'Together',
    description:
      "Together is a group calendar for public events by the 100devs online community.",
    tech: ['React', 'TailwindCSS', 'Express', 'MongoDB'],
    live_link: 'https://together.cyclic.app',
    repo_link: 'https://github.com/Caleb-Cohen/Together',
    project_img: ``,
  },
  {
    name: 'Amazon Clone',
    description:
      'A copy of the popular Amazon website. It features the ability to add items to the cart and purchase them.',
    tech: ['NextJs', 'Next Auth', 'TailwindCSS', 'Stripe'],
    live_link: 'https://r-amazon.marlonclay.com',
    repo_link: 'https://github.com/luciousmc/r-amazon',
    project_img: `${IMG_PATH}/amazon_preview.png`,
  },
  
  {
    name: 'Netflix Clone',
    description:
      'A clone of the video streaming service. This app incorporates Stripe Checkout to subscribe to different levels of service.',
    tech: ['React', 'React Router', 'Redux', 'Firebase', 'Stripe'],
    live_link: 'https://myflix-5b646.web.app/',
    repo_link: 'https://github.com/luciousmc/myFlix',
    project_img: '',
  },
];
