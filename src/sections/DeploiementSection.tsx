import React from 'react';
import { Users, CalendarClock, BarChart3, ArrowDownUp, FileText, Code2, Database, Target } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const DeploiementSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
              C3: Construction du Product Backlog
            </h2>
            <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
              Structuration des epics, user stories et définition des critères 
              d'acceptation pour le projet de prédiction IA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="card slide-up">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-secondary)]">
                Epics et User Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-3">
                    Epic: Collecte et traitement des données
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                    <li>• Scraper les fiches Allociné (films, casting, box-office)</li>
                    <li>• Enrichir avec données Dailymotion (engagement trailers)</li>
                    <li>• Nettoyer et transformer les données collectées</li>
                    <li>• Créer les embeddings acteurs/réalisateurs</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-3">
                    Epic: Modélisation prédictive
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                    <li>• Entraîner un modèle Random Forest</li>
                    <li>• Développer un modèle LightGBM</li>
                    <li>• Évaluer les performances (RMSE, MAE, R²)</li>
                    <li>• Implémenter la cross-validation</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-3">
                    Epic: Développement de l'application
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                    <li>• Créer une API de prédiction FastAPI</li>
                    <li>• Développer l'interface Django</li>
                    <li>• Visualiser les prédictions via graphiques</li>
                    <li>• Intégrer filtres et fonctionnalités utilisateur</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card slide-in-right delay-200">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Exemple de backlog détaillé
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[var(--color-secondary)]">Scraping Allociné</h4>
                    <span className="text-xs bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-1 rounded">
                      Haute
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70 mb-2">
                    <span className="font-semibold">Sprint:</span> 1 | 
                    <span className="font-semibold"> Epic:</span> Collecte données
                  </p>
                  <p className="text-xs text-[var(--color-text)]/60 mb-2">
                    <span className="font-semibold">DoD:</span> Scrapy fonctionnel, tests OK, stockage PostgreSQL
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[var(--color-secondary)]">Suivi performance modèle</h4>
                    <span className="text-xs bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] px-2 py-1 rounded">
                      Moyenne
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70 mb-2">
                    <span className="font-semibold">Sprint:</span> 2 | 
                    <span className="font-semibold"> Epic:</span> Modélisation
                  </p>
                  <p className="text-xs text-[var(--color-text)]/60 mb-2">
                    <span className="font-semibold">DoD:</span> Courbes d'apprentissage générées, RMSE/R² calculés
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[var(--color-secondary)]">Formulaire de prédiction</h4>
                    <span className="text-xs bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-1 rounded">
                      Haute
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70 mb-2">
                    <span className="font-semibold">Sprint:</span> 3 | 
                    <span className="font-semibold"> Epic:</span> Application
                  </p>
                  <p className="text-xs text-[var(--color-text)]/60 mb-2">
                    <span className="font-semibold">DoD:</span> Interface fonctionnelle et intégrée
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[var(--color-secondary)]">API de prédiction</h4>
                    <span className="text-xs bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-1 rounded">
                      Haute
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70 mb-2">
                    <span className="font-semibold">Sprint:</span> 4 | 
                    <span className="font-semibold"> Epic:</span> Mise en production
                  </p>
                  <p className="text-xs text-[var(--color-text)]/60 mb-2">
                    <span className="font-semibold">DoD:</span> Endpoint FastAPI déployé localement
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card scale-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
                Suivi de la vélocité
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-4">User Stories complétées par sprint</h4>
                  <div className="h-40 w-full bg-[var(--color-background)] rounded-lg p-4">
                    <div className="h-full w-full flex items-end justify-around">
                      <div className="w-1/5 h-[50%] bg-[var(--color-primary)]/50 rounded-t flex items-end justify-center pb-2">
                        <span className="text-xs text-white">6</span>
                      </div>
                      <div className="w-1/5 h-[75%] bg-[var(--color-primary)]/50 rounded-t flex items-end justify-center pb-2">
                        <span className="text-xs text-white">9</span>
                      </div>
                      <div className="w-1/5 h-[85%] bg-[var(--color-primary)]/50 rounded-t flex items-end justify-center pb-2">
                        <span className="text-xs text-white">10</span>
                      </div>
                      <div className="w-1/5 h-[90%] bg-[var(--color-primary)]/50 rounded-t flex items-end justify-center pb-2">
                        <span className="text-xs text-white">11</span>
                      </div>
                    </div>
                    <div className="flex justify-around mt-2 text-sm text-[var(--color-text)]/60">
                      <span>S1</span>
                      <span>S2</span>
                      <span>S3</span>
                      <span>S4</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70 mt-3">
                    Amélioration progressive de la vélocité avec l'expérience de l'équipe.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card scale-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Adaptations du backlog
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-2 text-[var(--color-secondary)]">
                    Ajustements réalisés
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Target size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Intégration Dailymotion</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Ajout de nouvelles données d'engagement sur les trailers
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Target size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Stabilisation scraping</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Priorisation des corrections techniques critiques
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Target size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Métriques avancées</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Ajout de nouvelles métriques d'évaluation ML
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-2 text-[var(--color-warning)]">
                    Défis rencontrés
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-text)]/80">
                    <li>• Découpage parfois complexe des User Stories</li>
                    <li>• Gestion des dépendances techniques</li>
                    <li>• Équilibrage des charges avec rotation des rôles</li>
                    <li>• Formalisation des Definitions of Done</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeploiementSection;