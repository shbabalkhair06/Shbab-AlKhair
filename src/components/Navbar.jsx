import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContent = content[language].nav;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-primary'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-14 h-14 bg-secondary-dark rounded-full flex items-center justify-center p-2.5 border-4 border-white shadow-lg">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-white"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {/* Left branch with leaves */}
                <path d="M22 30 L22 45 Q22 50, 25 52 L25 65 Q25 70, 22 72" strokeLinecap="round" fill="none" />
                <circle cx="20" cy="35" r="2" />
                <circle cx="20" cy="45" r="2" />
                <circle cx="20" cy="55" r="2" />
                <circle cx="20" cy="65" r="2" />
                
                {/* Right branch with leaves */}
                <path d="M78 30 L78 45 Q78 50, 75 52 L75 65 Q75 70, 78 72" strokeLinecap="round" fill="none" />
                <circle cx="80" cy="35" r="2" />
                <circle cx="80" cy="45" r="2" />
                <circle cx="80" cy="55" r="2" />
                <circle cx="80" cy="65" r="2" />
                
                {/* Left hand (palm up) */}
                <path d="M38 55 L38 48 Q38 45, 40 43 Q42 41, 45 42 L45 50 Q45 53, 43 55 Q41 57, 38 55 Z" />
                <path d="M40 50 L40 48" strokeLinecap="round" />
                <path d="M42 50 L42 48" strokeLinecap="round" />
                
                {/* Right hand (palm up) */}
                <path d="M62 55 L62 48 Q62 45, 60 43 Q58 41, 55 42 L55 50 Q55 53, 57 55 Q59 57, 62 55 Z" />
                <path d="M60 50 L60 48" strokeLinecap="round" />
                <path d="M58 50 L58 48" strokeLinecap="round" />
                
                {/* Star/sparkle above */}
                <path d="M50 22 L51 26 L55 26 L52 28 L53 32 L50 30 L47 32 L48 28 L45 26 L49 26 Z" />
              </svg>
            </div>
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-primary-dark' : 'text-white'
              }`}
            >
              {language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair'}
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.about}
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.vision}
            </button>
            <button
              onClick={() => scrollToSection('initiatives')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.initiatives}
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.join}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.gallery}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.contact}
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? 'text-black hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              {navContent.partners}
            </button>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.about}
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.vision}
              </button>
              <button
                onClick={() => scrollToSection('initiatives')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.initiatives}
              </button>
              <button
                onClick={() => scrollToSection('join')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.join}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.gallery}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.contact}
              </button>
              <button
                onClick={() => scrollToSection('partners')}
                className={`font-semibold py-2 text-left ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {navContent.partners}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
