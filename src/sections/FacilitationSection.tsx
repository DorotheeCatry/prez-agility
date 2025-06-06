import React, { useState } from 'react';
import { MessageSquare, ClipboardList, Users, PlayCircle, Clock, Target, CheckCircle } from 'lucide-react';

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
                      <li>• <span className="font-semibold">Format :</span> Rituel agile adapté au contexte</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Matériel nécessaire
                  </h4>
                  <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                    <ul className="space-y-2 text-[var(--color-text)]/80">
                      <li>• Tableau blanc ou support digital (Miro/Mural)</li>
                      <li>• Post-its virtuels ou physiques</li>
                      <li>• Chronomètre pour la gestion du temps</li>
                      <li>• Support visuel du projet (slides de présentation)</li>
                      <li>• Grille d'évaluation préparée</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Compétences à démontrer
                  </h4>
                  <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                    <ul className="space-y-2 text-[var(--color-text)]/80">
                      <li>• Facilitation d'échanges constructifs</li>
                      <li>• Gestion du temps et des interventions</li>
                      <li>• Création d'un environnement de confiance</li>
                      <li>• Animation participative et inclusive</li>
                      <li>• Synthèse et prise de décision collective</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-3">
                    Préparation en amont
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Analyse du contexte
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Comprendre les attentes du jury et adapter le rituel au contexte de certification.
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Définition des objectifs
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Clarifier les résultats attendus et les critères de réussite de l'animation.
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Préparation du matériel
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Tester les outils, préparer les supports visuels et anticiper les besoins techniques.
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                        Scénario d'animation
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Structurer le déroulé minute par minute avec des alternatives selon les réactions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
                    alt="Team facilitation" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <p className="text-white text-sm">
                      Facilitation d'un échange constructif avec focus sur la participation active
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
              <Users size={28} className="text-[var(--color-secondary)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-secondary)]">
                Rituel choisi : Rétrospective adaptée
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-primary)]">
                    Pourquoi une rétrospective ?
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Participative :</span> Implique activement tous les membres du jury</li>
                    <li>• <span className="font-semibold">Structurée :</span> Format clair avec objectifs définis</li>
                    <li>• <span className="font-semibold">Constructive :</span> Focus sur l'amélioration continue</li>
                    <li>• <span className="font-semibold">Adaptable :</span> Peut être ajustée selon le contexte</li>
                    <li>• <span className="font-semibold">Démonstrative :</span> Permet de montrer plusieurs techniques de facilitation</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-secondary)]">
                    Adaptation au contexte jury
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm">Sujet de la rétrospective</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        "Retour d'expérience sur l'approche agile dans le projet de prédiction IA"
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Participants</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Membres du jury jouant le rôle de l'équipe projet
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Objectif</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Identifier les points forts, axes d'amélioration et actions concrètes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-accent-light)]">
                    Format : "Start, Stop, Continue"
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-[var(--color-success)]/10 p-3 rounded border border-[var(--color-success)]/20">
                      <h5 className="font-semibold text-[var(--color-success)] mb-1">START</h5>
                      <p className="text-xs text-[var(--color-text)]/70">
                        Quelles pratiques devrions-nous commencer à adopter ?
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-error)]/10 p-3 rounded border border-[var(--color-error)]/20">
                      <h5 className="font-semibold text-[var(--color-error)] mb-1">STOP</h5>
                      <p className="text-xs text-[var(--color-text)]/70">
                        Quelles pratiques devrions-nous arrêter ou éviter ?
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-primary)]/10 p-3 rounded border border-[var(--color-primary)]/20">
                      <h5 className="font-semibold text-[var(--color-primary)] mb-1">CONTINUE</h5>
                      <p className="text-xs text-[var(--color-text)]/70">
                        Quelles pratiques fonctionnent bien et doivent être maintenues ?
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-3 text-[var(--color-warning)]">
                    Techniques de facilitation utilisées
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Timeboxing :</span> Gestion stricte du temps par phase</li>
                    <li>• <span className="font-semibold">Brainstorming silencieux :</span> Réflexion individuelle puis partage</li>
                    <li>• <span className="font-semibold">Dot voting :</span> Priorisation collective des idées</li>
                    <li>• <span className="font-semibold">Reformulation :</span> Clarification et synthèse des contributions</li>
                    <li>• <span className="font-semibold">Plan d'action :</span> Définition d'actions concrètes</li>
                  </ul>
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
                  <p className="text-xs text-[var(--color-text)]/70">Participants jury</p>
                </div>
                <div className="text-center p-3 bg-[var(--color-accent-light)]/10 rounded-lg">
                  <Target size={24} className="text-[var(--color-accent-light)] mx-auto mb-1" />
                  <div className="text-lg font-bold">3</div>
                  <p className="text-xs text-[var(--color-text)]/70">Catégories d'analyse</p>
                </div>
                <div className="text-center p-3 bg-[var(--color-success)]/10 rounded-lg">
                  <CheckCircle size={24} className="text-[var(--color-success)] mx-auto mb-1" />
                  <div className="text-lg font-bold">5</div>
                  <p className="text-xs text-[var(--color-text)]/70">Actions définies</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-primary)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <h4 className="font-semibold text-[var(--color-primary)]">Introduction et cadrage (2 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Accueil et présentation de l'exercice</li>
                    <li>• Explication du format "Start, Stop, Continue"</li>
                    <li>• Définition des règles d'échange (bienveillance, écoute active)</li>
                    <li>• Présentation du timing et des objectifs</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <h4 className="font-semibold text-[var(--color-secondary)]">Réflexion individuelle (3 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Chaque participant réfléchit individuellement</li>
                    <li>• Utilisation de post-its (1 idée par post-it)</li>
                    <li>• Focus sur l'expérience agile du projet présenté</li>
                    <li>• Encouragement à la diversité des perspectives</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-accent-light)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <h4 className="font-semibold text-[var(--color-accent-light)]">Partage et regroupement (6 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Tour de table structuré (1 min par participant)</li>
                    <li>• Placement des post-its sur le tableau par catégorie</li>
                    <li>• Regroupement des idées similaires</li>
                    <li>• Clarification et reformulation si nécessaire</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-success)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <h4 className="font-semibold text-[var(--color-success)]">Priorisation et actions (3 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Dot voting pour prioriser les éléments les plus importants</li>
                    <li>• Sélection de 2-3 actions concrètes à retenir</li>
                    <li>• Définition rapide des responsabilités et échéances</li>
                    <li>• Validation collective des décisions</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--color-warning)] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</div>
                    <h4 className="font-semibold text-[var(--color-warning)]">Synthèse et clôture (1 min)</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80 ml-9">
                    <li>• Récapitulatif des principales conclusions</li>
                    <li>• Remerciements pour la participation active</li>
                    <li>• Transition vers l'échange libre avec le jury</li>
                  </ul>
                </div>
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
                    <li>• <span className="font-semibold">Démontrer la maîtrise</span> des techniques de facilitation agile</li>
                    <li>• <span className="font-semibold">Créer un environnement</span> de confiance et de participation</li>
                    <li>• <span className="font-semibold">Gérer efficacement</span> le temps et les interventions</li>
                    <li>• <span className="font-semibold">Produire des résultats concrets</span> en 15 minutes</li>
                    <li>• <span className="font-semibold">Adapter le rituel</span> au contexte spécifique</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Critères de réussite
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm">Participation active</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Tous les participants s'expriment</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Respect du timing</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Animation dans les 15 minutes</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Qualité des échanges</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Discussions constructives et bienveillantes</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Actions concrètes</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Définition d'au moins 3 actions</p>
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
                        <h5 className="font-semibold text-sm">Leadership de facilitation</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Capacité à guider le groupe vers les objectifs
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Communication efficace</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Clarté des consignes et reformulation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Gestion de groupe</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Équilibrage des prises de parole
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Adaptabilité</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Ajustement selon les réactions du groupe
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-success)] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Orientation résultats</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Production de livrables concrets
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
                    <li>• <span className="font-semibold">Tableau Start/Stop/Continue</span> complété</li>
                    <li>• <span className="font-semibold">3-5 actions prioritaires</span> identifiées</li>
                    <li>• <span className="font-semibold">Consensus du groupe</span> sur les décisions</li>
                    <li>• <span className="font-semibold">Plan de suivi</span> des actions définies</li>
                    <li>• <span className="font-semibold">Feedback positif</span> du jury sur l'animation</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/20">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                    Objectif final
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/80 italic">
                    Démontrer la capacité à animer efficacement un rituel agile en créant 
                    de la valeur collective en un temps contraint, tout en maintenant 
                    l'engagement et la satisfaction des participants.
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