import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Plane, UtensilsCrossed, Armchair, Users, Shield, Star, Coffee, Wifi, Music } from "lucide-react";
import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = useMemo(() => [
    {
      icon: Plane,
      title: t('experience.aircraft_detailing'),
      description: t('experience.aircraft_detailing_desc')
    },
    {
      icon: Shield,
      title: t('experience.safety_maintenance'),
      description: t('experience.safety_maintenance_desc')
    },
    {
      icon: Star,
      title: t('experience.premium_care'),
      description: t('experience.premium_care_desc')
    },
    {
      icon: Users,
      title: t('experience.expert_team'),
      description: t('experience.expert_team_desc')
    },
    {
      icon: Coffee,
      title: t('experience.support_24_7'),
      description: t('experience.support_24_7_desc')
    },
    {
      icon: Wifi,
      title: t('experience.quality_assurance'),
      description: t('experience.quality_assurance_desc')
    },
    {
      icon: Music,
      title: t('experience.custom_solutions'),
      description: t('experience.custom_solutions_desc')
    },
    {
      icon: UtensilsCrossed,
      title: t('experience.interior_refinement'),
      description: t('experience.interior_refinement_desc')
    },
    {
      icon: Armchair,
      title: t('experience.exterior_excellence'),
      description: t('experience.exterior_excellence_desc')
    }
  ], [t]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.max(0, services.length - 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, services.length - 3) : prevIndex - 1
    );
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap');
          .mozilla-headline-experience {
            font-family: "Mozilla Headline", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-0">
          <div>
            <h2 
              className="mb-4 sm:mb-6 text-white mozilla-headline-experience"
              style={{
                fontSize: 'clamp(32px, 5vw, 60px)',
                lineHeight: '1.1'
              }}
            >
              <span className="text-white">AeroLustre</span>{" "}
              <span className="text-gray-500">{t('experience.section_title')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
              {t('experience.description')}
            </p>
          </div>
          
          <div className="hidden sm:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full px-6"
            >
              {t('experience.discover_more')}
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {visibleServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-black transition-all duration-300 hover:scale-105">
                                  <div className="mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-semibold text-black">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(services.length / 3) }, (_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === Math.floor(currentIndex / 3) 
                  ? 'bg-white' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(i * 3)}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center gap-4 mt-8">
          <Button 
            variant="outline" 
            className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full px-6"
          >
            {t('experience.discover_more')}
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
