import React, { useState } from 'react';
import { MessageSquare, ClipboardList, Users, PlayCircle, Clock, Target, CheckCircle, Monitor, FileText, Mic } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const FacilitationSection: React.FC<SectionProps> = ({ isActive }) => {
  const [activeTab, setActiveTab] = useState('script');
  
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
            Script d'animation d'une Sprint Review adaptée - 15 minutes + échange
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button 
            className={`btn ${activeTab === 'script' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('script')}
          >
            <FileText size={20} className="mr-2" />
            Script d'animation
          </button>
          <button 
            className={`btn ${activeTab === 'preparation' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('preparation')}
          >
            <ClipboardList size={20} className="mr-2" />
            Préparation
          </button>
          <button 
            className={`btn ${activeTab === 'objectifs' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('objectifs')}
          >
            <Target size={20} className="mr-2" />
            Objectifs
          </button>
        </div>
        
        {activeTab === 'script' && (
          <div className="space-y-8">
            <div className="card slide-up">
              <div className="flex items-center gap-3 mb-6">
                <Mic size={28} className="text-[var(--color-primary)]" />
                <h3 className="text-2xl font-display font-bold text-[var(--color-primary)]">
                  Script d'Animation - Sprint Review (15 minutes)
                </h3>
              </div>
              
              <div className="bg-[var(--color-surface)]/30 p-4 rounded-lg border border-[var(--color-text)]/10 mb-6">
                <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                  Instructions pour l'équipe
                </h4>
                <p className="text-sm text-[var(--color-text)]/80">
                  Ce script peut être lu à tour de rôle. Chaque section est clairement délimitée avec 
                  des indications de timing. L'animateur principal guide l'ensemble, les autres membres 
                  peuvent prendre la parole pour les démonstrations techniques.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="bg-[var(--color-surface)]/50 p-6 rounded-lg border border-[var(--color-primary)]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[var(--color-primary)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                      OUVERTURE ET CONTEXTE (2 minutes)
                    </h4>
                    <div className="ml-auto text-sm text-[var(--color-text)]/60">⏱️ 0:00 - 2:00</div>
                  </div>
                  
                  <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-text)]/10">
                    <div className="mb-3">
                      <span className="inline-block bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-1 rounded text-sm font-semibold mb-2">
                        ANIMATEUR PRINCIPAL
                      </span>
                    </div>
                    <div className="space-y-3 text-[var(--color-text)]/90">
                      <p>
                        <strong>"Bonjour à tous et merci d'être présents pour cette Sprint Review."</strong>
                      </p>
                      <p>
                        "Nous sommes ici pour vous présenter les livrables de notre projet de prédiction 
                        de popularité des films, développé en 4 semaines avec la méthodologie Scrum."
                      </p>
                      <p>
                        "L'objectif de cette session de 15 minutes est de vous montrer concrètement ce que 
                        nous avons livré et de recueillir vos feedbacks en tant que stakeholders."
                      </p>
                      <p>
                        <strong>"N'hésitez pas à poser des questions à tout moment - c'est exactement l'esprit 
                        d'une Sprint Review !"</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Phase 2 */}
                <div className="bg-[var(--color-surface)]/50 p-6 rounded-lg border border-[var(--color-secondary)]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[var(--color-secondary)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <h4 className="text-xl font-semibold text-[var(--color-secondary)]">
                      DÉMONSTRATION DU DASHBOARD (6 minutes)
                    </h4>
                    <div className="ml-auto text-sm text-[var(--color-text)]/60">⏱️ 2:00 - 8:00</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-text)]/10">
                      <div className="mb-3">
                        <span className="inline-block bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] px-2 py-1 rounded text-sm font-semibold mb-2">
                          DÉVELOPPEUR / DÉMONSTRATEUR
                        </span>
                      </div>
                      <div className="space-y-3 text-[var(--color-text)]/90">
                        <p>
                          <strong>"Je vais maintenant vous présenter notre dashboard Django en action."</strong>
                        </p>
                        <p>
                          "Voici l'interface principale où un exploitant de cinéma peut saisir les informations 
                          d'un film avant sa sortie..."
                        </p>
                        <p>
                          <em>[Démonstration live : saisie d'un film exemple]</em>
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
                    
                    <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-text)]/10">
                      <div className="mb-3">
                        <span className="inline-block bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-1 rounded text-sm font-semibold mb-2">
                          ANIMATEUR - TRANSITION
                        </span>
                      </div>
                      <div className="space-y-2 text-[var(--color-text)]/90">
                        <p>
                          "Cette interface s'appuie sur notre API FastAPI qui traite les données en temps réel. 
                          Passons maintenant aux performances de notre modèle..."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phase 3 */}
                <div className="bg-[var(--color-surface)]/50 p-6 rounded-lg border border-[var(--color-accent-light)]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[var(--color-accent-light)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <h4 className="text-xl font-semibold text-[var(--color-accent-light)]">
                      PERFORMANCES DU MODÈLE (3 minutes)
                    </h4>
                    <div className="ml-auto text-sm text-[var(--color-text)]/60">⏱️ 8:00 - 11:00</div>
                  </div>
                  
                  <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-text)]/10">
                    <div className="mb-3">
                      <span className="inline-block bg-[var(--color-accent-light)]/20 text-[var(--color-accent-light)] px-2 py-1 rounded text-sm font-semibold mb-2">
                        RESPONSABLE ML
                      </span>
                    </div>
                    <div className="space-y-3 text-[var(--color-text)]/90">
                      <p>
                        <strong>"Parlons maintenant des performances de notre modèle prédictif."</strong>
                      </p>
                      <p>
                        "Nous avons testé deux algorithmes : Random Forest et LightGBM. 
                        Voici nos métriques finales..."
                      </p>
                      <p>
                        <em>[Présentation des graphiques de performance]</em>
                      </p>
                      <p>
                        "Notre RMSE de X et R² de Y montrent une capacité prédictive satisfaisante 
                        pour l'aide à la décision."
                      </p>
                      <p>
                        "Nous avons identifié que les données d'engagement sur les trailers Dailymotion 
                        améliorent significativement les prédictions."
                      </p>
                      <p>
                        <strong>"Bien sûr, nous avons aussi identifié des limites que je peux détailler 
                        si vous le souhaitez..."</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Phase 4 */}
                <div className="bg-[var(--color-surface)]/50 p-6 rounded-lg border border-[var(--color-success)]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[var(--color-success)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <h4 className="text-xl font-semibold text-[var(--color-success)]">
                      ÉCHANGES ET FEEDBACKS (4 minutes)
                    </h4>
                    <div className="ml-auto text-sm text-[var(--color-text)]/60">⏱️ 11:00 - 15:00</div>
                  </div>
                  
                  <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-text)]/10">
                    <div className="mb-3">
                      <span className="inline-block bg-[var(--color-success)]/20 text-[var(--color-success)] px-2 py-1 rounded text-sm font-semibold mb-2">
                        ANIMATEUR PRINCIPAL
                      </span>
                    </div>
                    <div className="space-y-3 text-[var(--color-text)]/90">
                      <p>
                        <strong>"Nous arrivons maintenant à la partie la plus importante : vos retours !"</strong>
                      </p>
                      <p>
                        "En tant que stakeholders, que pensez-vous de cette approche pour aider 
                        les exploitants de cinéma ?"
                      </p>
                      <p>
                        <em>[Écoute active et prise de notes des réponses]</em>
                      </p>
                      <p>
                        "Quelles améliorations ou fonctionnalités supplémentaires vous semblent prioritaires ?"
                      </p>
                      <p>
                        <em>[Reformulation des suggestions]</em>
                      </p>
                      <p>
                        "Y a-t-il des aspects techniques ou métier que vous aimeriez que nous détaillions ?"
                      </p>
                      <p>
                        <strong>"Parfait ! Je note tous ces points précieux pour notre backlog d'amélioration."</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Clôture */}
                <div className="bg-[var(--color-surface)]/50 p-6 rounded-lg border border-[var(--color-warning)]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[var(--color-warning)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</div>
                    <h4 className="text-xl font-semibold text-[var(--color-warning)]">
                      CLÔTURE ET TRANSITION
                    </h4>
                    <div className="ml-auto text-sm text-[var(--color-text)]/60">⏱️ 15:00</div>
                  </div>
                  
                  <div className="bg-[var(--color-background)] p-4 rounded-lg border border-[var(--color-text)]/10">
                    <div className="mb-3">
                      <span className="inline-block bg-[var(--color-warning)]/20 text-[var(--color-warning)] px-2 py-1 rounded text-sm font-semibold mb-2">
                        ANIMATEUR PRINCIPAL
                      </span>
                    </div>
                    <div className="space-y-3 text-[var(--color-text)]/90">
                      <p>
                        <strong>"Merci beaucoup pour cette Sprint Review très enrichissante !"</strong>
                      </p>
                      <p>
                        "Nous avons présenté notre solution complète : dashboard, API, modèle ML et pipeline de données. 
                        Vos feedbacks vont nous permettre d'identifier les prochaines priorités."
                      </p>
                      <p>
                        <strong>"Nous sommes maintenant prêts pour vos questions complémentaires et l'échange libre."</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/20">
                <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                  💡 Conseils pour l'animation
                </h4>
                <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                  <li>• <strong>Gardez le rythme :</strong> Utilisez un chronomètre discret pour respecter les timings</li>
                  <li>• <strong>Soyez authentiques :</strong> Adaptez le script à votre style naturel de communication</li>
                  <li>• <strong>Encouragez l'interaction :</strong> Relancez si le jury est silencieux</li>
                  <li>• <strong>Notez visuellement :</strong> Montrez que vous prenez en compte les feedbacks</li>
                  <li>• <strong>Restez positifs :</strong> Même face aux critiques, montrez l'esprit d'amélioration continue</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
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
                    Matériel nécessaire
                  </h4>
                  <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                    <ul className="space-y-2 text-[var(--color-text)]/80">
                      <li>• <strong>Dashboard fonctionnel :</strong> Interface Django prête à démontrer</li>
                      <li>• <strong>Données de test :</strong> Films exemples pour la démonstration</li>
                      <li>• <strong>Graphiques de performance :</strong> Métriques ML préparées</li>
                      <li>• <strong>Support de notes :</strong> Tableau ou feuille pour les feedbacks</li>
                      <li>• <strong>Chronomètre :</strong> Gestion discrète du timing</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
                    Répartition des rôles
                  </h4>
                  <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-[var(--color-primary)]">Animateur principal</h5>
                        <p className="text-sm text-[var(--color-text)]/70">Ouverture, transitions, facilitation des échanges, clôture</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[var(--color-secondary)]">Démonstrateur</h5>
                        <p className="text-sm text-[var(--color-text)]/70">Présentation live du dashboard et des fonctionnalités</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[var(--color-accent-light)]">Expert ML</h5>
                        <p className="text-sm text-[var(--color-text)]/70">Présentation des performances et métriques du modèle</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[var(--color-success)]">Support</h5>
                        <p className="text-sm text-[var(--color-text)]/70">Prise de notes, gestion technique, questions complémentaires</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-3">
                    Points de vigilance
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-warning)] mb-1">
                        Gestion du temps
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Prévoir des signaux discrets entre équipiers pour respecter les 15 minutes
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-warning)] mb-1">
                        Niveau technique
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Adapter le discours selon les réactions du jury (plus ou moins technique)
                      </p>
                    </div>
                    
                    <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                      <h5 className="font-semibold text-[var(--color-warning)] mb-1">
                        Problèmes techniques
                      </h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Avoir un plan B (captures d'écran) si la démo ne fonctionne pas
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
                      Animation collaborative d'une Sprint Review avec focus sur la valeur livrée
                    </p>
                  </div>
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
                    <li>• <span className="font-semibold">Démontrer la maîtrise</span> de l'animation d'une Sprint Review</li>
                    <li>• <span className="font-semibold">Présenter efficacement</span> les livrables du projet</li>
                    <li>• <span className="font-semibold">Faciliter les échanges</span> avec les stakeholders (jury)</li>
                    <li>• <span className="font-semibold">Recueillir des feedbacks</span> constructifs et pertinents</li>
                    <li>• <span className="font-semibold">Respecter le timeboxing</span> de 15 minutes</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
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
                        <h5 className="font-semibold text-sm">Travail d'équipe</h5>
                        <p className="text-xs text-[var(--color-text)]/70">
                          Coordination fluide entre les différents intervenants
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
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-3">
                    Critères de réussite
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm">Respect du timing</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Animation fluide en 15 minutes</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Engagement du jury</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Questions et participation active</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Clarté de la présentation</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2 mt-1">
                        <div className="bg-[var(--color-success)] h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <p className="text-xs text-[var(--color-text)]/70 mt-1">Livrables compréhensibles par tous</p>
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
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-warning)] mb-3">
                    Livrables attendus
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Démonstration live</span> du dashboard fonctionnel</li>
                    <li>• <span className="font-semibold">Présentation des métriques</span> de performance du modèle</li>
                    <li>• <span className="font-semibold">Liste des feedbacks</span> recueillis auprès du jury</li>
                    <li>• <span className="font-semibold">Animation collaborative</span> fluide et professionnelle</li>
                    <li>• <span className="font-semibold">Évaluation positive</span> de l'expérience par le jury</li>
                  </ul>
                </div>
                
                <div className="text-center p-4 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/20">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">
                    Objectif final
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/80 italic">
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
  );
};

export default FacilitationSection;