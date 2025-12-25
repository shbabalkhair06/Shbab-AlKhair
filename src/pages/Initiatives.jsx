import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import InitiativeCard from '../components/InitiativeCard';

export default function Initiatives() {
  const { language } = useContext(LanguageContext);
  const initiativesContent = content[language].initiatives;

  const initiatives = [
    {
      icon: '🎁',
      title: initiativesContent.childHappiness.title,
      description: initiativesContent.childHappiness.description,
      image: '/images/initiatives/iftar_orphans.jpg',
    },
    {
      icon: '🤲',
      title: initiativesContent.foodBaskets.title,
      description: initiativesContent.foodBaskets.description,
      image: '/images/initiatives/ezouti_restaurant.jpg',
    },
    {
      icon: '🧸',
      title: initiativesContent.orphanSupport.title,
      description: initiativesContent.orphanSupport.description,
      image: '/images/initiatives/clothing_bank.jpg',
    },
    {
      icon: '🏥',
      title: initiativesContent.humanitarianVisits.title,
      description: initiativesContent.humanitarianVisits.description,
      image: '/images/initiatives/threed_stand.jpg',
    },
    {
      icon: '📚',
      title: initiativesContent.education.title,
      description: initiativesContent.education.description,
      image: '/images/initiatives/nursing_home.jpg',
    },
  ];

  return (
    <div className="pt-24 section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title={initiativesContent.title}
          subtitle={initiativesContent.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              icon={initiative.icon}
              title={initiative.title}
              description={initiative.description}
              image={initiative.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

