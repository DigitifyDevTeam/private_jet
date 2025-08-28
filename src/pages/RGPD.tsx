import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const RGPD = () => {
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
              {t('page.rgpd.title')}
            </h1>
            <p className="text-gray-300 text-lg">
              {t('page.rgpd.description')}
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none text-white">
              
              {/* RGPD */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">{t('rgpd.policy.title')}</h2>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('rgpd.controller.title')}</h3>
                    <p>{t('rgpd.controller.text')}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('rgpd.data_collected.title')}</h3>
                    <p>{t('rgpd.data_collected.text')}</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>{t('rgpd.data_collected.name')}</li>
                      <li>{t('rgpd.data_collected.email')}</li>
                      <li>{t('rgpd.data_collected.phone')}</li>
                      <li>{t('rgpd.data_collected.quote')}</li>
                      <li>{t('rgpd.data_collected.navigation')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('rgpd.purpose.title')}</h3>
                    <p>{t('rgpd.purpose.text')}</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>{t('rgpd.purpose.quote')}</li>
                      <li>{t('rgpd.purpose.contact')}</li>
                      <li>{t('rgpd.purpose.improve')}</li>
                      <li>{t('rgpd.purpose.legal')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('rgpd.retention.title')}</h3>
                    <p>{t('rgpd.retention.text')}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('rgpd.rights.title')}</h3>
                    <p>{t('rgpd.rights.text')}</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>{t('rgpd.rights.access')}</li>
                      <li>{t('rgpd.rights.rectification')}</li>
                      <li>{t('rgpd.rights.erasure')}</li>
                      <li>{t('rgpd.rights.limitation')}</li>
                      <li>{t('rgpd.rights.portability')}</li>
                      <li>{t('rgpd.rights.opposition')}</li>
                    </ul>
                    <p className="mt-4">{t('rgpd.rights.contact')}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('rgpd.security.title')}</h3>
                    <p>{t('rgpd.security.text')}</p>
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

export default RGPD;
