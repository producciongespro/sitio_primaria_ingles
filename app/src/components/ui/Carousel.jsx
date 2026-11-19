import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides || slides.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-2">
      {/* Slides Container */}
      <div className="relative min-h-[220px] sm:min-h-[300px] md:min-h-[360px] w-full flex items-center justify-center overflow-hidden">
        {slides.map((slide, idx) => {
          const src = slide.src.startsWith('/') ? slide.src : `/${slide.src}`;
          return (
            <div
              key={idx}
              className={`transition-opacity duration-500 ease-in-out flex items-center justify-center w-full ${
                idx === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden absolute inset-0'
              }`}
            >
              <img
                src={src}
                alt={slide.alt || `Slide ${idx + 1}`}
                className="w-full max-w-[500px] h-auto object-contain mx-auto rounded"
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white/90 transition-opacity focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10 drop-shadow" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white/90 transition-opacity focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10 drop-shadow" />
          </button>

          {/* Indicator bars */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-0.5 w-8 transition-all ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
