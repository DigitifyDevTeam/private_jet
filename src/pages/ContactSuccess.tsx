import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import QuoteRequestForm from "@/components/site/QuoteRequestForm";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSuccess = () => {
  const { t } = useLanguage();

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap');
        `}
      </style>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          {/* Quote Form Introduction */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: '"Mozilla Headline", serif' }}
                >
                  {t('contact_success.quote_title')}
                </h2>

                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t('contact_success.quote_description')}
                </p>
              </div>
            </div>
          </section>

          {/* Quote Request Form */}
          <QuoteRequestForm />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactSuccess;
