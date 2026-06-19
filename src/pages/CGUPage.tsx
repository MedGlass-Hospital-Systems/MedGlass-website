import { motion } from "framer-motion";

export default function CGUPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-sans">

      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        {/* Image de fond fixe */}
        <img 
          src="/mountain.png" 
          alt="Fond spatial MedGlass" 
          className="absolute  object-cover"
        />
      </div>

      {/* ====================================================
        CONTENU PRINCIPAL (TEXTE DE LOI)
        ==================================================== 
      */}
      <main className="relative z-10 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-on-background">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-surface-container/60 border border-outline/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {/* Lueur diffuse décorative */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

          {/* En-tête du document */}
          <header className="mb-12 border-b border-outline/30 pb-8 text-center relative z-10">
            <h1 className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary text-[36px] md:text-[48px] font-extrabold mb-4 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(118,208,151,0.15)]">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-on-surface-variant text-[16px] italic">
              En vigueur au <span className="text-primary font-medium">Mardi 9 Juin 2026</span>
            </p>
          </header>

          {/* Corps de texte */}
          <div className="space-y-10 text-on-surface-variant text-[15px] md:text-[16px] leading-relaxed relative z-10">
            
            <section className="text-on-surface">
              <p>
                Les présentes conditions générales d'utilisation (dites « <strong>CGU</strong> ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par <strong>MedGlass.fr</strong> et de définir les conditions d'accès et d'utilisation des services par « <strong>l'Utilisateur</strong> ».
              </p>
              <p className="mt-4">
                Les présentes CGU sont accessibles sur le site à la rubrique « CGU ».
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 1 : LES MENTIONS LÉGALES
              </h2>
              <div className="space-y-4">
                <p>
                  L'édition du site <strong>MedGlass.fr</strong> est assurée par la Société <span className="text-on-surface font-semibold">MedGlass Hospital Systems</span> au capital de <span className="text-on-surface font-semibold">4000</span> euros, immatriculée au RCS de <span className="text-on-surface font-semibold">CAMPAGNE</span> sous le numéro <span className="text-on-surface font-semibold">[NUMÉRO]</span> dont le siège social est situé au <span className="text-on-surface-variant/90 italic">538 rte de la redonde</span>, numéro de téléphone <span className="text-secondary font-medium">0623256546</span>, adresse e-mail : <a href="mailto:remi.puigsech@gmail.com" className="text-secondary hover:underline">remi.puigsech@gmail.com</a>.
                </p>
                <p>Le Directeur de la publication est <span className="text-on-surface font-semibold">Rémi Puigsech</span>.</p>
                <p>
                  L'hébergeur du site <strong>MedGlass.fr</strong> est la société <span className="text-on-surface font-semibold">GITHUB FRANCE</span>, dont le siège social est situé au <span className="text-on-surface-variant/90 italic">37 QUAI DU PRESIDENT ROOSEVELT 92130 ISSY-LES-MOULINEAUX</span>.
                </p>
              </div>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 2 : ACCÈS AU SITE
              </h2>
              <p className="mb-4">
                Le site <strong>MedGlass.fr</strong> permet à l'Utilisateur un accès gratuit aux services suivants :
              </p>
              <div className="bg-surface-container-high/60 border border-outline/30 p-5 rounded-xl space-y-3 text-on-surface/90 shadow-inner">
                <p className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Consulter les actualités de la solution logicielle.
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Se connecter à son espace personnel de planification.
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Consulter son abonnement hospitalier et le gérer.
                </p>
                <p className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Contacter notre service de support technique 24h/7d.
                </p>
              </div>
              <p className="mt-4">
                Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 3 : COLLECTE DES DONNÉES
              </h2>
              <p>
                Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés et en parfaite conformité avec le <span className="text-primary font-semibold">RGPD</span>.
              </p>
              <p className="mt-4">
                En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
              </p>
              <p className="mt-3 bg-primary/10 border border-primary/20 text-on-surface px-4 py-3 rounded-xl inline-block">
                Depuis le formulaire de contact en spécifiant l'objet de sa demande.
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 4 : PROPRIÉTÉ INTELLECTUELLE
              </h2>
              <p>
                Les marques, logos, signes ainsi que tous les contenus du site (textes, images, sons...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
              </p>
              <p className="mt-4">
                L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
              </p>
              <p className="mt-4">
                Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site Internet constituerait une contrefaçon sanctionnée par l'article L 335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 5 : RESPONSABILITÉ
              </h2>
              <p>
                Les sources des informations diffusées sur le site <strong>MedGlass.fr</strong> sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
              </p>
              <p className="mt-4">
                Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site <strong>MedGlass.fr</strong> ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication.
              </p>
              <p className="mt-4">
                La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 6 : LIENS HYPERTEXTES
              </h2>
              <p>
                Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site <strong>MedGlass.fr</strong>. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 7 : COOKIES
              </h2>
              <p>
                L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation pour des raisons de sécurité de session.
              </p>
              <p className="mt-4">
                Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l'ordinateur de l'Utilisateur indispensables au bon fonctionnement de l'espace application. Un cookie contient un identifiant unique anonyme. L'Utilisateur pourra désactiver ces cookies par l'intermédiaire des paramètres de son navigateur.
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 8 : PUBLICATION PAR L'UTILISATEUR
              </h2>
              <p>
                Le site permet aux membres de publier du contenu lié aux retours d'expérience ou à l'utilisation logicielle. Dans ses publications, le membre s'engage à respecter les règles de la Netiquette et les règles de droit en vigueur. Tout contenu mis en ligne par l'Utilisateur est de sa seule responsabilité.
              </p>
            </section>

            <section className="border-t border-outline/20 pt-8">
              <h2 className="text-primary text-[18px] font-bold tracking-wider uppercase mb-4">
                ARTICLE 9 : DROIT APPLICABLE ET JURIDICTION COMPÉTENTE
              </h2>
              <p>
                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
              </p>
            </section>

          </div>
          
          {/* Pied du conteneur */}
          <footer className="mt-12 pt-6 border-t border-outline/30 text-center text-on-surface-variant/60 text-[13px]">
            CGU de l'application MedGlass · Document officiel
          </footer>
          
        </motion.div>
      </main>
    </div>
  );
}