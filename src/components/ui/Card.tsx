import Image from 'next/image';
import { FC } from 'react';
import List from './List';
import { Code, History } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
    title: string;
    snippetCount: string;
    exp: string;
    src: string;
   
    href?: string;
}

const Card: FC<CardProps> = ({
    title,
    snippetCount,
    exp,
    src,
    href,
   
}) => {
    return (
        <div className="flex flex-col gap-3">
            <Link target="_blank" href={href || '/'}>
                <div className="relative overflow-hidden rounded-lg aspect-video">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                   </div>
            </Link>
            <div className="grid gap-2 px-2">
                <div className="font-bold text-highlight">{title}</div>
                <div className="flex gap-2 md:gap-10">
                    <List
                        variant="info"
                        target="_blank"
                        link={href || '/'}
                        sizes="xs"
                    >
                        <Code size={16} />
                        {snippetCount.toLocaleString()}
                    </List>
                    <List
                        variant="info"
                        target="_blank"
                        link={href || '/'}
                        sizes="xs"
                    >
                        <History size={16} />
                        {exp}
                    </List>
                </div>
            </div>
        </div>
    );
};

export default Card;
