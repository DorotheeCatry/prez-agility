import React from 'react';
import { GitMerge, UserCheck, Repeat, Gauge, MessageSquare, Github } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const MethodologieSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section
      id="methodologie"
      className={`section ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
            C2: Choix de la Méthodologie Agile
          </h2>
          <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
            Analyse et mise en place de la méthodologie Scrum pour le projet CinéFlex
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card scale-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-secondary)]">
              Cadence du projet
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg">
                  <GitMerge size={24} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">4 sprints de 1 semaine</h4>
                  <p className="text-[var(--color-text)]/70">
                    Planning des sprints:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">Sprint 1:</span>
                      <span>Collecte de données et BDD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">Sprint 2:</span>
                      <span>Modèles ML et API</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">Sprint 3:</span>
                      <span>Interface utilisateur</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">Sprint 4:</span>
                      <span>Déploiement et tests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card scale-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
              Outils utilisés
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg">
                  <Github size={24} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Jira + GitHub</h4>
                  <ul className="mt-2 space-y-2 text-[var(--color-text)]/70">
                    <li>• Jira pour le suivi des user stories et tâches</li>
                    <li>• GitHub pour la gestion du code source</li>
                    <li>• Pull requests avec code reviews</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                  <MessageSquare size={24} className="text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Slack</h4>
                  <ul className="mt-2 space-y-2 text-[var(--color-text)]/70">
                    <li>• Pour une communication effective entre les équipes</li>
                    <li>• Suivi Jira et tâches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card scale-in delay-300">
          <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
            Rituels agiles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
              <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">
                Daily Stand-up
              </h4>
              <p className="text-sm mb-2">Chaque jour, 15 minutes:</p>
              <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                <li>• Ce qui a été fait hier</li>
                <li>• Ce qui est prévu aujourd'hui</li>
                <li>• Obstacles rencontrés</li>
              </ul>
            </div>
            
            <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
              <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Sprint Review
              </h4>
              <p className="text-sm mb-2">Fin de chaque sprint, 1 heure:</p>
              <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                <li>• Démo des fonctionnalités</li>
                <li>• Validation par le client</li>
                <li>• Recueil des feedback</li>
              </ul>
            </div>
            
            <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
              <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-2">
                Retrospective
              </h4>
              <p className="text-sm mb-2">Fin de chaque sprint, 45 minutes:</p>
              <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                <li>• Ce qui a bien fonctionné</li>
                <li>• Ce qui peut être amélioré</li>
                <li>• Actions concrètes pour le prochain sprint</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologieSection;