import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

export default function Gallery() {
  const { language } = useContext(LanguageContext);
  const galleryContent = content[language].gallery;

  // Placeholder images - replace with actual images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/400/300?random=${i + 1}`,
    alt: `${galleryContent.subtitle} - ${i + 1}`,
  }));

  return (
    <div className="pt-24 section-padding bg-gray-50 min-h-screen">
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
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

