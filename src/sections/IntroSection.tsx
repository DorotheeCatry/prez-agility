import React from 'react';
import { Film as FilmReel, Film, Clapperboard, Brain, ArrowRight } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const IntroSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in">
                <span className="text-[var(--color-primary)]">Projet Agile</span> IA
              </h2>
              <p className="text-xl md:text-2xl text-[var(--color-text)]/80 fade-in delay-100">
                Prédiction de la popularité des films - Formation Développement IA Simplon HDF (2025)
              </p>
              <p className="text-lg slide-up delay-200">
                Découvrez comment notre équipe de 4 développeurs IA a utilisé la méthodologie Scrum 
                pour créer un modèle prédictif du succès commercial des films en salle.
              </p>
              
              <div className="pt-4 slide-up delay-300">
                <div className="text-sm text-[var(--color-text)]/60 mb-4">
                  Par Dorothée Catry
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn btn-primary flex items-center gap-2">
                    Commencer l'exploration
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn btn-outline">
                    Voir le projet complet
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bounce-in delay-400">
              <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg" 
                  alt="Cinema production" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Prédiction IA - Popularité Films
                  </h3>
                  <p className="text-[var(--color-text)]/90">
                    Estimation du nombre d'entrées en première semaine
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card slide-up hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Brain size={24} className="text-[var(--color-primary)]" />
                <h3 className="text-xl font-display font-bold">Modélisation ML</h3>
              </div>
              <p className="text-[var(--color-text)]/70">
                Modèles Random Forest et LightGBM pour prédire le succès commercial 
                à partir de données Allociné et Dailymotion.
              </p>
            </div>
            
            <div className="card slide-up delay-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Film size={24} className="text-[var(--color-secondary)]" />
                <h3 className="text-xl font-display font-bold">Scraping & Data</h3>
              </div>
              <p className="text-[var(--color-text)]/70">
                Collecte automatisée des données films (casting, box-office, engagement trailers) 
                avec feature engineering avancé.
              </p>
            </div>
            
            <div className="card slide-up delay-200 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clapperboard size={24} className="text-[var(--color-accent-light)]" />
                <h3 className="text-xl font-display font-bold">Dashboard Django</h3>
              </div>
              <p className="text-[var(--color-text)]/70">
                Interface web avec API FastAPI pour visualiser les prédictions, 
                filtres et graphiques interactifs.
              </p>
            </div>
          </div>

          {/* Objectifs du rapport */}
          <div className="mt-16 card scale-in delay-500">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
              Objectifs de ce rapport
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-[var(--color-primary)]/10 p-2 rounded-lg">
                    <FilmReel size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Exposer la démarche Agile</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Présentation détaillée de l'application de Scrum dans un contexte IA
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-[var(--color-secondary)]/10 p-2 rounded-lg">
                    <Film size={20} className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Analyser les choix organisationnels</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Rotation des rôles, rituels appliqués et enseignements tirés
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-[var(--color-accent-light)]/10 p-2 rounded-lg">
                    <Clapperboard size={20} className="text-[var(--color-accent-light)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Présenter outils et rituels</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Sprints, daily meetings, reviews et rétrospectives en action
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-[var(--color-success)]/10 p-2 rounded-lg">
                    <Brain size={20} className="text-[var(--color-success)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Préparer au contexte professionnel</h4>
                    <p className="text-sm text-[var(--color-text)]/70">
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