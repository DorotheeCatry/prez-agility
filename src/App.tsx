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
  const [activeSection, setActiveSection] = useState('intro');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Header />
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <IntroSection isActive={activeSection === 'intro'} />
        <DiagnosticSection isActive={activeSection === 'diagnostic'} />
        <MethodologieSection isActive={activeSection === 'methodologie'} />
        <DeploiementSection isActive={activeSection === 'deploiement'} />
        <FacilitationSection isActive={activeSection === 'facilitation'} />
        <ConclusionSection isActive={activeSection === 'conclusion'} />
      </main>
    </div>
  );
}

export default App;