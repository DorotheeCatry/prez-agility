import React, { useState } from 'react';
import { MessageSquare, ClipboardList, Users, PlayCircle, Clock, Target, CheckCircle, Monitor } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const FacilitationSection: React.FC<SectionProps> = ({ isActive }) => {
  const [activeTab, setActiveTab] = useState('preparation');
  
  return (
    <section
      id="facilitation"
      className={`section ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
            C4: Animation d'un Échange avec le Jury
          </h2>
          <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
            Cas pratique : Animation d'un échange constructif avec le jury à la manière 
            d'un rituel agile. Durée : 15 minutes + échange.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button 
            className={`btn ${activeTab === 'preparation' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('preparation')}
          >
            Préparation
          </button>
          <button 
            className={`btn ${activeTab === 'rituel' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('rituel')}
          >
            Rituel choisi
          </button>
          <button 
            className={`btn ${activeTab === 'animation' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('animation')}
          >
            Plan d'animation
          </button>
          <button 
            className={`btn ${activeTab === 'objectifs' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('objectifs')}
          >
            Objectifs & Résultats
          </button>
        </div>
        
        {activeTab === 'preparation' && (
          <div className="card slide-up">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList size={28} className="text-[var(--color-primary)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-primary)]">
                Préparation de l'animation
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Contexte de l'exercice
                  </h4>
                  <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                    <ul className="space-y-2 text-[var(--color-text)]/80">
                      <li>• <span className="font-semibold">Durée :</span> 15 minutes d'animation + échange</li>
                      <li>• <span className="font-semibold">Participants :</span> Jury de certification agile</li>
                      <li>• <span className="font-semibold">Objectif :</span> Démontrer les compétences de facilitation</li>
                      <li>• <span className="font-semibold">Format :</span> Rituel Scrum adapté au contexte jury</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Choix du rituel Scrum
                  </h4>
                  <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 bg-[var(--color-primary)]/10 rounded border border-[var(--color-primary)]/20">
                        <h5 className="font-semibold text-[var(--color-primary)] mb-1">Sprint Review ✓</h5>
                        <p className="text-sm text-[var(--color-text)]/70">
                          Idéal pour présenter les livrables et recueillir des feedbacks constructifs
                        </p>
                      </div>
                      <div className="p-2 bg-[var(--color-text)]/5 rounded text-sm text-[var(--color-text)]/60">
                        <span className="font-semibold">Autres options :</span> Daily Scrum (trop court), Sprint Planning (trop technique), Rétrospective (nécessite un vécu commun)
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Matériel nécessaire
                  </h4>
                  <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                    <ul className="space-y-2 text-[var(--color-text)]/80">
                      <li>• Support de présentation (slides du projet IA)</li>
                      <li>• Démo fonctionnelle du dashboard Django</li>
                      <li>• Tableau blanc ou support digital pour noter les feedbacks</li>
                      <li>• Chronomètre pour la gestion du temps</li>
                      <li>• Grille d'évaluation des retours</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-3">
                    Compétences à démontrer
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Animation de Sprint Review
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Structurer la présentation, faciliter les échanges, recueillir les feedbacks
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Gestion du temps
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Respecter le timeboxing de 15 minutes tout en maximisant la valeur
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Facilitation d'échanges
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Encourager la participation, reformuler, synthétiser les retours
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Adaptation au contexte
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Ajuster le rituel au contexte jury tout en gardant l'esprit Scrum
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
                    alt="Sprint Review facilitation" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <p className="text-white text-sm">
                      Animation d'une Sprint Review : présentation des livrables et recueil de feedbacks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'rituel' && (
          <div className="card scale-in">
            <div className="flex items-center gap-3 mb-6">
              <Monitor size={28} className="text-[var(--color-secondary)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-secondary)]">
                Rituel choisi : Sprint Review adaptée
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-primary)]">
                    Pourquoi une Sprint Review ?
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Démonstrative :</span> Permet de présenter concrètement les livrables du projet</li>
                    <li>• <span className="font-semibold">Interactive :</span> Favorise les échanges et les questions du jury</li>
                    <li>• <span className="font-semibold">Structurée :</span> Format clair avec objectifs définis</li>
                    <li>• <span className="font-semibold">Orientée valeur :</span> Focus sur ce qui a été livré et sa valeur métier</li>
                    <li>• <span className="font-semibold">Collaborative :</span> Recueil de feedbacks pour amélioration continue</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-secondary)]">
                    Adaptation au contexte jury
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm">Sujet de la review</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        "Présentation des livrables du projet de prédiction IA et recueil de feedbacks"
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Participants</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Membres du jury jouant le rôle des stakeholders/clients
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Objectif</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Démontrer la valeur livrée et recueillir des retours constructifs
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-warning)]">
                    Livrables à présenter
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Modèle prédictif :</span> Performances et métriques (RMSE, R²)</li>
                    <li>• <span className="font-semibold">Dashboard Django :</span> Interface utilisateur fonctionnelle</li>
                    <li>• <span className="font-semibold">API FastAPI :</span> Endpoint de prédiction déployé</li>
                    <li>• <span className="font-semibold">Pipeline de données :</span> Scraping et feature engineering</li>
                    <li>• <span className="font-semibold">Documentation :</span> Guide utilisateur et technique</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-accent-light)]">
                    Structure de la Sprint Review
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-[var(--color-primary)]/10 p-3 rounded border border-[var(--color-primary)]/20">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">1. Contexte et objectifs</h5>
                      <p className="text-xs text-[var(--color-text)]/70">
                        Rappel du sprint goal et des User Stories planifiées
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-secondary)]/10 p-3 rounded border border-[var(--color-secondary)]/20">
                      <h5 className="font-semibold text-[var(--color-secondary)] mb-1">2. Démonstration</h5>
                      <p className="text-xs text-[var(--color-text)]/70">
                        Présentation live des fonctionnalités développées
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-accent-light)]/10 p-3 rounded border border-[var(--color-accent-light)]/20">
                      <h5 className="font-semibold text-[var(--color-accent-light)] mb-1">3. Métriques et résultats</h5>
                      <p className="text-xs text-[var(--color-text)]/70">
                        Performances du modèle et indicateurs de qualité
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-success)]/10 p-3 rounded border border-[var(--color-success)]/20">
                      <h5 className="font-semibold text-[var(--color-success)] mb-1">4. Feedbacks et questions</h5>
                      <p className="text-xs text-[var(--color-text)]/70">
                        Échanges avec le jury et recueil de retours
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-warning)]">
                    Techniques de facilitation
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Timeboxing :</span> Gestion stricte du temps par phase</li>
                    <li>• <span className="font-semibold">Storytelling :</span> Présentation narrative des fonctionnalités</li>
                    <li>• <span className="font-semibold">Questions ouvertes :</span> Encourager les retours constructifs</li>
                    <li>• <span className="font-semibold">Reformulation :</span> Clarification et synthèse des feedbacks</li>
                    <li>• <span className="font-semibold">Prise de notes :</span> Capture des suggestions d'amélioration</li>
                  </ul>
                </div>
                
                <div className="text-center p-3 bg-[var(--color-primary)]/10 rounded-lg">
                  <p className="text-sm text-[var(--color-text)]/80 italic">
                    "L'objectif est de créer un échange authentique comme lors d'une vraie Sprint Review avec des stakeholders"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'animation' && (
          <div className="card slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <PlayCircle size={28} className="text-[var(--color-accent-light)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-accent-light)]">
                Plan d'animation détaillé (15 minutes)
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-[var(--color-primary)]/10 rounded-lg">
                  <Clock size={24} className="text-[var(--color-primary)] mx-auto mb-1" />
                  <div className="text-lg font-bold">15 min</div>
                  <p className="text-xs text-[var(--color-text)]/70">Durée totale</p>
                </div>
                <div className="text-center p-3 bg-[var(--color-secondary)]/10 rounded-lg">
                  <Users size={24} className="text-[var(--color-secondary)] mx-auto mb-1" />
                  <div className="text-lg font-bold">3-5</div>
                  <p className="text-xs text-[var(--color-text)]/70">Membres jury</p>
                </div>
                <div className="text-center p-3 bg-[var(--color-accent-light)]/10 rounded-lg">
                  <Target size={24} className="text-[var(--color-accent-light)] mx-auto mb-1" />
                  <div className="text-lg font-bold">4</div>
                  <p className="text-xs text-[var(--color-text)]/70">Livrables présentés</p>
                </div>
                <div className="text-center p-3 bg-[var(--color-success)]/10 rounded-lg">
                  <CheckCircle size={24} className="text-[var(--color-success)] mx-auto mb-1" />
                  <div className="text-lg font-bold">5+</div>
                  <p className="text-xs text-[var(--color-text)]/70">Feedbacks recueillis</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-primary)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <h4 className="font-semibold text-[var(--color-primary)]">Ouverture et contexte (2 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Accueil et présentation du format Sprint Review</li>
                    <li>• Rappel du contexte projet : prédiction popularité films</li>
                    <li>• Objectifs du sprint 4 : finalisation et déploiement</li>
                    <li>• Invitation à poser des questions et donner des feedbacks</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <h4 className="font-semibold text-[var(--color-secondary)]">Démonstration du dashboard (6 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Présentation de l'interface utilisateur Django</li>
                    <li>• Démonstration live : saisie d'un film et prédiction</li>
                    <li>• Visualisation des graphiques et métriques</li>
                    <li>• Explication des filtres et fonctionnalités</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-accent-light)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <h4 className="font-semibold text-[var(--color-accent-light)]">Performances du modèle (3 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Présentation des métriques finales (RMSE, R², MAE)</li>
                    <li>• Comparaison Random Forest vs LightGBM</li>
                    <li>• Exemples de prédictions réussies</li>
                    <li>• Limites identifiées et axes d'amélioration</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-success)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <h4 className="font-semibold text-[var(--color-success)]">Échanges et feedbacks (4 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Questions ouvertes : "Que pensez-vous de cette approche ?"</li>
                    <li>• Recueil des suggestions d'amélioration</li>
                    <li>• Discussion sur l'applicabilité métier</li>
                    <li>• Synthèse des points clés soulevés</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[var(--color-warning)]/10 rounded-lg border border-[var(--color-warning)]/20">
                <h4 className="font-semibold text-[var(--color-warning)] mb-2">
                  Points d'attention pour l'animation
                </h4>
                <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                  <li>• Maintenir l'énergie et l'engagement du jury</li>
                  <li>• Adapter le niveau technique selon les réactions</li>
                  <li>• Encourager les questions même si elles sortent du cadre</li>
                  <li>• Noter visuellement les feedbacks pour montrer l'écoute active</li>
                  <li>• Conclure par un remerciement et une ouverture sur la suite</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'objectifs' && (
          <div className="card bounce-in">
            <div className="flex items-center gap-3 mb-6">
              <Target size={28} className="text-[var(--color-success)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-success)]">
                Objectifs et résultats attendus
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                    Objectifs de l'animation
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Démontrer la maîtrise</span> de l'animation d'une Sprint Review</li>
                    <li>• <span className="font-semibold">Présenter efficacement</span> les livrables du projet</li>
                    <li>• <span className="font-semibold">Faciliter les échanges</span> avec les stakeholders (jury)</li>
                    <li>• <span className="font-semibold">Recueillir des feedbacks</span> constructifs et pertinents</li>
                    <li>• <span className="font-semibold">Respecter le timeboxing</span> de 15 minutes</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Critères de réussite
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm">Clarté de la présentation</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Livrables compréhensibles par tous</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Engagement du jury</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Questions et participation active</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Gestion du temps</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Respect strict des 15 minutes</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Qualité des feedbacks</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Retours constructifs et exploitables</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-3">
                    Compétences évaluées
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Animation de rituel Scrum</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Maîtrise du format Sprint Review et de ses objectifs
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Communication efficace</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Présentation claire et adaptée au public
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Facilitation d'échanges</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Encouragement de la participation et gestion des interventions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Gestion du temps</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Respect du timeboxing et fluidité de l'animation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Orientation valeur</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Focus sur la valeur métier des livrables présentés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-warning)] mb-3">
                    Livrables attendus
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Démonstration live</span> du dashboard fonctionnel</li>
                    <li>• <span className="font-semibold">Présentation des métriques</span> de performance du modèle</li>
                    <li>• <span className="font-semibold">Liste des feedbacks</span> recueillis auprès du jury</li>
                    <li>• <span className="font-semibold">Synthèse des points</span> d'amélioration identifiés</li>
                    <li>• <span className="font-semibold">Évaluation positive</span> de l'animation par le jury</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/20">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                    Objectif final
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/80 italic">
                    Démontrer la capacité à animer efficacement une Sprint Review en créant 
                    un échange authentique et constructif avec les stakeholders, tout en 
                    valorisant les livrables du projet dans un temps contraint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilitationSection;