import React, { useState } from 'react';
import { MessageSquare, ClipboardList, Users, PlayCircle } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const FacilitationSection: React.FC<SectionProps> = ({ isActive }) => {
  const [activeTab, setActiveTab] = useState('guide');
  
  return (
    <section
      id="facilitation"
      className={`section ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
            C4: Facilitation d'un Rituel Agile
          </h2>
          <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
            Préparation et animation d'une revue de sprint pour le projet CinéFlex, 
            démontrant les compétences de facilitation agile.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button 
            className={`btn ${activeTab === 'guide' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('guide')}
          >
            Guide de facilitation
          </button>
          <button 
            className={`btn ${activeTab === 'contexte' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('contexte')}
          >
            Contexte du rituel
          </button>
          <button 
            className={`btn ${activeTab === 'animation' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('animation')}
          >
            Animation de la session
          </button>
          <button 
            className={`btn ${activeTab === 'conclusion' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('conclusion')}
          >
            Conclusion du rituel
          </button>
        </div>
        
        {activeTab === 'guide' && (
          <div className="card slide-up">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList size={28} className="text-[var(--color-primary)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-primary)]">
                Guide de facilitation - Revue de Sprint
              </h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">
                  Objectifs de la facilitation
                </h4>
                <ul className="space-y-2 text-[var(--color-text)]/80">
                  <li>• Créer un environnement de confiance et d'ouverture</li>
                  <li>• Encourager la participation active de toutes les parties prenantes</li>
                  <li>• Maintenir le focus sur les objectifs du rituel</li>
                  <li>• Gérer efficacement le temps alloué</li>
                  <li>• Favoriser la prise de décision collective</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">
                  Matériel nécessaire
                </h4>
                <ul className="space-y-2 text-[var(--color-text)]/80">
                  <li>• Écran de projection pour les rushs et le tableau Kanban</li>
                  <li>• Tableau blanc ou digital pour les notes et feedback</li>
                  <li>• Post-its et marqueurs pour les activités participatives</li>
                  <li>• Chronomètre pour la gestion du temps</li>
                  <li>• Liste des objectifs du sprint et des livrables attendus</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">
                  Préparation préalable
                </h4>
                <ul className="space-y-2 text-[var(--color-text)]/80">
                  <li>• Compiler les séquences tournées et les éléments de post-production</li>
                  <li>• Préparer l'ordre du jour détaillé</li>
                  <li>• Identifier les points de décision critiques</li>
                  <li>• Briefer le Product Owner sur son rôle durant la session</li>
                  <li>• Envoyer les invitations avec contexte et objectifs clairs</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'contexte' && (
          <div className="card scale-in">
            <div className="flex items-center gap-3 mb-6">
              <Users size={28} className="text-[var(--color-secondary)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-secondary)]">
                Contexte du rituel - Sprint 4
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold mb-2">
                  Contexte du projet
                </h4>
                <p className="text-[var(--color-text)]/70">
                  Nous sommes au milieu de la production du film CinéFlex. Le Sprint 4 vient de s'achever, 
                  il était centré sur les scènes d'action principales, incluant la poursuite en voiture et 
                  le combat dans l'entrepôt. La complexité technique de ces séquences et les conditions 
                  météorologiques ont créé des défis importants pour l'équipe.
                </p>
              </div>
              
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold mb-2">
                  Objectifs de la revue de sprint
                </h4>
                <ul className="space-y-2 text-[var(--color-text)]/80">
                  <li>1. Présenter les séquences terminées et les éléments de VFX préliminaires</li>
                  <li>2. Recueillir les retours du réalisateur et du producteur exécutif</li>
                  <li>3. Identifier les ajustements nécessaires pour la post-production</li>
                  <li>4. Valider les éléments à intégrer au montage</li>
                  <li>5. Discuter des implications pour le planning des prochains sprints</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-2">
                    Participants
                  </h4>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                    <li>• Réalisateur (vision artistique)</li>
                    <li>• Producteur exécutif (Product Owner)</li>
                    <li>• Directeur de production (Scrum Master)</li>
                    <li>• Chef opérateur et son équipe</li>
                    <li>• Superviseur VFX</li>
                    <li>• Monteur principal</li>
                    <li>• Coordinateur des cascadeurs</li>
                    <li>• Acteurs principaux (si disponibles)</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold mb-2">
                    Enjeux particuliers
                  </h4>
                  <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                    <li>• Retard d'une journée sur la scène de poursuite</li>
                    <li>• Problèmes techniques avec certains plans d'action</li>
                    <li>• Demande de reshoot pour une scène clé</li>
                    <li>• Dépassement budgétaire sur les effets spéciaux</li>
                    <li>• Évolution de la vision du réalisateur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'animation' && (
          <div className="card slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={28} className="text-[var(--color-accent-light)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-accent-light)]">
                Animation de la session
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg" 
                  alt="Film team meeting" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <p className="text-white text-sm">
                    Animation d'une revue de sprint avec l'équipe de production
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                  Déroulement de la session (90 minutes)
                </h4>
                
                <div className="space-y-4">
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-secondary)]">
                      1. Introduction (10 min)
                    </h5>
                    <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                      <li>• Accueil et présentation des objectifs de la revue</li>
                      <li>• Rappel des règles d'échange constructif</li>
                      <li>• Présentation du backlog du sprint et des objectifs initiaux</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-secondary)]">
                      2. Présentation des réalisations (40 min)
                    </h5>
                    <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                      <li>• Projection des séquences terminées (20 min)</li>
                      <li>• Présentation des éléments VFX préliminaires (10 min)</li>
                      <li>• Démonstration des assets audio développés (10 min)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-secondary)]">
                      3. Session de feedback (20 min)
                    </h5>
                    <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                      <li>• Tour de table structuré (chaque participant dispose d'un temps défini)</li>
                      <li>• Utilisation de la méthode "J'apprécie / Je suggère"</li>
                      <li>• Documentation des retours par le Scrum Master</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-secondary)]">
                      4. Discussion des ajustements (15 min)
                    </h5>
                    <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                      <li>• Priorisation des modifications à apporter</li>
                      <li>• Évaluation de l'impact sur le planning et le budget</li>
                      <li>• Décisions concernant les reshoots éventuels</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[var(--color-surface)]/50 p-3 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-secondary)]">
                      5. Conclusion (5 min)
                    </h5>
                    <ul className="space-y-1 text-sm text-[var(--color-text)]/80">
                      <li>• Récapitulation des décisions prises</li>
                      <li>• Présentation des prochaines étapes</li>
                      <li>• Remerciements et clôture</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                  Techniques de facilitation employées
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg">
                    <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                      Gestion des interventions
                    </h5>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Utilisation d'un "bâton de parole" virtuel pour structurer les échanges et 
                      assurer que chaque voix est entendue.
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <h5 className="font-semibold text-[var(--color-secondary)] mb-1">
                      Médiation des conflits
                    </h5>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Technique du "reformulation constructive" pour transformer les critiques 
                      en suggestions d'amélioration.
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-accent-light)]/10 p-3 rounded-lg">
                    <h5 className="font-semibold text-[var(--color-accent-light)] mb-1">
                      Focus sur les objectifs
                    </h5>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Tableau de visualisation des objectifs du sprint pour maintenir la 
                      discussion centrée sur les éléments pertinents.
                    </p>
                  </div>
                  
                  <div className="bg-[var(--color-success)]/10 p-3 rounded-lg">
                    <h5 className="font-semibold text-[var(--color-success)] mb-1">
                      Prise de décision
                    </h5>
                    <p className="text-sm text-[var(--color-text)]/80">
                      Utilisation du "dot voting" pour prioriser collectivement les 
                      ajustements à apporter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'conclusion' && (
          <div className="card bounce-in">
            <div className="flex items-center gap-3 mb-6">
              <PlayCircle size={28} className="text-[var(--color-success)]" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-success)]">
                Conclusion du rituel
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                  Résultats obtenus
                </h4>
                <ul className="space-y-2 text-[var(--color-text)]/80">
                  <li>• Validation de 80% des séquences tournées pour le montage final</li>
                  <li>• Identification précise des plans nécessitant des reshoots</li>
                  <li>• Ajustements du backlog pour intégrer les retours créatifs</li>
                  <li>• Décisions collectives sur les compromis budgétaires</li>
                  <li>• Renforcement de la vision commune entre équipes techniques et créatives</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">
                    Évaluation de la facilitation
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm">Gestion du temps</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2.5 mt-1">
                        <div className="bg-[var(--color-primary)] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Participation équilibrée</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2.5 mt-1">
                        <div className="bg-[var(--color-primary)] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Qualité des décisions</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2.5 mt-1">
                        <div className="bg-[var(--color-primary)] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Clarté des prochaines étapes</h5>
                      <div className="w-full bg-[var(--color-background)] rounded-full h-2.5 mt-1">
                        <div className="bg-[var(--color-primary)] h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="text-lg font-semibold text-[var(--color-accent-light)] mb-2">
                    Leçons apprises
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text)]/80">
                    <li>• <span className="font-semibold">Ce qui a bien fonctionné:</span> La projection 
                    chronologique des séquences a permis une évaluation cohérente</li>
                    <li>• <span className="font-semibold">À améliorer:</span> Prévoir plus de temps pour 
                    l'analyse des aspects techniques des VFX</li>
                    <li>• <span className="font-semibold">Innovation:</span> L'utilisation d'une grille 
                    d'évaluation structurée a facilité la cohérence des retours</li>
                    <li>• <span className="font-semibold">Pour le prochain rituel:</span> Intégrer un 
                    temps dédié à l'analyse des métriques de performance</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-[var(--color-success)] mb-2">
                  Documentation et suivi
                </h4>
                
                <p className="text-[var(--color-text)]/80 mb-4">
                  La revue de sprint a été entièrement documentée pour assurer un suivi efficace:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-[var(--color-surface)]/50 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-primary)] mb-1">
                      Compte-rendu détaillé
                    </h5>
                    <p className="text-xs text-[var(--color-text)]/70">
                      Distribué à toutes les parties prenantes sous 24h
                    </p>
                  </div>
                  
                  <div className="p-3 bg-[var(--color-surface)]/50 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-secondary)] mb-1">
                      Backlog mis à jour
                    </h5>
                    <p className="text-xs text-[var(--color-text)]/70">
                      Intégrant tous les ajustements décidés collectivement
                    </p>
                  </div>
                  
                  <div className="p-3 bg-[var(--color-surface)]/50 rounded-lg border border-[var(--color-text)]/10">
                    <h5 className="font-semibold text-[var(--color-accent-light)] mb-1">
                      Plan d'action
                    </h5>
                    <p className="text-xs text-[var(--color-text)]/70">
                      Avec responsables assignés et délais définis
                    </p>
                  </div>
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