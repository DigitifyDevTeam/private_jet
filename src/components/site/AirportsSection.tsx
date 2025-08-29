import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const airports = [
  {
    name: "Paris-Vatry",
    city: "Paris",
    country: "France",
    code: "XCR",
    description: "Aéroport cargo et aviation d'affaires, hub logistique majeur au sud de Paris",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGFpcnBvcnR8ZW58MXx8fHwxNzU1ODcxMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    coordinates: "48.7761°N, 4.1847°E"
  },
  {
    name: "Paris-Charles de Gaulle",
    city: "Paris",
    country: "France",
    code: "CDG",
    description: "Principal aéroport international de Paris, hub majeur pour l'aviation privée en Europe",
    imageUrl: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGFpcnBvcnQlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NTU4NzEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    coordinates: "49.0097°N, 2.5479°E"
  },
  {
    name: "Nice-Côte d'Azur",
    city: "Nice",
    country: "France",
    code: "NCE",
    description: "Porte d'entrée de la Côte d'Azur, destination privilégiée pour l'aviation de luxe",
    imageUrl: "https://images.unsplash.com/photo-1591832967384-8cbf463d133c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNlJTIwYWlycG9ydHxlbnwxfHx8fDE3NTU4NzEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    coordinates: "43.6584°N, 7.2170°E"
  },
  {
    name: "Cannes-Mandelieu",
    city: "Cannes",
    country: "France",
    code: "CEQ",
    description: "Aéroport de la Côte d'Azur, porte d'entrée de Cannes et de la Riviera française",
    imageUrl: "/images/cannes.jpg",
    coordinates: "43.5422°N, 6.9533°E"
  },
  {
    name: "Marseille-Provence",
    city: "Marseille",
    country: "France",
    code: "MRS",
    description: "Aéroport international de Marseille, hub majeur du sud de la France",
    imageUrl: "/images/marseille.jpg",
    coordinates: "43.4393°N, 5.2214°E"
  },
  {
    name: "Bordeaux-Mérignac",
    city: "Bordeaux",
    country: "France",
    code: "BOD",
    description: "Aéroport international de Bordeaux, porte d'entrée de la région viticole",
    imageUrl: "/images/bordeaux.jpg",
    coordinates: "44.8283°N, 0.7156°W"
  }
];

export function AirportsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-bold" style={{ fontFamily: '"Mozilla Headline", sans-serif', fontWeight: 600 }}>
            {t('airports.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-medium" style={{ fontFamily: 'Inter, "Helvetica Neue", "SF Pro Text", "Segoe UI", Arial, sans-serif', fontWeight: 400 }}>
            {t('airports.description')}
          </p>
        </div>

        {/* Airports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {airports.map((airport, index) => (
            <motion.div
              key={airport.code}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer max-w-xs"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                if (img) img.style.filter = 'blur(4px)';
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                if (img) img.style.filter = 'blur(0px)';
              }}
            >
                              {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={airport.imageUrl}
                    alt={`${airport.name} airport`}
                    className="w-full h-full object-cover transition-all duration-[1500ms] ease-out group-hover:scale-105"
                    style={{
                      filter: 'blur(0px)',
                      transition: 'all 1.5s ease-out'
                    }}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white transition-all duration-[1500ms] ease-out group-hover:justify-center">
                  <div className="mb-2 transition-transform duration-[1500ms] ease-out group-hover:-translate-y-12">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                      {airport.code}
                    </span>
                  </div>
                  <h3 className="text-lg mb-2 group-hover:text-gray-200 transition-all duration-[1500ms] ease-out group-hover:-translate-y-12 font-bold">
                    {airport.name}
                  </h3>
                  <p className="text-gray-300 text-xs mb-2 transition-transform duration-[1500ms] ease-out group-hover:-translate-y-12 font-medium">
                    {airport.city}, {airport.country}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed opacity-90 transition-transform duration-[1500ms] ease-out group-hover:-translate-y-12 font-medium">
                    {airport.description}
                  </p>
                  <p className="text-gray-400 text-[10px] mt-1 transition-transform duration-[1500ms] ease-out group-hover:-translate-y-12 font-medium">
                    📍 {airport.coordinates}
                  </p>
                </div>

                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] ease-out"></div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
