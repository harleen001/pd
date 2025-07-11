import { FC } from 'react';
import TechCard from './Card/TechCard';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 px-6 space-y-8 md:px-16 lg:px-24 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium text-zinc-200">
        What I know
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <TechCard
          title="Programming"
          classaName="bg-[#4f91f2]"
          tech={['C', 'C++', 'Python', 'Java', 'PHP']}
        />
        <TechCard
          title="Web"
          classaName="bg-[#f37c36]"
          tech={[
            'HTML',
            'CSS',
            'Javascript',
            'Tailwind',
            'Bootstrap',
            'React Js',
            'Node Js',
            'Express Js',
            'Rest API',
          ]}
        />
        <TechCard
          title="Database & Tool"
          classaName="bg-[#e0558a]"
          tech={['MySql', 'MongoDB', 'Figma', 'Vercel', 'GIT', 'Spline']}
        />
        <TechCard
          title="Cloud"
          classaName="bg-[#10c0a2]"
          tech={['AWS', 'Tonido']}
        />
      </div>
    </div>
  );
};

export default TechStack;
