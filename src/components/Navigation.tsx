import React from 'react';
import { ChevronRight, Home, FileSearch, Settings, Package, Users, CheckCircle } from 'lucide-react';

interface NavigationProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, onPageChange }) => {
  const pages = [
    { 
      id: 'intro', 
      label: 'Introduction', 
      icon: Home,
      description: 'Présentation du projet'
    },
    { 
      id: 'diagnostic', 
      label: 'C1: Diagnostic', 
      icon: FileSearch,
      description: 'Analyse du contexte et besoins'
    },
    { 
      id: 'methodologie', 
      label: 'C2: Méthodologie', 
      icon: Settings,
      description: 'Organisation Scrum et rituels'
    },
    { 
      id: 'deploiement', 
      label: 'C3: Product Backlog', 
      icon: Package,
      description: 'Construction et suivi du backlog'
    },
    { 
      id: 'facilitation', 
      label: 'C4: Animation Jury', 
      icon: Users,
      description: 'Script de Sprint Review'
    },
    { 
      id: 'conclusion', 
      label: 'Bilan Agile', 
      icon: CheckCircle,
      description: 'Enseignements et perspectives'
    },
  ];

  return (
    <>
      {/* Navigation desktop - sidebar */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-[var(--color-surface)]/90 backdrop-blur-sm rounded-r-lg p-4 shadow-xl border border-[var(--color-text)]/10">
          <ul className="space-y-3">
            {pages.map((page) => {
              const IconComponent = page.icon;
              return (
                <li key={page.id}>
                  <button
                    onClick={() => onPageChange(page.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 w-full text-left group ${
                      activePage === page.id
                        ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                        : 'text-[var(--color-text)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'
                    }`}
                  >
                    <IconComponent 
                      size={20} 
                      className={`${
                        activePage === page.id 
                          ? 'text-white' 
                          : 'text-[var(--color-text)]/50 group-hover:text-[var(--color-primary)]'
                      }`} 
                    />
                    <div className="flex-1">
                      <div className={`text-sm font-semibold ${
                        activePage === page.id ? 'text-white' : ''
                      }`}>
                        {page.label}
                      </div>
                      <div className={`text-xs ${
                        activePage === page.id 
                          ? 'text-white/80' 
                          : 'text-[var(--color-text)]/50'
                      }`}>
                        {page.description}
                      </div>
                    </div>
                    {activePage === page.id && (
                      <ChevronRight size={16} className="text-white" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Navigation mobile - top bar */}
      <nav className="fixed top-16 left-0 right-0 z-40 lg:hidden bg-[var(--color-surface)]/95 backdrop-blur-sm border-b border-[var(--color-text)]/10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-3 gap-2">
            {pages.map((page) => {
              const IconComponent = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    activePage === page.id
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'
                  }`}
                >
                  <IconComponent size={16} />
                  <span className="text-sm font-medium">{page.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Pagination controls */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex gap-2">
          <button
            onClick={() => {
              const currentIndex = pages.findIndex(p => p.id === activePage);
              if (currentIndex > 0) {
                onPageChange(pages[currentIndex - 1].id);
              }
            }}
            disabled={pages.findIndex(p => p.id === activePage) === 0}
            className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <button
            onClick={() => {
              const currentIndex = pages.findIndex(p => p.id === activePage);
              if (currentIndex < pages.length - 1) {
                onPageChange(pages[currentIndex + 1].id);
              }
            }}
            disabled={pages.findIndex(p => p.id === activePage) === pages.length - 1}
            className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Page indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
        <div className="bg-[var(--color-surface)]/90 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--color-text)]/10">
          <div className="flex gap-2">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activePage === page.id
                    ? 'bg-[var(--color-primary)] scale-125'
                    : 'bg-[var(--color-text)]/30 hover:bg-[var(--color-primary)]/50'
                }`}
                title={page.label}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;