import { FC } from 'react';
import ProjectsCard from '../ui/ProjectsCard';
import { IProjectSectionCardData } from '../utils/Data';

interface ProjectCardSectionProps {
  title: string;
  data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, data }) => {
  return (
    <section className="p-4 mt-4">
      <div className="text-lg font-medium text-zinc-200">{title}</div>
      {/* Flex layout on small screens (mobile) and grid layout on larger screens */}
      <div className="flex flex-col gap-4 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((card) => (
          <ProjectsCard
            href={card.href}
            key={card.id}
            title={card.title}
            src={card.imageUrl}
            techStack={card.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCardSection;
