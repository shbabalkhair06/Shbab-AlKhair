import { useContext } from 'react';
import { LanguageContext } from '../App';

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 font-semibold backdrop-blur-sm"
      aria-label="Toggle language"
    >
      {language === 'ar' ? 'EN' : 'عربي'}
    </button>
  );
}

