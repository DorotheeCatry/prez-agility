import React from 'react';
import { Film } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <Film size={36} className="text-[var(--color-primary)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-[var(--color-primary)] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold">
              <span className="gradient-text">Projet</span>
              <span className="text-white ml-1">Agile IA</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="glass px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm text-white/80 font-medium">
                Rapport Agile - Prédiction Films | 
                <span className="text-[var(--color-secondary)] ml-1">Dorothée Catry</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;