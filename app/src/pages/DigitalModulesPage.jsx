import React from 'react';
import digitalData from '../data/digital_modules.json';

export default function DigitalModulesPage() {
  const cards = digitalData.cards || [];

  return (
    <div className="space-y-6">
      {/* Titulo de la página */}
      <h1 className="my-4 text-3xl font-medium text-[#D269D2]">
        {digitalData.heading || 'Digital Learning Modules'}
      </h1>

      {digitalData.subtitle && (
        <h2 className="text-2xl font-medium text-[#D269D2]">
          {digitalData.subtitle}
        </h2>
      )}

      {digitalData.intro && (
        <p className="intro text-[#545352] text-base leading-relaxed mb-4">
          {digitalData.intro}
        </p>
      )}

      {/* Cuadrícula de 2 columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card) => {
          const href = card.link?.href || '#';
          const thumb = card.thumbnail?.startsWith('/') ? card.thumbnail : `/${card.thumbnail}`;
          return (
            <div key={card.id} className="portfolio-item mb-4">
              <div className="bg-[#93BCB5] rounded border border-[#82aba4] overflow-hidden shadow-sm h-full">
                <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={thumb}
                    alt={card.alt || 'Digital Module'}
                    className="w-full h-auto object-cover"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
