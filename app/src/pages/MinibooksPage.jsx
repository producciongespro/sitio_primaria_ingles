import React from 'react';
import minibooksData from '../data/minibooks.json';

export default function MinibooksPage() {
  const sections = minibooksData.sections || [];

  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-3">
          <h1 className="my-4 text-3xl font-medium text-[#D269D2]">
            {section.heading || 'Minibooks'}
          </h1>

          {section.subtitle && (
            <h2 className="text-2xl font-medium text-[#D269D2]">
              {section.subtitle}
            </h2>
          )}

          {section.intro && (
            <p className="intro text-[#545352] text-base leading-relaxed">
              {section.intro}
            </p>
          )}

          {section.link && section.image && (
            <div className="my-4">
              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={section.image.startsWith('/') ? section.image : `/${section.image}`}
                  alt={section.alt || 'Minibooks'}
                  className="max-w-full h-auto rounded"
                />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
