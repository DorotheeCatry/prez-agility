import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'diagnostic', label: 'C1: Diagnostic' },
    { id: 'methodologie', label: 'C2: Méthodologie' },
    { id: 'deploiement', label: 'C3: Product Backlog' },
    { id: 'facilitation', label: 'C4: Animation Jury' },
    { id: 'conclusion', label: 'Bilan Agile' },
  ];

  return (
    <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="bg-[var(--color-surface)]/80 backdrop-blur-sm rounded-r-lg p-3 shadow-lg">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-[var(--color-primary)] font-semibold'
                    : 'text-[var(--color-text)]/70 hover:text-[var(--color-primary)]'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-[var(--color-primary)] scale-125'
                      : 'bg-[var(--color-text)]/50'
                  }`}
                ></div>
                <span className="text-sm whitespace-nowrap">{section.label}</span>
                {activeSection === section.id && (
                  <ChevronRight size={16} className="text-[var(--color-primary)]" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;