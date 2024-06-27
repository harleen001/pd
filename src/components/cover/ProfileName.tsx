import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { BriefcaseIcon, Github, Instagram, User } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="flex flex-col font-sans text-3xl text-highlight">
         My portfolio
            <div className="flex items-center justify-between text-sm font-thin">
            
                <Link
                    className="block md:hidden"
                   href="https://drive.google.com/file/d/14fV3JKnazdhsaaiYMNnweZxv-zLeHXLC/view?usp=sharing"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <BriefcaseIcon />
                    </Button>
                </Link>

               
                
            </div>
 

</div>



    );
};

export default ProfileName;
