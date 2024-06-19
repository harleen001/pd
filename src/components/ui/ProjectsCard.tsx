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
      <div className="flex flex-col gap-3 overflow-hidden bg-white rounded-lg text-zinc-800 overflow-ellipsis">
        <Image
          src={`/projects/${src}`}
          alt="spotify"
          width={700}
          height={700}
          className="object-cover aspect-video"
        />
        <div className="flex flex-col h-24 px-4 py-2">
          <div className="flex font-bold">{title}</div>
          <div className="flex text-xs text-info">{techStack}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
