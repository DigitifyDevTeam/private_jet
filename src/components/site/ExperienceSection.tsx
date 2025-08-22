import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Plane, UtensilsCrossed, Armchair, Users, Shield, Star, Coffee, Wifi, Music } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Plane,
      title: "Aircraft Detailing",
      description: "Our expert team provides comprehensive aircraft detailing services, ensuring your aircraft maintains its pristine appearance with museum-grade care and attention to detail."
    },
    {
      icon: Shield,
      title: "Safety Maintenance",
      description: "We deliver meticulous safety maintenance services with the highest industry standards, ensuring your aircraft operates at peak performance and safety levels."
    },
    {
      icon: Star,
      title: "Premium Care",
      description: "Experience our premium aircraft care services, featuring advanced cleaning techniques and luxury-grade materials to maintain your aircraft's exceptional condition."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring years of aviation expertise, providing specialized knowledge and skills for all your aircraft maintenance and detailing needs."
    },
    {
      icon: Coffee,
      title: "24/7 Support",
      description: "Round-the-clock support and emergency services, ensuring your aircraft maintenance needs are met whenever and wherever you require our expertise."
    },
    {
      icon: Wifi,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and detailed inspections guarantee that every service meets the highest standards of excellence and reliability."
    },
    {
      icon: Music,
      title: "Custom Solutions",
      description: "Tailored maintenance and detailing solutions designed specifically for your aircraft type, ensuring optimal results and long-lasting performance."
    },
    {
      icon: UtensilsCrossed,
      title: "Interior Refinement",
      description: "Specialized interior detailing and refurbishment services, restoring your aircraft's cabin to its original luxury and comfort standards."
    },
    {
      icon: Armchair,
      title: "Exterior Excellence",
      description: "Professional exterior detailing and paint protection services, maintaining your aircraft's sleek appearance and protecting its surface integrity."
    }
  ];

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
    <section className="py-20 px-6 bg-black">
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
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 
              className="mb-6 text-white mozilla-headline-experience"
              style={{
                fontSize: '60px',
                lineHeight: '70px'
              }}
            >
              <span className="text-white">AeroLustre</span>{" "}
              <span className="text-gray-500">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              AEROLUSTRE is committed to providing its clients with an experience, not just a journey. We pride 
              ourselves in what we do; we aim to deliver the pinnacle in luxury private aviation.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full px-6"
            >
              Discover More
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
        <div className="grid md:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-black transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-2xl mb-4 font-semibold text-black">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
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
            Discover More
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
