import React from 'react';
import { Users, CalendarClock, BarChart3, ArrowDownUp, FileText, Code2, Database, Target, Package, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const DeploiementSection: React.FC<SectionProps> = ({ isActive }) => {
  const velocityData = [
    { sprint: 'S1', stories: 6, percentage: 50 },
    { sprint: 'S2', stories: 9, percentage: 75 },
    { sprint: 'S3', stories: 10, percentage: 85 },
    { sprint: 'S4', stories: 11, percentage: 90 }
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M40 40c0-22.091-17.909-40-40-40v40h40z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <section className="section relative z-10">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full border border-white/20 backdrop-blur-sm fade-in mb-6">
              <Package size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-white">Product Backlog</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">C3: Construction</span>
              <br />
              <span className="text-white">du Product Backlog</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Structuration des epics, user stories et définition des critères 
              d'acceptation pour le projet de prédiction IA.
            </p>
          </div>
          
          {/* Epics and User Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left column - Epics */}
            <div className="card card-glow slide-up">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-black" />
                </div>
                Epics et User Stories
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Epic: Collecte et traitement des données',
                    color: 'from-blue-500 to-cyan-600',
                    icon: Database,
                    stories: [
                      'Scraper les fiches Allociné (films, casting, box-office)',
                      'Enrichir avec données Dailymotion (engagement trailers)',
                      'Nettoyer et transformer les données collectées',
                      'Créer les embeddings acteurs/réalisateurs'
                    ]
                  },
                  {
                    title: 'Epic: Modélisation prédictive',
                    color: 'from-green-500 to-emerald-600',
                    icon: TrendingUp,
                    stories: [
                      'Entraîner un modèle Random Forest',
                      'Développer un modèle LightGBM',
                      'Évaluer les performances (RMSE, MAE, R²)',
                      'Implémenter la cross-validation'
                    ]
                  },
                  {
                    title: 'Epic: Développement de l\'application',
                    color: 'from-purple-500 to-pink-600',
                    icon: Code2,
                    stories: [
                      'Créer une API de prédiction FastAPI',
                      'Développer l\'interface Django',
                      'Visualiser les prédictions via graphiques',
                      'Intégrer filtres et fonctionnalités utilisateur'
                    ]
                  }
                ].map((epic, index) => (
                  <div key={index} className="glass p-6 rounded-xl border border-white/20 group hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${epic.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <epic.icon size={20} className="text-white" />
                      </div>
                      <h4 className="font-bold text-white">{epic.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {epic.stories.map((story, storyIndex) => (
                        <li key={storyIndex} className="flex items-start gap-2 text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{story}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right column - Detailed backlog */}
            <div className="card card-glow slide-in-right delay-200">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                  <Target size={20} className="text-white" />
                </div>
                Exemple de backlog détaillé
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Scraping Allociné',
                    priority: 'Haute',
                    priorityColor: 'bg-red-500',
                    sprint: '1',
                    epic: 'Collecte données',
                    dod: 'Scrapy fonctionnel, tests OK, stockage PostgreSQL'
                  },
                  {
                    title: 'Suivi performance modèle',
                    priority: 'Moyenne',
                    priorityColor: 'bg-yellow-500',
                    sprint: '2',
                    epic: 'Modélisation',
                    dod: 'Courbes d\'apprentissage générées, RMSE/R² calculés'
                  },
                  {
                    title: 'Formulaire de prédiction',
                    priority: 'Haute',
                    priorityColor: 'bg-red-500',
                    sprint: '3',
                    epic: 'Application',
                    dod: 'Interface fonctionnelle et intégrée'
                  },
                  {
                    title: 'API de prédiction',
                    priority: 'Haute',
                    priorityColor: 'bg-red-500',
                    sprint: '4',
                    epic: 'Mise en production',
                    dod: 'Endpoint FastAPI déployé localement'
                  }
                ].map((item, index) => (
                  <div key={index} className="glass p-4 rounded-xl border border-white/20 group hover:border-white/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-white group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${item.priorityColor}`}>
                        {item.priority}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-white/70 mb-2">
                      <span><strong>Sprint:</strong> {item.sprint}</span>
                      <span><strong>Epic:</strong> {item.epic}</span>
                    </div>
                    
                    <p className="text-xs text-white/60">
                      <strong>DoD:</strong> {item.dod}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Velocity tracking and adaptations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Velocity chart */}
            <div className="card card-glow scale-in">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-light)] to-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 size={20} className="text-white" />
                </div>
                Suivi de la vélocité
              </h3>
              
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg font-bold text-white mb-4">User Stories complétées par sprint</h4>
                  
                  {/* Velocity chart */}
                  <div className="h-48 flex items-end justify-around bg-black/20 rounded-lg p-4 mb-4">
                    {velocityData.map((data, index) => (
                      <div key={data.sprint} className="flex flex-col items-center">
                        <div 
                          className="w-12 bg-gradient-to-t from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-t flex items-end justify-center pb-2 transition-all duration-1000 hover:scale-105"
                          style={{ height: `${data.percentage}%` }}
                        >
                          <span className="text-white text-xs font-bold">{data.stories}</span>
                        </div>
                        <span className="text-white/60 text-sm mt-2">{data.sprint}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-white/70 text-sm">
                    Amélioration progressive de la vélocité avec l'expérience de l'équipe.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Backlog adaptations */}
            <div className="card card-glow scale-in delay-200">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                  <ArrowDownUp size={20} className="text-white" />
                </div>
                Adaptations du backlog
              </h3>
              
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                    <CheckCircle size={20} />
                    Ajustements réalisés
                  </h4>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Intégration Dailymotion',
                        desc: 'Ajout de nouvelles données d\'engagement sur les trailers',
                        icon: Target
                      },
                      {
                        title: 'Stabilisation scraping',
                        desc: 'Priorisation des corrections techniques critiques',
                        icon: Target
                      },
                      {
                        title: 'Métriques avancées',
                        desc: 'Ajout de nouvelles métriques d\'évaluation ML',
                        icon: Target
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon size={16} className="text-green-400" />
                        </div>
                        <div>
                          <h5 className="font-bold text-white text-sm mb-1">{item.title}</h5>
                          <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2">
                    <AlertCircle size={20} />
                    Défis rencontrés
                  </h4>
                  
                  <ul className="space-y-2">
                    {[
                      'Découpage parfois complexe des User Stories',
                      'Gestion des dépendances techniques',
                      'Équilibrage des charges avec rotation des rôles',
                      'Formalisation des Definitions of Done'
                    ].map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeploiementSection;