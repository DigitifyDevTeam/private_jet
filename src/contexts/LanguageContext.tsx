import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.legal': 'Mentions légales',
    
    // Services
    'service.exterior': 'Nettoyage Extérieur',
    'service.interior': 'Nettoyage Intérieur',
    'service.disinfection': 'Désinfection',
    
    // Home page
    'hero.title': 'Nettoyage d\'Avion Privé, Perfectionné.',
    'hero.subtitle': 'Découvrez l\'excellence en matière de maintenance et de nettoyage d\'avions privés avec AeroLustre.',
    'hero.cta': 'Demander un devis',
    
    // Sections
    'section.discover_fleet': 'Découvrez notre flotte',
    'section.discover_fleet_description': 'Créer une approche sur mesure de l\'aviation privée qui dépasse les attentes de nos clients',
    'section.faq': 'Questions fréquemment posées',
    'section.testimonials': 'Avis clients',
    'section.experience': 'Expérience AeroLustre',
    'section.contact': 'Contactez notre équipe d\'experts',
    'section.offices': 'Nos bureaux',
    
    // Contact
    'contact.whatsapp': 'WhatsApp',
    'contact.phone_24h': 'Ligne téléphonique ouverte 24h/24',
    'contact.get_quote': 'Demander un devis',
    
    // Footer
    'footer.copyright': '© 2024 AEROLUSTRE. Tous droits réservés.',
    'footer.services': 'Services',
    'footer.about': 'À propos',
    'footer.contact': 'Contact',
    'footer.legal': 'Mentions légales / RGPD',
    
    // Office locations
    'office.france': 'France',
    'office.dubai': 'Dubaï (Siège)',
    'office.france_address': 'Terminal 2F, Aéroport Charles de Gaulle, Zone Aviation Privée, Roissy, 95700, France',
    'office.dubai_address': 'Aéroport International Al Maktoum, Dubai World Central, Terminal 1, Dubaï, Émirats Arabes Unis',
    
    // Fleet
    'fleet.private_jet': 'Jet Privé',
    'fleet.vip_airliner': 'Avion VIP',
    'fleet.commercial_vip': 'VIP Commercial',
    'fleet.private_jet_desc': 'Découvrez l\'apogée du voyage aérien avec notre flotte exceptionnelle de jets lourds. Nos distingués Legacy 600 et Challenger 850 ont été spécialement conçus pour offrir un confort et une commodité inégalés pour les routes courtes à moyennes. Que vous voyagiez pour affaires ou loisirs, ces jets répondent à tous vos besoins, garantissant une expérience unique.',
    'fleet.vip_airliner_desc': 'Plongez dans le monde du luxe avec notre service d\'avion VIP. Nos cabines spacieuses offrent des sièges premium avec des panneaux en bois foncé, des allées larges et des systèmes de divertissement de pointe. Parfait pour les grands groupes recherchant l\'ultime en confort et style pour les voyages long-courrier.',
    'fleet.commercial_vip_desc': 'Notre service VIP commercial combine sophistication et efficacité. Idéal pour les voyages d\'affaires, nos cabines offrent un environnement professionnel avec des équipements de pointe et un service personnalisé pour répondre aux besoins exigeants des voyageurs d\'affaires.',
    'fleet.discover_more': 'Découvrir Plus',
    
    // Testimonials
    'testimonial.1.quote': 'AeroLustre a transformé notre expérience de maintenance d\'avions. Leur attention aux détails et leur service professionnel ont dépassé toutes nos attentes. La qualité de leur travail est simplement exceptionnelle.',
    'testimonial.2.quote': 'Travailler avec AeroLustre a été un changement de jeu pour notre flotte. Leur expertise en nettoyage et maintenance d\'avions a maintenu nos avions en parfait état. Fortement recommandé !',
    'testimonial.3.quote': 'L\'engagement d\'AeroLustre envers l\'excellence est inégalé. Le professionnalisme et le dévouement de leur équipe à la qualité en ont fait notre partenaire de confiance pour tous nos besoins de maintenance d\'avions.',
    'testimonial.4.quote': 'Le niveau de service et l\'attention aux détails qu\'AeroLustre fournit sont exceptionnels. Ils comprennent l\'importance de maintenir les plus hauts standards dans l\'aviation.',
    
    // Experience Services
    'experience.aircraft_detailing': 'Nettoyage d\'Avion',
    'experience.safety_maintenance': 'Maintenance de Sécurité',
    'experience.premium_care': 'Soins Premium',
    'experience.expert_team': 'Équipe d\'Experts',
    'experience.support_24_7': 'Support 24/7',
    'experience.quality_assurance': 'Assurance Qualité',
    'experience.custom_solutions': 'Solutions Personnalisées',
    'experience.interior_refinement': 'Raffinement Intérieur',
    'experience.exterior_excellence': 'Excellence Extérieure',
    
    'experience.aircraft_detailing_desc': 'Notre équipe d\'experts fournit des services complets de nettoyage d\'avions, garantissant que votre avion maintient son apparence immaculée avec des soins de qualité musée et une attention aux détails.',
    'experience.safety_maintenance_desc': 'Nous fournissons des services de maintenance de sécurité méticuleux avec les plus hauts standards de l\'industrie, garantissant que votre avion fonctionne à des niveaux de performance et de sécurité optimaux.',
    'experience.premium_care_desc': 'Découvrez nos services de soins d\'avions premium, avec des techniques de nettoyage avancées et des matériaux de qualité luxe pour maintenir l\'état exceptionnel de votre avion.',
    'experience.expert_team_desc': 'Nos professionnels certifiés apportent des années d\'expertise en aviation, fournissant des connaissances et compétences spécialisées pour tous vos besoins de maintenance et nettoyage d\'avions.',
    'experience.support_24_7_desc': 'Support 24h/24 et services d\'urgence, garantissant que vos besoins de maintenance d\'avions sont satisfaits quand et où vous avez besoin de notre expertise.',
    'experience.quality_assurance_desc': 'Processus de contrôle qualité rigoureux et inspections détaillées garantissent que chaque service répond aux plus hauts standards d\'excellence et de fiabilité.',
    'experience.custom_solutions_desc': 'Solutions de maintenance et nettoyage personnalisées conçues spécifiquement pour votre type d\'avion, garantissant des résultats optimaux et une performance durable.',
    'experience.interior_refinement_desc': 'Services spécialisés de nettoyage et rénovation intérieurs, restaurant la cabine de votre avion à ses standards de luxe et confort originaux.',
    'experience.exterior_excellence_desc': 'Services professionnels de nettoyage extérieur et protection de peinture, maintenant l\'apparence élégante de votre avion et protégeant l\'intégrité de sa surface.',
    
    // Common
    'common.learn_more': 'En savoir plus',
    'common.view_gallery': 'Voir la galerie',
    'common.request_quote': 'Demander un devis',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.legal': 'Legal Notice',
    
    // Services
    'service.exterior': 'Exterior Cleaning',
    'service.interior': 'Interior Cleaning',
    'service.disinfection': 'Disinfection',
    
    // Home page
    'hero.title': 'Private Jet Cleaning, Perfected.',
    'hero.subtitle': 'Discover excellence in private aircraft maintenance and cleaning with AeroLustre.',
    'hero.cta': 'Request a Quote',
    
    // Sections
    'section.discover_fleet': 'Discover our fleet',
    'section.discover_fleet_description': 'Creating a bespoke approach to private aviation that exceeds our client\'s expectations',
    'section.faq': 'Frequently asked questions',
    'section.testimonials': 'Customer reviews',
    'section.experience': 'AeroLustre Experience',
    'section.contact': 'Contact our team of experts',
    'section.offices': 'Our offices',
    
    // Contact
    'contact.whatsapp': 'WhatsApp',
    'contact.phone_24h': 'Telephone line open 24 hours a day',
    'contact.get_quote': 'Request a Quote',
    
    // Footer
    'footer.copyright': '© 2024 AEROLUSTRE. All rights reserved.',
    'footer.services': 'Services',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal Notice / GDPR',
    
    // Office locations
    'office.france': 'France',
    'office.dubai': 'Dubai (HQ)',
    'office.france_address': 'Terminal 2F, Charles de Gaulle Airport, Private Aviation Zone, Roissy, 95700, France',
    'office.dubai_address': 'Al Maktoum International Airport, Dubai World Central, Terminal 1, Dubai, United Arab Emirates',
    
    // Fleet
    'fleet.private_jet': 'Private Jet',
    'fleet.vip_airliner': 'VIP Airliner',
    'fleet.commercial_vip': 'Commercial VIP',
    'fleet.private_jet_desc': 'Experience the epitome of air travel with our exceptional heavy jet fleet. Our distinguished Legacy 600 and Challenger 850 were specifically designed to offer unrivaled comfort and convenience for short to medium routes. Whether you\'re traveling for business or leisure, these jets cater to your every need, ensuring an experience like no other.',
    'fleet.vip_airliner_desc': 'Step into the world of luxury with our VIP airliner service. Our spacious cabins feature premium seating with dark wood paneling, wide aisles, and state-of-the-art entertainment systems. Perfect for larger groups seeking the ultimate in comfort and style for long-haul journeys.',
    'fleet.commercial_vip_desc': 'Our commercial VIP service combines sophistication and efficiency. Ideal for business travel, our cabins provide a professional environment with cutting-edge amenities and personalized service to meet the demanding needs of business travelers.',
    'fleet.discover_more': 'Discover More',
    
    // Testimonials
    'testimonial.1.quote': 'AeroLustre has transformed our aircraft maintenance experience. Their attention to detail and professional service exceeded all our expectations. The quality of their work is simply outstanding.',
    'testimonial.2.quote': 'Working with AeroLustre has been a game-changer for our fleet. Their expertise in aircraft detailing and maintenance has kept our aircraft in pristine condition. Highly recommended!',
    'testimonial.3.quote': 'AeroLustre\'s commitment to excellence is unmatched. Their team\'s professionalism and dedication to quality have made them our trusted partner for all aircraft maintenance needs.',
    'testimonial.4.quote': 'The level of service and attention to detail that AeroLustre provides is exceptional. They understand the importance of maintaining the highest standards in aviation.',
    
    // Experience Services
    'experience.aircraft_detailing': 'Aircraft Detailing',
    'experience.safety_maintenance': 'Safety Maintenance',
    'experience.premium_care': 'Premium Care',
    'experience.expert_team': 'Expert Team',
    'experience.support_24_7': '24/7 Support',
    'experience.quality_assurance': 'Quality Assurance',
    'experience.custom_solutions': 'Custom Solutions',
    'experience.interior_refinement': 'Interior Refinement',
    'experience.exterior_excellence': 'Exterior Excellence',
    
    'experience.aircraft_detailing_desc': 'Our expert team provides comprehensive aircraft detailing services, ensuring your aircraft maintains its pristine appearance with museum-grade care and attention to detail.',
    'experience.safety_maintenance_desc': 'We deliver meticulous safety maintenance services with the highest industry standards, ensuring your aircraft operates at peak performance and safety levels.',
    'experience.premium_care_desc': 'Experience our premium aircraft care services, featuring advanced cleaning techniques and luxury-grade materials to maintain your aircraft\'s exceptional condition.',
    'experience.expert_team_desc': 'Our certified professionals bring years of aviation expertise, providing specialized knowledge and skills for all your aircraft maintenance and detailing needs.',
    'experience.support_24_7_desc': 'Round-the-clock support and emergency services, ensuring your aircraft maintenance needs are met whenever and wherever you require our expertise.',
    'experience.quality_assurance_desc': 'Rigorous quality control processes and detailed inspections guarantee that every service meets the highest standards of excellence and reliability.',
    'experience.custom_solutions_desc': 'Tailored maintenance and detailing solutions designed specifically for your aircraft type, ensuring optimal results and long-lasting performance.',
    'experience.interior_refinement_desc': 'Specialized interior detailing and refurbishment services, restoring your aircraft\'s cabin to its original luxury and comfort standards.',
    'experience.exterior_excellence_desc': 'Professional exterior detailing and paint protection services, maintaining your aircraft\'s sleek appearance and protecting its surface integrity.',
    
    // Common
    'common.learn_more': 'Learn more',
    'common.view_gallery': 'View gallery',
    'common.request_quote': 'Request a quote',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr'); // French as default

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
