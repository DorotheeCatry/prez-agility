import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, PlayCircle, Clock, Target, CheckCircle, Monitor, Mic, Video, Star, Zap, ArrowRight, Pause, RotateCcw, Volume2, UserCheck, Eye, FileText, TrendingUp, Award, Coffee, Calendar, Info, AlertCircle, Lightbulb } from 'lucide-react';

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

  // Script de dialogue interactif pour Daily Scrum
  const dailyScrumDialogue = [
    {
      phase: 'Ouverture',
      duration: '2 min',
      timeCode: '0:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "Salut tout le monde ! C'est l'heure de notre Daily Scrum. Petit rappel rapide avant qu'on commence : Le Daily, c'est notre rituel d'équipe pour rester synchronisés. Chacun répond à 3 questions : Qu'est-ce que j'ai fait hier ? Que vais-je faire aujourd'hui ? Est-ce que j'ai un blocage ? On reste focus, pas de discussion technique ici : on garde ça pour après. Allez, on commence ! Nicolas, tu veux y aller ?",
      action: 'Cadrage et lancement du Daily',
      outils: 'Jira ouvert, Slack #daily, chronomètre 10min'
    },
    {
      phase: 'Tour de table',
      duration: '6 min',
      timeCode: '2:00',
      speaker: 'Nicolas',
      role: 'Product Owner',
      content: 'MOTS-CLÉS : Backlog refinement - User Stories Sprint 3 - Critères acceptation - Priorisation features - Validation stakeholders',
      action: 'Partage avancement PO',
      outils: 'Update statut stories Jira, notes Confluence'
    },
    {
      phase: 'Tour de table',
      duration: '6 min',
      timeCode: '4:00',
      speaker: 'Maxime',
      role: 'Développeur ML',
      content: 'MOTS-CLÉS : Feature engineering - Modèle LightGBM - Métriques performance - Preprocessing données - Embeddings acteurs',
      action: 'Partage avancement ML',
      outils: 'Update tâches techniques Jira, commit GitHub'
    },
    {
      phase: 'Tour de table',
      duration: '6 min',
      timeCode: '6:00',
      speaker: 'Eliandy',
      role: 'Développeur Full-Stack',
      content: 'MOTS-CLÉS : Interface Django - API FastAPI - Intégration frontend-backend - Formulaires prédiction - Documentation API',
      action: 'Partage avancement développement',
      outils: 'Update stories Jira, push branches GitHub'
    },
    {
      phase: 'Identification blocages',
      duration: '1 min',
      timeCode: '8:00',
      speaker: 'Maxime',
      role: 'Développeur ML',
      content: 'MOTS-CLÉS : Blocage tokeniseur NLP - Choix algorithme - Performance modèle - Besoin aide équipe',
      action: 'Signalement blocage technique',
      outils: 'Création ticket blocage Jira, planification point technique'
    },
    {
      phase: 'Clôture',
      duration: '1 min',
      timeCode: '9:00',
      speaker: 'Dorothée',
      role: 'Scrum Master',
      content: "Parfait ! Merci à tous pour vos updates. J'ai noté un point à creuser avec Maxime sur le tokeniseur. Si vous avez d'autres sujets, restez après le Daily. Sinon, bonne journée et bon courage à tous ! Vous voyez, en 10 minutes, on a : synchronisé toute l'équipe, mis en lumière un blocage, et préparé l'action du jour. C'est ça l'esprit Agile : avancer ensemble, avec transparence et réactivité !",
      action: 'Synthèse et clôture',
      outils: 'Mise à jour tableau Jira, notes actions Slack'
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
              <Users size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-white">Animation Daily Scrum</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">C4: Animation</span>
              <br />
              <span className="text-white">d'un Daily Scrum</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Démonstration interactive d'un Daily Scrum : le rituel le plus fréquent de Scrum
            </p>
          </div>

          {/* Navigation principale */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: Eye, color: 'from-blue-500 to-indigo-600' },
              { id: 'contexte', label: 'Contexte du dialogue', icon: Info, color: 'from-orange-500 to-red-600' },
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

          {activeDemo === 'contexte' && (
            <ContexteDialogueContent />
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
          Qu'est-ce qu'un Daily Scrum ?
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
                Synchroniser quotidiennement l'équipe, identifier les blocages rapidement 
                et maintenir la transparence sur l'avancement du sprint.
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
                  <span className="text-white font-bold">10 minutes maximum</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Fréquence :</span>
                  <span className="text-white font-bold">Tous les jours ouvrés</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Participants :</span>
                  <span className="text-white font-bold">Équipe de développement</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                Les 3 questions clés
              </h4>
              <ul className="space-y-3">
                {[
                  'Qu\'ai-je fait hier ?',
                  'Que vais-je faire aujourd\'hui ?',
                  'Ai-je des blocages ?'
                ].map((question, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-400/20 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white/80 text-sm font-medium">{question}</span>
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
                  Daily Scrum quotidien
                </h4>
                <p className="text-white/90">
                  Synchronisation rapide et efficace de l'équipe
                </p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-orange-400/30">
              <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-3">
                <Zap size={20} />
                Pourquoi c'est le rituel le plus important ?
              </h4>
              <div className="space-y-3">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong>Fréquence :</strong> Quotidien = 20 Daily par sprint vs 1 seule Sprint Review
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong>Impact :</strong> Détection rapide des problèmes, coordination continue
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong>Apprentissage :</strong> Maîtriser le Daily = maîtriser 80% de Scrum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structure du Daily Scrum */}
      <div className="card card-glow scale-in delay-200">
        <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
          Structure de notre Daily Scrum
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            {
              phase: 'Ouverture',
              duration: '2 min',
              icon: Coffee,
              color: 'from-blue-500 to-indigo-600',
              activities: ['Cadrage', 'Rappel règles', 'Lancement']
            },
            {
              phase: 'Tour de table',
              duration: '6 min',
              icon: Users,
              color: 'from-green-500 to-emerald-600',
              activities: ['3 questions', 'Chaque membre', 'Synchronisation']
            },
            {
              phase: 'Blocages',
              duration: '1 min',
              icon: AlertCircle,
              color: 'from-orange-500 to-red-600',
              activities: ['Identification', 'Signalement', 'Planification']
            },
            {
              phase: 'Actions',
              duration: '1 min',
              icon: Target,
              color: 'from-purple-500 to-pink-600',
              activities: ['Points techniques', 'Rendez-vous', 'Suivi']
            },
            {
              phase: 'Clôture',
              duration: '< 1 min',
              icon: CheckCircle,
              color: 'from-teal-500 to-cyan-600',
              activities: ['Synthèse', 'Motivation', 'Fin']
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

// Composant Contexte du dialogue
const ContexteDialogueContent: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="card card-glow scale-in">
        <h3 className="text-3xl font-display font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            <Info size={24} className="text-white" />
          </div>
          Contexte du dialogue Daily Scrum
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Situation actuelle */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-blue-400/30">
              <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <Calendar size={20} />
                Situation actuelle
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Sprint en cours :</span>
                  <span className="text-white font-bold">Sprint 3 / 4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Moment :</span>
                  <span className="text-white font-bold">Milieu de sprint</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Heure :</span>
                  <span className="text-white font-bold">9h00 - Daily matinal</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                <h5 className="font-bold text-blue-400 mb-2">Sprint Goal actuel</h5>
                <p className="text-white/80 text-sm leading-relaxed">
                  "Développer l'interface utilisateur Django et l'API FastAPI pour permettre 
                  aux utilisateurs de faire des prédictions de popularité de films"
                </p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-green-400/30">
              <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-3">
                <CheckCircle size={20} />
                Ce qui a été fait cette semaine
              </h4>
              <ul className="space-y-3">
                {[
                  'Interface Django initialisée avec structure MVC',
                  'Première page de visualisation des prédictions créée',
                  'API FastAPI connectée aux modèles ML',
                  'Intégration des données scrappées dans l\'interface'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* État d'avancement */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-orange-400/30">
              <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-3">
                <Clock size={20} />
                En cours aujourd'hui
              </h4>
              <div className="space-y-4">
                <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-400/20">
                  <h5 className="font-bold text-orange-400 text-sm mb-1">Nicolas (PO)</h5>
                  <p className="text-white/70 text-xs">Refinement du backlog, critères d'acceptation</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                  <h5 className="font-bold text-green-400 text-sm mb-1">Maxime (ML)</h5>
                  <p className="text-white/70 text-xs">Feature engineering, optimisation modèles</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-400/20">
                  <h5 className="font-bold text-purple-400 text-sm mb-1">Eliandy (Dev)</h5>
                  <p className="text-white/70 text-xs">Intégration frontend-backend, formulaires</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-purple-400/30">
              <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-3">
                <Target size={20} />
                À venir cette semaine
              </h4>
              <ul className="space-y-2">
                {[
                  'Finalisation de l\'interface utilisateur',
                  'Documentation de l\'API FastAPI',
                  'Déploiement local de l\'application',
                  'Préparation de la Sprint Review'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6 rounded-xl border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <Lightbulb size={20} />
                Acquis du sprint précédent
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-bold text-green-400 text-sm mb-2">✅ Réussites</h5>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Scraping Allociné stabilisé, modèles ML entraînés avec bonnes performances, 
                    première version de l'API fonctionnelle
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-orange-400 text-sm mb-2">⚠️ Défis</h5>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Problèmes de performance sur le scraping, choix d'algorithme pour les embeddings, 
                    gestion des données manquantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conseils pour les participants */}
      <div className="card card-glow scale-in delay-200">
        <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
          Conseils pour bien participer au Daily
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              role: 'Scrum Master',
              color: 'from-red-500 to-red-600',
              icon: UserCheck,
              tips: [
                'Garder le timing (10 min max)',
                'Faciliter sans diriger',
                'Noter les blocages',
                'Planifier les points techniques'
              ]
            },
            {
              role: 'Product Owner',
              color: 'from-blue-500 to-blue-600',
              icon: Target,
              tips: [
                'Focus sur la valeur business',
                'Clarifier les priorités',
                'Valider les orientations',
                'Préparer les critères'
              ]
            },
            {
              role: 'Développeur ML',
              color: 'from-green-500 to-green-600',
              icon: Zap,
              tips: [
                'Partager les métriques',
                'Expliquer les blocages techniques',
                'Proposer des solutions',
                'Collaborer sur les algorithmes'
              ]
            },
            {
              role: 'Développeur Full-Stack',
              color: 'from-purple-500 to-purple-600',
              icon: Monitor,
              tips: [
                'Montrer les avancées visuelles',
                'Signaler les intégrations',
                'Partager les difficultés',
                'Coordonner avec l\'équipe'
              ]
            }
          ].map((roleInfo, index) => (
            <div key={index} className="glass p-6 rounded-xl border border-white/20 group hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-br ${roleInfo.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <roleInfo.icon size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-4 text-center">{roleInfo.role}</h4>
              <ul className="space-y-2">
                {roleInfo.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-xs leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Attentes du Daily */}
      <div className="card card-glow scale-in delay-300">
        <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
          Qu'attendre de ce Daily Scrum ?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Synchronisation</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Chaque membre partage son avancement et ses plans, créant une vision commune de l'état du sprint.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Identification des blocages</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Détection rapide des obstacles techniques ou organisationnels pour une résolution immédiate.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Planification collaborative</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Organisation des collaborations nécessaires et des points techniques à approfondir.
            </p>
          </div>
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
            Dialogue interactif - Daily Scrum
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
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
              {participants.slice(0, -1).map((participant, index) => (
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
                      {currentDialogue?.content.startsWith('MOTS-CLÉS') ? 'Mots-clés pour improviser' : 'Dialogue'}
                    </span>
                  </div>
                  {currentDialogue?.content.startsWith('MOTS-CLÉS') ? (
                    <div className="space-y-3">
                      <p className="text-white/70 text-sm mb-3">Utilisez ces mots-clés pour construire votre intervention :</p>
                      <div className="flex flex-wrap gap-2">
                        {currentDialogue?.content.replace('MOTS-CLÉS : ', '').split(' - ').map((keyword: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full text-sm border border-[var(--color-primary)]/30">
                            {keyword.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-white/90 leading-relaxed text-lg italic">
                      "{currentDialogue?.content}"
                    </p>
                  )}
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
                      <Monitor size={16} className="text-blue-400" />
                      <span className="font-bold text-white text-sm">Outils</span>
                    </div>
                    <p className="text-white/80 text-sm">{currentDialogue?.outils}</p>
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
        Rôles et responsabilités dans le Daily Scrum
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
                      <p className="text-white/70 text-xs italic">"C'est l'heure de notre Daily Scrum..."</p>
                      <p className="text-white/70 text-xs italic">"J'ai noté un point à creuser..."</p>
                      <p className="text-white/70 text-xs italic">"Avez-vous des blocages ?"</p>
                    </>
                  )}
                  {participant.name === 'Nicolas' && (
                    <>
                      <p className="text-white/70 text-xs italic">"J'ai validé les User Stories..."</p>
                      <p className="text-white/70 text-xs italic">"Je prépare les critères d'acceptation..."</p>
                      <p className="text-white/70 text-xs italic">"Pas de blocage de mon côté"</p>
                    </>
                  )}
                  {participant.name === 'Maxime' && (
                    <>
                      <p className="text-white/70 text-xs italic">"J'ai bossé sur le feature engineering..."</p>
                      <p className="text-white/70 text-xs italic">"Je commence le preprocessing..."</p>
                      <p className="text-white/70 text-xs italic">"J'ai un doute sur l'algorithme..."</p>
                    </>
                  )}
                  {participant.name === 'Eliandy' && (
                    <>
                      <p className="text-white/70 text-xs italic">"J'ai fini l'intégration de la page..."</p>
                      <p className="text-white/70 text-xs italic">"Je passe sur l'API FastAPI..."</p>
                      <p className="text-white/70 text-xs italic">"Tout roule de mon côté !"</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bonnes pratiques */}
      <div className="card card-glow scale-in delay-500">
        <h4 className="text-2xl font-display font-bold text-white mb-6 text-center">
          Bonnes pratiques pour le Daily Scrum
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-green-400/30">
              <h5 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle size={16} />
                À faire
              </h5>
              <ul className="space-y-2">
                {[
                  'Rester concis et factuel (30 sec par personne max)',
                  'Se concentrer sur les 3 questions essentielles',
                  'Signaler les blocages sans entrer dans le détail',
                  'Écouter activement les autres membres',
                  'Planifier les points techniques après le Daily'
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
                <AlertCircle size={16} />
                À éviter
              </h5>
              <ul className="space-y-2">
                {[
                  'Entrer dans les détails techniques',
                  'Résoudre les problèmes pendant le Daily',
                  'Faire du reporting au Scrum Master',
                  'Dépasser le temps imparti (10 min)',
                  'Transformer en réunion de décision'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
              alt="Daily Scrum en équipe"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-xl font-display font-bold text-white mb-2">
                Daily Scrum efficace
              </h4>
              <p className="text-white/90">
                Communication claire, synchronisation rapide et identification des blocages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitationSection;