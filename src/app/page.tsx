import Cover from '@/components/Cover';
import AboutSection from '@/components/sections/AboutSection';
import CardSection from '@/components/sections/CardSection';


import ProjectCardSection from '@/components/sections/ProjectCardSection';
import TechStack from '@/components/TechStack';
import {
  
  moreProjects,
  otherCards,
  projectCard,
  web3Cards,
  threedCards,
  aboutsection,
} from '@/components/utils/Data';

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10">
        {/* <Hero /> */}
        <AboutSection title="About" data={aboutsection} />
        <TechStack/>
        <ProjectCardSection title="Projects" data={projectCard} />
       

        <CardSection title="Web" data={web3Cards} />
        <CardSection title="3D Model" data={threedCards} />
        <CardSection title="Others" data={otherCards} />
      </div>
    </div>
  );
}
