import { useContext } from 'react';
import { LanguageContext } from '../App';

export default function SectionTitle({ title, subtitle }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-black">
          {subtitle}
        </p>
      )}
    </div>
  );
}

