import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { BriefcaseIcon, Github, Instagram, User } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="flex flex-col items-center font-sans text-3xl text-highlight">
         My portfolio
            <div className="flex items-center justify-between text-sm font-thin">
            
                <Link
                    className="block md:hidden"
                   href="https://docs.google.com/document/d/1hdVnyaQDbpVdiPHJuFT9vpYgipOzdafxI54hVcBjJpI/edit?usp=sharing"
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
