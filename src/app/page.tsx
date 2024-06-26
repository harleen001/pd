import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import MoreProjects from '@/components/sections/MoreProjects';

import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
  
  moreProjects,
  otherCards,
  projectCard,
  web3Cards,
} from '@/components/utils/Data';

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10">
        {/* <Hero /> */}
        <ProjectCardSection title="Projects" data={projectCard} />
        <MoreProjects title="Social" data={moreProjects} />

        <CardSection title="Web" data={web3Cards} />
        <CardSection title="Others" data={otherCards} />
      </div>
    </div>
  );
}
