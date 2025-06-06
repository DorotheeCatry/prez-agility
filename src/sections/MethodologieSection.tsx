import React from 'react';
import { GitMerge, UserCheck, Repeat, Gauge, MessageSquare, Github, Users, Calendar } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const MethodologieSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
              C2: Méthodologie Agile Scrum
            </h2>
            <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
              Organisation de l'équipe, rituels Scrum et outils collaboratifs 
              pour le projet de prédiction IA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card scale-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-secondary)]">
                Composition de l'équipe
              </h3>
              
              <div className="space-y-4">
                <p className="text-[var(--color-text)]/80 mb-4">
                  Équipe de 4 développeurs IA avec rotation des rôles à chaque sprint :
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h4 className="font-semibold text-[var(--color-primary)] mb-1">Scrum Master</h4>
                    <p className="text-xs text-[var(--color-text)]/70">
                      Animation des cérémonies, communication, gestion des blocages
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h4 className="font-semibold text-[var(--color-secondary)] mb-1">Product Owner</h4>
                    <p className="text-xs text-[var(--color-text)]/70">
                      Vision produit, User Stories, priorisation du backlog
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h4 className="font-semibold text-[var(--color-accent-light)] mb-1">Responsable ML</h4>
                    <p className="text-xs text-[var(--color-text)]/70">
                      Données, algorithmes, évaluation des modèles
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h4 className="font-semibold text-[var(--color-success)] mb-1">Développeur</h4>
                    <p className="text-xs text-[var(--color-text)]/70">
                      Conception, développement, tests, intégration
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-[var(--color-primary)]/10 rounded-lg">
                  <p className="text-sm text-[var(--color-text)]/80">
                    <span className="font-semibold">Bénéfice de la rotation :</span> Compréhension globale 
                    des responsabilités, enrichissement des compétences transverses, amélioration de la communication.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card scale-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Répartition des rôles par sprint
              </h3>
              
              <div className="space-y-3">
                <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-[var(--color-text)]/60">
                  <div>Sprint</div>
                  <div>Scrum Master</div>
                  <div>Product Owner</div>
                  <div>Resp. ML</div>
                  <div>Développeur</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 text-sm p-2 bg-[var(--color-surface)]/50 rounded">
                  <div className="font-semibold">1</div>
                  <div>Eliandy</div>
                  <div>Dorothée</div>
                  <div>Nicolas</div>
                  <div>Maxime</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 text-sm p-2 bg-[var(--color-surface)]/50 rounded">
                  <div className="font-semibold">2</div>
                  <div>Dorothée</div>
                  <div>Maxime</div>
                  <div>Eliandy</div>
                  <div>Nicolas</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 text-sm p-2 bg-[var(--color-surface)]/50 rounded">
                  <div className="font-semibold">3</div>
                  <div>Nicolas</div>
                  <div>Eliandy</div>
                  <div>Maxime</div>
                  <div>Dorothée</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 text-sm p-2 bg-[var(--color-surface)]/50 rounded">
                  <div className="font-semibold">4</div>
                  <div>Maxime</div>
                  <div>Nicolas</div>
                  <div>Dorothée</div>
                  <div>Eliandy</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card scale-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
                Découpage en 4 sprints
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg">
                    <Calendar size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 1: Cadrage et outils</h4>
                    <p className="text-[var(--color-text)]/70 text-sm">
                      Cahier des charges, analyse des features, mise en place de l'environnement
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <GitMerge size={24} className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 2: Modèle de prédiction</h4>
                    <p className="text-[var(--color-text)]/70 text-sm">
                      Scraping, premiers résultats, entraînement des modèles ML
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-accent-light)]/10 p-3 rounded-lg">
                    <MessageSquare size={24} className="text-[var(--color-accent-light)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 3: Application web</h4>
                    <p className="text-[var(--color-text)]/70 text-sm">
                      Django + API FastAPI, interface utilisateur
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-success)]/10 p-3 rounded-lg">
                    <Gauge size={24} className="text-[var(--color-success)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 4: Déploiement</h4>
                    <p className="text-[var(--color-text)]/70 text-sm">
                      Version finale avec historique et indicateurs de performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card scale-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-secondary)]">
                Outils collaboratifs
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Github size={20} className="text-[var(--color-primary)]" />
                    <h4 className="font-semibold">GitHub</h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Versioning, branches dédiées, Pull Requests collaboratives
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={20} className="text-[var(--color-secondary)]" />
                    <h4 className="font-semibold">Jira</h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Planification, backlog, suivi des tâches, documentation centralisée
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare size={20} className="text-[var(--color-accent-light)]" />
                    <h4 className="font-semibold">Slack & Discord</h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Communication quotidienne, échanges techniques, debugging
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Repeat size={20} className="text-[var(--color-success)]" />
                    <h4 className="font-semibold">Confluence & Miro</h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Documentation centralisée, rétrospectives visuelles
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card scale-in delay-300">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
              Rituels Scrum appliqués
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">
                  Sprint Planning
                </h4>
                <div className="space-y-2 text-sm text-[var(--color-text)]/80">
                  <p><span className="font-semibold">Fréquence:</span> Lundi</p>
                  <p><span className="font-semibold">Durée:</span> 30 min</p>
                  <p><span className="font-semibold">Objectif:</span> Sélection des User Stories</p>
                  <p><span className="font-semibold">Support:</span> Jira</p>
                </div>
              </div>
              
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                  Daily Scrum
                </h4>
                <div className="space-y-2 text-sm text-[var(--color-text)]/80">
                  <p><span className="font-semibold">Fréquence:</span> Lun-Ven</p>
                  <p><span className="font-semibold">Durée:</span> 10 min</p>
                  <p><span className="font-semibold">Objectif:</span> Synchronisation équipe</p>
                  <p><span className="font-semibold">Support:</span> Slack & Jira</p>
                </div>
              </div>
              
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-2">
                  Sprint Review
                </h4>
                <div className="space-y-2 text-sm text-[var(--color-text)]/80">
                  <p><span className="font-semibold">Fréquence:</span> Mercredi</p>
                  <p><span className="font-semibold">Durée:</span> 45 min</p>
                  <p><span className="font-semibold">Objectif:</span> Démo et feedback</p>
                  <p><span className="font-semibold">Support:</span> Google Meet</p>
                </div>
              </div>
              
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold text-[var(--color-success)] mb-2">
                  Rétrospective
                </h4>
                <div className="space-y-2 text-sm text-[var(--color-text)]/80">
                  <p><span className="font-semibold">Fréquence:</span> Vendredi</p>
                  <p><span className="font-semibold">Durée:</span> 60 min</p>
                  <p><span className="font-semibold">Objectif:</span> Bilan et amélioration</p>
                  <p><span className="font-semibold">Support:</span> Miro Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologieSection;