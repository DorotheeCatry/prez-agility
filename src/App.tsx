import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import IntroSection from './sections/IntroSection';
import DiagnosticSection from './sections/DiagnosticSection';
import MethodologieSection from './sections/MethodologieSection';
import DeploiementSection from './sections/DeploiementSection';
import FacilitationSection from './sections/FacilitationSection';
import ConclusionSection from './sections/ConclusionSection';

function App() {
  const [activePage, setActivePage] = useState('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSpotlightMode, setIsSpotlightMode] = useState(false);

  const handlePageChange = (pageId: string) => {
    if (pageId === activePage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(pageId);
      setIsTransitioning(false);
    }, 300);
  };

  const renderActivePage = () => {
    const pageProps = { isActive: !isTransitioning };
    
    switch (activePage) {
      case 'intro':
        return <IntroSection {...pageProps} />;
      case 'diagnostic':
        return <DiagnosticSection {...pageProps} />;
      case 'methodologie':
        return <MethodologieSection {...pageProps} />;
      case 'deploiement':
        return <DeploiementSection {...pageProps} />;
      case 'facilitation':
        return <FacilitationSection {...pageProps} />;
      case 'conclusion':
        return <ConclusionSection {...pageProps} />;
      default:
        return <IntroSection {...pageProps} />;
    }
  };

  // Suivi de la position de la souris pour les effets de présentation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Mise à jour des variables CSS pour les effets
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const pages = ['intro', 'diagnostic', 'methodologie', 'deploiement', 'facilitation', 'conclusion'];
      const currentIndex = pages.indexOf(activePage);
      
      if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
        handlePageChange(pages[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePageChange(pages[currentIndex - 1]);
      } else if (e.key === 's' || e.key === 'S') {
        // Toggle spotlight mode avec la touche S
        setIsSpotlightMode(!isSpotlightMode);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activePage, isSpotlightMode]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden ${isSpotlightMode ? 'spotlight-mode' : ''}`}>
      <Header />
      <Navigation activePage={activePage} onPageChange={handlePageChange} />
      
      <main className={`transition-all duration-500 ease-in-out ${
        isTransitioning ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'
      }`}>
        {renderActivePage()}
      </main>

      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Laser pointer effect */}
      <div 
        className="laser-pointer"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          display: isSpotlightMode ? 'block' : 'none'
        }}
      />

      {/* Instructions de présentation */}
      <div className="fixed bottom-4 left-4 z-50 glass p-3 rounded-lg border border-white/20 text-xs text-white/70">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
          <span>Mode Présentation</span>
        </div>
        <div>Appuyez sur <kbd className="px-1 py-0.5 bg-white/20 rounded text-white">S</kbd> pour le mode spotlight</div>
        <div>Utilisez <kbd className="px-1 py-0.5 bg-white/20 rounded text-white">←</kbd> <kbd className="px-1 py-0.5 bg-white/20 rounded text-white">→</kbd> pour naviguer</div>
      </div>
    </div>
  );
}

export default App;