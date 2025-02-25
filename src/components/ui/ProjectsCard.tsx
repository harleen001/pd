import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectsCardProps {
  title: string;
  src?: string;
  href?: string;
  techStack: string;
}

const ProjectsCard: FC<ProjectsCardProps> = ({
  title,
  src,
  href,
  techStack,
}) => {
  return (
    <Link target="_blank" href={href || '/'}>
      <div className="flex flex-col justify-between p-2 overflow-hidden rounded-lg shadow-md bg-cardPrimary text-zinc-200">
        <div className="flex items-center justify-between space-x-3">
          {/* Image */}
          <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
            <Image
              src={`/projects/${src}`}
              alt={title}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Title and Tech Stack */}
          <div className="flex-1 w-full">
            <div className="text-sm font-semibold truncate">{title}</div>
            <div className="text-xs truncate text-info">{techStack}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
