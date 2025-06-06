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
      description: 'Présentation du projet',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      id: 'diagnostic', 
      label: 'C1: Diagnostic', 
      icon: FileSearch,
      description: 'Analyse du contexte et besoins',
      color: 'from-green-500 to-teal-600'
    },
    { 
      id: 'methodologie', 
      label: 'C2: Méthodologie', 
      icon: Settings,
      description: 'Organisation Scrum et rituels',
      color: 'from-orange-500 to-red-600'
    },
    { 
      id: 'deploiement', 
      label: 'C3: Product Backlog', 
      icon: Package,
      description: 'Construction et suivi du backlog',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      id: 'facilitation', 
      label: 'C4: Animation Jury', 
      icon: Users,
      description: 'Script de Sprint Review',
      color: 'from-indigo-500 to-blue-600'
    },
    { 
      id: 'conclusion', 
      label: 'Bilan Agile', 
      icon: CheckCircle,
      description: 'Enseignements et perspectives',
      color: 'from-emerald-500 to-green-600'
    },
  ];

  return (
    <>
      {/* Navigation desktop - sidebar */}
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="glass rounded-2xl p-6 shadow-2xl border border-white/20 backdrop-blur-xl">
          <ul className="space-y-4">
            {pages.map((page, index) => {
              const IconComponent = page.icon;
              const isActive = activePage === page.id;
              
              return (
                <li key={page.id} className="relative">
                  <button
                    onClick={() => onPageChange(page.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 w-full text-left group relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-2xl scale-105'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {/* Background gradient for active state */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] opacity-90 rounded-xl"></div>
                    )}
                    
                    {/* Icon with glow effect */}
                    <div className="relative z-10">
                      <IconComponent 
                        size={24} 
                        className={`transition-all duration-500 ${
                          isActive 
                            ? 'text-white drop-shadow-lg' 
                            : 'text-white/60 group-hover:text-[var(--color-primary)] group-hover:scale-110'
                        }`} 
                      />
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <div className={`text-sm font-bold transition-all duration-300 ${
                        isActive ? 'text-white' : 'group-hover:text-white'
                      }`}>
                        {page.label}
                      </div>
                      <div className={`text-xs transition-all duration-300 ${
                        isActive 
                          ? 'text-white/90' 
                          : 'text-white/50 group-hover:text-white/70'
                      }`}>
                        {page.description}
                      </div>
                    </div>
                    
                    {isActive && (
                      <ChevronRight size={20} className="text-white relative z-10 animate-pulse" />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </button>
                  
                  {/* Progress indicator */}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${page.color} rounded-r-full transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}></div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Navigation mobile - top bar */}
      <nav className="fixed top-20 left-0 right-0 z-40 lg:hidden">
        <div className="glass border-b border-white/10 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
              {pages.map((page) => {
                const IconComponent = page.icon;
                const isActive = activePage === page.id;
                
                return (
                  <button
                    key={page.id}
                    onClick={() => onPageChange(page.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-500 relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-lg scale-105'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={20} className={isActive ? 'text-white' : 'text-white/60'} />
                    <span className="text-sm font-semibold">{page.label}</span>
                    
                    {/* Shimmer effect */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced pagination controls */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="flex gap-3">
          <button
            onClick={() => {
              const currentIndex = pages.findIndex(p => p.id === activePage);
              if (currentIndex > 0) {
                onPageChange(pages[currentIndex - 1].id);
              }
            }}
            disabled={pages.findIndex(p => p.id === activePage) === 0}
            className="btn btn-outline disabled:opacity-30 disabled:cursor-not-allowed group"
          >
            <ChevronRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="hidden sm:inline ml-2">Précédent</span>
          </button>
          <button
            onClick={() => {
              const currentIndex = pages.findIndex(p => p.id === activePage);
              if (currentIndex < pages.length - 1) {
                onPageChange(pages[currentIndex + 1].id);
              }
            }}
            disabled={pages.findIndex(p => p.id === activePage) === pages.length - 1}
            className="btn btn-primary disabled:opacity-30 disabled:cursor-not-allowed group"
          >
            <span className="hidden sm:inline mr-2">Suivant</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced page indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
        <div className="glass rounded-full px-6 py-3 border border-white/20 backdrop-blur-xl">
          <div className="flex gap-3 items-center">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`relative transition-all duration-500 ${
                  activePage === page.id
                    ? 'w-8 h-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] scale-125'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-110'
                } rounded-full`}
                title={page.label}
              >
                {activePage === page.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-500 ease-out"
          style={{ 
            width: `${((pages.findIndex(p => p.id === activePage) + 1) / pages.length) * 100}%` 
          }}
        ></div>
      </div>
    </>
  );
};

export default Navigation;