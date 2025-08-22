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

    'section.experience': 'Expérience AeroLustre',
    'section.contact': 'Contactez notre équipe d\'experts',

    
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
    

    
    // Fleet
    'fleet.private_jet': 'Jet Privé',
    'fleet.vip_airliner': 'Avion VIP',
    'fleet.commercial_vip': 'VIP Commercial',
    'fleet.private_jet_desc': 'Découvrez l\'apogée du voyage aérien avec notre flotte exceptionnelle de jets lourds. Nos distingués Legacy 600 et Challenger 850 ont été spécialement conçus pour offrir un confort et une commodité inégalés pour les routes courtes à moyennes. Que vous voyagiez pour affaires ou loisirs, ces jets répondent à tous vos besoins, garantissant une expérience unique.',
    'fleet.vip_airliner_desc': 'Plongez dans le monde du luxe avec notre service d\'avion VIP. Nos cabines spacieuses offrent des sièges premium avec des panneaux en bois foncé, des allées larges et des systèmes de divertissement de pointe. Parfait pour les grands groupes recherchant l\'ultime en confort et style pour les voyages long-courrier.',
    'fleet.commercial_vip_desc': 'Notre service VIP commercial combine sophistication et efficacité. Idéal pour les voyages d\'affaires, nos cabines offrent un environnement professionnel avec des équipements de pointe et un service personnalisé pour répondre aux besoins exigeants des voyageurs d\'affaires.',
    'fleet.discover_more': 'Découvrir Plus',
    

    
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
    
    // FAQ
    'faq.title': 'Questions fréquemment posées',
    'faq.questions': 'Questions',
    'faq.1.question': 'Quels services de nettoyage d\'avion AeroLustre fournit-il ?',
    'faq.1.answer': 'AeroLustre offre des services complets de nettoyage d\'avion incluant le nettoyage approfondi intérieur, le lavage et cirage extérieur, le nettoyage moteur, le nettoyage cockpit et la protection spécialisée de peinture. Nos services couvrent tout, de la maintenance routinière à la restauration complète d\'avion, garantissant que votre avion maintient son apparence immaculée et ses performances optimales.',
    'faq.2.question': 'Combien de temps prend un service typique de nettoyage d\'avion ?',
    'faq.2.answer': 'La durée du service varie selon la taille de l\'avion et le niveau de service. Un lavage extérieur de base prend généralement 2-3 heures, tandis qu\'un service complet de nettoyage intérieur et extérieur peut prendre 6-8 heures pour les petits avions et jusqu\'à 24 heures pour les gros jets. Nous fournissons des estimations de temps détaillées lors de la consultation et pouvons accommoder les demandes urgentes quand possible.',
    'faq.3.question': 'Quelles certifications de sécurité AeroLustre maintient-il ?',
    'faq.3.answer': 'AeroLustre maintient les plus hautes certifications de sécurité de l\'industrie incluant IS-BAO Stage 2, la notation ARGUS Platinum et les standards de conformité FAA. Notre équipe se compose de professionnels de l\'aviation certifiés avec une formation extensive en maintenance d\'avion, protocoles de sécurité et meilleures pratiques de l\'industrie pour garantir que votre avion reçoit les soins de la plus haute qualité.',
    'faq.4.question': 'Fournissez-vous des services de maintenance d\'urgence ?',
    'faq.4.answer': 'Oui, AeroLustre offre des services de maintenance et nettoyage d\'urgence 24h/24. Notre équipe de réponse rapide est disponible 24h/24 pour gérer les besoins urgents de maintenance d\'avion, garantissant un temps d\'arrêt minimal et une sécurité maximale. Nous maintenons des protocoles d\'urgence et pouvons déployer des équipes à votre emplacement en quelques heures pour les situations critiques.',
    
    // Experience Section
    'experience.section_title': 'Expérience',
    'experience.description': 'AeroLustre s\'engage à fournir à ses clients une expérience, pas seulement un voyage. Nous sommes fiers de ce que nous faisons ; nous visons à livrer le summum de l\'aviation privée de luxe.',
    'experience.discover_more': 'Découvrir Plus',
    
    // Trust Section
    'trust.title': 'Qui fait notre confiance',
    'trust.description': 'Nous travaillons avec les plus grandes marques de l\'aviation privée pour garantir des services de qualité exceptionnelle.',
    
    // Airports Section
    'airports.title': 'Nous intervenons aux aéroports suivants',
    'airports.description': 'AeroLustre opère dans les principaux aéroports internationaux, offrant des services de maintenance et de nettoyage d\'avions privés de qualité exceptionnelle.',
    'airports.cta_text': 'Besoin de nos services dans un autre aéroport ?',
    'airports.cta_button': 'Contactez-nous',
    
    // Contact Section
    'contact.whatsapp_description': 'Gérez vos demandes et réservations en déplacement via chat privé avec notre équipe',
    'contact.phone_24h_description': 'Ligne téléphonique ouverte 24h/24',
    'contact.form.reason_label': 'Veuillez sélectionner la raison de votre demande',
    'contact.form.general_enquiry': 'Demande générale',
    'contact.form.press': 'Presse',
    'contact.form.other': 'Autre',
    'contact.form.full_name': 'Nom complet',
    'contact.form.phone': 'Numéro de téléphone',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.company': 'Entreprise',
    'contact.form.message': 'Votre message',
    'contact.form.privacy_policy': 'J\'accepte la politique de confidentialité d\'AeroLustre',
    'contact.form.recaptcha_text': 'Ce site est protégé par reCAPTCHA et la',
    'contact.form.google_privacy': 'Politique de confidentialité Google',
    'contact.form.and': 'et',
    'contact.form.terms_of_service': 'Conditions d\'utilisation',
    'contact.form.apply': 's\'appliquent',
    'contact.form.send_message': 'Envoyer le message',
    'contact.founder.title': 'Fondateur',
    'contact.founder.welcome': 'Bienvenue chez AeroLustre, où l\'excellence et la sophistication se rencontrent dans l\'aviation privée.',
    'contact.founder.commitment': 'Nous nous engageons à dépasser vos attentes',
    'contact.founder.discover': 'avec notre service premium et notre attention aux détails. Découvrez l\'apogée du luxe aérien.',
    'contact.founder.meet': 'Rencontrer le fondateur d\'AEROLUSTRE',
    
    // Footer
    'footer.description': 'Services professionnels de maintenance et nettoyage d\'avions. Nous fournissons des soins complets pour votre avion avec les plus hauts standards de qualité et de sécurité.',
    'footer.support_available': 'Support disponible 24h/24',
    'footer.aircraft_detailing': 'Nettoyage d\'avion',
    'footer.safety_maintenance': 'Maintenance de sécurité',
    'footer.premium_care': 'Soins premium',
    'footer.emergency_services': 'Services d\'urgence',
    
    // Service Pages
    'services.hero.services': 'SERVICES',
    'services.exterior.title': 'Nettoyage Extérieur',
    'services.interior.title': 'Nettoyage Intérieur',
    'services.disinfection.title': 'Désinfection',
    'services.exterior.hero_desc': 'Plongez dans la perfection avec le service dédié de nettoyage d\'avion d\'AeroLustre, vous connectant de manière transparente au nettoyage et à la restauration complets. Au-delà du nettoyage, notre éthique se concentre sur une approche personnalisée, garantissant que chaque avion avec nous reçoit des soins de qualité musée et une attention aux détails.',
    'services.interior.hero_desc': 'Plongez dans la perfection avec le service dédié de nettoyage intérieur d\'avion d\'AeroLustre, vous connectant de manière transparente à la restauration complète de cabine. Au-delà du nettoyage, notre éthique se concentre sur une approche personnalisée, garantissant que chaque intérieur d\'avion avec nous reçoit des soins de qualité musée et une attention aux détails.',
    'services.disinfection.hero_desc': 'Plongez dans la perfection avec le service dédié de désinfection d\'avion d\'AeroLustre, vous connectant de manière transparente à la désinfection complète et à la sécurité. Au-delà de la désinfection, notre éthique se concentre sur une approche personnalisée, garantissant que chaque avion avec nous reçoit des soins de qualité musée et une attention aux détails.',
    
    // Exterior Cleaning Services
    'services.exterior.interior_deep_cleaning': 'Nettoyage Intérieur Approfondi',
    'services.exterior.interior_deep_cleaning_desc': 'Nettoyage intérieur complet qui restaure votre cabine d\'avion à un état immaculé, garantissant que chaque surface reflète les plus hauts standards de propreté et de soins.',
    'services.exterior.exterior_wash_wax': 'Lavage et Cirage Extérieur',
    'services.exterior.exterior_wash_wax_desc': 'Nettoyage extérieur professionnel avec protection cire premium, garantissant que votre avion maintient son apparence éblouissante et sa protection contre les éléments environnementaux.',
    'services.exterior.engine_cleaning': 'Nettoyage Moteur',
    'services.exterior.engine_cleaning_desc': 'Services spécialisés de nettoyage moteur qui garantissent des performances optimales tout en maintenant les plus hauts standards de sécurité et la conformité réglementaire.',
    'services.exterior.paint_protection': 'Protection de Peinture',
    'services.exterior.paint_protection_desc': 'Systèmes avancés de protection de peinture qui préservent la finition de votre avion et garantissent une valeur à long terme tout en maintenant son apparence immaculée.',
    
    // Interior Cleaning Services
    'services.interior.cabin_deep_cleaning': 'Nettoyage Approfondi de Cabine',
    'services.interior.cabin_deep_cleaning_desc': 'Nettoyage intérieur complet qui restaure votre cabine d\'avion à un état immaculé, garantissant que chaque surface reflète les plus hauts standards de propreté et de soins.',
    'services.interior.seat_restoration': 'Restauration de Sièges',
    'services.interior.seat_restoration_desc': 'Nettoyage et restauration professionnels de sièges avec des matériaux premium, garantissant que vos sièges d\'avion maintiennent leur apparence éblouissante et leur confort.',
    'services.interior.cockpit_cleaning': 'Nettoyage Cockpit',
    'services.interior.cockpit_cleaning_desc': 'Services spécialisés de nettoyage cockpit qui garantissent une visibilité et une sécurité optimales tout en maintenant les plus hauts standards et la conformité réglementaire.',
    'services.interior.carpet_upholstery': 'Moquette et Tissus d\'Ameublement',
    'services.interior.carpet_upholstery_desc': 'Systèmes avancés de nettoyage de moquette et de tissus d\'ameublement qui préservent la finition intérieure de votre avion et garantissent une valeur à long terme tout en maintenant son apparence immaculée.',
    
    // Disinfection Services
    'services.disinfection.cabin_disinfection': 'Désinfection de Cabine',
    'services.disinfection.cabin_disinfection_desc': 'Désinfection complète de cabine qui élimine tous les agents pathogènes, garantissant un environnement stérile et sûr pour vos passagers.',
    'services.disinfection.surface_sanitization': 'Sanitisation de Surface',
    'services.disinfection.surface_sanitization_desc': 'Sanitisation professionnelle de toutes les surfaces avec des produits de qualité médicale, garantissant une élimination complète des contaminants.',
    'services.disinfection.air_purification': 'Purification d\'Air',
    'services.disinfection.air_purification_desc': 'Services spécialisés de purification d\'air qui garantissent une qualité d\'air optimale tout en maintenant les plus hauts standards de sécurité.',
    'services.disinfection.complete_sanitization': 'Sanitisation Complète',
    'services.disinfection.complete_sanitization_desc': 'Systèmes avancés de sanitisation qui préservent la sécurité de votre avion et garantissent une protection à long terme contre les agents pathogènes.',
    
    // Gallery
    'gallery.title': 'Notre Galerie',
    'gallery.exterior_desc': 'Explorez nos services complets de nettoyage extérieur d\'avion à travers notre galerie organisée de travaux exceptionnels et de transformations éblouissantes.',
    'gallery.interior_desc': 'Explorez nos services complets de nettoyage intérieur d\'avion à travers notre galerie organisée de travaux exceptionnels et de transformations éblouissantes.',
    'gallery.disinfection_desc': 'Explorez nos services complets de désinfection d\'avion à travers notre galerie organisée de travaux exceptionnels et de protocoles de sécurité.',
    
    // Gallery Items
    'gallery.private_jet': 'Jet Privé',
    'gallery.engine_maintenance': 'Maintenance Moteur',
    'gallery.luxury_seating': 'Sièges de Luxe',
    'gallery.work_in_progress': 'Travail en Cours',
    'gallery.private_jet_interior': 'Intérieur Jet Privé',
    'gallery.cabin_disinfection': 'Désinfection de Cabine',
    'gallery.surface_sanitization': 'Sanitisation de Surface',
    'gallery.air_purification': 'Purification d\'Air',
    'gallery.complete_sanitization': 'Sanitisation Complète',
    
    // Service Page Content
    'services.exterior.perfection_title': 'Plongez dans l\'univers de la perfection avec AeroLustre.',
    'services.exterior.perfection_desc1': 'Chez AeroLustre, nous comprenons que chaque Jet Privé est le reflet de l\'excellence et du prestige. Notre service de nettoyage extérieur transforme votre appareil en véritable œuvre d\'art, où chaque détail compte et chaque surface brille de mille feux.',
    'services.exterior.perfection_desc2': 'Notre expertise unique combine techniques traditionnelles et technologies de pointe pour offrir un résultat incomparable. Nous ne nous contentons pas de nettoyer, nous restaurons la splendeur originelle de votre avion, préservant sa valeur et son éclat pour les années à venir.',
    
    'services.interior.pristine_title': 'Immergez-vous dans le monde de la présentation immaculée avec AeroLustre Detailing.',
    'services.interior.pristine_desc1': 'Peu importe la destination ou le passager, l\'intérieur et l\'extérieur d\'un Jet Privé sont une représentation visuelle, et cela se reflète dans le confort et la qualité du voyage de vos passagers. AeroLustre Detailing s\'enorgueillit de fournir une performance de nettoyage inégalée avec une gamme complète de services utilisant des processus de pointe de l\'industrie.',
    'services.interior.pristine_desc2': 'Notre dévouement à préserver l\'attrait esthétique d\'un avion tout en augmentant sa valeur et sa longévité est inébranlable. La Cabine est où les passagers passent la durée de leur expérience, et maximiser la qualité de cet espace unique devrait être au premier plan pour s\'assurer que votre avion devient plus qu\'un simple mode de voyage ; c\'est une incarnation de la sophistication et de l\'élégance.',
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

    'section.experience': 'AeroLustre Experience',
    'section.contact': 'Contact our team of experts',

    
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
    

    
    // Fleet
    'fleet.private_jet': 'Private Jet',
    'fleet.vip_airliner': 'VIP Airliner',
    'fleet.commercial_vip': 'Commercial VIP',
    'fleet.private_jet_desc': 'Experience the epitome of air travel with our exceptional heavy jet fleet. Our distinguished Legacy 600 and Challenger 850 were specifically designed to offer unrivaled comfort and convenience for short to medium routes. Whether you\'re traveling for business or leisure, these jets cater to your every need, ensuring an experience like no other.',
    'fleet.vip_airliner_desc': 'Step into the world of luxury with our VIP airliner service. Our spacious cabins feature premium seating with dark wood paneling, wide aisles, and state-of-the-art entertainment systems. Perfect for larger groups seeking the ultimate in comfort and style for long-haul journeys.',
    'fleet.commercial_vip_desc': 'Our commercial VIP service combines sophistication and efficiency. Ideal for business travel, our cabins provide a professional environment with cutting-edge amenities and personalized service to meet the demanding needs of business travelers.',
    'fleet.discover_more': 'Discover More',
    

    
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
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.questions': 'Questions',
    'faq.1.question': 'What aircraft detailing services does AeroLustre provide?',
    'faq.1.answer': 'AeroLustre offers comprehensive aircraft detailing services including interior deep cleaning, exterior wash and wax, engine cleaning, cockpit detailing, and specialized paint protection. Our services cover everything from routine maintenance to complete aircraft restoration, ensuring your aircraft maintains its pristine appearance and optimal performance.',
    'faq.2.question': 'How long does a typical aircraft detailing service take?',
    'faq.2.answer': 'Service duration varies based on aircraft size and service level. A basic exterior wash typically takes 2-3 hours, while a complete interior and exterior detailing service can take 6-8 hours for smaller aircraft and up to 24 hours for larger jets. We provide detailed time estimates during consultation and can accommodate urgent requests when possible.',
    'faq.3.question': 'What safety certifications does AeroLustre maintain?',
    'faq.3.answer': 'AeroLustre maintains the highest industry safety certifications including IS-BAO Stage 2, ARGUS Platinum rating, and FAA compliance standards. Our team consists of certified aviation professionals with extensive training in aircraft maintenance, safety protocols, and industry best practices to ensure your aircraft receives the highest quality care.',
    'faq.4.question': 'Do you provide emergency maintenance services?',
    'faq.4.answer': 'Yes, AeroLustre offers 24/7 emergency maintenance and detailing services. Our rapid response team is available around the clock to handle urgent aircraft maintenance needs, ensuring minimal downtime and maximum safety. We maintain emergency protocols and can deploy teams to your location within hours for critical situations.',
    
    // Experience Section
    'experience.section_title': 'Experience',
    'experience.description': 'AeroLustre is committed to providing its clients with an experience, not just a journey. We pride ourselves in what we do; we aim to deliver the pinnacle in luxury private aviation.',
    'experience.discover_more': 'Discover More',
    
    // Trust Section
    'trust.title': 'Who trusts us',
    'trust.description': 'We work with the biggest names in private aviation to ensure exceptional quality services.',
    
    // Airports Section
    'airports.title': 'We operate at the following airports',
    'airports.description': 'AeroLustre operates at major international airports, providing exceptional private aircraft maintenance and cleaning services.',
    'airports.cta_text': 'Need our services at another airport?',
    'airports.cta_button': 'Contact us',
    
    // Contact Section
    'contact.whatsapp_description': 'Manage your enquiries and bookings on the go via private chat with our team',
    'contact.phone_24h_description': 'Telephone line open 24 hours a day',
    'contact.form.reason_label': 'Please select the reason for your enquiry',
    'contact.form.general_enquiry': 'General Enquiry',
    'contact.form.press': 'Press',
    'contact.form.other': 'Other',
    'contact.form.full_name': 'Full Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company',
    'contact.form.message': 'Your Message',
    'contact.form.privacy_policy': 'I agree to the AeroLustre Privacy Policy',
    'contact.form.recaptcha_text': 'This site is protected by reCAPTCHA and the',
    'contact.form.google_privacy': 'Google Privacy Policy',
    'contact.form.and': 'and',
    'contact.form.terms_of_service': 'Terms of Service',
    'contact.form.apply': 'apply',
    'contact.form.send_message': 'Send Message',
    'contact.founder.title': 'Founder',
    'contact.founder.welcome': 'Welcome to AeroLustre, where excellence and sophistication meet in private aviation.',
    'contact.founder.commitment': 'We are committed to exceeding your expectations',
    'contact.founder.discover': 'with our premium service and attention to detail. Discover the pinnacle of aerial luxury.',
    'contact.founder.meet': 'Meet the AEROLUSTRE Founder',
    
    // Footer
    'footer.description': 'Professional aircraft maintenance and detailing services. We provide comprehensive care for your aircraft with the highest standards of quality and safety.',
    'footer.support_available': '24/7 Support Available',
    'footer.aircraft_detailing': 'Aircraft Detailing',
    'footer.safety_maintenance': 'Safety Maintenance',
    'footer.premium_care': 'Premium Care',
    'footer.emergency_services': 'Emergency Services',
    
    // Service Pages
    'services.hero.services': 'SERVICES',
    'services.exterior.title': 'Exterior Cleaning',
    'services.interior.title': 'Interior Cleaning',
    'services.disinfection.title': 'Disinfection',
    'services.exterior.hero_desc': 'Step into perfection with AeroLustre\'s dedicated aircraft detailing service, seamlessly connecting you to comprehensive cleaning and restoration. Beyond detailing, our ethos centres on a tailored approach, ensuring every aircraft with us receives museum-grade care and attention to detail.',
    'services.interior.hero_desc': 'Step into perfection with AeroLustre\'s dedicated aircraft interior cleaning service, seamlessly connecting you to comprehensive cabin restoration. Beyond cleaning, our ethos centres on a tailored approach, ensuring every aircraft interior with us receives museum-grade care and attention to detail.',
    'services.disinfection.hero_desc': 'Step into perfection with AeroLustre\'s dedicated aircraft disinfection service, seamlessly connecting you to comprehensive disinfection and safety. Beyond disinfection, our ethos centres on a tailored approach, ensuring every aircraft with us receives museum-grade care and attention to detail.',
    
    // Exterior Cleaning Services
    'services.exterior.interior_deep_cleaning': 'Interior Deep Cleaning',
    'services.exterior.interior_deep_cleaning_desc': 'Comprehensive interior detailing that restores your aircraft cabin to pristine condition, ensuring every surface reflects the highest standards of cleanliness and care.',
    'services.exterior.exterior_wash_wax': 'Exterior Wash & Wax',
    'services.exterior.exterior_wash_wax_desc': 'Professional exterior detailing with premium wax protection, guaranteeing your aircraft maintains its stunning appearance and protection against environmental elements.',
    'services.exterior.engine_cleaning': 'Engine Cleaning',
    'services.exterior.engine_cleaning_desc': 'Specialized engine cleaning services that ensure optimal performance while maintaining the highest safety standards and regulatory compliance.',
    'services.exterior.paint_protection': 'Paint Protection',
    'services.exterior.paint_protection_desc': 'Advanced paint protection systems that preserve your aircraft\'s finish and ensure long-term value while maintaining its pristine appearance.',
    
    // Interior Cleaning Services
    'services.interior.cabin_deep_cleaning': 'Cabin Deep Cleaning',
    'services.interior.cabin_deep_cleaning_desc': 'Comprehensive interior detailing that restores your aircraft cabin to pristine condition, ensuring every surface reflects the highest standards of cleanliness and care.',
    'services.interior.seat_restoration': 'Seat Restoration',
    'services.interior.seat_restoration_desc': 'Professional seat cleaning and restoration with premium materials, guaranteeing your aircraft seats maintain their stunning appearance and comfort.',
    'services.interior.cockpit_cleaning': 'Cockpit Cleaning',
    'services.interior.cockpit_cleaning_desc': 'Specialized cockpit cleaning services that ensure optimal visibility and safety while maintaining the highest standards and regulatory compliance.',
    'services.interior.carpet_upholstery': 'Carpet & Upholstery',
    'services.interior.carpet_upholstery_desc': 'Advanced carpet and upholstery cleaning systems that preserve your aircraft\'s interior finish and ensure long-term value while maintaining its pristine appearance.',
    
    // Disinfection Services
    'services.disinfection.cabin_disinfection': 'Cabin Disinfection',
    'services.disinfection.cabin_disinfection_desc': 'Comprehensive cabin disinfection that eliminates all pathogens, ensuring a sterile and safe environment for your passengers.',
    'services.disinfection.surface_sanitization': 'Surface Sanitization',
    'services.disinfection.surface_sanitization_desc': 'Professional sanitization of all surfaces with medical-grade products, ensuring complete elimination of contaminants.',
    'services.disinfection.air_purification': 'Air Purification',
    'services.disinfection.air_purification_desc': 'Specialized air purification services that ensure optimal air quality while maintaining the highest safety standards.',
    'services.disinfection.complete_sanitization': 'Complete Sanitization',
    'services.disinfection.complete_sanitization_desc': 'Advanced sanitization systems that preserve your aircraft\'s safety and ensure long-term protection against pathogens.',
    
    // Gallery
    'gallery.title': 'Our Gallery',
    'gallery.exterior_desc': 'Explore our comprehensive aircraft exterior cleaning services through our curated gallery of exceptional work and stunning transformations.',
    'gallery.interior_desc': 'Explore our comprehensive aircraft interior cleaning services through our curated gallery of exceptional work and stunning transformations.',
    'gallery.disinfection_desc': 'Explore our comprehensive aircraft disinfection services through our curated gallery of exceptional work and safety protocols.',
    
    // Gallery Items
    'gallery.private_jet': 'Private Jet',
    'gallery.engine_maintenance': 'Engine Maintenance',
    'gallery.luxury_seating': 'Luxury Seating',
    'gallery.work_in_progress': 'Work in Progress',
    'gallery.private_jet_interior': 'Private Jet Interior',
    'gallery.cabin_disinfection': 'Cabin Disinfection',
    'gallery.surface_sanitization': 'Surface Sanitization',
    'gallery.air_purification': 'Air Purification',
    'gallery.complete_sanitization': 'Complete Sanitization',
    
    // Service Page Content
    'services.exterior.perfection_title': 'Plongez dans l\'univers de la perfection avec AeroLustre.',
    'services.exterior.perfection_desc1': 'Chez AeroLustre, nous comprenons que chaque Jet Privé est le reflet de l\'excellence et du prestige. Notre service de nettoyage extérieur transforme votre appareil en véritable œuvre d\'art, où chaque détail compte et chaque surface brille de mille feux.',
    'services.exterior.perfection_desc2': 'Notre expertise unique combine techniques traditionnelles et technologies de pointe pour offrir un résultat incomparable. Nous ne nous contentons pas de nettoyer, nous restaurons la splendeur originelle de votre avion, préservant sa valeur et son éclat pour les années à venir.',
    
    'services.interior.pristine_title': 'Immerse yourself in the world of pristine presentation with AeroLustre Detailing.',
    'services.interior.pristine_desc1': 'Regardless of the destination or passenger, the interior and exterior of a Private Jet are a visual representation, and this is reflected in the comfort and quality of your passengers travel. AeroLustre Detailing prides itself on delivering unrivalled detailing performance with a comprehensive range of services utilising industry-leading processes.',
    'services.interior.pristine_desc2': 'Our dedication to preserving an aircraft\'s aesthetic appeal while increasing its value and longevity is unwavering. The Cabin is where passengers spend the duration of their experience, and maximising the quality of this unique space should be at the forefront of ensuring your aircraft becomes more than just a mode of travel; it\'s an embodiment of sophistication and elegance.',
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
