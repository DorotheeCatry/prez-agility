import React from 'react';
import { CheckCircle, ArrowRight, Star, ChevronRight } from 'lucide-react';

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
            Conclusion
          </h2>
          <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
            Synthèse de l'approche agile pour le projet cinématographique CinéFlex 
            et perspectives d'évolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8 slide-up">
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Bénéfices constatés
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Réduction des risques</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      L'approche incrémentale a permis d'identifier et de résoudre les problèmes 
                      plus tôt dans le processus de production.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Amélioration de la qualité</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Les revues régulières ont permis d'affiner la vision artistique et 
                      d'optimiser la qualité technique.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Collaboration renforcée</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Les rituels agiles ont favorisé une meilleure communication entre les 
                      équipes créatives et techniques.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="text-[var(--color-success)] mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Optimisation des ressources</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      La planification par sprint a permis une allocation plus efficace des 
                      ressources humaines et matérielles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-secondary)]">
                Challenges rencontrés
              </h3>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                    Résistance au changement
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Certains membres de l'équipe, habitués aux méthodes traditionnelles de production 
                    cinématographique, ont initialement montré de la résistance face aux pratiques agiles.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-[var(--color-text)]/60">Solution:</span>
                    <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-0.5 rounded">
                      Formation progressive
                    </span>
                    <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-0.5 rounded">
                      Mentorat personnalisé
                    </span>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                    Contraintes externes
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Les facteurs externes comme la météo, la disponibilité des lieux de tournage et 
                    des acteurs ont parfois perturbé la planification des sprints.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-[var(--color-text)]/60">Solution:</span>
                    <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-0.5 rounded">
                      Buffers planifiés
                    </span>
                    <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-0.5 rounded">
                      Plans alternatifs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 slide-in-right delay-200">
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
                Résultats obtenus
              </h3>
              
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/7991634/pexels-photo-7991634.jpeg" 
                  alt="Film production result" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    CinéFlex: Un succès agile
                  </h4>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-[var(--color-surface)]/50 rounded-lg border border-[var(--color-text)]/10">
                  <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">15%</div>
                  <p className="text-sm text-[var(--color-text)]/70">Réduction des coûts de production</p>
                </div>
                
                <div className="text-center p-4 bg-[var(--color-surface)]/50 rounded-lg border border-[var(--color-text)]/10">
                  <div className="text-3xl font-bold text-[var(--color-secondary)] mb-1">20%</div>
                  <p className="text-sm text-[var(--color-text)]/70">Diminution des reshoots</p>
                </div>
                
                <div className="text-center p-4 bg-[var(--color-surface)]/50 rounded-lg border border-[var(--color-text)]/10">
                  <div className="text-3xl font-bold text-[var(--color-accent-light)] mb-1">30%</div>
                  <p className="text-sm text-[var(--color-text)]/70">Amélioration de la satisfaction de l'équipe</p>
                </div>
                
                <div className="text-center p-4 bg-[var(--color-surface)]/50 rounded-lg border border-[var(--color-text)]/10">
                  <div className="text-3xl font-bold text-[var(--color-success)] mb-1">10j</div>
                  <p className="text-sm text-[var(--color-text)]/70">Avance sur le planning initial</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                  Témoignages des parties prenantes
                </h4>
                
                <div className="space-y-3">
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--color-secondary)]">
                        <Star size={16} />
                      </span>
                      <h5 className="font-semibold text-sm">Réalisateur</h5>
                    </div>
                    <p className="text-xs text-[var(--color-text)]/70 italic">
                      "L'approche agile m'a permis d'affiner ma vision artistique tout au long du projet,
                      tout en gardant le contrôle sur les aspects techniques et budgétaires."
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--color-secondary)]">
                        <Star size={16} />
                      </span>
                      <h5 className="font-semibold text-sm">Producteur</h5>
                    </div>
                    <p className="text-xs text-[var(--color-text)]/70 italic">
                      "La transparence et la prévisibilité apportées par les méthodes agiles ont 
                      considérablement réduit les risques financiers du projet."
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--color-secondary)]">
                        <Star size={16} />
                      </span>
                      <h5 className="font-semibold text-sm">Directeur de la photographie</h5>
                    </div>
                    <p className="text-xs text-[var(--color-text)]/70 italic">
                      "Les revues régulières nous ont permis d'ajuster notre approche visuelle en fonction
                      des rushes, améliorant considérablement la qualité finale."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Perspectives d'évolution
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <ArrowRight size={20} className="text-[var(--color-secondary)]" />
                  <p className="text-[var(--color-text)]/80">
                    <span className="font-semibold">Standardisation des pratiques agiles</span> à l'échelle
                    de la société de production
                  </p>
                </div>
                
                <div className="flex gap-3 items-center">
                  <ArrowRight size={20} className="text-[var(--color-secondary)]" />
                  <p className="text-[var(--color-text)]/80">
                    <span className="font-semibold">Formation</span> de l'ensemble des équipes aux méthodes agiles
                  </p>
                </div>
                
                <div className="flex gap-3 items-center">
                  <ArrowRight size={20} className="text-[var(--color-secondary)]" />
                  <p className="text-[var(--color-text)]/80">
                    <span className="font-semibold">Développement d'outils spécifiques</span> pour la gestion
                    agile de projets cinématographiques
                  </p>
                </div>
                
                <div className="flex gap-3 items-center">
                  <ArrowRight size={20} className="text-[var(--color-secondary)]" />
                  <p className="text-[var(--color-text)]/80">
                    <span className="font-semibold">Publication d'un livre blanc</span> sur l'expérience CinéFlex
                    pour partager les bonnes pratiques
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a href="#" className="btn btn-primary flex items-center gap-2">
                  <span>Explorer d'autres projets agiles</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-display italic text-[var(--color-text)]/60 bounce-in delay-300">
            "Le cinéma est un art collectif qui s'épanouit pleinement dans un cadre agile."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;