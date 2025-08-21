import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const MentionsLegales = () => {
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
              Mentions légales
            </h1>
            <p className="text-gray-300 text-lg">
              Informations légales et mentions obligatoires
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-white">
              
              {/* Mentions Légales */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">Mentions Légales</h2>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Éditeur du site</h3>
                    <p><strong>AEROLUSTRE</strong></p>
                    <p>Adresse : [Adresse de l'entreprise]</p>
                    <p>Téléphone : +33 [Numéro de téléphone]</p>
                    <p>Email : contact@aerolustre.com</p>
                    <p>SIRET : [Numéro SIRET]</p>
                    <p>Directeur de publication : [Nom du directeur]</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Hébergement</h3>
                    <p>Ce site est hébergé par :</p>
                    <p>[Nom de l'hébergeur]</p>
                    <p>Adresse : [Adresse de l'hébergeur]</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Propriété intellectuelle</h3>
                    <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Responsabilité</h3>
                    <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse contact@aerolustre.com.</p>
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

export default MentionsLegales;
