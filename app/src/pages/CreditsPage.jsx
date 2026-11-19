import React from 'react';
import creditsData from '../data/creditos.json';

export default function CreditsPage() {
  const images = creditsData.images || [
    { src: '/img/credit.png', alt: 'Créditos 1' },
    { src: '/img/credit2.png', alt: 'Créditos 2' }
  ];

  return (
    <div className="space-y-6 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {images.map((img, idx) => {
          const src = img.src.startsWith('/') ? img.src : `/${img.src}`;
          return (
            <div key={idx} className="mb-4">
              <img
                src={src}
                alt={img.alt || 'Créditos'}
                className="w-full h-auto rounded"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
