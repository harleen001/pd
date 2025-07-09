import Link from 'next/link';
import { FC } from 'react';
import { Github, Linkedin, Twitter, Mail, BriefcaseIcon } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center md:items-start md:text-left">
      <h1 className="text-xl font-semibold text-highlight md:text-2xl">Harleen Singh</h1>

      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        <a href="https://www.linkedin.com/in/harleen001/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-primary" />
        </a>
        <a href="https://github.com/harleen001" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-primary" />
        </a>
        <a href="https://x.com/devwhoisstuck" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 text-primary" />
        </a>
        <a href="mailto:harleen.johal31@gmail.com">
          <Mail className="w-6 h-6 text-primary" />
        </a>
        <a
          href="https://drive.google.com/file/d/1kyM7zhWQ56wpBLdfNFl7SCwniHJOoRzk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BriefcaseIcon className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default ProfileName;
