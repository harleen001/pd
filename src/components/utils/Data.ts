
export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: string;
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
    techStack: 'MIT-Licensed,Open Source,C++,Library Packages,',
    imageUrl: 'pl.png',
    href: 'https://github.com/harleen001/PrecisionLib240',
  },
  {
    id: 2,
    title: 'University Campus',
    techStack:
      'Campus Website, HTML5 , Material UI , UI/UX , Javascript, Bootstrap CSS, Deployment',
    imageUrl: 'gndurc.png',
    href: 'https://gndurcjal.in/',
  },
  {
    id: 3,
    title: 'Virtual Setup',
    techStack:
      'Spline3D, Figma, Architecture, Motion Physics, Javascript, Bootstrap CSS',
    imageUrl: '31325.png',
    href: '#',
  },
  {
    id: 4,
    title: 'GNDU Noteline',
    techStack: 'Figma, University, Database, Teamwork, Management, Javascript',
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
    title: 'Youtube',
    techStack: 'devwhoisstuck',
    icon: 'youtube',
    href: 'https://www.youtube.com/@devwhoisstuck',
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
    snippetCount: 'MERN',
    progress: 100,
    href: 'https://github.com/harleen001/Mongoose-Express',
  },
  {
    id: 2,
    title: 'Custom URL',
    src: '/tech/web3/customurl.png',
    exp: '20 May',
    snippetCount: 'Backend',
    progress: 80,
    href: 'https://github.com/harleen001/CustomURL-Express-MongoDb',
  },
  {
    id: 3, 
    title: 'Playground',
    src: '/tech/web3/algo.png',
    exp: '24 March',
    snippetCount: 'Algorithms',
    progress: 30,
    href: 'https://github.com/harleen001/AlgoPlayground',
  },
  {
    id: 4,
    title: 'RebelTales',
    src: '/tech/web3/rebeltales.png',
    exp: '25 December',
    snippetCount: '3D',
    progress: 100,
    href: 'https://github.com/harleen001/rebeltales',
  },
  {
    id: 5,
    title: 'Portfolio',
    src: '/tech/web3/port.png',
    exp: '26 June',
    snippetCount: 'Fullstack',
    progress: 70,
    href: 'https://harleen.vercel.app/',
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 'MERN',
    progress: 90,
  },
  {
    id: 2,
    title: 'SOAP API',
    src: '/tech/others/soap.jpg',
    exp: '1 day ago',
    snippetCount: 'MERN',
    progress: 70,
  },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: '1 day ago',
    snippetCount: 'MERN',
    progress: 70,
  },
];


export const aboutsection: AboutsectionData[] = [
  {
    id: 1,
    date: 'PrecisonLib240 Library',
    text: 'MIT-Licensed,Open Source,C++,Library Packages,',
  
  },
]