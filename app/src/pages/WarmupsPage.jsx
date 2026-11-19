import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import warmupsData from '../data/warmups.json';

export default function WarmupsPage({ onSelectMedia }) {
  const cards = warmupsData.cards || [];

  return (
    <div className="space-y-6">
      {/* Titulo de la página */}
      <h1 className="my-4 text-3xl font-medium text-[#D269D2]">
        {warmupsData.heading || 'Some warm up activities'}
      </h1>

      {/* Banner Principal */}
      <div className="text-center my-4">
        <img
          src="/img/portadas-videos/img3.jpg"
          alt="Warm up activities"
          className="mx-auto max-w-full h-auto"
        />
      </div>

      <br />

      {/* Cuadrícula de 4 columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="portfolio-item mb-4">
            <ResourceCard
              card={card}
              onSelectMedia={onSelectMedia}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
