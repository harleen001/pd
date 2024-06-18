import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Github, Instagram, User } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="flex flex-col text-3xl font-bold text-highlight">
            Oh, hello there 👋
            <div className="flex items-center justify-between text-sm font-thin">
            👨‍🎓 I’m Harleen Singh, a 20 year-old undergrad student.
                <Link
                    className="block md:hidden"
                    href="https://instagram.com/ezSnippet"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Github />
                    </Button>
                </Link>

               
                
            </div>
            <div className="flex items-center justify-between text-sm font-thin">
            ⚒️ I mainly work with Web, UI and Animations on a daily basis.</div>
        
  <div className="flex items-center justify-between text-sm font-thin">
  🏡 Currently living in the beautiful city of Punjab in India.
</div>

</div>


    );
};

export default ProfileName;
