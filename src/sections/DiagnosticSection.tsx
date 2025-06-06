import React from 'react';
import { FileSearch, Clock, AlertTriangle, Target, Database, Code, Layout, Users } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const DiagnosticSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <div className="min-h-screen pt-24 lg:pt-20">
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
              C1: Diagnostic du Projet
            </h2>
            <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
              Analyse du contexte, des besoins client et identification des enjeux 
              pour le projet de prédiction de popularité des films.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6 slide-up">
              <h3 className="text-2xl font-display font-bold text-[var(--color-secondary)]">
                Contexte et Enjeux
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg">
                    <Target size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Besoin client</h4>
                    <p className="text-[var(--color-text)]/70">
                      Anticiper le succès commercial des films en salle pour optimiser 
                      la programmation des exploitants de cinéma et réduire les risques financiers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <Clock size={24} className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Contraintes temporelles</h4>
                    <p className="text-[var(--color-text)]/70">
                      Projet pédagogique de 4 semaines dans le cadre de la formation 
                      Développement IA - Simplon HDF (2025).
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-[var(--color-accent-light)]/10 p-3 rounded-lg">
                    <Users size={24} className="text-[var(--color-accent-light)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Équipe et compétences</h4>
                    <p className="text-[var(--color-text)]/70">
                      4 développeurs IA en formation avec rotation des rôles Scrum 
                      (Scrum Master, Product Owner, Responsable ML, Développeur).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card slide-in-right">
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                Cahier des Charges Fonctionnel
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                    Collecte des données
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/80">
                    Scraping Allociné (fiches films, box-office, casting), 
                    enrichissement via Dailymotion pour l'engagement sur les trailers.
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                    Feature Engineering
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/80">
                    Nettoyage, transformation, encodage, embeddings acteurs/réalisateurs 
                    pour optimiser les performances du modèle.
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                    Modélisation
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/80">
                    Modèles Random Forest et LightGBM avec évaluation via 
                    métriques RMSE, MAE, R² et cross-validation.
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)]/50 p-4 rounded-lg border border-[var(--color-text)]/10">
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                    Application finale
                  </h4>
                  <p className="text-sm text-[var(--color-text)]/80">
                    API FastAPI de prédiction + Dashboard Django avec filtres, 
                    graphiques et interface utilisateur intuitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 card scale-in delay-300">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
              Pertinence de l'approche Agile Scrum
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-success)] mb-4">
                  Avantages identifiés
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="bg-[var(--color-success)]/10 p-2 rounded-lg">
                      <Database size={20} className="text-[var(--color-success)]" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Adaptation aux incertitudes</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Approche itérative adaptée aux incertitudes inhérentes à la data science.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-[var(--color-success)]/10 p-2 rounded-lg">
                      <Layout size={20} className="text-[var(--color-success)]" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Livrables concrets</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Production de livrables concrets à chaque cycle de 1-2 semaines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-[var(--color-success)]/10 p-2 rounded-lg">
                      <Users size={20} className="text-[var(--color-success)]" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Collaboration renforcée</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Réévaluation continue des priorités et apprentissage collectif.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-warning)] mb-4">
                  Défis anticipés
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="bg-[var(--color-warning)]/10 p-2 rounded-lg">
                      <AlertTriangle size={20} className="text-[var(--color-warning)]" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Complexité technique</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Stabilisation du scraping et gestion des nouveaux outils ML.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-[var(--color-warning)]/10 p-2 rounded-lg">
                      <Clock size={20} className="text-[var(--color-warning)]" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Rotation des rôles</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Charge organisationnelle élevée avec alternance des responsabilités.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-[var(--color-warning)]/10 p-2 rounded-lg">
                      <Target size={20} className="text-[var(--color-warning)]" />
                    </div>
                    <div>
                      <h5 className="font-semibold">Prise de décision PO</h5>
                      <p className="text-sm text-[var(--color-text)]/70">
                        Arbitrages délicats en contexte égalitaire d'apprentissage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticSection;