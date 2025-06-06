import React, { useState } from 'react';
import { MessageSquare, ClipboardList, Users, PlayCircle, Clock, Target, CheckCircle, Monitor, FileText, Mic, Video, Star, Zap } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const FacilitationSection: React.FC<SectionProps> = ({ isActive }) => {
  const [activeTab, setActiveTab] = useState('script');
  
  return (
    <div className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50v50h50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <section className="section relative z-10">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full border border-white/20 backdrop-blur-sm fade-in mb-6">
              <Users size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-white">Animation Jury</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in delay-200">
              <span className="gradient-text">C4: Animation</span>
              <br />
              <span className="text-white">d'un Échange avec le Jury</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto fade-in delay-400 leading-relaxed">
              Script d'animation d'une Sprint Review adaptée - 15 minutes + échange
            </p>
          </div>
          
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {[
              { id: 'script', label: 'Script d\'animation', icon: FileText, color: 'from-blue-500 to-indigo-600' },
              { id: 'preparation', label: 'Préparation', icon: ClipboardList, color: 'from-green-500 to-emerald-600' },
              { id: 'objectifs', label: 'Objectifs', icon: Target, color: 'from-purple-500 to-pink-600' }
            ].map((tab) => (
              <button 
                key={tab.id}
                className={`btn transition-all duration-500 ${
                  activeTab === tab.id 
                    ? 'btn-primary scale-105' 
                    : 'btn-outline hover:scale-105'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={20} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Script content */}
          {activeTab === 'script' && (
            <div className="space-y-8">
              <div className="card card-glow slide-up">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                    <Mic size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">
                    Script d'Animation - Sprint Review (15 minutes)
                  </h3>
                </div>
                
                <div className="glass p-6 rounded-xl border border-white/20 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Star size={20} className="text-yellow-400" />
                    <h4 className="font-bold text-white">Instructions pour l'équipe</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Ce script peut être lu à tour de rôle. Chaque section est clairement délimitée avec 
                    des indications de timing. L'animateur principal guide l'ensemble, les autres membres 
                    peuvent prendre la parole pour les démonstrations techniques.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {/* Phase 1 */}
                  <div className="glass p-8 rounded-2xl border border-red-600/30 group hover:border-red-600/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white">OUVERTURE ET CONTEXTE</h4>
                        <p className="text-white/60">2 minutes</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock size={16} />
                        <span className="text-sm">0:00 - 2:00</span>
                      </div>
                    </div>
                    
                    <div className="glass p-6 rounded-xl border border-white/20">
                      <div className="mb-4">
                        <span className="inline-block bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                          ANIMATEUR PRINCIPAL
                        </span>
                      </div>
                      <div className="space-y-4 text-white/90 leading-relaxed">
                        <p className="font-bold text-lg">
                          "Bonjour à tous et merci d'être présents pour cette Sprint Review."
                        </p>
                        <p>
                          "Nous sommes ici pour vous présenter les livrables de notre projet de prédiction 
                          de popularité des films, développé en 4 semaines avec la méthodologie Scrum."
                        </p>
                        <p>
                          "L'objectif de cette session de 15 minutes est de vous montrer concrètement ce que 
                          nous avons livré et de recueillir vos feedbacks en tant que stakeholders."
                        </p>
                        <p className="font-bold text-yellow-400">
                          "N'hésitez pas à poser des questions à tout moment - c'est exactement l'esprit 
                          d'une Sprint Review !"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 2 */}
                  <div className="glass p-8 rounded-2xl border border-yellow-500/30 group hover:border-yellow-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-black font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white">DÉMONSTRATION DU DASHBOARD</h4>
                        <p className="text-white/60">6 minutes</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock size={16} />
                        <span className="text-sm">2:00 - 8:00</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="glass p-6 rounded-xl border border-white/20">
                        <div className="mb-4">
                          <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                            DÉVELOPPEUR / DÉMONSTRATEUR
                          </span>
                        </div>
                        <div className="space-y-3 text-white/90 leading-relaxed">
                          <p className="font-bold">
                            "Je vais maintenant vous présenter notre dashboard Django en action."
                          </p>
                          <p>
                            "Voici l'interface principale où un exploitant de cinéma peut saisir les informations 
                            d'un film avant sa sortie..."
                          </p>
                          <p className="italic text-blue-400">
                            [Démonstration live : saisie d'un film exemple]
                          </p>
                          <p>
                            "Comme vous pouvez le voir, notre modèle prédit X entrées en première semaine. 
                            Le graphique montre la répartition par jour et la courbe de confiance."
                          </p>
                          <p>
                            "Les filtres permettent d'analyser par genre, période de sortie, ou budget..."
                          </p>
                        </div>
                      </div>
                      
                      <div className="glass p-6 rounded-xl border border-white/20">
                        <div className="mb-4">
                          <span className="inline-block bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                            ANIMATEUR - TRANSITION
                          </span>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                          "Cette interface s'appuie sur notre API FastAPI qui traite les données en temps réel. 
                          Passons maintenant aux performances de notre modèle..."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 3 */}
                  <div className="glass p-8 rounded-2xl border border-blue-500/30 group hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white">PERFORMANCES DU MODÈLE</h4>
                        <p className="text-white/60">3 minutes</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock size={16} />
                        <span className="text-sm">8:00 - 11:00</span>
                      </div>
                    </div>
                    
                    <div className="glass p-6 rounded-xl border border-white/20">
                      <div className="mb-4">
                        <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">
                          RESPONSABLE ML
                        </span>
                      </div>
                      <div className="space-y-3 text-white/90 leading-relaxed">
                        <p className="font-bold">
                          "Parlons maintenant des performances de notre modèle prédictif."
                        </p>
                        <p>
                          "Nous avons testé deux algorithmes : Random Forest et LightGBM. 
                          Voici nos métriques finales..."
                        </p>
                        <p className="italic text-blue-400">
                          [Présentation des graphiques de performance]
                        </p>
                        <p>
                          "Notre RMSE de X et R² de Y montrent une capacité prédictive satisfaisante 
                          pour l'aide à la décision."
                        </p>
                        <p>
                          "Nous avons identifié que les données d'engagement sur les trailers Dailymotion 
                          améliorent significativement les prédictions."
                        </p>
                        <p className="font-bold text-yellow-400">
                          "Bien sûr, nous avons aussi identifié des limites que je peux détailler 
                          si vous le souhaitez..."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 4 */}
                  <div className="glass p-8 rounded-2xl border border-green-500/30 group hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        4
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white">ÉCHANGES ET FEEDBACKS</h4>
                        <p className="text-white/60">4 minutes</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock size={16} />
                        <span className="text-sm">11:00 - 15:00</span>
                      </div>
                    </div>
                    
                    <div className="glass p-6 rounded-xl border border-white/20">
                      <div className="mb-4">
                        <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                          ANIMATEUR PRINCIPAL
                        </span>
                      </div>
                      <div className="space-y-3 text-white/90 leading-relaxed">
                        <p className="font-bold">
                          "Nous arrivons maintenant à la partie la plus importante : vos retours !"
                        </p>
                        <p>
                          "En tant que stakeholders, que pensez-vous de cette approche pour aider 
                          les exploitants de cinéma ?"
                        </p>
                        <p className="italic text-green-400">
                          [Écoute active et prise de notes des réponses]
                        </p>
                        <p>
                          "Quelles améliorations ou fonctionnalités supplémentaires vous semblent prioritaires ?"
                        </p>
                        <p className="italic text-green-400">
                          [Reformulation des suggestions]
                        </p>
                        <p>
                          "Y a-t-il des aspects techniques ou métier que vous aimeriez que nous détaillions ?"
                        </p>
                        <p className="font-bold text-yellow-400">
                          "Parfait ! Je note tous ces points précieux pour notre backlog d'amélioration."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Closing */}
                  <div className="glass p-8 rounded-2xl border border-orange-500/30 group hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        ✓
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white">CLÔTURE ET TRANSITION</h4>
                        <p className="text-white/60">15:00</p>
                      </div>
                    </div>
                    
                    <div className="glass p-6 rounded-xl border border-white/20">
                      <div className="mb-4">
                        <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-bold">
                          ANIMATEUR PRINCIPAL
                        </span>
                      </div>
                      <div className="space-y-3 text-white/90 leading-relaxed">
                        <p className="font-bold">
                          "Merci beaucoup pour cette Sprint Review très enrichissante !"
                        </p>
                        <p>
                          "Nous avons présenté notre solution complète : dashboard, API, modèle ML et pipeline de données. 
                          Vos feedbacks vont nous permettre d'identifier les prochaines priorités."
                        </p>
                        <p className="font-bold text-yellow-400">
                          "Nous sommes maintenant prêts pour vos questions complémentaires et l'échange libre."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tips */}
                <div className="glass p-6 rounded-xl border border-red-600/30 mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={20} className="text-red-400" />
                    <h4 className="font-bold text-white">Conseils pour l'animation</h4>
                  </div>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li><strong>Gardez le rythme :</strong> Utilisez un chronomètre discret pour respecter les timings</li>
                    <li><strong>Soyez authentiques :</strong> Adaptez le script à votre style naturel de communication</li>
                    <li><strong>Encouragez l'interaction :</strong> Relancez si le jury est silencieux</li>
                    <li><strong>Notez visuellement :</strong> Montrez que vous prenez en compte les feedbacks</li>
                    <li><strong>Restez positifs :</strong> Même face aux critiques, montrez l'esprit d'amélioration continue</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Preparation content */}
          {activeTab === 'preparation' && (
            <div className="card card-glow slide-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <ClipboardList size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  Préparation de l'animation
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Monitor size={20} className="text-yellow-400" />
                      Matériel nécessaire
                    </h4>
                    <div className="glass p-6 rounded-xl border border-white/20">
                      <ul className="space-y-3">
                        {[
                          { item: 'Dashboard fonctionnel', desc: 'Interface Django prête à démontrer' },
                          { item: 'Données de test', desc: 'Films exemples pour la démonstration' },
                          { item: 'Graphiques de performance', desc: 'Métriques ML préparées' },
                          { item: 'Support de notes', desc: 'Tableau ou feuille pour les feedbacks' },
                          { item: 'Chronomètre', desc: 'Gestion discrète du timing' }
                        ].map((material, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                            <div>
                              <span className="font-bold text-white">{material.item}:</span>
                              <span className="text-white/70 ml-1">{material.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Users size={20} className="text-yellow-400" />
                      Répartition des rôles
                    </h4>
                    <div className="space-y-4">
                      {[
                        { role: 'Animateur principal', color: 'from-red-600 to-red-700', desc: 'Ouverture, transitions, facilitation des échanges, clôture' },
                        { role: 'Démonstrateur', color: 'from-yellow-500 to-yellow-600', desc: 'Présentation live du dashboard et des fonctionnalités' },
                        { role: 'Expert ML', color: 'from-blue-500 to-blue-600', desc: 'Présentation des performances et métriques du modèle' },
                        { role: 'Support', color: 'from-green-500 to-emerald-600', desc: 'Prise de notes, gestion technique, questions complémentaires' }
                      ].map((roleItem, index) => (
                        <div key={index} className="glass p-4 rounded-xl border border-white/20 group hover:border-white/30 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 bg-gradient-to-br ${roleItem.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <h5 className="font-bold text-white">{roleItem.role}</h5>
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">{roleItem.desc}</p>
                        </div>
                      ))}
                
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target size={20} className="text-orange-400" />
                      Points de vigilance
                    </h4>
                    <div className="space-y-4">
                      {[
                        { title: 'Gestion du temps', desc: 'Prévoir des signaux discrets entre équipiers pour respecter les 15 minutes', color: 'border-orange-400/30' },
                        { title: 'Niveau technique', desc: 'Adapter le discours selon les réactions du jury (plus ou moins technique)', color: 'border-yellow-400/30' },
                        { title: 'Problèmes techniques', desc: 'Avoir un plan B (captures d\'écran) si la démo ne fonctionne pas', color: 'border-red-400/30' }
                      ].map((point, index) => (
                        <div key={index} className={`glass p-4 rounded-xl border ${point.color} group hover:scale-105 transition-all duration-300`}>
                          <h5 className="font-bold text-white mb-2">{point.title}</h5>
                          <p className="text-white/70 text-sm leading-relaxed">{point.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img 
                      src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
                      alt="Sprint Review facilitation" 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <p className="text-white font-medium">
                        Animation collaborative d'une Sprint Review avec focus sur la valeur livrée
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Objectives content */}
          {activeTab === 'objectifs' && (
            <div className="card card-glow bounce-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  Objectifs et résultats attendus
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="glass p-6 rounded-xl border border-white/20">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target size={20} className="text-red-400" />
                      Objectifs de l'animation
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Démontrer la maîtrise de l\'animation d\'une Sprint Review',
                        'Présenter efficacement les livrables du projet',
                        'Faciliter les échanges avec les stakeholders (jury)',
                        'Recueillir des feedbacks constructifs et pertinents',
                        'Respecter le timeboxing de 15 minutes'
                      ].map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                          <span className="text-white/80">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-400" />
                      Compétences évaluées
                    </h4>
                    <div className="space-y-4">
                      {[
                        { skill: 'Animation de rituel Scrum', desc: 'Maîtrise du format Sprint Review et de ses objectifs' },
                        { skill: 'Travail d\'équipe', desc: 'Coordination fluide entre les différents intervenants' },
                        { skill: 'Communication efficace', desc: 'Présentation claire et adaptée au public' },
                        { skill: 'Facilitation d\'échanges', desc: 'Encouragement de la participation et gestion des interventions' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 group">
                          <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle size={14} className="text-green-400" />
                          </div>
                          <div>
                            <h5 className="font-bold text-white text-sm mb-1">{item.skill}</h5>
                            <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="glass p-6 rounded-xl border border-white/20">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Star size={20} className="text-blue-400" />
                      Critères de réussite
                    </h4>
                    <div className="space-y-4">
                      {[
                        { criterion: 'Respect du timing', progress: 100, desc: 'Animation fluide en 15 minutes' },
                        { criterion: 'Engagement du jury', progress: 90, desc: 'Questions et participation active' },
                        { criterion: 'Clarté de la présentation', progress: 95, desc: 'Livrables compréhensibles par tous' },
                        { criterion: 'Qualité des feedbacks', progress: 85, desc: 'Retours constructifs et exploitables' }
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-bold text-white text-sm">{item.criterion}</h5>
                            <span className="text-yellow-400 text-sm font-bold">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-black/30 rounded-full h-2 mb-2">
                            <div 
                              className="bg-gradient-to-r from-red-600 to-yellow-400 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-white/70 text-xs">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl border border-white/20">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <FileText size={20} className="text-orange-400" />
                      Livrables attendus
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Démonstration live du dashboard fonctionnel',
                        'Présentation des métriques de performance du modèle',
                        'Liste des feedbacks recueillis auprès du jury',
                        'Animation collaborative fluide et professionnelle',
                        'Évaluation positive de l\'expérience par le jury'
                      ].map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                          <span className="text-white/80 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center glass p-6 rounded-xl border border-red-600/30">
                    <h4 className="font-bold text-white mb-3 flex items-center justify-center gap-2">
                      <Target size={20} className="text-red-400" />
                      Objectif final
                    </h4>
                    <p className="text-white/80 text-sm italic leading-relaxed">
                      Démontrer la capacité à animer efficacement une Sprint Review en équipe, 
                      en créant un échange authentique et constructif avec les stakeholders, 
                      tout en valorisant les livrables du projet dans un temps contraint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FacilitationSection;