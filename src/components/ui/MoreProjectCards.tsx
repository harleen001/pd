import { FC, ReactNode } from 'react';
import { ChevronRight, GithubIcon, Linkedin, Mail, Youtube } from 'lucide-react';
import Link from 'next/link';


interface MoreProjectsCardsProps {
  title: string;
  icon: string;
  href?: string;
  techStack: string;
}

const iconsMap = {
  linkedin: <Linkedin />,
  github: <GithubIcon />,
  youtube: <Youtube />,
  email: <Mail />,
};

const MoreProjectsCards: FC<MoreProjectsCardsProps> = ({
  title,
  href,
  icon,
  techStack,
}) => {
  return (
    <Link target="_blank" href={href || '/'}>
      <div className="flex items-center gap-1 rounded-lg text-primary">
        {
          //@ts-ignore
          iconsMap[icon]
        }
        <div className="flex flex-col flex-1 px-4 py-2">
          <div className="flex text-sm font-medium">{title}</div>
          <div className="flex text-xs text-info ">{techStack}</div>
        </div>
        <ChevronRight />
      </div>
    </Link>
  );
};

export default MoreProjectsCards;
