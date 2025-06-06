import React, { useEffect, useState } from 'react';
import { Film as FilmReel, Film, Clapperboard, Brain, ArrowRight, Play, Star, Zap } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const IntroSection: React.FC<SectionProps> = ({ isActive }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Prédiction de la popularité des films';

  useEffect(() => {
    if (isActive) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isActive]);

  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <section className="section relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-full border border-white/20 backdrop-blur-sm fade-in">
                  <Star size={16} className="text-[var(--color-secondary)]" />
                  <span className="text-sm font-medium text-white">Formation Développement IA - Simplon HDF 2025</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight fade-in delay-200">
                  <span className="gradient-text">Projet</span>
                  <br />
                  <span className="text-white">Agile IA</span>
                </h1>

                <div className="h-16 flex items-center slide-up delay-400">
                  <p className="text-xl md:text-2xl text-white/80 font-medium">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>

                <p className="text-lg text-white/70 leading-relaxed slide-up delay-600">
                  Découvrez comment notre équipe de 4 développeurs IA a utilisé la méthodologie Scrum 
                  pour créer un modèle prédictif du succès commercial des films en salle.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 slide-up delay-800">
                <button className="btn btn-primary group">
                  <Play size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Commencer l'exploration
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="btn btn-outline group">
                  <FilmReel size={20} className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Voir le projet complet
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 slide-up delay-1000">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4</div>
                  <div className="text-sm text-white/60">Semaines</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4</div>
                  <div className="text-sm text-white/60">Développeurs</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-white/60">Agile</div>
                </div>
              </div>
            </div>

            {/* Right content - Hero image */}
            <div className="relative bounce-in delay-400">
              <div className="relative group">
                {/* Main image container */}
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl image-hover">
                  <img 
                    src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg" 
                    alt="Cinema production" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass p-6 rounded-2xl border border-white/20">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        Prédiction IA - Popularité Films
                      </h3>
                      <p className="text-white/80 mb-4">
                        Estimation du nombre d'entrées en première semaine
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-white/70">Modèle actif</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap size={16} className="text-[var(--color-secondary)]" />
                          <span className="text-sm text-white/70">Temps réel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl flex items-center justify-center shadow-2xl float">
                  <Brain size={32} className="text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-xl flex items-center justify-center shadow-2xl float" style={{ animationDelay: '2s' }}>
                  <Film size={24} className="text-black" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="card card-glow scale-in hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center">
                  <Brain size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Modélisation ML</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Modèles Random Forest et LightGBM pour prédire le succès commercial 
                à partir de données Allociné et Dailymotion.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                <span className="text-sm text-white/60">Précision optimisée</span>
              </div>
            </div>

            <div className="card card-glow scale-in delay-200 hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-xl flex items-center justify-center">
                  <Film size={24} className="text-black" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Scraping & Data</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Collecte automatisée des données films (casting, box-office, engagement trailers) 
                avec feature engineering avancé.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
                <span className="text-sm text-white/60">Données enrichies</span>
              </div>
            </div>

            <div className="card card-glow scale-in delay-400 hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent-light)] to-blue-600 rounded-xl flex items-center justify-center">
                  <Clapperboard size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Dashboard Django</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Interface web avec API FastAPI pour visualiser les prédictions, 
                filtres et graphiques interactifs.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-accent-light)] rounded-full"></div>
                <span className="text-sm text-white/60">Interface intuitive</span>
              </div>
            </div>
          </div>

          {/* Objectives section */}
          <div className="mt-20 card card-glow scale-in delay-600">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Objectifs de ce rapport
              </h3>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                Une exploration complète de l'application de Scrum dans un projet IA innovant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FilmReel size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Exposer la démarche Agile</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Présentation détaillée de l'application de Scrum dans un contexte IA
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Film size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Analyser les choix organisationnels</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Rotation des rôles, rituels appliqués et enseignements tirés
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent-light)] to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clapperboard size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Présenter outils et rituels</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Sprints, daily meetings, reviews et rétrospectives en action
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Préparer au contexte professionnel</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Contribution de l'agilité dans la structuration du travail collaboratif
                    </p>
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

export default IntroSection;