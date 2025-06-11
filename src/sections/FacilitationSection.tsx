import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, PlayCircle, Clock, Target, CheckCircle, Monitor, Mic, Video, Star, Zap, ArrowRight, Pause, RotateCcw, Volume2, UserCheck, Eye, FileText, TrendingUp, Award, Coffee, Calendar, X, Settings } from 'lucide-react';

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
      avatar: '🧑‍🏫',
      responsibilities: ['Animation du Daily', 'Gestion du temps', 'Identification des blocages'],
      keyPhrases: [
        '"C\'est l\'heure de notre Daily Scrum !"',
        '"On reste focus, pas de discussion technique"',
        '"J\'ai noté un point à creuser avec..."',
        '"Si vous avez d\'autres sujets, restez après"'
      ],
      keywords: [
        'Synchronisation', 'Timer', 'Blocages', 'Actions', 'Focus', 'Équipe'
      ]
    },
    { 
      name: 'Nicolas', 
      role: 'Product Owner', 
      color: 'from-blue-500 to-blue-600',
      avatar: '🧑‍🎨',
      responsibilities: ['Validation User Stories', 'Mise à jour backlog', 'Critères d\'acceptation'],
      keyPhrases: [
        '"J\'ai validé les user stories du Sprint..."',
        '"Je prépare les critères d\'acceptation"',
        '"Pas de blocage de mon côté"'
      ],
      keywords: [
        'User Stories', 'Backlog', 'Validation', 'Critères', 'Priorisation', 'Sprint Goal'
      ]
    },
    { 
      name: 'Maxime', 
      role: 'Développeur ML', 
      color: 'from-green-500 to-green-600',
      avatar: '👨‍🔧',
      responsibilities: ['Développement modèles', 'Preprocessing données', 'Tests ML'],
      keyPhrases: [
        '"J\'ai bossé sur le nettoyage des données"',
        '"Je commence le prétraitement pour..."',
        '"J\'ai un doute sur... je veux en discuter"'
      ],
      keywords: [
        'Données', 'Modèle', 'Algorithme', 'Performance', 'Preprocessing', 'Métriques'
      ]
    },
    { 
      name: 'Eliandy', 
      role: 'Développeur Full-Stack', 
      color: 'from-purple-500 to-purple-600',
      avatar: '👩‍💻',
      responsibilities: ['Interface utilisateur', 'Tests unitaires', 'Intégration'],
      keyPhrases: [
        '"J\'ai fini l\'intégration de..."',
        '"Je passe sur les tests unitaires"',
        '"Pas de blocage, tout roule !"'
      ],
      keywords: [
        'Interface', 'Tests', 'Intégration', 'API', 'Frontend', 'Déploiement'
      ]
    }
  ];

  // Script de dialogue Daily Scrum (10 minutes)
  const dailyScrumDialogue = [
    {
      phase: 'Ouverture',
      duration: '2 min',
      timeCode: '0:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "Salut tout le monde ! C'est l'heure de notre Daily Scrum. Petit rappel rapide avant qu'on commence : Le Daily, c'est notre rituel d'équipe pour rester synchronisés. Chacun répond à 3 questions : Qu'est-ce que j'ai fait hier ? Que vais-je faire aujourd'hui ? Est-ce que j'ai un blocage ?",
      action: 'Cadrage du rituel',
      tools: 'Ouverture Slack #daily, timer 10min visible'
    },
    {
      phase: 'Ouverture',
      duration: '2 min',
      timeCode: '1:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "On reste focus, pas de discussion technique ici : on garde ça pour après. Nous avons 10 minutes maximum. Allez, on commence ! Eliandy, tu veux y aller ?",
      action: 'Lancement des tours de parole',
      tools: 'Désignation ordre de passage, prise de notes'
    },
    {
      phase: 'Tour de parole 1',
      duration: '2 min',
      timeCode: '2:00',
      speaker: 'Eliandy',
      role: 'Développeur Full-Stack',
      content: "MOTS-CLÉS À UTILISER : Interface, Tests, Intégration, Pas de blocage, Fonctionnel",
      action: 'Réponse aux 3 questions',
      tools: 'Update statut Jira, commit GitHub visible'
    },
    {
      phase: 'Tour de parole 2',
      duration: '2 min',
      timeCode: '4:00',
      speaker: 'Nicolas',
      role: 'Product Owner',
      content: "MOTS-CLÉS À UTILISER : User Stories, Backlog, Validation, Critères d'acceptation, Sprint",
      action: 'Update PO',
      tools: 'Jira backlog updated, Confluence DoD'
    },
    {
      phase: 'Tour de parole 3',
      duration: '2 min',
      timeCode: '6:00',
      speaker: 'Maxime',
      role: 'Développeur ML',
      content: "MOTS-CLÉS À UTILISER : Données, Modèle, Algorithme, Blocage technique, Discussion après",
      action: 'Identification d\'un blocage',
      tools: 'Note blocage dans Jira, @mention Slack'
    },
    {
      phase: 'Clôture',
      duration: '1 min',
      timeCode: '8:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "Parfait ! Merci à tous pour vos updates. J'ai noté un point à creuser avec Maxime sur le choix d'algorithme. Si vous avez d'autres sujets, restez après le Daily. Sinon, bonne journée et bon courage à tous !",
      action: 'Synthèse et actions',
      tools: 'Création task Jira, planning post-Daily'
    },
    {
      phase: 'Conclusion pédagogique',
      duration: '1 min',
      timeCode: '9:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "Vous voyez, en 10 minutes, on a : synchronisé toute l'équipe, mis en lumière un blocage, et préparé l'action du jour. C'est ça l'esprit Agile : avancer ensemble, avec transparence et réactivité !",
      action: 'Explication pédagogique',
      tools: 'Récap dans Slack #daily, update board'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && isPlaying && currentDialogueStep < dailyScrumDialogue.length - 1) {
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
    const current = dailyScrumDialogue[currentDialogueStep];
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
              <Clock size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-white">Daily Scrum - Le rituel le plus fréquent</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">C4: Animation</span>
              <br />
              <span className="text-white">du Daily Scrum</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Démonstration interactive du rituel quotidien : dialogue, rôles et bonnes pratiques
            </p>
          </div>

          {/* Navigation principale */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {[
              { id: 'overview', label: 'Le Daily Scrum', icon: Eye, color: 'from-blue-500 to-indigo-600' },
              { id: 'dialogue', label: 'Dialogue interactif', icon: MessageSquare, color: 'from-green-500 to-emerald-600' },
              { id: 'roles', label: 'Rôles & Mots-clés', icon: Users, color: 'from-purple-500 to-pink-600' }
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
            <DailyScrumOverviewContent />
          )}

          {activeDemo === 'dialogue' && (
            <DialogueInteractifContent 
              dialogue={dailyScrumDialogue}
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
            <RolesMotsClesContent participants={participants} />
          )}
        </div>
      </section>
    </div>
  );
};

// Composant Vue d'ensemble du Daily Scrum
const DailyScrumOverviewContent: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="card card-glow scale-in">
        <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
          Le Daily Scrum : Notre rituel quotidien
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Target size={20} className="text-white" />
                </div>
                Pourquoi le Daily ?
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                Le Daily Scrum est le rituel le plus fréquent de notre équipe. Chaque matin, 
                nous nous synchronisons en 10 minutes pour rester alignés sur nos objectifs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-white/80 text-sm">Synchronisation quotidienne</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-white/80 text-sm">Identification rapide des blocages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-white/80 text-sm">Transparence et collaboration</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                Les 3 questions magiques
              </h4>
              <div className="space-y-4">
                {[
                  { q: "Qu'est-ce que j'ai fait hier ?", desc: "Partage des réalisations", color: "text-blue-400" },
                  { q: "Que vais-je faire aujourd'hui ?", desc: "Engagement sur les objectifs", color: "text-green-400" },
                  { q: "Est-ce que j'ai un blocage ?", desc: "Identification des obstacles", color: "text-orange-400" }
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-black/20 rounded-lg">
                    <h5 className={`font-bold ${item.color} mb-1`}>{index + 1}. {item.q}</h5>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-orange-400/30">
              <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-3">
                <Zap size={20} />
                Règles d'or du Daily
              </h4>
              <ul className="space-y-2">
                {[
                  'Maximum 15 minutes (nous : 10 minutes)',
                  'Pas de discussion technique détaillée',
                  'Focus sur la synchronisation, pas la résolution',
                  'Tout le monde debout (énergie !)',
                  'Même heure, même lieu, chaque jour'
                ].map((rule, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                alt="Daily Scrum en action"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-display font-bold text-white mb-2">
                  Daily Scrum matinal
                </h4>
                <p className="text-white/90">
                  Synchronisation quotidienne de l'équipe en 10 minutes
                </p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                Notre adaptation
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Fréquence :</span>
                  <span className="text-white font-bold">Lundi à Vendredi, 9h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Durée :</span>
                  <span className="text-white font-bold">10 minutes max</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Format :</span>
                  <span className="text-white font-bold">Présentiel + Slack #daily</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Animation :</span>
                  <span className="text-white font-bold">Scrum Master du sprint</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                  <Star size={20} className="text-white" />
                </div>
                Bénéfices observés
              </h4>
              <div className="space-y-3">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-green-400">Détection rapide :</strong> Identification des blocages avant qu'ils ne deviennent critiques
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-blue-400">Coordination :</strong> Évitement des doublons et optimisation des collaborations
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-purple-400">Motivation :</strong> Dynamique d'équipe et sentiment d'appartenance renforcés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline d'un Daily type */}
      <div className="card card-glow scale-in delay-200">
        <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
          Déroulement d'un Daily type (10 minutes)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {[
            { time: '0:00', phase: 'Ouverture', desc: 'Rappel des règles', color: 'from-blue-500 to-indigo-600', icon: Coffee },
            { time: '1:00', phase: 'Lancement', desc: 'Désignation 1er speaker', color: 'from-green-500 to-emerald-600', icon: PlayCircle },
            { time: '2:00', phase: 'Tour 1', desc: 'Dev Full-Stack', color: 'from-purple-500 to-pink-600', icon: UserCheck },
            { time: '4:00', phase: 'Tour 2', desc: 'Product Owner', color: 'from-orange-500 to-red-600', icon: Target },
            { time: '6:00', phase: 'Tour 3', desc: 'Dev ML', color: 'from-teal-500 to-cyan-600', icon: Zap },
            { time: '8:00', phase: 'Synthèse', desc: 'Actions & blocages', color: 'from-yellow-500 to-orange-600', icon: CheckCircle },
            { time: '9:00', phase: 'Clôture', desc: 'Motivation équipe', color: 'from-pink-500 to-rose-600', icon: Star }
          ].map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <step.icon size={24} className="text-white" />
              </div>
              <div className="text-lg font-bold text-[var(--color-primary)] mb-1">{step.time}</div>
              <h4 className="text-sm font-bold text-white mb-2">{step.phase}</h4>
              <p className="text-xs text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Composant Dialogue Interactif (réutilisé et adapté)
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
            Dialogue interactif - Daily Scrum (10 min)
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
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
                    <span className="font-bold text-white text-sm">
                      {currentDialogue?.speaker === 'Dorothée' ? 'Dialogue complet' : 'Mots-clés à utiliser'}
                    </span>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg italic">
                    {currentDialogue?.speaker === 'Dorothée' 
                      ? `"${currentDialogue?.content}"`
                      : currentDialogue?.content
                    }
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
                      <Settings size={16} className="text-blue-400" />
                      <span className="font-bold text-white text-sm">Outils</span>
                    </div>
                    <p className="text-white/80 text-sm">{currentDialogue?.tools}</p>
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

// Composant Rôles et Mots-clés
const RolesMotsClesContent: React.FC<{ participants: any[] }> = ({ participants }) => {
  return (
    <div className="space-y-12">
      <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
        Rôles et mots-clés pour vos Daily Scrums
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {participants.map((participant, index) => (
          <div key={index} className="card card-glow scale-in" style={{ animationDelay: `${index * 200}ms` }}>
            <div className="text-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${participant.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-4`}>
                {participant.avatar}
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{participant.name}</h4>
              <p className="text-[var(--color-secondary)] font-semibold">{participant.role}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Responsabilités clés
                </h5>
                <ul className="space-y-2">
                  {participant.responsibilities.map((resp: string, respIndex: number) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mots-clés à utiliser */}
              <div className="glass p-4 rounded-xl border border-white/20">
                <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Zap size={14} className="text-yellow-400" />
                  Mots-clés à utiliser
                </h6>
                <div className="flex flex-wrap gap-2">
                  {participant.keywords.map((keyword: string, keyIndex: number) => (
                    <span 
                      key={keyIndex} 
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        participant.name === 'Dorothée' ? 'bg-red-500/20 text-red-400' :
                        participant.name === 'Nicolas' ? 'bg-blue-500/20 text-blue-400' :
                        participant.name === 'Maxime' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phrases clés */}
              <div className="glass p-4 rounded-xl border border-white/20">
                <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                  <MessageSquare size={14} className="text-blue-400" />
                  Exemples de phrases
                </h6>
                <div className="space-y-2">
                  {participant.keyPhrases.map((phrase: string, phraseIndex: number) => (
                    <p key={phraseIndex} className="text-white/70 text-xs italic bg-black/20 p-2 rounded">
                      {phrase}
                    </p>
                  ))}
                </div>
              </div>

              {/* Conseils spécifiques */}
              {participant.name === 'Dorothée' && (
                <div className="glass p-4 rounded-xl border border-[var(--color-primary)]/30">
                  <h6 className="font-bold text-[var(--color-primary)] mb-2 flex items-center gap-2">
                    <Star size={14} />
                    Conseils Scrum Master
                  </h6>
                  <ul className="space-y-1 text-xs text-white/80">
                    <li>• Garder l'énergie haute dès le matin</li>
                    <li>• Noter visiblement les blocages</li>
                    <li>• Recadrer si ça dérive en technique</li>
                    <li>• Encourager la participation de tous</li>
                  </ul>
                </div>
              )}

              {participant.name !== 'Dorothée' && (
                <div className="glass p-4 rounded-xl border border-orange-400/30">
                  <h6 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                    <Target size={14} />
                    Structure recommandée
                  </h6>
                  <div className="space-y-2 text-xs text-white/80">
                    <div className="p-2 bg-black/20 rounded">
                      <strong>Hier :</strong> "J'ai [action] sur [sujet]"
                    </div>
                    <div className="p-2 bg-black/20 rounded">
                      <strong>Aujourd'hui :</strong> "Je vais [action] [détail]"
                    </div>
                    <div className="p-2 bg-black/20 rounded">
                      <strong>Blocage :</strong> "J'ai besoin de [aide/clarification]"
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Guide pratique */}
      <div className="card card-glow scale-in delay-500">
        <h4 className="text-2xl font-display font-bold text-white mb-6 text-center">
          Guide pratique pour animer un Daily
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass p-6 rounded-xl border border-green-400/30">
            <h5 className="font-bold text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle size={16} />
              À faire
            </h5>
            <ul className="space-y-2">
              {[
                'Commencer à l\'heure pile',
                'Rappeler les 3 questions',
                'Maintenir l\'énergie',
                'Noter les blocages',
                'Planifier les points post-Daily'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-6 rounded-xl border border-red-400/30">
            <h5 className="font-bold text-red-400 mb-4 flex items-center gap-2">
              <X size={16} />
              À éviter
            </h5>
            <ul className="space-y-2">
              {[
                'Laisser dériver en réunion technique',
                'Dépasser 15 minutes',
                'Résoudre les problèmes sur place',
                'Oublier de noter les actions',
                'Monopoliser la parole'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-6 rounded-xl border border-blue-400/30">
            <h5 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
              <Zap size={16} />
              Astuces pro
            </h5>
            <ul className="space-y-2">
              {[
                'Utiliser un timer visible',
                'Alterner l\'ordre de passage',
                'Célébrer les petites victoires',
                'Poser des questions ouvertes',
                'Créer un rituel d\'équipe'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitationSection;