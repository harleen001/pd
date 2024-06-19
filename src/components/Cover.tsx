import { FC } from 'react';

import ProfileName from './cover/ProfileName';
import Button from './ui/Button';
import { Briefcase, BriefcaseIcon, Instagram, LucideBriefcase } from 'lucide-react';
import Link from 'next/link';

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
    return (
        <div className="flex w-full bg-no-repeat bg-cover rounded-lg">
            <div className="flex justify-center w-full gap-2 py-5 overflow-hidden md:rounded-ld md:px-10 bg-blur backdrop-filter backdrop-blur-md md:gap-10">
              
                <div className="flex flex-col justify-center gap-4 md:flex-1">
                    <div className="flex items-center justify-between gap-5 ">
                        <ProfileName />
                        <Link
                            className="hidden md:block"
                            target="_blank"
                            href="https://harleensingh.vercel.app"
                        >
                            <Button variant="primary" sizes={'small'}>
                                <BriefcaseIcon />
                                <span className="hidden md:block">
                                    View my Portfolio
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
