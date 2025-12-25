import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function VisionMission() {
  const { language } = useContext(LanguageContext);
  const visionContent = content[language].vision;

  return (
    <div className="pt-24 section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <SectionTitle title={visionContent.title} />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                {visionContent.vision.title}
              </h3>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              {visionContent.vision.text}
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                {visionContent.mission.title}
              </h3>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              {visionContent.mission.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

