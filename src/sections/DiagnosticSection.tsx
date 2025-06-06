import React from 'react';
import { FileSearch, Clock, AlertTriangle, Target, Database, Code, Layout } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
}

const DiagnosticSection: React.FC<SectionProps> = ({ isActive }) => {
  return (
    <section
      id="diagnostic"
      className={`section ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 fade-in">
            C1: Diagnostic du Projet
          </h2>
          <p className="text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto fade-in delay-100">
            Analyse complète des paramètres du projet de prédiction IA, 
            identification des forces, contraintes et risques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 slide-up">
            <h3 className="text-2xl font-display font-bold text-[var(--color-secondary)]">
              Paramètres du Projet
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-primary)]/10 p-3 rounded-lg">
                  <Clock size={24} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Délais et planification</h4>
                  <p className="text-[var(--color-text)]/70">
                    Développement sur 4 semaines avec des sprints hebdomadaires, 
                    livraison d'un MVP fonctionnel.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                  <Target size={24} className="text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Équipe et ressources</h4>
                  <p className="text-[var(--color-text)]/70">
                    4 développeurs IA avec rotation des rôles (Scrum Master, Product Owner),
                    stack technique complet.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-accent-light)]/10 p-3 rounded-lg">
                  <Code size={24} className="text-[var(--color-accent-light)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Stack technique</h4>
                  <p className="text-[var(--color-text)]/70">
                    Django, FastAPI, Docker, Azure ML, Scrapy, MLflow pour une 
                    architecture microservices complète.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card slide-in-right">
            <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
              Analyse SWOT du Projet
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-400 mb-2">Forces</h4>
                <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                  <li>• Équipe technique expérimentée</li>
                  <li>• Stack technologique maîtrisé</li>
                  <li>• Architecture microservices moderne</li>
                  <li>• Méthodologie agile établie</li>
                </ul>
              </div>
              
              <div className="bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">Faiblesses</h4>
                <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                  <li>• Délai court (4 semaines)</li>
                  <li>• Complexité du ML et scraping</li>
                  <li>• Rotation des rôles agiles</li>
                </ul>
              </div>
              
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Opportunités</h4>
                <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                  <li>• Innovation dans le secteur cinéma</li>
                  <li>• Automatisation des décisions</li>
                  <li>• Potentiel d'expansion futur</li>
                </ul>
              </div>
              
              <div className="bg-red-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">Menaces</h4>
                <ul className="space-y-2 text-[var(--color-text)]/80 text-sm">
                  <li>• Qualité des données scrapées</li>
                  <li>• Précision des prédictions ML</li>
                  <li>• Dépendances externes (APIs)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 card scale-in delay-300">
          <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-accent-light)]">
            Pertinence de l'approche Agile
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--color-success)]/10 p-3 rounded-lg">
                <Database size={24} className="text-[var(--color-success)]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Itérations sur le modèle ML</h4>
                <p className="text-[var(--color-text)]/70">
                  L'approche agile permet d'affiner progressivement le modèle de prédiction
                  et d'améliorer sa précision à chaque sprint.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--color-success)]/10 p-3 rounded-lg">
                <Layout size={24} className="text-[var(--color-success)]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Développement incrémental</h4>
                <p className="text-[var(--color-text)]/70">
                  Construction progressive du dashboard et des microservices, permettant
                  des retours rapides du client sur les fonctionnalités.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--color-success)]/10 p-3 rounded-lg">
                <AlertTriangle size={24} className="text-[var(--color-success)]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Gestion des risques</h4>
                <p className="text-[var(--color-text)]/70">
                  Identification précoce des problèmes techniques et adaptation rapide
                  des priorités selon les retours et les performances du modèle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;