import React from 'react';
import { GitMerge, UserCheck, Repeat, Gauge, MessageSquare, Github, Users, Calendar, Settings, Zap, Clock, Target } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const MethodologieSection: React.FC<SectionProps> = ({ isActive }) => {
  const teamMembers = ['Eliandy', 'Dorothée', 'Nicolas', 'Maxime'];
  const roles = ['Scrum Master', 'Product Owner', 'Resp. ML', 'Développeur'];
  const sprints = [
    { number: 1, focus: 'Cadrage et outils', color: 'from-blue-500 to-purple-600' },
    { number: 2, focus: 'Modèle de prédiction', color: 'from-green-500 to-teal-600' },
    { number: 3, focus: 'Application web', color: 'from-orange-500 to-red-600' },
    { number: 4, focus: 'Déploiement', color: 'from-purple-500 to-pink-600' }
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M30 30c0-16.569-13.431-30-30-30v30h30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
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
                Outils collaboratifs
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: 'GitHub', icon: Github, color: 'from-gray-600 to-gray-800', desc: 'Versioning, branches dédiées, Pull Requests collaboratives' },
                  { name: 'Jira', icon: Users, color: 'from-blue-600 to-indigo-700', desc: 'Planification, backlog, suivi des tâches, documentation centralisée' },
                  { name: 'Slack & Discord', icon: MessageSquare, color: 'from-green-600 to-teal-700', desc: 'Communication quotidienne, échanges techniques, debugging' },
                  { name: 'Confluence & Miro', icon: Repeat, color: 'from-purple-600 to-pink-700', desc: 'Documentation centralisée, rétrospectives visuelles' }
                ].map((tool, index) => (
                  <div key={tool.name} className="glass p-4 rounded-xl border border-white/20 group hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{tool.name}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Scrum rituals */}
          <div className="card card-glow scale-in delay-500">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Rituels Scrum appliqués
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: 'Sprint Planning', 
                  icon: Calendar, 
                  color: 'from-[var(--color-secondary)] to-[var(--color-secondary-light)]',
                  freq: 'Lundi',
                  duration: '30 min',
                  objective: 'Sélection des User Stories',
                  support: 'Jira'
                },
                { 
                  name: 'Daily Scrum', 
                  icon: Clock, 
                  color: 'from-[var(--color-primary)] to-[var(--color-primary-light)]',
                  freq: 'Lun-Ven',
                  duration: '10 min',
                  objective: 'Synchronisation équipe',
                  support: 'Slack & Jira'
                },
                { 
                  name: 'Sprint Review', 
                  icon: Gauge, 
                  color: 'from-[var(--color-accent-light)] to-blue-600',
                  freq: 'Mercredi',
                  duration: '45 min',
                  objective: 'Démo et feedback',
                  support: 'Google Meet'
                },
                { 
                  name: 'Rétrospective', 
                  icon: Repeat, 
                  color: 'from-green-500 to-emerald-600',
                  freq: 'Vendredi',
                  duration: '60 min',
                  objective: 'Bilan et amélioration',
                  support: 'Miro Board'
                }
              ].map((ritual, index) => (
                <div key={ritual.name} className="glass p-6 rounded-xl border border-white/20 group hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${ritual.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <ritual.icon size={28} className="text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-4">{ritual.name}</h4>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/60">Fréquence:</span>
                        <span className="text-white font-medium">{ritual.freq}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Durée:</span>
                        <span className="text-white font-medium">{ritual.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Objectif:</span>
                        <span className="text-white font-medium text-right">{ritual.objective}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Support:</span>
                        <span className="text-white font-medium">{ritual.support}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologieSection;