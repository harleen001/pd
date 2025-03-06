import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { BriefcaseIcon, Github, Instagram,Linkedin, Twitter, User, Mail } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
      <div className="flex flex-col items-center p-4 space-y-4 font-sans text-3xl text-highlight md:px-10 md:mx-10">
      {/* Header and Social Icons in one line */}
      <div className="flex items-center gap-3 md:gap-6"> {/* Adjusted gap for larger screens */}
        <h1 className="text-4xl font-semibold">Harleen Singh</h1>
        <a href="https://www.linkedin.com/in/harleen001/">
          <Linkedin className="w-6 h-6 ml-4 text-primary" />
        </a>
        <a href="https://github.com/harleen001">
          <Github className="w-6 h-6 text-primary" />
        </a>
        <a href="https://x.com/devwhoisstuck">
          <Twitter className="w-6 h-6 text-primary" />
        </a>
        <a href="mailto:harleen.johal31@gmail.com">
          <Mail className="w-6 h-6 text-primary" />
        </a>
      </div>
    
      {/* Button for Resume */}
      <div className="flex items-center justify-center w-full max-w-lg mt-4 text-sm font-thin">
        <Link href="https://drive.google.com/file/d/1M8GtQFIpglYXBtkXo-aeDi8QxS5C-KZY/view?usp=sharing" passHref>
          <Button
            variant="primary"
            className="block p-3 transition-transform transform hover:scale-105 md:hidden"
            aria-label="View Resume"
          >
            <BriefcaseIcon className="w-6 h-6 text-white" />
          </Button>
        </Link>
      </div>
    </div>
    


    );
};

export default ProfileName;
