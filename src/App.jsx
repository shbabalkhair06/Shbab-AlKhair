import { createContext, useState, useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { content } from './data/content';
import SectionTitle from './components/SectionTitle';
import InitiativeCard from './components/InitiativeCard';
import { FORMSPREE_ENDPOINT } from './config/formspree';

export const LanguageContext = createContext();

// Home Section Component
function HomeSection() {
  const { language } = useContext(LanguageContext);
  const homeContent = content[language].home;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary/85"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 py-32 md:py-40">
        <div className="mb-6 flex justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="w-16 h-16 text-secondary"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          {homeContent.title}
        </h1>

        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
          {homeContent.subtitle}
        </p>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          {homeContent.description}
        </p>

        <p className="text-2xl md:text-3xl font-bold mb-10 drop-shadow-lg">
          {homeContent.cta}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('join')}
            className="btn-secondary text-lg px-8 py-4"
          >
            {homeContent.joinBtn}
          </button>
          <button
            onClick={() => scrollToSection('initiatives')}
            className="btn-accent text-lg px-8 py-4"
          >
            {homeContent.initiativesBtn}
          </button>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title={aboutContent.title} />

        <div className="max-w-4xl mx-auto">
          {/* Team Photo with Text Overlay - تحت العنوان مباشرة */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary/20 mb-8">
            <div className="relative">
              <img
                src="/images/team-photo.jpg"
                alt={language === 'ar' ? 'صورة الفريق' : 'Team Photo'}
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex items-end">
                <div className="w-full p-6 md:p-10 text-white">
                  <p className="text-lg md:text-xl leading-relaxed mb-4 font-medium drop-shadow-lg">
                    {aboutContent.description}
                  </p>
                  <p className="text-base md:text-lg leading-relaxed drop-shadow-lg opacity-95">
                    {aboutContent.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 border-2 border-primary/20">
            <h3 className="text-3xl font-bold text-primary-dark mb-8 text-center">
              {aboutContent.values.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 border border-primary/20"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <p className="text-lg font-semibold text-black">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Vision & Mission Section
function VisionMissionSection() {
  const { language } = useContext(LanguageContext);
  const visionContent = content[language].vision;

  return (
    <section id="vision" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title={visionContent.title} />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 transform hover:scale-105 transition-all duration-300 border-2 border-primary/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                {visionContent.vision.title}
              </h3>
            </div>
            <p className="text-lg md:text-xl text-black leading-relaxed text-center">
              {visionContent.vision.text}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 transform hover:scale-105 transition-all duration-300 border-2 border-primary/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                {visionContent.mission.title}
              </h3>
            </div>
            <p className="text-lg md:text-xl text-black leading-relaxed text-center">
              {visionContent.mission.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Initiatives Section
function InitiativesSection() {
  const { language } = useContext(LanguageContext);
  const initiativesContent = content[language].initiatives;

  const initiatives = [
    {
      icon: '🕌',
      title: initiativesContent.initiative1.title,
      description: initiativesContent.initiative1.description,
      image: '/images/م1.jpeg', // إفطار لأيتام
    },
    {
      icon: '🍽️',
      title: initiativesContent.initiative2.title,
      description: initiativesContent.initiative2.description,
      image: '/images/م2.jpeg', // التطوع عند عزوني
    },
    {
      icon: '👕',
      title: initiativesContent.initiative3.title,
      description: initiativesContent.initiative3.description,
      image: '/images/م3.jpeg', // التطوع في بنك الملابس
    },
    {
      icon: '🤲',
      title: initiativesContent.initiative4.title,
      description: initiativesContent.initiative4.description,
      image: '/images/م4.jpeg', // التطوع عند وقف ثريد
    },
    {
      icon: '🏠',
      title: initiativesContent.initiative5.title,
      description: initiativesContent.initiative5.description,
      image: '/images/م5.jpeg', // التطوع عند دار مسنين
    },
  ];

  return (
    <section id="initiatives" className="section-padding bg-white">
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
    </section>
  );
}

// Join Us Section
function JoinUsSection() {
  const { language } = useContext(LanguageContext);
  const joinContent = content[language].join;
  const formContent = joinContent.form;

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    city: '',
    email: '',
    experience: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.age.trim()) {
      newErrors.age = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }
    if (!formData.reason.trim()) {
      newErrors.reason = language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setSubmitError('');

    // Prepare form data for Formspree
    const formPayload = {
      _to: 'shababalkhair06@gmail.com',
      _subject: language === 'ar' 
        ? 'طلب انضمام جديد - فريق شباب الخير'
        : 'New Join Request - Shabab Al-Khair',
      fullName: formData.fullName,
      age: formData.age,
      phone: formData.phone,
      city: formData.city,
      email: formData.email,
      experience: formData.experience === 'yes' 
        ? (language === 'ar' ? 'نعم' : 'Yes')
        : formData.experience === 'no'
        ? (language === 'ar' ? 'لا' : 'No')
        : (language === 'ar' ? 'غير محدد' : 'Not specified'),
      reason: formData.reason,
    };

    // Send to Formspree
    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formPayload),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setFormData({
            fullName: '',
            age: '',
            phone: '',
            city: '',
            email: '',
            experience: '',
            reason: '',
          });
          setErrors({});
          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        } else {
          throw new Error('Failed to send form');
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setSubmitError(
          language === 'ar'
            ? 'حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.'
            : 'An error occurred while submitting the form. Please try again.'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (submitted) {
    return (
      <section id="join" className="section-padding bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            {joinContent.success}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="section-padding bg-white min-h-screen">
      <div className="container-custom">
        <SectionTitle
          title={joinContent.title}
          subtitle={joinContent.subtitle}
        />

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-2 border-primary/20"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-black font-semibold mb-2">
                  {formContent.fullName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">
                  {formContent.age} <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black ${
                    errors.age ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">
                  {formContent.phone} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">
                  {formContent.city} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">
                  {formContent.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">
                  {formContent.experience}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="yes"
                      checked={formData.experience === 'yes'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-black">{formContent.yes}</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="no"
                      checked={formData.experience === 'no'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-black">{formContent.no}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">
                  {formContent.reason} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                )}
              </div>

              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                  <p className="text-sm">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`btn-primary w-full text-lg py-4 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                  </span>
                ) : (
                  formContent.submit
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const { language } = useContext(LanguageContext);
  const galleryContent = content[language].gallery;

  // صور الفريق من مجلد images - جميع الصور المتاحة
  const images = [
    { id: 1, url: '/images/م1.jpeg', alt: galleryContent.subtitle + ' - 1' },
    { id: 2, url: '/images/م2.jpeg', alt: galleryContent.subtitle + ' - 2' },
    { id: 3, url: '/images/م3.jpeg', alt: galleryContent.subtitle + ' - 3' },
    { id: 4, url: '/images/م4.jpeg', alt: galleryContent.subtitle + ' - 4' },
    { id: 5, url: '/images/م5.jpeg', alt: galleryContent.subtitle + ' - 5' },
    { id: 6, url: '/images/111.jpeg', alt: galleryContent.subtitle + ' - 6' },
    { id: 7, url: '/images/222.jpeg', alt: galleryContent.subtitle + ' - 7' },
    { id: 8, url: '/images/333.jpeg', alt: galleryContent.subtitle + ' - 8' },
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title={galleryContent.title}
          subtitle={galleryContent.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { language } = useContext(LanguageContext);
  const contactContent = content[language].contact;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title={contactContent.title}
          subtitle={contactContent.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">
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
                    <h4 className="font-semibold text-black mb-1">
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
                    <h4 className="font-semibold text-black mb-1">
                      {language === 'ar' ? 'الموقع' : 'Location'}
                    </h4>
                    <p className="text-black">{contactContent.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                {contactContent.social}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/youth.the.g00d?igsh=MXJocm5ka2ZldGJqaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl">📷</div>
                  <span className="font-semibold">Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/share/17Nhs4f4xF/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl">👥</div>
                  <span className="font-semibold">Facebook</span>
                </a>

                <a
                  href="https://chat.whatsapp.com/GEC9g8gKOp85umVYumCph2?mode=hqrc"
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
    </section>
  );
}

// Partners Section
function PartnersSection() {
  const { language } = useContext(LanguageContext);
  const partnersContent = content[language].partners;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title={partnersContent.title}
          subtitle={partnersContent.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8 border-2 border-primary/20">
            <p className="text-lg md:text-xl text-black leading-relaxed text-center mb-8">
              {partnersContent.description}
            </p>

            <div className="text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-block text-lg px-8 py-4"
              >
                {partnersContent.cta}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-2 border-primary/20">
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
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ar';
  });

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <HomeSection />
          <AboutSection />
          <VisionMissionSection />
          <InitiativesSection />
          <JoinUsSection />
          <GallerySection />
          <ContactSection />
          <PartnersSection />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
