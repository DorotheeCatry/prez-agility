import React from 'react';
import { Users, CalendarClock, BarChart3, ArrowDownUp, FileText, Code2, Database } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const DeploiementSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section
      id="deploiement"
      className={`section ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
            C3: Préparation du Déploiement
          </h2>
          <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
            Organisation de l'équipe, planification des rituels agiles et 
            mise en place des outils pour le projet de prédiction IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2 slide-up">
            <div className="card h-full">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-secondary)]">
                Cahier des charges fonctionnel
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                    Fonctionnalités principales
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                    <li>• Prédiction de popularité des films</li>
                    <li>• Dashboard de visualisation</li>
                    <li>• Scraping automatisé des données</li>
                    <li>• API Machine Learning</li>
                    <li>• Gestion des expériences ML</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                    Architecture technique
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code2 size={16} className="text-[var(--color-secondary)]" />
                      <span>Frontend: Django + Tailwind</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database size={16} className="text-[var(--color-secondary)]" />
                      <span>Backend: FastAPI + PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-[var(--color-secondary)]" />
                      <span>ML: MLflow + Azure ML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 slide-in-right delay-200">
            <div className="card h-full">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Product Backlog Initial
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg">
                    <Users size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 1: Collecte et BDD</h4>
                    <ul className="mt-2 space-y-1 text-[var(--color-text)]/70">
                      <li>• Configuration de l'environnement de développement</li>
                      <li>• Mise en place du scraping Allociné/IMDB</li>
                      <li>• Création des schémas de base de données</li>
                      <li>• Intégration avec Azure ML</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <ArrowDownUp size={24} className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 2: ML et API</h4>
                    <ul className="mt-2 space-y-1 text-[var(--color-text)]/70">
                      <li>• Développement du modèle de prédiction</li>
                      <li>• Feature engineering</li>
                      <li>• Mise en place de l'API FastAPI</li>
                      <li>• Tests et validation du modèle</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-accent-light)]/10 p-3 rounded-lg">
                    <BarChart3 size={24} className="text-[var(--color-accent-light)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 3: Interface</h4>
                    <ul className="mt-2 space-y-1 text-[var(--color-text)]/70">
                      <li>• Développement du dashboard Django</li>
                      <li>• Intégration des visualisations</li>
                      <li>• Système de notifications</li>
                      <li>• Interface de configuration</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-success)]/10 p-3 rounded-lg">
                    <CalendarClock size={24} className="text-[var(--color-success)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sprint 4: Finalisation</h4>
                    <ul className="mt-2 space-y-1 text-[var(--color-text)]/70">
                      <li>• Déploiement sur Azure</li>
                      <li>• Tests d'intégration</li>
                      <li>• Documentation utilisateur</li>
                      <li>• Formation du client</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card scale-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
              Suivi et KPIs
            </h3>
            
            <div className="space-y-4">
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold mb-4">Vélocité de l'équipe</h4>
                <div className="h-40 w-full bg-[var(--color-background)] rounded-lg p-4">
                  <div className="h-full w-full flex items-end justify-around">
                    <div className="w-1/4 h-[60%] bg-[var(--color-primary)]/50 rounded-t"></div>
                    <div className="w-1/4 h-[75%] bg-[var(--color-primary)]/50 rounded-t"></div>
                    <div className="w-1/4 h-[85%] bg-[var(--color-primary)]/50 rounded-t"></div>
                    <div className="w-1/4 h-[90%] bg-[var(--color-primary)]/50 rounded-t"></div>
                  </div>
                  <div className="flex justify-around mt-2 text-sm text-[var(--color-text)]/60">
                    <span>S1</span>
                    <span>S2</span>
                    <span>S3</span>
                    <span>S4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card scale-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
              Métriques ML
            </h3>
            
            <div className="space-y-4">
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold mb-2">Précision du modèle</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>MAE</span>
                      <span>±150 entrées</span>
                    </div>
                    <div className="w-full bg-[var(--color-background)] rounded-full h-2">
                      <div className="bg-[var(--color-success)] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>RMSE</span>
                      <span>200 entrées</span>
                    </div>
                    <div className="w-full bg-[var(--color-background)] rounded-full h-2">
                      <div className="bg-[var(--color-success)] h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>R²</span>
                      <span>0.82</span>
                    </div>
                    <div className="w-full bg-[var(--color-background)] rounded-full h-2">
                      <div className="bg-[var(--color-success)] h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploiementSection;