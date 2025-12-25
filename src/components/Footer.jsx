import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const footerContent = content[language].footer;
  const navContent = content[language].nav;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'ar'
                ? 'فريق تطوعي شبابي يسعى لخدمة المجتمع من خلال المبادرات الإنسانية والخيرية'
                : 'A youth volunteer team that seeks to serve the community through humanitarian and charitable initiatives'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {navContent.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('initiatives')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {navContent.initiatives}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('join')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {navContent.join}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {navContent.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href={`mailto:${content[language].contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {content[language].contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content[language].contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {content[language].contact.phone}
                </a>
              </li>
              <li>{content[language].contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} {footerContent.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

