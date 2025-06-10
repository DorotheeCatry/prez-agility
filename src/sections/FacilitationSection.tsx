import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, PlayCircle, Clock, Target, CheckCircle, Monitor, Mic, Video, Star, Zap, ArrowRight, Pause, RotateCcw, Volume2, UserCheck, Eye, FileText, TrendingUp, Award, Coffee, Calendar } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const FacilitationSection: React.FC<SectionProps> = ({ isActive }) => {
  const [activeDemo, setActiveDemo] = useState('overview');
  const [currentDialogueStep, setCurrentDialogueStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  // Données des participants
  const participants = [
    { 
      name: 'Dorothée', 
      role: 'Scrum Master', 
      color: 'from-red-500 to-red-600',
      avatar: '👩‍💼',
      responsibilities: ['Animation générale', 'Gestion du temps', 'Facilitation des échanges']
    },
    { 
      name: 'Nicolas', 
      role: 'Product Owner', 
      color: 'from-blue-500 to-blue-600',
      avatar: '👨‍💻',
      responsibilities: ['Vision produit', 'Priorisation', 'Critères d\'acceptation']
    },
    { 
      name: 'Maxime', 
      role: 'Développeur ML', 
      color: 'from-green-500 to-green-600',
      avatar: '🧑‍🔬',
      responsibilities: ['Démonstration technique', 'Métriques ML', 'Performance modèles']
    },
    { 
      name: 'Eliandy', 
      role: 'Développeur Full-Stack', 
      color: 'from-purple-500 to-purple-600',
      avatar: '👨‍💻',
      responsibilities: ['Interface utilisateur', 'API', 'Intégration']
    },
    { 
      name: 'Jury', 
      role: 'Stakeholders', 
      color: 'from-yellow-500 to-orange-500',
      avatar: '👥',
      responsibilities: ['Feedback', 'Questions', 'Validation']
    }
  ];

  // Script de dialogue interactif
  const sprintReviewDialogue = [
    {
      phase: 'Ouverture',
      duration: '2 min',
      timeCode: '0:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "Bonjour à tous ! Bienvenue à notre Sprint Review du Sprint 4. Je suis Dorothée, votre Scrum Master aujourd'hui. Nous avons 15 minutes pour vous présenter ce que nous avons livré et recueillir vos précieux feedbacks.",
      action: 'Présentation du cadre',
      tips: 'Ton chaleureux, cadrage temporel clair'
    },
    {
      phase: 'Ouverture',
      duration: '2 min',
      timeCode: '0:30',
      speaker: 'Nicolas',
      role: 'Product Owner',
      content: "En tant que Product Owner, je rappelle notre Sprint Goal : livrer une application complète de prédiction de popularité des films avec interface utilisateur et API fonctionnelle. Nous allons vous montrer concrètement ce qui a été réalisé.",
      action: 'Rappel des objectifs',
      tips: 'Vision produit claire, lien avec la valeur business'
    },
    {
      phase: 'Démonstration',
      duration: '6 min',
      timeCode: '2:00',
      speaker: 'Eliandy',
      role: 'Développeur Full-Stack',
      content: "Je vais vous faire une démonstration live de notre dashboard Django. Voici l'interface principale où un exploitant de cinéma peut saisir les informations d'un film...",
      action: 'Démonstration en direct',
      tips: 'Manipulation réelle, cas d\'usage concret'
    },
    {
      phase: 'Démonstration',
      duration: '6 min',
      timeCode: '4:00',
      speaker: 'Eliandy',
      role: 'Développeur Full-Stack',
      content: "Regardez, je saisis 'Dune 2' avec Denis Villeneuve comme réalisateur, Timothée Chalamet au casting... Notre modèle prédit 2.3 millions d'entrées en première semaine !",
      action: 'Exemple concret',
      tips: 'Données réelles, résultat immédiat'
    },
    {
      phase: 'Démonstration',
      duration: '6 min',
      timeCode: '5:30',
      speaker: 'Maxime',
      role: 'Développeur ML',
      content: "Cette prédiction s'appuie sur notre modèle LightGBM entraîné sur 5000+ films. Voici nos métriques : RMSE de 0.23 et R² de 0.78. Les features les plus importantes sont le budget, le genre et l'engagement sur les trailers.",
      action: 'Explication technique',
      tips: 'Métriques claires, vulgarisation adaptée'
    },
    {
      phase: 'Démonstration',
      duration: '6 min',
      timeCode: '7:00',
      speaker: 'Jury',
      role: 'Stakeholders',
      content: "Très impressionnant ! Comment gérez-vous les films sans données historiques ? Et quelle est la fiabilité pour les films d'auteur versus les blockbusters ?",
      action: 'Questions techniques',
      tips: 'Engagement du jury, questions pertinentes'
    },
    {
      phase: 'Échanges',
      duration: '4 min',
      timeCode: '8:00',
      speaker: 'Maxime',
      role: 'Développeur ML',
      content: "Excellente question ! Pour les nouveaux réalisateurs, nous utilisons des embeddings basés sur les genres et collaborations passées. Pour les films d'auteur, notre modèle est effectivement moins précis - c'est une limitation que nous documentons.",
      action: 'Réponse technique honnête',
      tips: 'Transparence sur les limites, solutions proposées'
    },
    {
      phase: 'Échanges',
      duration: '4 min',
      timeCode: '9:30',
      speaker: 'Nicolas',
      role: 'Product Owner',
      content: "C'est exactement le type de feedback qu'on recherche ! Nous pourrions ajouter un indicateur de confiance de la prédiction selon le type de film. Qu'en pensez-vous ?",
      action: 'Proposition d\'amélioration',
      tips: 'Transformation du feedback en User Story'
    },
    {
      phase: 'Échanges',
      duration: '4 min',
      timeCode: '11:00',
      speaker: 'Jury',
      role: 'Stakeholders',
      content: "Parfait ! Et pour l'utilisation pratique, est-ce que vous avez prévu une API pour intégrer ça dans nos systèmes existants ?",
      action: 'Question d\'intégration',
      tips: 'Préoccupation business réelle'
    },
    {
      phase: 'Échanges',
      duration: '4 min',
      timeCode: '11:30',
      speaker: 'Eliandy',
      role: 'Développeur Full-Stack',
      content: "Absolument ! Notre API FastAPI est déjà fonctionnelle. Voici la documentation Swagger avec tous les endpoints. Vous pouvez faire des appels REST pour obtenir des prédictions en temps réel.",
      action: 'Démonstration API',
      tips: 'Preuve technique, documentation prête'
    },
    {
      phase: 'Clôture',
      duration: '3 min',
      timeCode: '13:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "Merci pour ces échanges très riches ! Je note : indicateur de confiance, amélioration pour films d'auteur, et documentation API étendue. Ces points enrichiront notre Product Backlog.",
      action: 'Synthèse des feedbacks',
      tips: 'Prise de notes visible, engagement sur le suivi'
    },
    {
      phase: 'Clôture',
      duration: '3 min',
      timeCode: '14:30',
      speaker: 'Nicolas',
      role: 'Product Owner',
      content: "En résumé, nous avons livré un produit fonctionnel qui répond au besoin initial. Vos retours nous donnent une roadmap claire pour les prochaines itérations. Merci pour votre engagement !",
      action: 'Conclusion et perspectives',
      tips: 'Bilan positif, ouverture sur l\'avenir'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && isPlaying && currentDialogueStep < sprintReviewDialogue.length - 1) {
      interval = setInterval(() => {
        setCurrentDialogueStep(prev => prev + 1);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, isPlaying, currentDialogueStep]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setAutoPlay(true);
    } else {
      setAutoPlay(false);
    }
  };

  const resetDialogue = () => {
    setCurrentDialogueStep(0);
    setIsPlaying(false);
    setAutoPlay(false);
  };

  const getCurrentSpeaker = () => {
    const current = sprintReviewDialogue[currentDialogueStep];
    return participants.find(p => p.name === current?.speaker || p.role === current?.role);
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M50 50c0-27.614-22.386-50-50-50v50h50z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <section className="section relative z-10">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full border border-white/20 backdrop-blur-sm fade-in mb-6">
              <Users size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-white">Animation Sprint Review</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">C4: Animation</span>
              <br />
              <span className="text-white">d'une Sprint Review</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Démonstration interactive d'une Sprint Review : dialogue, rôles et bonnes pratiques
            </p>
          </div>

          {/* Navigation principale */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: Eye, color: 'from-blue-500 to-indigo-600' },
              { id: 'dialogue', label: 'Dialogue interactif', icon: MessageSquare, color: 'from-green-500 to-emerald-600' },
              { id: 'roles', label: 'Rôles & Responsabilités', icon: Users, color: 'from-purple-500 to-pink-600' }
            ].map((tab) => (
              <button 
                key={tab.id}
                className={`btn transition-all duration-500 ${
                  activeDemo === tab.id 
                    ? 'btn-primary scale-105' 
                    : 'btn-outline hover:scale-105'
                }`}
                onClick={() => setActiveDemo(tab.id)}
              >
                <tab.icon size={20} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu selon l'onglet actif */}
          {activeDemo === 'overview' && (
            <OverviewContent />
          )}

          {activeDemo === 'dialogue' && (
            <DialogueInteractifContent 
              dialogue={sprintReviewDialogue}
              participants={participants}
              currentStep={currentDialogueStep}
              setCurrentStep={setCurrentDialogueStep}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onReset={resetDialogue}
              getCurrentSpeaker={getCurrentSpeaker}
            />
          )}

          {activeDemo === 'roles' && (
            <RolesResponsabilitesContent participants={participants} />
          )}
        </div>
      </section>
    </div>
  );
};

// Composant Vue d'ensemble
const OverviewContent: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="card card-glow scale-in">
        <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
          Qu'est-ce qu'une Sprint Review ?
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Target size={20} className="text-white" />
                </div>
                Objectif principal
              </h4>
              <p className="text-white/80 leading-relaxed">
                Démontrer les fonctionnalités développées pendant le sprint aux stakeholders, 
                recueillir leurs feedbacks et valider que la valeur livrée correspond aux attentes.
              </p>
            </div>

            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                Format et timing
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Durée :</span>
                  <span className="text-white font-bold">15 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Fréquence :</span>
                  <span className="text-white font-bold">Fin de chaque sprint</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Participants :</span>
                  <span className="text-white font-bold">Équipe + Stakeholders</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                Livrables attendus
              </h4>
              <ul className="space-y-2">
                {[
                  'Démonstration des fonctionnalités terminées',
                  'Métriques de performance et qualité',
                  'Feedbacks structurés des stakeholders',
                  'Mise à jour du Product Backlog'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Sprint Review en action"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-display font-bold text-white mb-2">
                  Sprint Review collaborative
                </h4>
                <p className="text-white/90">
                  Échange direct entre l'équipe de développement et les stakeholders
                </p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-orange-400/30">
              <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-3">
                <Zap size={20} />
                Spécificités de notre contexte
              </h4>
              <div className="space-y-3">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong>Contexte pédagogique :</strong> Formateurs comme stakeholders, 
                  rotation des rôles d'animation, apprentissage des rituels Scrum.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong>Projet IA :</strong> Démonstration de modèles ML, métriques techniques, 
                  vulgarisation pour un public non-technique.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong>Équipe apprenante :</strong> Chaque membre découvre l'animation, 
                  apprentissage par la pratique des soft skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structure de la Sprint Review */}
      <div className="card card-glow scale-in delay-200">
        <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
          Structure de notre Sprint Review
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              phase: 'Ouverture',
              duration: '2 min',
              icon: Coffee,
              color: 'from-blue-500 to-indigo-600',
              activities: ['Accueil', 'Cadrage', 'Objectifs']
            },
            {
              phase: 'Démonstration',
              duration: '6 min',
              icon: Monitor,
              color: 'from-green-500 to-emerald-600',
              activities: ['Demo live', 'Cas d\'usage', 'Métriques']
            },
            {
              phase: 'Échanges',
              duration: '4 min',
              icon: MessageSquare,
              color: 'from-orange-500 to-red-600',
              activities: ['Questions', 'Feedbacks', 'Discussions']
            },
            {
              phase: 'Clôture',
              duration: '3 min',
              icon: CheckCircle,
              color: 'from-purple-500 to-pink-600',
              activities: ['Synthèse', 'Actions', 'Remerciements']
            }
          ].map((phase, index) => (
            <div key={index} className="glass p-6 rounded-xl border border-white/20 text-center group hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <phase.icon size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{phase.phase}</h4>
              <p className="text-[var(--color-secondary)] font-bold mb-4">{phase.duration}</p>
              <ul className="space-y-1">
                {phase.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="text-white/70 text-sm">{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Composant Dialogue Interactif
const DialogueInteractifContent: React.FC<{
  dialogue: any[];
  participants: any[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
  onReset: () => void;
  getCurrentSpeaker: () => any;
}> = ({ dialogue, participants, currentStep, setCurrentStep, isPlaying, onPlayPause, onReset, getCurrentSpeaker }) => {
  
  const currentDialogue = dialogue[currentStep];
  const currentSpeaker = getCurrentSpeaker();

  return (
    <div className="space-y-8">
      {/* Contrôles de lecture */}
      <div className="card card-glow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-display font-bold text-white">
            Dialogue interactif - Sprint Review
          </h3>
          <div className="flex items-center gap-4">
            <button
              onClick={onPlayPause}
              className={`btn ${isPlaying ? 'btn-secondary' : 'btn-primary'} flex items-center gap-2`}
            >
              {isPlaying ? <Pause size={20} /> : <PlayCircle size={20} />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={onReset}
              className="btn btn-outline flex items-center gap-2"
            >
              <RotateCcw size={20} />
              Reset
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm">Progression</span>
            <span className="text-white/70 text-sm">{currentStep + 1} / {dialogue.length}</span>
          </div>
          <div className="w-full bg-black/30 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / dialogue.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation par étapes */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
          {dialogue.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`p-2 rounded-lg text-xs transition-all duration-300 ${
                index === currentStep
                  ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white'
                  : index < currentStep
                  ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                  : 'bg-white/10 text-white/60 border border-white/20'
              }`}
            >
              <div className="font-bold">{step.timeCode}</div>
              <div>{step.phase}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Scène de dialogue */}
      <div className="card card-glow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Participants visuels */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users size={20} className="text-blue-400" />
              Participants
            </h4>
            <div className="space-y-4">
              {participants.map((participant, index) => (
                <div 
                  key={index} 
                  className={`glass p-4 rounded-xl border transition-all duration-500 ${
                    currentSpeaker?.name === participant.name
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 bg-gradient-to-br ${participant.color} rounded-full flex items-center justify-center text-2xl`}>
                      {participant.avatar}
                    </div>
                    <div>
                      <h5 className="font-bold text-white">{participant.name}</h5>
                      <p className="text-white/60 text-sm">{participant.role}</p>
                    </div>
                    {currentSpeaker?.name === participant.name && (
                      <div className="ml-auto">
                        <Volume2 size={20} className="text-[var(--color-primary)] animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dialogue principal */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-xl border border-white/20 min-h-[400px]">
              {/* Header du dialogue */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentSpeaker?.color || 'from-gray-500 to-gray-600'} rounded-full flex items-center justify-center text-3xl`}>
                    {currentSpeaker?.avatar || '👤'}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{currentDialogue?.speaker}</h4>
                    <p className="text-[var(--color-secondary)] font-semibold">{currentDialogue?.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">{currentDialogue?.timeCode}</div>
                  <div className="text-white/60 text-sm">{currentDialogue?.phase} - {currentDialogue?.duration}</div>
                </div>
              </div>

              {/* Contenu du dialogue */}
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl border border-[var(--color-primary)]/30">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={16} className="text-[var(--color-primary)]" />
                    <span className="font-bold text-white text-sm">Dialogue</span>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg italic">
                    "{currentDialogue?.content}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={16} className="text-green-400" />
                      <span className="font-bold text-white text-sm">Action</span>
                    </div>
                    <p className="text-white/80 text-sm">{currentDialogue?.action}</p>
                  </div>

                  <div className="glass p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={16} className="text-yellow-400" />
                      <span className="font-bold text-white text-sm">Conseil</span>
                    </div>
                    <p className="text-white/80 text-sm">{currentDialogue?.tips}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="btn btn-outline disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Précédent
                </button>
                
                <div className="text-center">
                  <div className="text-white/60 text-sm">
                    Étape {currentStep + 1} sur {dialogue.length}
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(Math.min(dialogue.length - 1, currentStep + 1))}
                  disabled={currentStep === dialogue.length - 1}
                  className="btn btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Suivant →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant Rôles et Responsabilités
const RolesResponsabilitesContent: React.FC<{ participants: any[] }> = ({ participants }) => {
  return (
    <div className="space-y-12">
      <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
        Rôles et responsabilités dans la Sprint Review
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {participants.slice(0, -1).map((participant, index) => (
          <div key={index} className="card card-glow scale-in" style={{ animationDelay: `${index * 200}ms` }}>
            <div className="text-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${participant.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-4`}>
                {participant.avatar}
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{participant.name}</h4>
              <p className="text-[var(--color-secondary)] font-semibold">{participant.role}</p>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                Responsabilités clés
              </h5>
              <ul className="space-y-3">
                {participant.responsibilities.map((resp: string, respIndex: number) => (
                  <li key={respIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Phrases clés selon le rôle */}
              <div className="glass p-4 rounded-xl border border-white/20 mt-6">
                <h6 className="font-bold text-white mb-2 flex items-center gap-2">
                  <MessageSquare size={14} className="text-blue-400" />
                  Phrases clés
                </h6>
                <div className="space-y-2">
                  {participant.name === 'Dorothée' && (
                    <>
                      <p className="text-white/70 text-xs italic">"Nous avons 15 minutes pour..."</p>
                      <p className="text-white/70 text-xs italic">"Je note vos feedbacks pour..."</p>
                      <p className="text-white/70 text-xs italic">"Avez-vous des questions ?"</p>
                    </>
                  )}
                  {participant.name === 'Nicolas' && (
                    <>
                      <p className="text-white/70 text-xs italic">"Notre Sprint Goal était..."</p>
                      <p className="text-white/70 text-xs italic">"Cette fonctionnalité apporte..."</p>
                      <p className="text-white/70 text-xs italic">"Nous pourrions ajouter..."</p>
                    </>
                  )}
                  {participant.name === 'Maxime' && (
                    <>
                      <p className="text-white/70 text-xs italic">"Nos métriques montrent..."</p>
                      <p className="text-white/70 text-xs italic">"Le modèle prédit..."</p>
                      <p className="text-white/70 text-xs italic">"Voici les performances..."</p>
                    </>
                  )}
                  {participant.name === 'Eliandy' && (
                    <>
                      <p className="text-white/70 text-xs italic">"Voici une démonstration..."</p>
                      <p className="text-white/70 text-xs italic">"L'interface permet de..."</p>
                      <p className="text-white/70 text-xs italic">"L'API est documentée..."</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stakeholders */}
      <div className="card card-glow scale-in delay-500">
        <h4 className="text-2xl font-display font-bold text-white mb-6 text-center">
          Rôle des Stakeholders (Jury)
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-white/20">
              <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                <Eye size={16} className="text-blue-400" />
                Attitude attendue
              </h5>
              <ul className="space-y-2">
                {[
                  'Écoute active et bienveillante',
                  'Questions constructives et pertinentes',
                  'Feedback orienté valeur business',
                  'Suggestions d\'amélioration concrètes'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6 rounded-xl border border-white/20">
              <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare size={16} className="text-green-400" />
                Types de questions efficaces
              </h5>
              <div className="space-y-3">
                <div className="p-3 bg-black/20 rounded-lg">
                  <p className="text-green-400 text-sm font-bold mb-1">Questions de clarification :</p>
                  <p className="text-white/70 text-xs italic">"Comment gérez-vous les cas où... ?"</p>
                </div>
                <div className="p-3 bg-black/20 rounded-lg">
                  <p className="text-blue-400 text-sm font-bold mb-1">Questions d'usage :</p>
                  <p className="text-white/70 text-xs italic">"Dans quel contexte utiliserait-on... ?"</p>
                </div>
                <div className="p-3 bg-black/20 rounded-lg">
                  <p className="text-purple-400 text-sm font-bold mb-1">Questions d'évolution :</p>
                  <p className="text-white/70 text-xs italic">"Avez-vous prévu d'ajouter... ?"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Stakeholders en Sprint Review"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-xl font-display font-bold text-white mb-2">
                Engagement des stakeholders
              </h4>
              <p className="text-white/90">
                Participation active et feedback constructif pour l'amélioration continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitationSection;