import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import QuoteRequestForm from "@/components/site/QuoteRequestForm";
import { AirportsSection } from "@/components/site/AirportsSection";
import { useLanguage } from "@/contexts/LanguageContext";

const QuoteRequest = () => {
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
          {/* Hero Section */}
          <section className="relative py-32 md:py-40 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-white mb-8" style={{ fontSize: '4.5rem', fontFamily: '"Mozilla Headline", sans-serif' }}>
                {t('quote.title')}
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {t('quote.subtitle')}
              </p>
            </div>
          </section>

          {/* Quote Request Form */}
          <QuoteRequestForm />
          
          {/* Airports Section */}
          <AirportsSection />
        </main>
      
        <Footer />
      </div>
    </>
  );
};

export default QuoteRequest;
