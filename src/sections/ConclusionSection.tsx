import React from 'react';
import { CheckCircle, ArrowRight, Star, ChevronRight, AlertTriangle, Target, TrendingUp, Award, Lightbulb, Zap } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const ConclusionSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-black to-green-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M60 60c0-33.137-26.863-60-60-60v60h60z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <section className="section relative z-10">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-full border border-white/20 backdrop-blur-sm fade-in mb-6">
              <CheckCircle size={16} className="text-emerald-400" />
              <span className="text-sm font-medium text-white">Bilan final</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">Bilan</span>
              <br />
              <span className="text-white">Agile</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Synthèse de l'expérience Scrum, enseignements tirés et perspectives 
              d'amélioration pour les futurs projets IA.
            </p>
          </div>
          
          {/* Strengths and challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Strengths */}
            <div className="space-y-8 slide-up">
              <div className="card card-glow">
                <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  Points forts identifiés
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: 'Hiérarchisation rapide',
                      desc: 'Identification et priorisation efficace des tâches critiques grâce aux rituels de planification.',
                      icon: Target,
                      color: 'from-green-500 to-emerald-600'
                    },
                    {
                      title: 'Adaptation continue',
                      desc: 'Ajustement régulier de la roadmap selon les retours et les découvertes techniques.',
                      icon: TrendingUp,
                      color: 'from-blue-500 to-cyan-600'
                    },
                    {
                      title: 'Implication collective',
                      desc: 'Co-construction du produit avec rotation des rôles favorisant l\'apprentissage transversal.',
                      icon: Star,
                      color: 'from-purple-500 to-pink-600'
                    },
                    {
                      title: 'Apprentissage accéléré',
                      desc: 'Montée en compétences rapide malgré les contraintes temporelles et la complexité technique.',
                      icon: Zap,
                      color: 'from-orange-500 to-red-600'
                    }
                  ].map((strength, index) => (
                    <div key={index} className="group">
                      <div className="flex gap-4 items-start">
                        <div className={`w-12 h-12 bg-gradient-to-br ${strength.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <strength.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-2">{strength.title}</h4>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {strength.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Challenges */}
              <div className="card card-glow">
                <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <AlertTriangle size={20} className="text-white" />
                  </div>
                  Difficultés rencontrées
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: 'Rigueur des rituels',
                      desc: 'Rigueur parfois allégée en période de rush, impactant la qualité des échanges et du suivi.'
                    },
                    {
                      title: 'Découpage des User Stories',
                      desc: 'Complexité du découpage en contexte d\'apprentissage avec technologies nouvelles pour l\'équipe.'
                    },
                    {
                      title: 'Prise de décision PO',
                      desc: 'Arbitrages délicats pour le Product Owner en contexte égalitaire d\'apprentissage collectif.'
                    },
                    {
                      title: 'Charge organisationnelle',
                      desc: 'Rotation des rôles créant une charge organisationnelle élevée en parallèle de l\'apprentissage technique.'
                    }
                  ].map((challenge, index) => (
                    <div key={index} className="glass p-4 rounded-xl border border-orange-400/20 group hover:border-orange-400/40 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-2">
                        <AlertTriangle size={20} className="text-orange-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-orange-400">{challenge.title}</h4>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{challenge.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Results and improvements */}
            <div className="space-y-8 slide-in-right delay-200">
              {/* Project results */}
              <div className="card card-glow">
                <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  Résultats du projet
                </h3>
                
                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl mb-6 group">
                  <img 
                    src="https://images.pexels.com/photos/7991634/pexels-photo-7991634.jpeg" 
                    alt="Film production result" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-xl font-display font-bold text-white mb-2">
                      Produit fonctionnel livré
                    </h4>
                    <p className="text-white/90">
                      Modèle prédictif + Dashboard + API en 4 semaines
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="glass p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                      <CheckCircle size={16} />
                      Livrables techniques
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Scraping Allociné et Dailymotion fonctionnel',
                        'Modèles Random Forest et LightGBM entraînés',
                        'API FastAPI de prédiction déployée',
                        'Dashboard Django avec visualisations',
                        'Documentation technique complète'
                      ].map((deliverable, index) => (
                        <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></div>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glass p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold text-[var(--color-accent-light)] mb-3 flex items-center gap-2">
                      <TrendingUp size={16} />
                      Métriques de performance
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-black/20 rounded-lg">
                        <div className="text-2xl font-bold text-[var(--color-primary)]">RMSE</div>
                        <p className="text-xs text-white/70">Optimisé</p>
                      </div>
                      <div className="text-center p-3 bg-black/20 rounded-lg">
                        <div className="text-2xl font-bold text-[var(--color-secondary)]">R²</div>
                        <p className="text-xs text-white/70">Satisfaisant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Improvement areas */}
              <div className="card card-glow">
                <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-light)] to-blue-600 rounded-lg flex items-center justify-center">
                    <Lightbulb size={20} className="text-white" />
                  </div>
                  Axes d'amélioration
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: 'Anticipation des risques',
                      desc: 'Identifier plus tôt les risques techniques et prévoir des plans de contingence.',
                      icon: Target
                    },
                    {
                      title: 'Critères d\'acceptation',
                      desc: 'Détailler davantage les critères d\'acceptation et mieux formaliser les DoD.',
                      icon: CheckCircle
                    },
                    {
                      title: 'Suivi des contributions',
                      desc: 'Suivre de façon plus précise les contributions individuelles et collectives.',
                      icon: TrendingUp
                    },
                    {
                      title: 'Valorisation des livrables',
                      desc: 'Valoriser davantage les livrables aux Sprint Reviews et documenter systématiquement.',
                      icon: Star
                    }
                  ].map((improvement, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <improvement.icon size={20} className="text-black" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{improvement.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{improvement.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Final conclusion */}
          <div className="card card-glow scale-in delay-500">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center">
                <Star size={24} className="text-white" />
              </div>
              Conclusion générale
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                L'intégration de Scrum dans un projet pédagogique IA a été aussi enrichissante que challengeante. 
                Avec une équipe en phase d'apprentissage de technologies complexes, chaque membre a dû alterner 
                entre technique et gestion Agile, dans un cadre restreint de 4 semaines.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Malgré les obstacles (prise en main de Jira, scraping complexe, arbitrages PO délicats), 
                l'équipe a livré un produit fonctionnel en respectant les principes fondamentaux de l'agilité : 
                <span className="font-bold text-[var(--color-primary)]"> communication, adaptation et collaboration</span>.
              </p>
              
              <div className="glass p-8 rounded-2xl border border-[var(--color-primary)]/30 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star size={32} className="text-white" />
                  </div>
                </div>
                <blockquote className="text-xl font-display italic text-white leading-relaxed">
                  "L'essentiel appris : l'agilité est avant tout une dynamique humaine, une capacité à réagir 
                  face aux imprévus, et une méthode évolutive qui va bien au-delà des outils et des rituels."
                </blockquote>
                <div className="mt-4 text-[var(--color-secondary)] font-semibold">
                  — Équipe Projet Agile IA
                </div>
              </div>
              
              {/* Success metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                {[
                  { metric: '4', label: 'Semaines', desc: 'Projet complet' },
                  { metric: '100%', label: 'Agile', desc: 'Méthodologie appliquée' },
                  { metric: '4', label: 'Sprints', desc: 'Cycles itératifs' },
                  { metric: '∞', label: 'Apprentissage', desc: 'Valeur acquise' }
                ].map((item, index) => (
                  <div key={index} className="text-center glass p-4 rounded-xl border border-white/20 group hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.metric}
                    </div>
                    <div className="font-bold text-white mb-1">{item.label}</div>
                    <div className="text-white/60 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConclusionSection;