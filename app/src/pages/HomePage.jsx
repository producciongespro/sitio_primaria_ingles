import React from 'react';
import Carousel from '../components/ui/Carousel';
import ResourceCard from '../components/ui/ResourceCard';
import indexData from '../data/index.json';

export default function HomePage({ onSelectMedia }) {
  const slides = indexData.carouselSlides && indexData.carouselSlides.length > 0
    ? indexData.carouselSlides
    : [
        { src: '/img/carrusel/carrusel1.jpg', alt: 'First slide' },
        { src: '/img/carrusel/carrusel2.jpg', alt: 'Second slide' },
        { src: '/img/carrusel/carrusel3.jpg', alt: 'Third slide' }
      ];

  const tipsCards = indexData.cards || [];

  return (
    <div className="space-y-6">
      {/* Titulo de la página */}
      <h1 className="my-4 text-3xl font-medium text-[#D269D2]">
        {indexData.heading || 'Primary'}
      </h1>

      {/* Carrusel */}
      <div className="w-full">
        <Carousel slides={slides} />
      </div>

      <br />

      {/* Seccion Tips */}
      <div>
        <h3 className="text-2xl font-medium text-[#D269D2] mb-4">
          ABCmouse Aprende Inglés Tips
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tipsCards.map((card) => (
            <div key={card.id} className="mb-6">
              <ResourceCard
                card={card}
                onSelectMedia={onSelectMedia}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
