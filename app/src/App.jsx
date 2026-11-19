import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CalificameButton from './components/layout/CalificameButton';
import MediaModal from './components/media/MediaModal';

// Pages
import HomePage from './pages/HomePage';
import GradePage from './pages/GradePage';
import WarmupsPage from './pages/WarmupsPage';
import MinibooksPage from './pages/MinibooksPage';
import DigitalModulesPage from './pages/DigitalModulesPage';
import AbcMousePage from './pages/AbcMousePage';
import OthersPage from './pages/OthersPage';
import ContactPage from './pages/ContactPage';
import CreditsPage from './pages/CreditsPage';

// Data
import primeroData from './data/primero.json';
import segundoData from './data/segundo.json';
import terceroData from './data/tercero.json';
import cuartoData from './data/cuarto.json';
import quintoData from './data/quinto.json';
import sextoData from './data/sexto.json';

const GRADE_DATA_MAP = {
  primero: primeroData,
  segundo: segundoData,
  tercero: terceroData,
  cuarto: cuartoData,
  quinto: quintoData,
  sexto: sextoData
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'index';
  });

  const [activeMedia, setActiveMedia] = useState(null);

  // Sync hash with browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMedia = (mediaItem) => {
    setActiveMedia(mediaItem);
  };

  const handleCloseModal = () => {
    setActiveMedia(null);
  };

  const renderContent = () => {
    if (currentPage === 'index') {
      return <HomePage onSelectMedia={handleSelectMedia} />;
    }
    if (GRADE_DATA_MAP[currentPage]) {
      return (
        <GradePage
          gradeData={GRADE_DATA_MAP[currentPage]}
          onSelectMedia={handleSelectMedia}
        />
      );
    }
    switch (currentPage) {
      case 'warmups':
        return <WarmupsPage onSelectMedia={handleSelectMedia} />;
      case 'minibooks':
        return <MinibooksPage />;
      case 'digital_modules':
        return <DigitalModulesPage />;
      case 'ABCmouse':
        return <AbcMousePage onSelectMedia={handleSelectMedia} />;
      case 'otros':
        return <OthersPage onSelectMedia={handleSelectMedia} />;
      case 'contacto':
        return <ContactPage />;
      case 'creditos':
        return <CreditsPage />;
      default:
        return <HomePage onSelectMedia={handleSelectMedia} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E5EFEA] text-[#212529]">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1140px] w-full mx-auto px-4 pt-20 pb-8">
        {renderContent()}
      </main>

      {/* Floating Rating Button */}
      <CalificameButton />

      {/* Media Modal */}
      <MediaModal
        media={activeMedia}
        onClose={handleCloseModal}
        modalTitle="Recurso"
      />

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
