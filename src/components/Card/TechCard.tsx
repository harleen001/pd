import { Image, ImageIcon } from 'lucide-react';
import { FC } from 'react';
import { cn } from '../utils/utils';
import Button from '../ui/Button';

interface TechCardProps {
  title: string;
  classaName: string;
  tech: string[];
}

const TechCard: FC<TechCardProps> = ({ title, classaName, tech }) => {
  return (
    <div className="flex flex-col flex-1 gap-4 p-4 rounded-md shadow-lg bg-cardPrimary">
      <div className="text-lg font-medium tracking-wider text-primary">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              'rounded-md bg-body text-xs text-primary p-2',
              item === 'Tailwind' && 'border border-blue-500/60',
              item === 'C++' && 'border border-yellow-500/60',
              item === 'PHP' && 'border border-emerald-500/60',
              item === 'Javascript' && 'border border-yellow-500/60',
              item === 'Spline' && 'border border-yellow-500/60',
              item === 'React Js' && 'border border-blue-500/60',
              item === 'Next Js 13' && 'border border-black/60',
              item === 'Node Js' && 'border border-green-500/60',
              item === 'Express Js' && 'border border-gray-500/60',
              item === 'MySql' && 'border border-blue-500/60',
              item === 'MongoDB' && 'border border-emerald-500/60',
              item === 'Java' && 'border border-purple-500/60',
              item === 'CSS' && 'border border-red-500/60',
              item === 'Elastic Search' && 'border border-yellow-500/60',
              item === 'Docker' && 'border border-blue-500/60',
              item === 'Kubernetes' && 'border border-blue-500/60',
              item === 'GIT' && 'border border-orange-500/60',
              item === 'Figma' && 'border border-purple-500/60',
              item === 'AWS' && 'border border-yellow-500/60'
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
