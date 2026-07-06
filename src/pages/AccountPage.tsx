import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AccountPage = () => {
  // Extraction des données et fonctions Auth0
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  // Liste simulée des solutions (dans un cas réel, cela viendrait de votre API ou des user_metadata Auth0)
  const solutions = [
    { 
      id: 'nexivia', 
      name: 'Nexivia', 
      status: 'Actif', 
      description: 'Solution de gestion centralisée pour vos établissements.' 
    },
    { 
      id: 'demecare', 
      name: 'DemeCare', 
      status: 'Actif', 
      description: 'Accompagnement et soins personnalisés.' 
    },
    { 
      id: 'aegiscare', 
      name: 'AegisCare', 
      status: 'Inactif', 
      description: 'Protection, monitoring et sécurité avancée.' 
    },
  ];

  // Gestion de l'état de chargement d'Auth0
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-on-second">
        <p className="text-lg">Chargement de votre espace...</p>
      </div>
    );
  }

  // Redirection de sécurité (si l'utilisateur arrive ici sans être connecté)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-on-background">
        <div className="bg-surface p-8 rounded-2xl border border-outline text-center">
          <p className="mb-4">Vous devez être connecté pour accéder à cette page.</p>
        </div>
      </div>
    );
  }

  // Fonction de déconnexion
  const handleLogout = () => {
    logout({ 
      logoutParams: { 
        // Redirige vers la racine de votre site après la déconnexion
        returnTo: window.location.origin 
      } 
    });
  };

  return (
    <div className="min-h-screen mt-20 bg-background text-on-background font-sans p-6 md:p-10">
      
      {/* En-tête de la page */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Mon Espace Client</h1>
          <p className="text-on-second mt-1">Gérez votre profil et vos souscriptions</p>
        </div>
        <button 
          onClick={handleLogout}
          className="px-6 py-2 rounded-full border-2 border-outline hover:border-secondary hover:bg-surface-container-high transition-colors text-on-surface font-medium"
        >
          Se déconnecter
        </button>
      </header>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne de gauche : Profil Utilisateur */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-2xl border border-outline p-6 shadow-lg">
            <div className="flex flex-col items-center text-center">
              {/* Photo de profil fournie par Auth0 */}
              <img 
                src={user.picture} 
                alt={user.name} 
                className="w-24 h-24 rounded-full border-4 border-surface-container-high mb-4 shadow-sm"
              />
              <h2 className="text-xl font-bold text-on-surface">{user.name}</h2>
              <p className="text-on-second text-sm mb-6">{user.email}</p>
              
              <div className="w-full border-t border-outline pt-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-on-second text-sm">Statut du compte</span>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">Vérifié</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne de droite : Solutions Souscrites */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold border-b border-outline pb-4">Vos Solutions</h3>
          
          <div className="grid gap-4">
            {solutions.map((solution) => (
              <div 
                key={solution.id} 
                className="bg-surface border border-outline rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all hover:border-secondary/50"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-on-surface">{solution.name}</h4>
                    {/* Badge de statut */}
                    <span className={`text-xs px-2 py-1 rounded-md font-bold ${
                      solution.status === 'Actif' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-surface-container-high text-on-second'
                    }`}>
                      {solution.status}
                    </span>
                  </div>
                  <p className="text-on-second text-sm">{solution.description}</p>
                </div>
                
                {/* Bouton d'action adaptatif */}
                <button 
                  className={`px-5 py-2 rounded-lg font-bold transition-colors whitespace-nowrap ${
                    solution.status === 'Actif'
                      ? 'bg-primary hover:bg-primary-container text-on-primary'
                      : 'bg-surface-container-high text-on-second cursor-not-allowed'
                  }`}
                  disabled={solution.status !== 'Actif'}
                >
                  {solution.status === 'Actif' ? 'Accéder' : 'Découvrir'}
                </button>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default AccountPage;