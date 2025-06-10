import React, { useState } from 'react';
import { GitMerge, UserCheck, Repeat, Gauge, MessageSquare, Github, Users, Calendar, Settings, Zap, Clock, Target, CheckCircle, ArrowRight, Play, Pause, RotateCcw, Eye, FileText, TrendingUp } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const MethodologieSection: React.FC<SectionProps> = ({ isActive }) => {
  const [activeProcess, setActiveProcess] = useState('sprint-planning');
  
  const teamMembers = ['Eliandy', 'Dorothée', 'Nicolas', 'Maxime'];
  const roles = ['Scrum Master', 'Product Owner', 'Resp. ML', 'Développeur'];
  const sprints = [
    { number: 1, focus: 'Cadrage et outils', color: 'from-blue-500 to-purple-600' },
    { number: 2, focus: 'Modèle de prédiction', color: 'from-green-500 to-teal-600' },
    { number: 3, focus: 'Application web', color: 'from-orange-500 to-red-600' },
    { number: 4, focus: 'Déploiement', color: 'from-purple-500 to-pink-600' }
  ];

  const agileProcesses = {
    'sprint-planning': {
      title: 'Sprint Planning',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-600',
      definition: 'Réunion de planification où l\'équipe sélectionne les User Stories à réaliser pendant le sprint et estime l\'effort nécessaire.',
      ourImplementation: {
        frequency: 'Chaque lundi (début de sprint)',
        duration: '30 minutes',
        participants: 'Toute l\'équipe (4 développeurs)',
        tools: 'Jira Timeline + Slack',
        process: [
          'Review du Product Backlog par le PO',
          'Sélection des User Stories prioritaires',
          'Estimation en story points (Planning Poker)',
          'Définition du Sprint Goal',
          'Répartition des tâches selon les rôles'
        ]
      },
      benefits: ['Engagement équipe', 'Objectifs clairs', 'Estimation réaliste'],
      challenges: ['Rotation des rôles', 'Apprentissage des outils', 'Estimation en contexte IA']
    },
    'daily-scrum': {
      title: 'Daily Scrum',
      icon: Clock,
      color: 'from-green-500 to-emerald-600',
      definition: 'Réunion quotidienne de synchronisation de 15 minutes maximum où chaque membre partage ses avancées, blocages et objectifs du jour.',
      ourImplementation: {
        frequency: 'Lundi à Vendredi',
        duration: '10 minutes',
        participants: 'Équipe complète',
        tools: 'Slack #daily + Jira',
        process: [
          'Qu\'ai-je fait hier ?',
          'Que vais-je faire aujourd\'hui ?',
          'Quels sont mes blocages ?',
          'Mise à jour des statuts Jira',
          'Planification des points de synchronisation'
        ]
      },
      benefits: ['Communication fluide', 'Détection rapide des blocages', 'Coordination équipe'],
      challenges: ['Discipline quotidienne', 'Concision des échanges', 'Gestion des blocages techniques']
    },
    'sprint-review': {
      title: 'Sprint Review',
      icon: Eye,
      color: 'from-orange-500 to-red-600',
      definition: 'Démonstration des fonctionnalités développées pendant le sprint aux stakeholders pour recueillir des feedbacks et valider la valeur livrée.',
      ourImplementation: {
        frequency: 'Chaque mercredi (fin de sprint)',
        duration: '45 minutes',
        participants: 'Équipe + Formateurs (stakeholders)',
        tools: 'Entretiens hebdomadaires + Démo live',
        process: [
          'Présentation du Sprint Goal atteint',
          'Démonstration des fonctionnalités',
          'Métriques de performance (ML)',
          'Recueil des feedbacks stakeholders',
          'Mise à jour du Product Backlog'
        ]
      },
      benefits: ['Validation de la valeur', 'Feedback direct', 'Transparence'],
      challenges: ['Préparation des démos', 'Gestion du temps', 'Adaptation aux retours']
    },
    'retrospective': {
      title: 'Rétrospective',
      icon: RotateCcw,
      color: 'from-purple-500 to-pink-600',
      definition: 'Réunion d\'amélioration continue où l\'équipe analyse ce qui a bien fonctionné, les difficultés rencontrées et définit des actions d\'amélioration.',
      ourImplementation: {
        frequency: 'Chaque vendredi (fin de sprint)',
        duration: '60 minutes',
        participants: 'Équipe interne uniquement',
        tools: 'Confluence + Miro Board',
        process: [
          'What went well? (Points positifs)',
          'What could be improved? (Difficultés)',
          'What will we commit to improve? (Actions)',
          'Documentation des enseignements',
          'Planification des améliorations'
        ]
      },
      benefits: ['Amélioration continue', 'Cohésion équipe', 'Apprentissage collectif'],
      challenges: ['Honnêteté des retours', 'Mise en œuvre des actions', 'Suivi des améliorations']
    },
    'backlog-refinement': {
      title: 'Backlog Refinement',
      icon: FileText,
      color: 'from-teal-500 to-cyan-600',
      definition: 'Activité continue de raffinement du Product Backlog : ajout de détails aux User Stories, estimation, priorisation et découpage.',
      ourImplementation: {
        frequency: 'En continu + sessions dédiées',
        duration: 'Variable (15-30 min)',
        participants: 'PO + équipe technique',
        tools: 'Jira + Confluence',
        process: [
          'Analyse des nouvelles User Stories',
          'Définition des critères d\'acceptation',
          'Estimation en story points',
          'Découpage des stories complexes',
          'Priorisation selon la valeur business'
        ]
      },
      benefits: ['Backlog prêt', 'Stories bien définies', 'Estimation précise'],
      challenges: ['Découpage en contexte IA', 'Définition des DoD', 'Gestion des dépendances']
    }
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M30 30c0-16.569-13.431-30-30-30v30h30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <section className="section relative z-10">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-full border border-white/20 backdrop-blur-sm fade-in mb-6">
              <Settings size={16} className="text-orange-400" />
              <span className="text-sm font-medium text-white">Méthodologie Agile</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">C2: Méthodologie</span>
              <br />
              <span className="text-white">Agile Scrum</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Organisation de l'équipe, rituels Scrum et outils collaboratifs 
              pour le projet de prédiction IA.
            </p>
          </div>

          {/* Processus Agile détaillés */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Processus Agile en détail
            </h3>
            
            {/* Navigation des processus */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {Object.entries(agileProcesses).map(([key, process]) => (
                <button 
                  key={key}
                  className={`btn transition-all duration-500 ${
                    activeProcess === key 
                      ? 'btn-primary scale-105' 
                      : 'btn-outline hover:scale-105'
                  }`}
                  onClick={() => setActiveProcess(key)}
                >
                  <process.icon size={20} className="mr-2" />
                  {process.title}
                </button>
              ))}
            </div>

            {/* Contenu du processus actif */}
            {Object.entries(agileProcesses).map(([key, process]) => (
              activeProcess === key && (
                <div key={key} className="card card-glow scale-in">
                  {/* Header du processus */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <process.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-display font-bold text-white mb-2">
                        {process.title}
                      </h4>
                      <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                        {process.definition}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Notre implémentation */}
                    <div className="space-y-6">
                      <h5 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <CheckCircle size={20} className="text-white" />
                        </div>
                        Notre implémentation
                      </h5>

                      {/* Détails de l'implémentation */}
                      <div className="glass p-6 rounded-xl border border-white/20">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-black/20 rounded-lg">
                            <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                              {process.ourImplementation.frequency}
                            </div>
                            <div className="text-xs text-white/60">Fréquence</div>
                          </div>
                          <div className="text-center p-4 bg-black/20 rounded-lg">
                            <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">
                              {process.ourImplementation.duration}
                            </div>
                            <div className="text-xs text-white/60">Durée</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h6 className="font-bold text-white mb-2 flex items-center gap-2">
                              <Users size={16} className="text-blue-400" />
                              Participants
                            </h6>
                            <p className="text-white/80 text-sm">{process.ourImplementation.participants}</p>
                          </div>
                          
                          <div>
                            <h6 className="font-bold text-white mb-2 flex items-center gap-2">
                              <Settings size={16} className="text-green-400" />
                              Outils utilisés
                            </h6>
                            <p className="text-white/80 text-sm">{process.ourImplementation.tools}</p>
                          </div>
                        </div>
                      </div>

                      {/* Processus étape par étape */}
                      <div className="glass p-6 rounded-xl border border-white/20">
                        <h6 className="font-bold text-white mb-4 flex items-center gap-2">
                          <ArrowRight size={16} className="text-orange-400" />
                          Déroulement étape par étape
                        </h6>
                        <div className="space-y-3">
                          {process.ourImplementation.process.map((step, index) => (
                            <div key={index} className="flex items-start gap-3 group">
                              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform duration-300">
                                {index + 1}
                              </div>
                              <span className="text-white/80 text-sm leading-relaxed">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bénéfices et défis */}
                    <div className="space-y-6">
                      <h5 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <TrendingUp size={20} className="text-white" />
                        </div>
                        Bénéfices & Défis
                      </h5>

                      {/* Bénéfices */}
                      <div className="glass p-6 rounded-xl border border-green-400/30">
                        <h6 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                          <CheckCircle size={20} />
                          Bénéfices observés
                        </h6>
                        <div className="space-y-3">
                          {process.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                              <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                              <span className="text-white/80 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Défis */}
                      <div className="glass p-6 rounded-xl border border-orange-400/30">
                        <h6 className="font-bold text-orange-400 mb-4 flex items-center gap-2">
                          <Target size={20} />
                          Défis rencontrés
                        </h6>
                        <div className="space-y-3">
                          {process.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                              <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                              <span className="text-white/80 text-sm">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Illustration visuelle */}
                      <div className="relative overflow-hidden rounded-2xl group">
                        <img 
                          src={
                            key === 'sprint-planning' ? "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" :
                            key === 'daily-scrum' ? "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg" :
                            key === 'sprint-review' ? "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" :
                            key === 'retrospective' ? "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" :
                            "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                          }
                          alt={`${process.title} illustration`}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                          <p className="text-white font-medium text-sm">
                            {process.title} en action dans notre équipe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
          
          {/* Team composition and role rotation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Team composition */}
            <div className="card card-glow scale-in">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-black" />
                </div>
                Composition de l'équipe
              </h3>
              
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  Équipe de 4 développeurs IA avec rotation des rôles à chaque sprint :
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { role: 'Scrum Master', icon: UserCheck, color: 'from-[var(--color-primary)] to-[var(--color-primary-light)]', desc: 'Animation des cérémonies, communication, gestion des blocages' },
                    { role: 'Product Owner', icon: Target, color: 'from-[var(--color-secondary)] to-[var(--color-secondary-light)]', desc: 'Vision produit, User Stories, priorisation du backlog' },
                    { role: 'Responsable ML', icon: Zap, color: 'from-[var(--color-accent-light)] to-blue-600', desc: 'Données, algorithmes, évaluation des modèles' },
                    { role: 'Développeur', icon: GitMerge, color: 'from-green-500 to-emerald-600', desc: 'Conception, développement, tests, intégration' }
                  ].map((item, index) => (
                    <div key={item.role} className="glass p-4 rounded-xl border border-white/20 group hover:border-white/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon size={16} className="text-white" />
                        </div>
                        <h4 className="font-bold text-white text-sm">{item.role}</h4>
                      </div>
                      <p className="text-white/70 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="glass p-4 rounded-xl border border-[var(--color-primary)]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Repeat size={16} className="text-[var(--color-primary)]" />
                    <span className="font-bold text-white text-sm">Bénéfice de la rotation</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Compréhension globale des responsabilités, enrichissement des compétences 
                    transverses, amélioration de la communication.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Role rotation matrix */}
            <div className="card card-glow scale-in delay-200">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                  <Repeat size={20} className="text-white" />
                </div>
                Répartition des rôles par sprint
              </h3>
              
              <div className="space-y-4">
                {/* Header */}
                <div className="grid grid-cols-5 gap-3 text-xs font-bold text-white/60 mb-4">
                  <div>Sprint</div>
                  <div>Scrum Master</div>
                  <div>Product Owner</div>
                  <div>Resp. ML</div>
                  <div>Développeur</div>
                </div>
                
                {/* Sprint rows */}
                {[
                  ['1', 'Eliandy', 'Dorothée', 'Nicolas', 'Maxime'],
                  ['2', 'Dorothée', 'Maxime', 'Eliandy', 'Nicolas'],
                  ['3', 'Nicolas', 'Eliandy', 'Maxime', 'Dorothée'],
                  ['4', 'Maxime', 'Nicolas', 'Dorothée', 'Eliandy']
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-5 gap-3 text-sm p-3 glass rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 group">
                    <div className="font-bold text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                      S{row[0]}
                    </div>
                    {row.slice(1).map((name, nameIndex) => (
                      <div key={nameIndex} className="text-white/80 group-hover:text-white transition-colors duration-300">
                        {name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sprint breakdown and tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Sprint breakdown */}
            <div className="card card-glow scale-in delay-300">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-light)] to-blue-600 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-white" />
                </div>
                Découpage en 4 sprints
              </h3>
              
              <div className="space-y-6">
                {sprints.map((sprint, index) => (
                  <div key={sprint.number} className="group">
                    <div className="flex gap-4 items-start">
                      <div className={`w-12 h-12 bg-gradient-to-br ${sprint.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white font-bold">{sprint.number}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">
                          Sprint {sprint.number}: {sprint.focus}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {sprint.number === 1 && "Cahier des charges, analyse des features, mise en place de l'environnement"}
                          {sprint.number === 2 && "Scraping, premiers résultats, entraînement des modèles ML"}
                          {sprint.number === 3 && "Django + API FastAPI, interface utilisateur"}
                          {sprint.number === 4 && "Version finale avec historique et indicateurs de performance"}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${sprint.color} rounded-full`}></div>
                          <span className="text-xs text-white/60">
                            {sprint.number === 1 && "Fondations"}
                            {sprint.number === 2 && "Modélisation"}
                            {sprint.number === 3 && "Interface"}
                            {sprint.number === 4 && "Production"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Collaborative tools */}
            <div className="card card-glow scale-in delay-400">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-lg flex items-center justify-center">
                  <GitMerge size={20} className="text-black" />
                </div>
                Outils collaboratifs utilisés
              </h3>
              
              <div className="space-y-4">
                {[
                  { 
                    name: 'GitHub', 
                    icon: Github, 
                    color: 'from-gray-600 to-gray-800', 
                    desc: 'Repository "popularity_movie_prediction_project" avec 19 branches, gestion des Pull Requests',
                    details: 'Structure: django_cinema_interface, ml_model, prediction_api, scrapy'
                  },
                  { 
                    name: 'Jira', 
                    icon: Users, 
                    color: 'from-blue-600 to-indigo-700', 
                    desc: 'Planification des sprints, timeline des epics PRED-1 à PRED-7, suivi des User Stories',
                    details: 'Epics: Cadrage, Collecte données, Modélisation, Développement app, Interface, Production'
                  },
                  { 
                    name: 'Slack', 
                    icon: MessageSquare, 
                    color: 'from-green-600 to-teal-700', 
                    desc: 'Canal #daily pour les standups quotidiens, entretiens hebdomadaires, communication équipe',
                    details: 'Canaux: #azure, #dashboard, #general, #help-debug, #ml-model, #scrapping'
                  },
                  { 
                    name: 'Confluence', 
                    icon: Repeat, 
                    color: 'from-purple-600 to-pink-700', 
                    desc: 'Documentation centralisée, bilans de sprints, schémas d\'architecture applicative',
                    details: 'Pages: Cahier des charges, Bilans sprints 1-4, Schéma architecture, Variables scrapping'
                  }
                ].map((tool, index) => (
                  <div key={tool.name} className="glass p-4 rounded-xl border border-white/20 group hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <tool.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{tool.name}</h4>
                        <p className="text-white/70 text-sm leading-relaxed mb-2">
                          {tool.desc}
                        </p>
                        <p className="text-white/50 text-xs leading-relaxed italic">
                          {tool.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture technique */}
          <div className="card card-glow scale-in delay-600">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Architecture technique du projet
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🏗️</span>
                  </div>
                  Structure du repository GitHub
                </h4>
                
                <div className="glass p-6 rounded-xl border border-white/20">
                  <div className="space-y-3 font-mono text-sm">
                    <div className="text-white/80">📁 <span className="text-blue-400">django_cinema_interface/</span></div>
                    <div className="text-white/80 ml-4">└── Interface utilisateur Django</div>
                    
                    <div className="text-white/80">📁 <span className="text-green-400">ml_model/</span></div>
                    <div className="text-white/80 ml-4">└── Modèles Random Forest & LightGBM</div>
                    
                    <div className="text-white/80">📁 <span className="text-yellow-400">prediction_api/</span></div>
                    <div className="text-white/80 ml-4">└── API FastAPI de prédiction</div>
                    
                    <div className="text-white/80">📁 <span className="text-red-400">scrapy/</span></div>
                    <div className="text-white/80 ml-4">└── Scripts de scraping Allociné/Dailymotion</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">⚙️</span>
                  </div>
                  Stack technologique
                </h4>
                
                <div className="space-y-3">
                  {[
                    { tech: 'Python', usage: 'Langage principal', color: 'bg-blue-500' },
                    { tech: 'Django', usage: 'Framework web interface', color: 'bg-green-500' },
                    { tech: 'FastAPI', usage: 'API de prédiction', color: 'bg-teal-500' },
                    { tech: 'Scrapy', usage: 'Web scraping', color: 'bg-orange-500' },
                    { tech: 'Scikit-learn', usage: 'Machine Learning', color: 'bg-purple-500' },
                    { tech: 'PostgreSQL', usage: 'Base de données', color: 'bg-indigo-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 glass p-3 rounded-lg border border-white/20">
                      <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                      <span className="font-bold text-white text-sm">{item.tech}</span>
                      <span className="text-white/60 text-xs">- {item.usage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologieSection;