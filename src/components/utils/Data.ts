
export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
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

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Tailwind',
    src: '/tech/frontend/tailwind.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'Nextjs 13',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'DenoJs',
    src: '/tech/backend/denojs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: 'Next Auth',
    src: '/tech/backend/nextauth.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: 'PHP',
    src: '/tech/backend/php.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Redis',
    src: '/tech/database/redis.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: 'PostgreSQL',
    src: '/tech/database/postgres.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Elastic Search',
    src: '/tech/database/elasticSearch.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Docker',
    src: '/tech/devops/docker.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: '/tech/devops/k8s.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: 'Jenkins',
    src: '/tech/devops/jenkins.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Solidity',
    src: '/tech/web3/solidity.jfif',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Hardhat',
    src: '/tech/web3/hardhat.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Metamask',
    src: '/tech/web3/metamask.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: 'Chainlink',
    src: '/tech/web3/chainlink.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'OpenZeppelin',
    src: '/tech/web3/openzeppelin.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'SOAP API',
    src: '/tech/others/soap.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];
