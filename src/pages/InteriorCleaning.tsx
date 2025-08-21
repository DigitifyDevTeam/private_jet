import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactSection from "@/components/site/ContactSection";
import CircularGallery from "@/components/site/CircularGallery";

const InteriorCleaning = () => {
  // Gallery items for interior cleaning
  const galleryItems = [
    {
      image: "/images/privatejet2.jpg",
      text: "Cabin Cleaning",
    },
    {
      image: "/images/privatejet_cleaning.jpg",
      text: "Interior Detailing",
    },
    {
      image: "/images/detailing-service.webp",
      text: "Seat Restoration",
    },
    {
      image: "/images/gallery1.jpg",
      text: "Carpet Cleaning",
    },
    {
      image: "/images/private-jet.png",
      text: "Cockpit Cleaning",
    },
    {
      image: "/images/vip-airliner.png",
      text: "Premium Interior Care",
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
              src="/images/interior.jpg" 
              alt="Interior Cleaning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h6 className="text-lg font-semibold mb-4 tracking-wider">SERVICES</h6>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
              Nettoyage Interieur
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                Step into perfection with AeroLustre's dedicated aircraft interior cleaning service, seamlessly connecting you to comprehensive cabin restoration. Beyond cleaning, our ethos centres on a tailored approach, ensuring every aircraft interior with us receives museum-grade care and attention to detail.
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
                    src="/images/interior2.webp" 
                    alt="Interior Cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Cabin Deep Cleaning</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Comprehensive interior detailing that restores your aircraft cabin to pristine condition, ensuring every surface reflects the highest standards of cleanliness and care.
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Seat Restoration</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Professional seat cleaning and restoration with premium materials, guaranteeing your aircraft seats maintain their stunning appearance and comfort.
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Cockpit Cleaning</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Specialized cockpit cleaning services that ensure optimal visibility and safety while maintaining the highest standards and regulatory compliance.
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>Carpet & Upholstery</h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                    Advanced carpet and upholstery cleaning systems that preserve your aircraft's interior finish and ensure long-term value while maintaining its pristine appearance.
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
                    src="/images/interior 3.webp" 
                    alt="Luxurious Aircraft Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                Our <span className="text-gray-300">Gallery</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                Explore our comprehensive aircraft interior cleaning services through our curated gallery of exceptional work and stunning transformations.
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

export default InteriorCleaning;
