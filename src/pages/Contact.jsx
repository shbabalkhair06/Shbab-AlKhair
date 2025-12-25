import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const contactContent = content[language].contact;

  return (
    <div className="pt-24 section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <SectionTitle
          title={contactContent.title}
          subtitle={contactContent.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <a
                      href={`mailto:${contactContent.email}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {contactContent.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">
                      {language === 'ar' ? 'الهاتف' : 'Phone'}
                    </h4>
                    <a
                      href={`tel:${contactContent.phone}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {contactContent.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">
                      {language === 'ar' ? 'الموقع' : 'Location'}
                    </h4>
                    <p className="text-gray-600">{contactContent.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                {contactContent.social}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl">📷</div>
                  <span className="font-semibold">Instagram</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl">👥</div>
                  <span className="font-semibold">Facebook</span>
                </a>

                <a
                  href="https://wa.me/9627XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl">💬</div>
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

