import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactSection from "@/components/site/ContactSection";
import CircularGallery from "@/components/site/CircularGallery";
import { FeatureSteps } from "@/components/ui/feature-steps";
import { useLanguage } from "@/contexts/LanguageContext";

const DisinfectionService = () => {
  const { t } = useLanguage();
  
  // Steps for disinfection process
  const stepsFeatures = [
    {
      step: 'Step 1',
      title: t('steps.disinfection.step1.title'),
      content: t('steps.disinfection.step1.content'),
      image: '/images/jet.png'
    },
    {
      step: 'Step 2',
      title: t('steps.disinfection.step2.title'),
      content: t('steps.disinfection.step2.content'),
      image: '/images/chair.png'
    },
    {
      step: 'Step 3',
      title: t('steps.disinfection.step3.title'),
      content: t('steps.disinfection.step3.content'),
      image: '/images/motor.png'
    },
    {
      step: 'Step 4',
      title: t('steps.disinfection.step4.title'),
      content: t('steps.disinfection.step4.content'),
      image: '/images/en cours.png'
    },
  ];
  
  // Gallery items for disinfection services
  const galleryItems = [
    {
      image: "/images/jet.png",
      text: t('gallery.cabin_disinfection'),
    },
    {
      image: "/images/chair.png",
      text: t('gallery.surface_sanitization'),
    },
    {
      image: "/images/motor.png",
      text: t('gallery.air_purification'),
    },
    {
      image: "/images/en cours.png",
      text: t('gallery.complete_sanitization'),
    },
  ];

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
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/detailing.webp" 
              alt="Disinfection Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h6 className="text-lg font-semibold mb-4 tracking-wider">{t('services.hero.services')}</h6>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
              {t('services.disinfection.title')}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                {t('services.disinfection.hero_desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://www.shutterstock.com/shutterstock/photos/1818164387/display_1500/stock-photo-china-september-a-immigration-team-in-protective-clothing-is-checking-crew-and-private-jet-1818164387.jpg" 
                    alt="Disinfection Service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>{t('services.disinfection.cabin_disinfection')}</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    {t('services.disinfection.cabin_disinfection_desc')}
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>{t('services.disinfection.surface_sanitization')}</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    {t('services.disinfection.surface_sanitization_desc')}
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>{t('services.disinfection.air_purification')}</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    {t('services.disinfection.air_purification_desc')}
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>UV Treatment</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    State-of-the-art UV disinfection technology that preserves your aircraft's safety and ensures long-term protection while maintaining its pristine condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* New Section - Pristine Presentation */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Content */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                  Immerse yourself in the world of <span className="text-gray-300">pristine</span> presentation with <span className="text-gray-300">AeroLustre Detailing</span>.
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Regardless of the destination or passenger, the interior and exterior of a <span className="font-bold underline">Private Jet</span> are a visual representation, and this is reflected in the comfort and quality of your passengers travel. AeroLustre Detailing prides itself on delivering unrivalled detailing performance with a comprehensive range of services utilising industry-leading processes.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Our dedication to preserving an aircraft's aesthetic appeal while increasing its value and longevity is unwavering. The Cabin is where passengers spend the duration of their experience, and maximising the quality of this unique space should be at the forefront of ensuring your aircraft becomes more than just a mode of travel; it's an embodiment of sophistication and elegance.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/disinfection 2.jpg" 
                    alt="Luxurious Aircraft Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-8 md:py-12 bg-black">
          <FeatureSteps 
            features={stepsFeatures}
            title={t('steps.title')}
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
          />
        </section>

        {/* Gallery Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                {t('gallery.title')}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                {t('gallery.disinfection_desc')}
              </p>
            </div>
            
            <div className="w-full max-w-screen-xl mx-auto h-[80vh] overflow-hidden relative bg-transparent">
              <CircularGallery 
                items={galleryItems} 
                bend={3} 
                textColor="#ffffff" 
                borderRadius={0.05} 
                font="bold 30px Arial"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection showTitle={true} />
      </main>
      
      <Footer />
    </div>
    </>
  );
};

export default DisinfectionService;
