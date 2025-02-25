
export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippet: string;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export interface AboutsectionData {
  id: number,
  date : string,
  text : string,

}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'PrecisonLib240 Library',
    techStack: 'MIT-Licensed,Open Source,C++',
    imageUrl: 'pl.png',
    href: 'https://github.com/harleen001/PrecisionLib240',
  },
  {
    id: 2,
    title: 'University Campus',
    techStack:
      'Campus Website,UI/UX, Deployment',
    imageUrl: 'gndurc.png',
    href: 'https://gndurcjal.in/',
  },
  {
    id: 3,
    title: 'Virtual Setup',
    techStack:
      'Spline3D, Figma,Motion Physics',
    imageUrl: '31325.png',
    href: 'https://www.figma.com/design/K3NzUMoP7FYgl6eDA5DcCk/Untitled?node-id=0-1&t=5dT53Vks7CyTZA7A-1',
  },
  {
    id: 4,
    title: 'GNDU Noteline',
    techStack: 'University, Database, Teamwork',
    imageUrl: 'noteline.png',
    href: 'https://gndunoteline.vercel.app/',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'Linkedin',
    techStack: 'harleen001',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/harleen001/',
  },
  {
    id: 2,
    title: 'Github',
    techStack: 'harleen001',
    icon: 'github',
    href: 'https://github.com/harleen001',
  },
  {
    id: 3,
    title: 'Twitter',
    techStack: 'devwhoisstuck',
    icon: 'twitter',
    href: 'https://x.com/devwhoisstuck',
  },

  {
    id: 4,
    title: 'Email',
    techStack: 'harleen.johal31@gmail.com',
    icon: 'email',
    href: 'https://harleen.johal31@gmail.com/',
  },
];



export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'CRUD',
    src: '/tech/web3/crud.png',
    exp: '10 May',
    snippet: 'MERN',
    progress: 100,
    href: 'https://github.com/harleen001/Mongoose-Express',
  },
  {
    id: 2,
    title: 'Custom URL',
    src: '/tech/web3/customurl.png',
    exp: '20 May',
    snippet: 'Backend',
    progress: 80,
    href: 'https://github.com/harleen001/CustomURL-Express-MongoDb',
  },
  {
    id: 3, 
    title: 'Playground',
    src: '/tech/web3/algo.png',
    exp: '24 March',
    snippet: 'Algorithms',
    progress: 30,
    href: 'https://github.com/harleen001/AlgoPlayground',
  },
  {
    id: 4,
    title: 'RebelTales',
    src: '/tech/web3/rebeltales.png',
    exp: '25 December',
    snippet: '3D',
    progress: 100,
    href: 'https://github.com/harleen001/rebeltales',
  },
  {
    id: 5,
    title: 'Portfolio',
    src: '/tech/web3/port.png',
    exp: '26 June',
    snippet: 'Fullstack',
    progress: 70,
    href: 'https://harleen.vercel.app/',
  },
  {
    id: 6,
    title: 'Buildspace',
    src: '/tech/web3/build.png',
    exp: '04 July',
    snippet: 'Prototype',
    progress: 70,
    href: 'https://www.figma.com/design/vIsrmLnuUjl4tFgykR6aHG/Untitled?node-id=0-1&t=Rw3AyG8JZteQQiFU-1',
  },
  {id: 7,
  title: 'Greko',
  src: '/tech/web3/greko.png',
  exp: '12 July',
  snippet: 'Prototype',
  progress: 90,
  href: 'https://www.figma.com/design/cBh4F6BEo3T36BjW98OmCK/Untitled?node-id=3-70&t=h1GOE8VbjaJAuEnU-1',
},
{id: 7,
  title: 'GistGen AI',
  src: '/tech/web3/gist.png',
  exp: '25 July',
  snippet: 'API',
  progress: 100,
  href: 'https://gistgenai.vercel.app/',
},




];



export const threedCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Cabin Woods',
    src: '/tech/threed/cabin.png',
    exp: '25 July',
    snippet: 'Scene',
    progress: 100,
    href: '/tech/threed/cabin.png',
  },
  {
    id: 2,
    title: 'Harleen Desk',
    src: '/tech/threed/harleen.png',
    exp: '29 July',
    snippet: 'Setup',
    progress: 90,
    href: '/tech/threed/harleen.png',
  },
  {
    id: 3,
    title: 'Silk Arena',
    src: '/tech/threed/silk.png',
    exp: '30 July',
    snippet: 'Scene',
    progress: 80,
    href: '/tech/threed/silk.png',
  },
  {
    id: 4,
    title: 'Iman Desk',
    src: '/tech/threed/iman.png',
    exp: '2 July',
    snippet: 'Setup',
    progress: 100,
    href: '/tech/threed/iman.png',
  },
  {
    id: 5,
    title: 'Kartik Desk',
    src: '/tech/threed/kartik.png',
    exp: '2 July',
    snippet: 'Setup',
    progress: 90,
    href: '/tech/threed/kartik.png',
  },
  {
    id: 6,
    title: 'III XIII XXV Shelter',
    src: '/tech/threed/shelter.png',
    exp: '4 July',
    snippet: 'Scene',
    progress: 100,
    href: '/tech/threed/shelter.png',
  },
  {
    id: 7,
    title: 'Recreation Room',
    src: '/tech/threed/recreation.png',
    exp: '5 July',
    snippet: 'Setup',
    progress: 80,
    href: '/tech/threed/recreation.png',
  },
  {
    id: 8,
    title: 'House on Wheels',
    src: '/tech/threed/house.png',
    exp: '7 July',
    snippet: 'Scene',
    progress: 90,
    href: '/tech/threed/house.png',
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Restful API',
    src: '/tech/others/restapi.png',
    exp: '6 May',
    snippet: 'API',
    progress: 100,
    href:'https://github.com/harleen001/Restful-API',
  },
  {
    id: 2,
    title: 'Firebase Authentication',
    src: '/tech/others/firebase.png',
    exp: '25 June',
    snippet: 'Baas',
    progress: 70,
    href:'https://github.com/harleen001/firebase_authentication',
  },
 // {
   // id: 3,
   // title: 'GraphQl',
   // src: '/tech/others/graphql.png',
   // exp: '1 day ago',
   // snippetCount: 'MERN',
   // progress: 70,
 // },
];


export const aboutsection: AboutsectionData[] = [
  {
    id: 1,
    date: 'PrecisonLib240 Library',
    text: 'MIT-Licensed,Open Source,C++',
  
  },
]