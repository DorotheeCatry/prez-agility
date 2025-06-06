import React from 'react';
import { Film } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Film size={32} className="text-[var(--color-primary)]" />
          <h1 className="text-xl md:text-2xl font-display font-bold">
            <span className="text-[var(--color-primary)]">Ciné</span>Agile
          </h1>
        </div>
        
        <div className="hidden md:block">
          <span className="text-sm text-[var(--color-secondary)]">
            Projet de Certification Agile
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;