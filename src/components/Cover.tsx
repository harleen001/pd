import { FC } from 'react';
import ProfileName from './cover/ProfileName';
import Button from './ui/Button';
import { BriefcaseIcon } from 'lucide-react';
import Link from 'next/link';

interface CoverProps {}

const Cover: FC<CoverProps> = () => {
  return (
    <div className="w-full bg-cover bg-no-repeat rounded-lg">
      <div className="flex flex-col items-center justify-between w-full gap-6 px-4 py-6 md:flex-row md:px-10 bg-blur backdrop-blur-md rounded-lg">
        <ProfileName />

        <Link
          className="hidden md:inline-block"
          target="_blank"
          href="https://drive.google.com/file/d/1kyM7zhWQ56wpBLdfNFl7SCwniHJOoRzk/view?usp=sharing"
        >
          <Button variant="primary" sizes="small">
            <BriefcaseIcon className="mr-2" />
            <span>Resume</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cover;
