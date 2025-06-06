import React, { useState } from 'react';
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

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'intro':
        return <IntroSection isActive={true} />;
      case 'diagnostic':
        return <DiagnosticSection isActive={true} />;
      case 'methodologie':
        return <MethodologieSection isActive={true} />;
      case 'deploiement':
        return <DeploiementSection isActive={true} />;
      case 'facilitation':
        return <FacilitationSection isActive={true} />;
      case 'conclusion':
        return <ConclusionSection isActive={true} />;
      default:
        return <IntroSection isActive={true} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Header />
      <Navigation activePage={activePage} onPageChange={handlePageChange} />
      
      <main className="transition-all duration-500 ease-in-out">
        {renderActivePage()}
      </main>
    </div>
  );
}

export default App;