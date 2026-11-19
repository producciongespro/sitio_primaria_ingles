import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import abcData from '../data/ABCmouse.json';

export default function AbcMousePage({ onSelectMedia }) {
  const cards = abcData.cards || [];

  return (
    <div className="space-y-6">
      {/* Titulo de la página */}
      <h1 className="my-4 text-3xl font-medium text-[#D269D2]">
        {abcData.heading || 'ABCmouse'}
      </h1>

      {abcData.subtitle && (
        <h2 className="text-2xl font-medium text-[#D269D2]">
          {abcData.subtitle}
        </h2>
      )}

      {abcData.intro && (
        <p className="intro text-[#545352] text-base leading-relaxed mb-4">
          {abcData.intro}
        </p>
      )}

      {/* Guía: Understanding the App */}
      <div className="mb-6">
        <div className="bg-[#93BCB5] rounded border border-[#82aba4] overflow-hidden shadow-sm p-4">
          <a
            href="/data/ABCmouse/understanding_the_app.docx"
            download
            className="block text-center hover:opacity-90 transition-opacity"
          >
            <h4 className="text-[#12724C] font-semibold text-xl">
              Understanding the App (Click to download Guide)
            </h4>
          </a>
        </div>
      </div>

      {/* Sección Resources */}
      <h3 className="text-2xl font-medium text-[#D269D2] mb-4">Resources</h3>

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
