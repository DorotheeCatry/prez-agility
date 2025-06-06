import React from 'react';
import { CheckCircle, ArrowRight, Star, ChevronRight, AlertTriangle, Target } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const ConclusionSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section
      id="conclusion"
      className={`section ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
            Bilan Agile
          </h2>
          <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
            Synthèse de l'expérience Scrum, enseignements tirés et perspectives 
            d'amélioration pour les futurs projets IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8 slide-up">
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-success)]">
                Points forts identifiés
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Hiérarchisation rapide</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Identification et priorisation efficace des tâches critiques 
                      grâce aux rituels de planification.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Adaptation continue</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Ajustement régulier de la roadmap selon les retours et 
                      les découvertes techniques.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Implication collective</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Co-construction du produit avec rotation des rôles favorisant 
                      l'apprentissage transversal.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Apprentissage accéléré</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Montée en compétences rapide malgré les contraintes temporelles 
                      et la complexité technique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-warning)]">
                Difficultés rencontrées
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle size={20} className="text-[var(--color-warning)] mt-1" />
                    <h4 className="font-semibold text-[var(--color-warning)]">
                      Rigueur des rituels
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Rigueur parfois allégée en période de rush, impactant la qualité 
                    des échanges et du suivi.
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle size={20} className="text-[var(--color-warning)] mt-1" />
                    <h4 className="font-semibold text-[var(--color-warning)]">
                      Découpage des User Stories
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Complexité du découpage en contexte d'apprentissage avec 
                    technologies nouvelles pour l'équipe.
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle size={20} className="text-[var(--color-warning)] mt-1" />
                    <h4 className="font-semibold text-[var(--color-warning)]">
                      Prise de décision PO
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Arbitrages délicats pour le Product Owner en contexte égalitaire 
                    d'apprentissage collectif.
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle size={20} className="text-[var(--color-warning)] mt-1" />
                    <h4 className="font-semibold text-[var(--color-warning)]">
                      Charge organisationnelle
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Rotation des rôles créant une charge organisationnelle élevée 
                    en parallèle de l'apprentissage technique.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 slide-in-right delay-200">
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Résultats du projet
              </h3>
              
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/7991634/pexels-photo-7991634.jpeg" 
                  alt="Film production result" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    Produit fonctionnel livré
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/90">
                    Modèle prédictif + Dashboard + API en 4 semaines
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                    Livrables techniques
                  </h4>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                    <li>• Scraping Allociné et Dailymotion fonctionnel</li>
                    <li>• Modèles Random Forest et LightGBM entraînés</li>
                    <li>• API FastAPI de prédiction déployée</li>
                    <li>• Dashboard Django avec visualisations</li>
                    <li>• Documentation technique complète</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-accent-light)] mb-2">
                    Métriques de performance
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-primary)]">RMSE</div>
                      <p className="text-xs text-[var(--color-text)]/70">Optimisé</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-secondary)]">R²</div>
                      <p className="text-xs text-[var(--color-text)]/70">Satisfaisant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
                Axes d'amélioration
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Target size={20} className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Anticipation des risques</h4>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Identifier plus tôt les risques techniques et prévoir des plans de contingence.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <Target size={20} className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Critères d'acceptation</h4>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Détailler davantage les critères d'acceptation et mieux formaliser les DoD.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <Target size={20} className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Suivi des contributions</h4>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Suivre de façon plus précise les contributions individuelles et collectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <Target size={20} className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Valorisation des livrables</h4>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Valoriser davantage les livrables aux Sprint Reviews et documenter systématiquement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
              Conclusion générale
            </h3>
            
            <div className="space-y-4 text-left">
              <p className="text-lg text-[var(--color-text)]/90">
                L'intégration de Scrum dans un projet pédagogique IA a été aussi enrichissante que challengeante. 
                Avec une équipe en phase d'apprentissage de technologies complexes, chaque membre a dû alterner 
                entre technique et gestion Agile, dans un cadre restreint de 4 semaines.
              </p>
              
              <p className="text-lg text-[var(--color-text)]/90">
                Malgré les obstacles (prise en main de Jira, scraping complexe, arbitrages PO délicats), 
                l'équipe a livré un produit fonctionnel en respectant les principes fondamentaux de l'agilité : 
                <span className="font-semibold text-[var(--color-primary)]"> communication, adaptation et collaboration</span>.
              </p>
              
              <div className="mt-6 p-4 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/20">
                <p className="text-lg font-display italic text-[var(--color-primary)] text-center">
                  "L'essentiel appris : l'agilité est avant tout une dynamique humaine, une capacité à réagir 
                  face aux imprévus, et une méthode évolutive qui va bien au-delà des outils et des rituels."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;