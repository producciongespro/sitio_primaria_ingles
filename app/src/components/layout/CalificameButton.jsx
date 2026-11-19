import React from 'react';

export default function CalificameButton() {
  return (
    <div 
      className="calificame z-30"
      style={{ position: 'fixed', bottom: '5%', right: '10px' }}
    >
      <a
        id="enlace_calificame"
        title="Calificame"
        target="_blank"
        rel="noopener noreferrer"
        href="https://recursos.mep.go.cr/0_calificame/app/index.html?id_app=21"
      >
        <img
          src="/img/calificame_fullcolor2.png"
          alt="Califica este recurso"
          className="logos logo-instancia ml-2 h-16 w-auto object-contain cursor-pointer"
        />
      </a>
    </div>
  );
}
