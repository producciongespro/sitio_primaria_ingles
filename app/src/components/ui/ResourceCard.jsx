import React from 'react';

export default function ResourceCard({ card, onSelectMedia }) {
  const { title, subtitle, description, mediaType, mediaUrl, thumbnail, alt, link } = card;

  // Normalize thumbnail path
  const normalizedThumb = thumbnail && !thumbnail.startsWith('http') && !thumbnail.startsWith('/')
    ? `/${thumbnail}`
    : thumbnail || '/img/img_documento.png';

  const handleClick = () => {
    if (mediaUrl) {
      onSelectMedia({
        tipo: mediaType,
        ruta: mediaUrl,
        title: title || subtitle || 'Recurso',
        description: description
      });
    } else if (link && link.href) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#93BCB5] rounded border border-[#82aba4] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer select-none"
    >
      {/* Top Image */}
      <div className="w-full bg-[#93BCB5] overflow-hidden flex items-center justify-center">
        <img
          src={normalizedThumb}
          alt={alt || title || 'Recurso educativo'}
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.src = mediaType === 'mp3' ? '/img/audio.png' : '/img/img_documento.png';
          }}
        />
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {title && (
            <h4 className="text-[#12724C] font-semibold text-lg mb-1 leading-snug">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className="text-[#545352] text-sm font-bold mb-1">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-[#545352] text-xs font-semibold leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
