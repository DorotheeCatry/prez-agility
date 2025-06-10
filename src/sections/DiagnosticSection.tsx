import React from 'react';
import { FileSearch, Clock, AlertTriangle, Target, Database, Code, Layout, Users, TrendingUp, Lightbulb, GitBranch, Zap, RefreshCw, CheckCircle, X, ArrowRight, Layers, Settings, Eye } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const DiagnosticSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M20 20c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <section className="section relative z-10">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-600/20 rounded-full border border-white/20 backdrop-blur-sm fade-in mb-6">
              <FileSearch size={16} className="text-green-400" />
              <span className="text-sm font-medium text-white">Analyse contextuelle</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">C1: Diagnostic</span>
              <br />
              <span className="text-white">du Projet</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Analyse du contexte, des besoins client et justification de l'approche Agile 
              pour le projet de prédiction de popularité des films.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left column - Context */}
            <div className="space-y-8 slide-in-left">
              <div className="card card-glow">
                <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-lg flex items-center justify-center">
                    <Target size={20} className="text-black" />
                  </div>
                  Contexte et Enjeux
                </h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">Besoin client</h4>
                        <p className="text-white/70 leading-relaxed">
                          Anticiper le succès commercial des films en salle pour optimiser 
                          la programmation des exploitants de cinéma et réduire les risques financiers.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <TrendingUp size={16} className="text-green-400" />
                          <span className="text-sm text-green-400">Impact business élevé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock size={24} className="text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">Contraintes temporelles</h4>
                        <p className="text-white/70 leading-relaxed">
                          Projet pédagogique de 4 semaines dans le cadre de la formation 
                          Développement IA - Simplon HDF (2025).
                        </p>
                        <div className="mt-3 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
                            <span className="text-sm text-white/60">Sprint intensif</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-sm text-white/60">Apprentissage accéléré</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent-light)] to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">Équipe et compétences</h4>
                        <p className="text-white/70 leading-relaxed">
                          4 développeurs IA en formation avec rotation des rôles Scrum 
                          (Scrum Master, Product Owner, Responsable ML, Développeur).
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="text-center p-2 bg-white/5 rounded-lg">
                            <div className="text-lg font-bold text-[var(--color-primary)]">4</div>
                            <div className="text-xs text-white/60">Développeurs</div>
                          </div>
                          <div className="text-center p-2 bg-white/5 rounded-lg">
                            <div className="text-lg font-bold text-[var(--color-secondary)]">4</div>
                            <div className="text-xs text-white/60">Rôles rotatifs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Functional specifications */}
            <div className="slide-in-right delay-200">
              <div className="card card-glow">
                <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                    <FileSearch size={20} className="text-white" />
                  </div>
                  Cahier des Charges Agile
                </h3>
                
                <div className="space-y-4">
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Database size={20} className="text-[var(--color-secondary)]" />
                      <h4 className="font-bold text-white">Epic: Collecte des données</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      Scraping Allociné (fiches films, box-office, casting), 
                      enrichissement via Dailymotion pour l'engagement sur les trailers.
                    </p>
                    <div className="text-xs text-[var(--color-secondary)] font-semibold">
                      → User Stories adaptables selon les découvertes techniques
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Code size={20} className="text-[var(--color-accent-light)]" />
                      <h4 className="font-bold text-white">Epic: Feature Engineering</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      Nettoyage, transformation, encodage, embeddings acteurs/réalisateurs 
                      pour optimiser les performances du modèle.
                    </p>
                    <div className="text-xs text-[var(--color-accent-light)] font-semibold">
                      → Itérations courtes pour valider l'impact des features
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb size={20} className="text-[var(--color-primary)]" />
                      <h4 className="font-bold text-white">Epic: Modélisation</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      Modèles Random Forest et LightGBM avec évaluation via 
                      métriques RMSE, MAE, R² et cross-validation.
                    </p>
                    <div className="text-xs text-[var(--color-primary)] font-semibold">
                      → Expérimentation rapide et feedback continu sur les performances
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Layout size={20} className="text-green-400" />
                      <h4 className="font-bold text-white">Epic: Application finale</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      API FastAPI de prédiction + Dashboard Django avec filtres, 
                      graphiques et interface utilisateur intuitive.
                    </p>
                    <div className="text-xs text-green-400 font-semibold">
                      → Démonstrations fréquentes pour validation utilisateur
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agile vs Traditional comparison */}
          <div className="card card-glow scale-in delay-500 mb-16">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center">
                <GitBranch size={24} className="text-white" />
              </div>
              Agile vs Méthodes Traditionnelles
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Traditional approach */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                    <Layers size={20} className="text-red-400" />
                  </div>
                  Approche en V (Traditionnelle)
                </h4>
                
                <div className="glass p-6 rounded-xl border border-red-400/30">
                  <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Settings size={16} className="text-red-400" />
                    Caractéristiques
                  </h5>
                  <div className="space-y-3">
                    {[
                      'Cahier des charges figé dès le début',
                      'Phases séquentielles (Analyse → Conception → Développement → Tests)',
                      'Validation en fin de projet uniquement',
                      'Changements coûteux et difficiles',
                      'Livraison unique en fin de cycle'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X size={16} className="text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass p-6 rounded-xl border border-red-400/30">
                  <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle size={16} className="text-red-400" />
                    Risques pour notre projet IA
                  </h5>
                  <div className="space-y-3">
                    {[
                      'Impossibilité d\'ajuster selon les découvertes ML',
                      'Pas de feedback utilisateur pendant 4 semaines',
                      'Risque de développer des features non pertinentes',
                      'Difficile d\'adapter aux contraintes de scraping',
                      'Équipe bloquée si une phase échoue'
                    ].map((risk, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-sm">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agile approach */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                    <RefreshCw size={20} className="text-green-400" />
                  </div>
                  Approche Agile Scrum
                </h4>
                
                <div className="glass p-6 rounded-xl border border-green-400/30">
                  <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Zap size={16} className="text-green-400" />
                    Caractéristiques
                  </h5>
                  <div className="space-y-3">
                    {[
                      'Product Backlog évolutif et priorisé',
                      'Sprints courts (1 semaine) avec livrables',
                      'Feedback continu des stakeholders',
                      'Adaptation rapide aux découvertes',
                      'Valeur livrée à chaque itération'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass p-6 rounded-xl border border-green-400/30">
                  <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Target size={16} className="text-green-400" />
                    Avantages pour notre projet IA
                  </h5>
                  <div className="space-y-3">
                    {[
                      'Adaptation selon les résultats ML obtenus',
                      'Validation fréquente avec les formateurs',
                      'Pivot possible si une approche ne fonctionne pas',
                      'Gestion agile des problèmes de scraping',
                      'Apprentissage continu de l\'équipe'
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-sm">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Scrum for this project */}
          <div className="card card-glow scale-in delay-700">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Pourquoi Scrum pour ce projet IA ?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Incertitude technique */}
              <div className="glass p-6 rounded-xl border border-white/20 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 text-center">Incertitude technique</h4>
                <div className="space-y-3">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong>Défi :</strong> Stabilité du scraping, qualité des données, performance des modèles ML
                  </p>
                  <p className="text-green-400 text-sm leading-relaxed">
                    <strong>Solution Scrum :</strong> Expérimentation rapide, feedback immédiat, adaptation continue
                  </p>
                </div>
              </div>

              {/* Apprentissage équipe */}
              <div className="glass p-6 rounded-xl border border-white/20 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 text-center">Équipe apprenante</h4>
                <div className="space-y-3">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong>Défi :</strong> Nouvelles technologies, rôles Scrum à découvrir, compétences à développer
                  </p>
                  <p className="text-green-400 text-sm leading-relaxed">
                    <strong>Solution Scrum :</strong> Rotation des rôles, rétrospectives d'amélioration, apprentissage collectif
                  </p>
                </div>
              </div>

              {/* Contraintes temporelles */}
              <div className="glass p-6 rounded-xl border border-white/20 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 text-center">Délais serrés</h4>
                <div className="space-y-3">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong>Défi :</strong> 4 semaines pour livrer un produit complet et fonctionnel
                  </p>
                  <p className="text-green-400 text-sm leading-relaxed">
                    <strong>Solution Scrum :</strong> Priorisation continue, livraisons fréquentes, focus sur la valeur
                  </p>
                </div>
              </div>
            </div>

            {/* Value proposition */}
            <div className="mt-12 glass p-8 rounded-2xl border border-[var(--color-primary)]/30 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Eye size={40} className="text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                Notre vision Agile du cahier des charges
              </h4>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto mb-6">
                Plutôt qu'un document figé, nous concevons le cahier des charges comme un 
                <span className="font-bold text-[var(--color-secondary)]"> Product Backlog vivant</span>, 
                enrichi à chaque sprint par nos découvertes techniques et les retours stakeholders.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-[var(--color-primary)]" />
                  <span>Épics évolutifs</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-[var(--color-secondary)]" />
                  <span>User Stories adaptables</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-green-400" />
                  <span>Critères d'acceptation affinés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticSection;