import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const { language } = useContext(LanguageContext);
  const aboutContent = content[language].about;

  const values = [
    { icon: '🤲', text: aboutContent.values.giving },
    { icon: '👥', text: aboutContent.values.teamwork },
    { icon: '🌍', text: aboutContent.values.responsibility },
    { icon: '🔍', text: aboutContent.values.transparency },
    { icon: '❤️', text: aboutContent.values.dedication },
  ];

  return (
    <div className="pt-24 section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle title={aboutContent.title} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {aboutContent.description}
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {aboutContent.mission}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary-dark mb-8 text-center">
              {aboutContent.values.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-primary-light/20 rounded-lg hover:bg-primary-light/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <p className="text-lg font-semibold text-gray-800">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

