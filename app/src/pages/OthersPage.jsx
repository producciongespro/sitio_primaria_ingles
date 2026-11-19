import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import othersData from '../data/otros.json';

export default function OthersPage({ onSelectMedia }) {
  const cards = othersData.cards || [];

  return (
    <div className="space-y-6">
      {/* Titulo de la página */}
      <h1 className="my-4 text-3xl font-medium text-[#D269D2]">
        {othersData.heading || 'More resources'}
      </h1>

      {/* TEFL Banner */}
      <div className="my-4">
        <a
          href="/data/other/pdf/tefl.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/img/z1.jpg"
            alt="TEFL Document"
            className="max-w-full h-auto rounded"
          />
        </a>
      </div>

      <br />

      {/* Videos Section */}
      <h3 className="text-2xl font-medium text-[#D269D2] mb-4">Videos</h3>

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
