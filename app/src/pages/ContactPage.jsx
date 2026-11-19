import React from 'react';

export default function ContactPage() {
  return (
    <div className="space-y-6" id="contacto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6 text-[#545352]">
        {/* Comisión Productora */}
        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-[#D269D2]">
            Comisión Productora
          </h2>
          <h4 className="text-lg font-medium text-[#12724C]">
            Asesoría Nacional de Inglés
          </h4>
          <p className="text-base leading-relaxed">
            Yadira Barrantes Gamboa <br />
            Marianella Granados Sirias <br />
            Anabelle Venegas Fernández
          </p>
          <p className="text-base leading-relaxed">
            Departamento de Primero y Segundo Ciclos, <br />
            Dirección de Desarrollo Curricular.
          </p>
          <p className="text-base">Edificio Raventós</p>
          <p className="text-base">Teléfonos: 2221-7685, ext:2557</p>
        </div>

        {/* Desarrolladores */}
        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-[#D269D2]">
            Desarrolladores
          </h2>
          <h4 className="text-lg font-medium text-[#12724C]">
            Asesores de Informatica Educativa
          </h4>
          <p className="text-base leading-relaxed">
            Patricia Hernández Conejo <br />
            Ana Teresa Araya Salazar <br />
            Óscar Pérez Ramírez <br />
            Luis Chacón Campos
          </p>
          <h4 className="text-lg font-medium text-[#12724C]">
            Asesora nacional de Inglés
          </h4>
          <p className="text-base">Katherine Williams Jiménez</p>
          <p className="text-base">Correo: gespro@mep.go.cr</p>
          <p className="text-base">Teléfonos: 22553525, ext:4622</p>
        </div>
      </div>
    </div>
  );
}
