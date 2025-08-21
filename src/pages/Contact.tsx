import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactSection from "@/components/site/ContactSection";
import { OfficeLocationSection } from "@/components/site/OfficeLocationSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
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
                {t('section.contact')}
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Get in touch with AeroLustre for all your aircraft maintenance and detailing needs. Our team is ready to provide you with exceptional service and support.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
          
          {/* Office Locations Section */}
          <OfficeLocationSection />
        </main>
      
              <Footer />
      </div>
    </>
  );
};

export default Contact;
