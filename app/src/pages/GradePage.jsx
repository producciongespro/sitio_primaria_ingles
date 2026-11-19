import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';

export default function GradePage({ gradeData, onSelectMedia }) {
  const {
    id,
    heading,
    subtitle,
    intro,
    guideCard,
    downloadGuides = [],
    cards = []
  } = gradeData || {};

  return (
    <div className="space-y-6">
      {/* Titulo de la página */}
      <h1 className="my-4 text-3xl font-medium text-[#D269D2]">
        {subtitle || heading || 'Grade'}
      </h1>

      {/* Introducción */}
      {intro && (
        <p className="intro text-[#545352] text-base leading-relaxed mb-4">
          {intro}
        </p>
      )}

      {/* Guía Pedagógica Principal si existe */}
      {guideCard && (
        <div className="mb-6">
          <div className="bg-[#93BCB5] rounded border border-[#82aba4] overflow-hidden shadow-sm cursor-pointer mb-2 max-w-full">
            <img
              src={guideCard.thumbnail.startsWith('/') ? guideCard.thumbnail : `/${guideCard.thumbnail}`}
              alt={guideCard.title || 'Teacher Guide'}
              className="w-full h-auto object-cover"
              onClick={() => {
                onSelectMedia({
                  tipo: guideCard.mediaType || 'pdf',
                  ruta: guideCard.mediaUrl,
                  title: guideCard.title || 'Guía Pedagógica',
                  description: ''
                });
              }}
            />
          </div>
          {downloadGuides.length > 0 && (
            <div className="mt-2 space-y-1">
              {downloadGuides.map((guide, idx) => (
                <h3 key={idx} className="text-[#D269D2] text-xl font-medium">
                  <a
                    href={guide.href.startsWith('/') ? guide.href : `/${guide.href}`}
                    download
                    className="text-[#D269D2] hover:underline"
                  >
                    {guide.label || 'Click here to download Word Document'}
                  </a>
                </h3>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tarjetas de recursos en cuadrícula de 4 columnas */}
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
