import { FC } from 'react';
import Card from '../ui/Card';
import { ISectionCardData } from '../utils/Data';

interface CardSectionProps {
  title: string;
  version?: string;
  data: ISectionCardData[];
}

const CardSection: FC<CardSectionProps> = ({ title, version, data }) => {
  return (
    <section className="grid gap-5 p-5 px-6 md:p-0 md:px-16 lg:px-24">
      <div className="text-xl font-bold text-highlight">{title}</div>
      {/* Grid layout: 2 cards per row on mobile, then 3+ columns for larger screens */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((card) => (
          <Card
            href={card.href}
            key={card.id}
            title={card.title}
            src={card.src}
            exp={card.exp}
            snippetCount={card.snippet}
            
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
