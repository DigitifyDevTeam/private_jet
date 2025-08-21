import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactSection from "@/components/site/ContactSection";
import CircularGallery from "@/components/site/CircularGallery";

const AircraftDetailing = () => {
  // Gallery items for aircraft detailing
  const galleryItems = [
    {
      image: "/images/privatejet2.jpg",
      text: "Exterior Detailing",
    },
    {
      image: "/images/privatejet_cleaning.jpg",
      text: "Interior Cleaning",
    },
    {
      image: "/images/detailing-service.webp",
      text: "Engine Maintenance",
    },
    {
      image: "/images/gallery1.jpg",
      text: "Paint Protection",
    },
    {
      image: "/images/private-jet.png",
      text: "Cabin Restoration",
    },
    {
      image: "/images/vip-airliner.png",
      text: "Premium Care",
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
              src="/images/detailing2.png" 
              alt="Aircraft Detailing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h6 className="text-lg font-semibold mb-4 tracking-wider">SERVICES</h6>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
              Nettoyage Exterieur
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                Step into perfection with AeroLustre's dedicated aircraft detailing service, seamlessly connecting you to comprehensive cleaning and restoration. Beyond detailing, our ethos centres on a tailored approach, ensuring every aircraft with us receives museum-grade care and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/privatejet2.jpg" 
                    alt="Aircraft Detailing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Interior Deep Cleaning</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Comprehensive interior detailing that restores your aircraft cabin to pristine condition, ensuring every surface reflects the highest standards of cleanliness and care.
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Exterior Wash & Wax</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Professional exterior detailing with premium wax protection, guaranteeing your aircraft maintains its stunning appearance and protection against environmental elements.
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Engine Cleaning</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Specialized engine cleaning services that ensure optimal performance while maintaining the highest safety standards and regulatory compliance.
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Paint Protection</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Advanced paint protection systems that preserve your aircraft's finish and ensure long-term value while maintaining its pristine appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Section - Pristine Presentation */}
        <section className="py-8 md:py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Content */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                  Plongez dans l'univers de la <span className="text-gray-300">perfection</span> avec <span className="text-gray-300">AeroLustre</span>.
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Chez AeroLustre, nous comprenons que chaque <span className="font-bold underline">Jet Privé</span> est le reflet de l'excellence et du prestige. Notre service de nettoyage extérieur transforme votre appareil en véritable œuvre d'art, où chaque détail compte et chaque surface brille de mille feux.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Notre expertise unique combine techniques traditionnelles et technologies de pointe pour offrir un résultat incomparable. Nous ne nous contentons pas de nettoyer, nous restaurons la splendeur originelle de votre avion, préservant sa valeur et son éclat pour les années à venir.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/privatejet_cleaning.jpg" 
                    alt="Luxurious Aircraft Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                Our <span className="text-gray-300">Gallery</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                Explore our comprehensive aircraft exterior cleaning services through our curated gallery of exceptional work and stunning transformations.
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
        <ContactSection />
      </main>
      
      <Footer />
    </div>
    </>
  );
};

export default AircraftDetailing;
