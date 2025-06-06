import React from 'react';
import { FileSearch, Clock, AlertTriangle, Target, Database, Code, Layout, Users, TrendingUp, Lightbulb } from 'lucide-react';

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
              Analyse du contexte, des besoins client et identification des enjeux 
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
                  Cahier des Charges Fonctionnel
                </h3>
                
                <div className="space-y-4">
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Database size={20} className="text-[var(--color-secondary)]" />
                      <h4 className="font-bold text-white">Collecte des données</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Scraping Allociné (fiches films, box-office, casting), 
                      enrichissement via Dailymotion pour l'engagement sur les trailers.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs rounded-full">Allociné</span>
                      <span className="px-2 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs rounded-full">Dailymotion</span>
                      <span className="px-2 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs rounded-full">Scrapy</span>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Code size={20} className="text-[var(--color-accent-light)]" />
                      <h4 className="font-bold text-white">Feature Engineering</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Nettoyage, transformation, encodage, embeddings acteurs/réalisateurs 
                      pour optimiser les performances du modèle.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[var(--color-accent-light)]/20 text-[var(--color-accent-light)] text-xs rounded-full">Embeddings</span>
                      <span className="px-2 py-1 bg-[var(--color-accent-light)]/20 text-[var(--color-accent-light)] text-xs rounded-full">Encodage</span>
                      <span className="px-2 py-1 bg-[var(--color-accent-light)]/20 text-[var(--color-accent-light)] text-xs rounded-full">Nettoyage</span>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb size={20} className="text-[var(--color-primary)]" />
                      <h4 className="font-bold text-white">Modélisation</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Modèles Random Forest et LightGBM avec évaluation via 
                      métriques RMSE, MAE, R² et cross-validation.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs rounded-full">Random Forest</span>
                      <span className="px-2 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs rounded-full">LightGBM</span>
                      <span className="px-2 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs rounded-full">Cross-validation</span>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20 group hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Layout size={20} className="text-green-400" />
                      <h4 className="font-bold text-white">Application finale</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      API FastAPI de prédiction + Dashboard Django avec filtres, 
                      graphiques et interface utilisateur intuitive.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">FastAPI</span>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Django</span>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Dashboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Agile approach relevance */}
          <div className="card card-glow scale-in delay-500">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Pertinence de l'approche Agile Scrum
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Advantages */}
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  Avantages identifiés
                </h4>
                
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Database size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Adaptation aux incertitudes</h5>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Approche itérative adaptée aux incertitudes inhérentes à la data science.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Layout size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Livrables concrets</h5>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Production de livrables concrets à chaque cycle de 1-2 semaines.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Collaboration renforcée</h5>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Réévaluation continue des priorités et apprentissage collectif.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Challenges */}
              <div>
                <h4 className="text-xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                    <AlertTriangle size={14} className="text-black" />
                  </div>
                  Défis anticipés
                </h4>
                
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <AlertTriangle size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Complexité technique</h5>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Stabilisation du scraping et gestion des nouveaux outils ML.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Rotation des rôles</h5>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Charge organisationnelle élevée avec alternance des responsabilités.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Prise de décision PO</h5>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Arbitrages délicats en contexte égalitaire d'apprentissage.
                        </p>
                      </div>
                    </div>
                  </div>
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