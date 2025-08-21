import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const RGPD = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap');
          .mozilla-headline-legal {
            font-family: "Mozilla Headline", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }
        `}
      </style>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 
              className="text-white mb-4 mozilla-headline-legal"
              style={{
                fontSize: '4.5rem'
              }}
            >
              RGPD
            </h1>
            <p className="text-gray-300 text-lg">
              Politique de protection des données personnelles
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-white">
              
              {/* RGPD */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">Politique de Protection des Données (RGPD)</h2>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Responsable du traitement</h3>
                    <p>AEROLUSTRE est responsable du traitement des données personnelles collectées sur ce site web.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Données collectées</h3>
                    <p>Nous collectons les données suivantes :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Informations relatives à votre demande de devis</li>
                      <li>Données de navigation (cookies)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Finalité du traitement</h3>
                    <p>Vos données sont collectées pour :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Répondre à vos demandes de devis</li>
                      <li>Vous contacter concernant nos services</li>
                      <li>Améliorer notre site web</li>
                      <li>Respecter nos obligations légales</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Base légale</h3>
                    <p>Le traitement de vos données est fondé sur :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Votre consentement</li>
                      <li>L'exécution d'un contrat</li>
                      <li>L'intérêt légitime d'AEROLUSTRE</li>
                      <li>L'obligation légale</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Durée de conservation</h3>
                    <p>Vos données sont conservées :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>3 ans pour les données de contact</li>
                      <li>13 mois pour les cookies</li>
                      <li>Durée du contrat + 5 ans pour les données contractuelles</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Destinataires</h3>
                    <p>Vos données peuvent être transmises à :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Nos prestataires techniques</li>
                      <li>Les autorités compétentes (sur demande)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Vos droits</h3>
                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Droit d'accès à vos données</li>
                      <li>Droit de rectification</li>
                      <li>Droit à l'effacement</li>
                      <li>Droit à la limitation du traitement</li>
                      <li>Droit à la portabilité</li>
                      <li>Droit d'opposition</li>
                      <li>Droit de retirer votre consentement</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Contact DPO</h3>
                    <p>Pour exercer vos droits ou pour toute question relative à la protection de vos données :</p>
                    <p>Email : dpo@aerolustre.com</p>
                    <p>Adresse : [Adresse du DPO]</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Réclamation</h3>
                    <p>Vous avez le droit de déposer une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.</p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">Politique des Cookies</h2>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Qu'est-ce qu'un cookie ?</h3>
                    <p>Un cookie est un petit fichier texte stocké sur votre ordinateur lors de la visite d'un site web. Il permet de mémoriser vos préférences et d'améliorer votre expérience de navigation.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Cookies utilisés</h3>
                    <p>Notre site utilise les cookies suivants :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                      <li><strong>Cookies analytiques :</strong> Pour analyser l'audience du site</li>
                      <li><strong>Cookies de personnalisation :</strong> Pour mémoriser vos préférences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Gestion des cookies</h3>
                    <p>Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne plus être disponibles.</p>
                  </div>
                </div>
              </div>

              {/* Dernière mise à jour */}
              <div className="border-t border-gray-700 pt-8">
                <p className="text-sm text-gray-400">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RGPD;
