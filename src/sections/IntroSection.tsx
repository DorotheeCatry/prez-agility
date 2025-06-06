import React from 'react';
import { Film as FilmReel, Film, Clapperboard, Brain } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const IntroSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section
      id="intro"
      className={`section ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in">
              <span className="text-[var(--color-primary)]">New is</span> Always Better
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-text)]/80 fade-in delay-100">
              Projet de prédiction de popularité des films avec une approche agile
            </p>
            <p className="text-lg slide-up delay-200">
              Découvrez comment nous utilisons l'intelligence artificielle et les méthodologies agiles 
              pour optimiser la programmation cinématographique.
            </p>
            
            <div className="pt-4 slide-up delay-300">
              <button className="btn btn-primary">Explorer le projet</button>
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
                  Projet: Prédiction IA
                </h3>
                <p className="text-[var(--color-text)]/90">
                  Optimisation de la programmation cinématographique
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="card slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Brain size={24} className="text-[var(--color-primary)]" />
              <h3 className="text-xl font-display font-bold">Intelligence Artificielle</h3>
            </div>
            <p className="text-[var(--color-text)]/70">
              Modèle de machine learning pour prédire la popularité des films et optimiser 
              la programmation hebdomadaire.
            </p>
          </div>
          
          <div className="card slide-up delay-100">
            <div className="flex items-center gap-3 mb-4">
              <Film size={24} className="text-[var(--color-secondary)]" />
              <h3 className="text-xl font-display font-bold">Gestion Adaptative</h3>
            </div>
            <p className="text-[var(--color-text)]/70">
              Sélection hebdomadaire des films basée sur les prédictions IA et 
              l'analyse des données en temps réel.
            </p>
          </div>
          
          <div className="card slide-up delay-200">
            <div className="flex items-center gap-3 mb-4">
              <Clapperboard size={24} className="text-[var(--color-accent-light)]" />
              <h3 className="text-xl font-display font-bold">Dashboard Interactif</h3>
            </div>
            <p className="text-[var(--color-text)]/70">
              Interface utilisateur intuitive pour visualiser les prédictions, 
              suivre les performances et optimiser les décisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;