import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const MentionsLegales = () => {
  const { t } = useLanguage();
  
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
              {t('page.mentions.title')}
            </h1>
            <p className="text-gray-300 text-lg">
              {t('page.mentions.description')}
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-white">
              
              {/* Legal Notice */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">{t('page.mentions.title')}</h2>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('legal.editor.title')}</h3>
                    <p>{t('legal.editor.company')}<br />
                    {t('legal.editor.address')}<br />
                    {t('legal.editor.phone')}<br />
                    {t('legal.editor.email')}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('legal.hosting.title')}</h3>
                    <p>{t('legal.hosting.text')}<br />
                    {t('legal.hosting.address')}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('legal.intellectual_property.title')}</h3>
                    <p>{t('legal.intellectual_property.text')}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('legal.responsibility.title')}</h3>
                    <p>{t('legal.responsibility.text')}</p>
                  </div>
                </div>
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
