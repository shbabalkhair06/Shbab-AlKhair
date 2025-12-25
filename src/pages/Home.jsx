import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../data/content';

export default function Home() {
  const { language } = useContext(LanguageContext);
  const homeContent = content[language].home;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-32 md:py-40">
        {/* Heart Icon */}
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

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          {homeContent.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
          {homeContent.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          {homeContent.description}
        </p>

        {/* CTA Slogan */}
        <p className="text-2xl md:text-3xl font-bold mb-10 drop-shadow-lg">
          {homeContent.cta}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/join" className="btn-secondary text-lg px-8 py-4">
            {homeContent.joinBtn}
          </Link>
          <Link to="/initiatives" className="btn-accent text-lg px-8 py-4">
            {homeContent.initiativesBtn}
          </Link>
        </div>
      </div>
    </div>
  );
}

