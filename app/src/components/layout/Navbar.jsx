import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'primero', label: 'First Grade' },
  { id: 'segundo', label: 'Second' },
  { id: 'tercero', label: 'Third' },
  { id: 'cuarto', label: 'Fourth' },
  { id: 'quinto', label: 'Fifth' },
  { id: 'sexto', label: 'Sixth' },
  { id: 'minibooks', label: 'Minibooks' },
  { id: 'digital_modules', label: 'Digital_Modules' },
  { id: 'warmups', label: 'Warm_ups' },
  { id: 'otros', label: 'Others' },
  { id: 'ABCmouse', label: 'ABCmouse' },
  { id: 'contacto', label: 'Contact' },
  { id: 'creditos', label: 'Credits' },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#38AF9B] text-white fixed top-0 left-0 right-0 z-40 shadow-sm">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between min-h-[56px] py-1">
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-1.5 cursor-pointer select-none shrink-0"
            onClick={() => {
              onNavigate('index');
              setMobileMenuOpen(false);
            }}
          >
            <img 
              id="logo" 
              src="/img/logo.png" 
              alt="Logo MEP" 
              style={{ width: '70px', height: '55px' }}
              className="object-contain"
            />
            <span className="text-white text-[15px] font-normal tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap">
              ...English Curriculum
            </span>
          </div>

          {/* Desktop Navigation (Expanded at lg >= 1024px) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-[12.5px] xl:text-[13.5px] py-1 px-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold underline'
                      : 'text-white/90 hover:text-white font-normal'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile/Tablet Menu Button (Visible only on < lg) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-white hover:bg-black/10 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#38AF9B] border-t border-white/20 px-4 pt-2 pb-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? 'text-white font-bold bg-black/10 rounded'
                    : 'text-white/90 hover:text-white hover:bg-black/5 rounded'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
