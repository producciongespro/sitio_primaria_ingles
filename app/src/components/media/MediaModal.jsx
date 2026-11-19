import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function MediaModal({ media, onClose, modalTitle = 'Recurso' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!media) return null;

  const { tipo, ruta, title, description } = media;

  // Format YouTube URLs to /embed/
  const formatYouTubeUrl = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com/embed/')) return url;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w-]{11})/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  };

  const isAudio = tipo === 'mp3' || (ruta && ruta.endsWith('.mp3'));
  const isYouTube = tipo === 'youtube' || (ruta && (ruta.includes('youtube.com') || ruta.includes('youtu.be')));
  const isPdf = tipo === 'pdf' || (ruta && ruta.toLowerCase().endsWith('.pdf'));
  const isPpt = tipo === 'ppt' || (ruta && (ruta.toLowerCase().endsWith('.ppt') || ruta.toLowerCase().endsWith('.pptx')));

  const normalizedRuta = ruta && !ruta.startsWith('http') && !ruta.startsWith('/') ? `/${ruta}` : ruta;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-md shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#b1d3c6] border-b border-[#9ec4b6]">
          <h5 className="modal-title font-medium text-lg text-slate-800 underline">
            {title || modalTitle}
          </h5>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-black text-2xl font-bold leading-none p-1"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-white min-h-[250px]">
          {isAudio && (
            <div className="w-full text-center space-y-4">
              <audio 
                controls 
                autoPlay 
                preload="auto" 
                src={normalizedRuta} 
                className="w-full max-w-md mx-auto focus:outline-none"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          )}

          {isYouTube && (
            <div className="w-full aspect-video bg-black rounded">
              <iframe
                src={formatYouTubeUrl(ruta)}
                title={title || "YouTube video"}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {isPdf && (
            <div className="w-full h-[500px] flex flex-col bg-white">
              <iframe
                src={normalizedRuta}
                title={title || "Documento PDF"}
                className="w-full flex-1 border border-slate-200"
              />
            </div>
          )}

          {isPpt && (
            <div className="text-center p-6 space-y-4">
              <p className="text-slate-700 font-medium">
                Presentación interactiva de PowerPoint
              </p>
              <a
                href={normalizedRuta}
                download
                className="inline-block px-5 py-2.5 bg-[#12724C] text-white rounded font-medium hover:bg-[#0e5c3d] transition-colors"
              >
                Descargar Presentación (.pptx)
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          {normalizedRuta && (
            <a
              href={normalizedRuta}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#12724C] hover:underline font-semibold"
            >
              Click here to download / open in new window
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
