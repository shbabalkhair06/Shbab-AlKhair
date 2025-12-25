import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function Partners() {
  const { language } = useContext(LanguageContext);
  const partnersContent = content[language].partners;

  return (
    <div className="pt-24 section-padding bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container-custom">
        <SectionTitle
          title={partnersContent.title}
          subtitle={partnersContent.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              {partnersContent.description}
            </p>

            <div className="text-center">
              <Link
                to="/contact"
                className="btn-primary inline-block text-lg px-8 py-4"
              >
                {partnersContent.cta}
              </Link>
            </div>
          </div>

          {/* Partner Logos Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary-dark mb-8 text-center">
              {language === 'ar' ? 'شركاؤنا الحاليون' : 'Our Current Partners'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-32 hover:bg-gray-200 transition-colors"
                >
                  <span className="text-gray-400 text-sm">
                    {language === 'ar' ? 'شعار الشريك' : 'Partner Logo'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

