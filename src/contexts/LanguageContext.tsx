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
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.legal': 'Mentions légales',
    'nav.quote': 'Demander un devis',
    
    // Services
    'service.exterior': 'Nettoyage Extérieur',
    'service.interior': 'Nettoyage Intérieur',
    'service.disinfection': 'Désinfection',
    'service.exterior.description': 'Service de nettoyage extérieur',
    'service.interior.description': 'Services de nettoyage intérieur',
    'service.disinfection.description': 'Services de désinfection',
    
    // Home page
    'hero.title': 'Nettoyage d\'Avion Privé, Perfectionné.',
    'hero.subtitle': 'Découvrez l\'excellence en nettoyage d\'avions privés avec AeroLustre.',
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
    'contact.call_24_7': 'Appeler 24/7',
    'contact.get_quote': 'Demander un devis',
    
    // Footer
    'footer.copyright': '© 2024 AEROLUSTRE. Tous droits réservés.',
    'footer.services': 'Services',
    'footer.about': 'À propos',
    'footer.contact': 'Contact',
    'footer.legal': 'Mentions légales / RGPD',
    

    
    // Fleet
    'fleet.private_jet': 'Nettoyage intérieur haut de gamme',
    'fleet.vip_airliner': 'Detaling extérieur et protection',
    'fleet.commercial_vip': 'Service cabine VIP',
    'fleet.private_jet_desc': 'Désinfection et entretien complet de la cabine (cuir, tissus, moquettes, bois, métaux précieux). Traitement anti-bactérien et neutralisation des odeurs. Restauration et protection des surfaces premium (sièges en cuir, boiseries, inox, marqueterie).',
    'fleet.vip_airliner_desc': 'Lavage minutieux de la carlingue, réacteurs, verrières et train d\'atterrissage. Polissage et application de revêtements protecteurs (céramique, cire aviation) pour améliorer l\'aérodynamisme et préserver la peinture. Nettoyage spécifique des zones sensibles (entrée d\'air, ailettes, trappes).',
    'fleet.commercial_vip_desc': 'Mise en configuration de la cabine avant chaque vol avec nettoyage final et mise en place des équipements. Linge et accessoires impeccables, sélection de produits haut de gamme à bord. Assistance personnalisée en coordination avec l\'équipage pour garantir une expérience exclusive.',
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
    'experience.expert_team_desc': 'Nos professionnels certifiés apportent des années d\'expertise en aviation, fournissant des connaissances et compétences spécialisées pour tous vos besoins de nettoyage d\'avions.',
    'experience.support_24_7_desc': 'Support 24h/24 et services d\'urgence, garantissant que vos besoins de maintenance d\'avions sont satisfaits quand et où vous avez besoin de notre expertise.',
    'experience.quality_assurance_desc': 'Processus de contrôle qualité rigoureux et inspections détaillées garantissent que chaque service répond aux plus hauts standards d\'excellence et de fiabilité.',
    'experience.custom_solutions_desc': 'Solutions de nettoyage personnalisées conçues spécifiquement pour votre type d\'avion, garantissant des résultats optimaux et une performance durable.',
    'experience.interior_refinement_desc': 'Services spécialisés de nettoyage et rénovation intérieurs, restaurant la cabine de votre avion à ses standards de luxe et confort originaux.',
    'experience.exterior_excellence_desc': 'Services professionnels de nettoyage extérieur et protection de peinture, maintenant l\'apparence élégante de votre avion et protégeant l\'intégrité de sa surface.',
    
    // Common
    'common.learn_more': 'En savoir plus',
    'common.view_gallery': 'Voir la galerie',
    'common.request_quote': 'Demander un devis',
    
    // About page CTA
    'about.cta.title': 'Prêt à transformer votre Jet Privé ?',
    'about.cta.subtitle': 'Créons quelque chose d\'extraordinaire ensemble.',
    'about.cta.button': 'Commencer',
    
    // About page Stats
    'about.stats.aircraft_serviced': 'Avions Servis',
    'about.stats.satisfied_clients': 'Clients Satisfaits',
    'about.stats.years_experience': 'Années d\'Expérience',
    'about.stats.safety_record': 'Record de Sécurité',
    
    // About page Main Section
    'about.our_story': 'NOTRE HISTOIRE',
    'about.title': 'À Propos d\'AeroLustre',
    'about.description': 'Nous sommes une équipe passionnée de professionnels dédiés à l\'excellence dans l\'entretien et le détail d\'aéronefs. Avec une attention particulière aux détails et un engagement envers l\'excellence, nous transformons votre vision en réalité.',
    'about.portfolio_button': 'Notre Portfolio',
    
    // About page Services
    'about.service.cleaning.title': 'Nettoyage',
    'about.service.cleaning.description': 'Services de nettoyage d\'avions experts garantissant que votre avion maintient son apparence optimale. Nos techniciens certifiés fournissent des soins complets et une attention à chaque détail.',
    'about.service.detailing.title': 'Détail',
    'about.service.detailing.description': 'Services professionnels de détail d\'avions qui restaurent et maintiennent l\'apparence immaculée de votre avion. Du lavage extérieur au nettoyage intérieur en profondeur.',
    'about.service.safety.title': 'Sécurité',
    'about.service.safety.description': 'Standards de sécurité intransigeants dans tous nos services. Nous suivons des protocoles et réglementations stricts pour garantir le plus haut niveau de sécurité pour votre avion.',
    'about.service.technology.title': 'Technologie',
    'about.service.technology.description': 'Équipement de pointe et techniques avancées pour des résultats supérieurs. Nous utilisons la dernière technologie pour offrir une qualité de service exceptionnelle.',
    'about.service.expertise.title': 'Expertise',
    'about.service.expertise.description': 'Années d\'expérience dans le nettoyage et le détail d\'avions. Notre équipe de professionnels apporte une expertise inégalée à chaque projet.',
    'about.service.quality.title': 'Qualité',
    'about.service.quality.description': 'Engagement envers l\'excellence dans chaque service que nous fournissons. Nous sommes fiers de livrer les résultats de la plus haute qualité qui dépassent les attentes.',
    
    // FAQ
    'faq.title': 'Questions fréquemment posées',
    'faq.questions': 'Questions',
    'faq.1.question': 'Quels services de nettoyage d\'avion AeroLustre fournit-il ?',
    'faq.1.answer': 'AeroLustre offre des services complets de nettoyage d\'avion incluant le nettoyage approfondi intérieur, le lavage et cirage extérieur, le nettoyage moteur, le nettoyage cockpit et la protection spécialisée de peinture. Nos services couvrent tout, de la restauration complète d\'avion, garantissant que votre avion maintient son apparence immaculée et ses performances optimales.',
    'faq.2.question': 'Combien de temps prend un service typique de nettoyage d\'avion ?',
    'faq.2.answer': 'La durée du service varie selon la taille de l\'avion et le niveau de service. Un lavage extérieur de base prend généralement 2-3 heures, tandis qu\'un service complet de nettoyage intérieur et extérieur peut prendre 6-8 heures pour les petits avions et jusqu\'à 24 heures pour les gros jets. Nous fournissons des estimations de temps détaillées lors de la consultation et pouvons accommoder les demandes urgentes quand possible.',
    'faq.3.question': 'Quelles certifications de sécurité AeroLustre maintient-il ?',
    'faq.3.answer': 'AeroLustre maintient les plus hautes certifications de sécurité de l\'industrie incluant IS-BAO Stage 2, la notation ARGUS Platinum et les standards de conformité FAA. Notre équipe se compose de professionnels de l\'aviation certifiés avec une formation extensive en maintenance d\'avion, protocoles de sécurité et meilleures pratiques de l\'industrie pour garantir que votre avion reçoit les soins de la plus haute qualité.',
    'faq.4.question': 'Fournissez-vous des services de nettoyage d\'urgence ?',
    'faq.4.answer': 'Oui, AeroLustre offre des services de nettoyage d\'urgence 24h/24. Notre équipe de réponse rapide est disponible 24h/24 pour gérer les besoins urgents de nettoyage d\'avion, garantissant un temps d\'arrêt minimal et une sécurité maximale. Nous maintenons des protocoles d\'urgence et pouvons déployer des équipes à votre emplacement en quelques heures pour les situations critiques.',
    
    // Experience Section
    'experience.section_title': 'Expérience',
    'experience.description': 'AeroLustre s\'engage à fournir à ses clients une expérience, pas seulement un voyage. Nous sommes fiers de ce que nous faisons ; nous visons à livrer le summum de l\'aviation privée de luxe.',
    'experience.discover_more': 'Découvrir Plus',
    
    // Trust Section
    'trust.title': 'Ils nous font confiance',
    'trust.description': 'Nous travaillons avec les plus grandes marques de l\'aviation privée pour garantir des services de qualité exceptionnelle.',
    
    // Airports Section
    'airports.title': 'Nous intervenons aux aéroports suivants',
    'airports.description': 'AeroLustre opère dans les principaux aéroports internationaux, offrant des services de nettoyage d\'avions privés de qualité exceptionnelle.',
    'airports.cta_text': 'Besoin de nos services dans un autre aéroport ?',
    'airports.cta_button': 'Contactez-nous',
    
    // Contact Section
    'contact.whatsapp_description': 'Gérez vos demandes et réservations en déplacement via chat privé avec notre équipe',
    'contact.phone_24h_description': 'Ligne téléphonique ouverte 24h/24',
    'contact.form.reason_label': 'Veuillez sélectionner la raison de votre demande',
    'contact.form.general_enquiry': 'Renseignement',
    'contact.form.press': 'Prestation',
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
    
    // Quote Request Form
    'quote.title': 'Demander un devis',
    'quote.subtitle': 'Remplissez ce formulaire pour recevoir un devis personnalisé',
    'quote.aircraft_type': 'Type d\'avion',
    'quote.aircraft_type.private_jet': 'Jet Privé',
    'quote.aircraft_type.commercial': 'Avion Commercial',
    'quote.aircraft_type.helicopter': 'Hélicoptère',
    'quote.aircraft_type.other': 'Autre',
    'quote.aircraft_model': 'Modèle d\'avion',
    'quote.aircraft_model.select': 'Sélectionnez un modèle',
    'quote.aircraft_model.gulfstream_g650': 'Gulfstream G650',
    'quote.aircraft_model.gulfstream_g550': 'Gulfstream G550',
    'quote.aircraft_model.bombardier_global_7500': 'Bombardier Global 7500',
    'quote.aircraft_model.bombardier_global_6000': 'Bombardier Global 6000',
    'quote.aircraft_model.dassault_falcon_8x': 'Dassault Falcon 8X',
    'quote.aircraft_model.dassault_falcon_7x': 'Dassault Falcon 7X',
    'quote.aircraft_model.embraer_phenom_300': 'Embraer Phenom 300',
    'quote.aircraft_model.embraer_legacy_600': 'Embraer Legacy 600',
    'quote.aircraft_model.citation_x': 'Cessna Citation X',
    'quote.aircraft_model.citation_latitude': 'Cessna Citation Latitude',
    'quote.aircraft_model.airbus_acj320': 'Airbus ACJ320',
    'quote.aircraft_model.boeing_bbj': 'Boeing BBJ',
    'quote.aircraft_model.other_model': 'Autre modèle',
    'quote.aircraft_registration': 'Immatriculation',
    'quote.service_type': 'Type de service',
    'quote.service_type.exterior': 'Nettoyage Extérieur',
    'quote.service_type.interior': 'Nettoyage Intérieur',
    'quote.service_type.disinfection': 'Désinfection',
    'quote.service_type.complete': 'Service Complet',
    'quote.urgency': 'Urgence',
    'quote.urgency.select': 'Sélectionner l\'urgence',
    'quote.urgency.free': 'Pas d\'urgence - date libre',
    'quote.urgency.low': 'Faible urgence - 1-2 semaines',
    'quote.urgency.medium': 'Urgence moyenne - 3-7 jours',
    'quote.urgency.high': 'Haute urgence - 1-2 jours',
    'quote.urgency.emergency': 'Urgence - Même jour',
    'quote.airport_location': 'Aéroport / Localisation',
    'quote.preferred_date': 'Date préférée',
    'quote.preferred_time': 'Heure préférée',
    'quote.budget_range': 'Fourchette budgétaire',
    'quote.budget_range.low': 'Économique',
    'quote.budget_range.medium': 'Standard',
    'quote.budget_range.high': 'Premium',
    'quote.budget_range.luxury': 'Luxe',
    'quote.additional_services': 'Services additionnels',
    'quote.additional_services.paint_protection': 'Protection de peinture',
    'quote.additional_services.engine_cleaning': 'Nettoyage moteur',
    'quote.additional_services.cockpit_cleaning': 'Nettoyage cockpit',
    'quote.additional_services.carpet_cleaning': 'Nettoyage moquettes',
    'quote.additional_services.uv_treatment': 'Traitement UV',
    'quote.special_requirements': 'Exigences spéciales',
    'quote.aircraft_condition': 'État de l\'avion',
    'quote.aircraft_condition.excellent': 'Excellent',
    'quote.aircraft_condition.good': 'Bon',
    'quote.aircraft_condition.fair': 'Correct',
    'quote.aircraft_condition.poor': 'Mauvais',
    'quote.previous_service': 'Service précédent',
    'quote.previous_service.none': 'Aucun',
    'quote.previous_service.other_company': 'Autre entreprise',
    'quote.previous_service.aerolustre': 'AeroLustre',
    'quote.contact_preference': 'Préférence de contact',
    'quote.contact_preference.phone': 'Téléphone',
    'quote.contact_preference.email': 'Email',
    'quote.contact_preference.whatsapp': 'WhatsApp',
    'quote.contact_preference.any': 'N\'importe lequel',
    'quote.send_quote_request': 'Demander un devis',
    
    // Quote Form Sections
    'quote.aircraft_information': 'Informations sur l\'avion',
    'quote.aircraft_brand': 'Marque de l\'appareil',
    'quote.aircraft_brand.select': 'Marque de l\'appareil',
    'quote.aircraft_brand.gulfstream': ' Gulfstream',
    'quote.aircraft_brand.bombardier': ' Bombardier',
    'quote.aircraft_brand.dassault': ' Dassault Aviation',
    'quote.aircraft_brand.cessna': ' Cessna',
    'quote.aircraft_brand.embraer': ' Embraer',
    'quote.aircraft_brand.hondajet': ' HondaJet',
    'quote.aircraft_model_label': 'Modèle de l\'appareil',
    'quote.aircraft_model.select_brand_first': 'Sélectionnez d\'abord une marque',
    'quote.aircraft_model.other_brand': 'Autre marque',
    'quote.aircraft_model.select_model': 'Sélectionner un modèle',
    'quote.aircraft_model.not_applicable': 'Non applicable',
    
    // Airport options
    'quote.airport.select': 'Sélectionner un aéroport',
    'quote.airport.other': 'Autre aéroport',
    'quote.services_requested': 'Services demandés',
    'quote.scheduling_urgency': 'Planification et urgence',
    'quote.airport_placeholder': 'ex: Paris-Charles de Gaulle (CDG)',
    'quote.special_requirements_placeholder': 'Décrivez vos exigences spéciales, contraintes ou demandes particulières...',
    
    'contact.founder.title': 'Fondateur',
    'contact.founder.welcome': 'Bienvenue chez AeroLustre, où l\'excellence et la sophistication se rencontrent dans l\'aviation privée.',
    'contact.founder.commitment': 'Nous nous engageons à dépasser vos attentes',
    'contact.founder.discover': 'avec notre service premium et notre attention aux détails. Découvrez l\'apogée du luxe aérien.',
    
    // Footer
    'footer.description': 'Services professionnels de nettoyage d\'avions. Nous fournissons des soins complets pour votre avion avec les plus hauts standards de qualité et de sécurité.',
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
    
    // Steps Section
    'steps.title': 'Les étapes',
    'steps.exterior.title': 'Processus de Nettoyage Extérieur',
    'steps.exterior.step1.title': 'Inspection Initiale',
    'steps.exterior.step1.content': 'Évaluation complète de l\'état de l\'avion et identification des zones nécessitant une attention particulière.',
    'steps.exterior.step2.title': 'Préparation et Protection',
    'steps.exterior.step2.content': 'Protection des zones sensibles et préparation des surfaces pour un nettoyage optimal.',
    'steps.exterior.step3.title': 'Nettoyage Approfondi',
    'steps.exterior.step3.content': 'Application de techniques professionnelles pour éliminer toutes les impuretés et restaurer l\'éclat.',
    'steps.exterior.step4.title': 'Protection et Finition',
    'steps.exterior.step4.content': 'Application de cires et protections pour maintenir l\'apparence et protéger contre les éléments.',
    
    'steps.interior.title': 'Processus de Nettoyage Intérieur',
    'steps.interior.step1.title': 'Évaluation de la Cabine',
    'steps.interior.step1.content': 'Inspection détaillée de l\'état intérieur et identification des zones nécessitant une restauration.',
    'steps.interior.step2.title': 'Protection des Équipements',
    'steps.interior.step2.content': 'Protection des instruments de vol et des équipements électroniques sensibles.',
    'steps.interior.step3.title': 'Nettoyage Spécialisé',
    'steps.interior.step3.content': 'Nettoyage approfondi des sièges, moquettes et surfaces avec des produits premium.',
    'steps.interior.step4.title': 'Restauration et Finition',
    'steps.interior.step4.content': 'Restauration de l\'éclat original et application de protections pour maintenir la qualité.',
    
    'steps.disinfection.title': 'Processus de Désinfection',
    'steps.disinfection.step1.title': 'Analyse des Risques',
    'steps.disinfection.step1.content': 'Évaluation des zones à risque et identification des agents pathogènes potentiels.',
    'steps.disinfection.step2.title': 'Préparation Stérile',
    'steps.disinfection.step2.content': 'Mise en place d\'un environnement de travail stérile et protection des zones sensibles.',
    'steps.disinfection.step3.title': 'Désinfection Complète',
    'steps.disinfection.step3.content': 'Application de produits de désinfection de qualité médicale sur toutes les surfaces.',
    'steps.disinfection.step4.title': 'Validation et Contrôle',
    'steps.disinfection.step4.content': 'Vérification de l\'efficacité de la désinfection et contrôle qualité final.',
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
    
    // Contact Success Page
    'contact_success.title': 'Nous avons bien reçu votre message',
    'contact_success.quote_description': 'Afin de pouvoir y répondre au mieux, nous vous invitons à remplir ce formulaire complémentaire.\n\nNotre équipe reviendra ensuite vers vous dans les plus brefs délais.',
    // Page Titles
    'page.contact.title': 'Contact',
    'page.contact.description': 'Contactez AeroLustre pour tous vos besoins de nettoyage d\'avions. Notre équipe est prête à vous fournir un service exceptionnel et un support de qualité.',
    'page.legal.title': 'Mentions légales',
    'page.legal.description': 'Informations légales et politique de protection des données',
    'page.rgpd.title': 'RGPD',
    'page.rgpd.description': 'Politique de protection des données personnelles',
    'page.mentions.title': 'Mentions légales',
    'page.mentions.description': 'Informations légales et mentions obligatoires',
    'page.about.title': 'À propos',
    'page.about.description': 'Découvrez l\'histoire et l\'expertise d\'AeroLustre',
    
    // Legal Page Content
    'legal.editor.title': 'Éditeur',
    'legal.editor.company': 'AEROLUSTRE',
    'legal.editor.address': 'Adresse : [Adresse de l\'entreprise]',
    'legal.editor.phone': 'Téléphone : [Numéro de téléphone]',
    'legal.editor.email': 'Email : contact@aerolustre.com',
    'legal.hosting.title': 'Hébergement',
    'legal.hosting.text': 'Ce site est hébergé par [Nom de l\'hébergeur]',
    'legal.hosting.address': 'Adresse : [Adresse de l\'hébergeur]',
    'legal.intellectual_property.title': 'Propriété intellectuelle',
    'legal.intellectual_property.text': 'L\'ensemble de ce site relève de la législation française et internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.',
    'legal.responsibility.title': 'Responsabilité',
    'legal.responsibility.text': 'Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l\'adresse contact@aerolustre.com.',
    
    // RGPD Page Content
    'rgpd.policy.title': 'Politique de Protection des Données (RGPD)',
    'rgpd.controller.title': 'Responsable du traitement',
    'rgpd.controller.text': 'AEROLUSTRE est responsable du traitement des données personnelles collectées sur ce site web.',
    'rgpd.data_collected.title': 'Données collectées',
    'rgpd.data_collected.text': 'Nous collectons les données suivantes :',
    'rgpd.data_collected.name': 'Nom et prénom',
    'rgpd.data_collected.email': 'Adresse email',
    'rgpd.data_collected.phone': 'Numéro de téléphone',
    'rgpd.data_collected.quote': 'Informations relatives à votre demande de devis',
    'rgpd.data_collected.navigation': 'Données de navigation (cookies)',
    'rgpd.purpose.title': 'Finalité du traitement',
    'rgpd.purpose.text': 'Vos données sont collectées pour :',
    'rgpd.purpose.quote': 'Répondre à vos demandes de devis',
    'rgpd.purpose.contact': 'Vous contacter concernant nos services',
    'rgpd.purpose.improve': 'Améliorer notre site web',
    'rgpd.purpose.legal': 'Respecter nos obligations légales',
    'rgpd.retention.title': 'Conservation des données',
    'rgpd.retention.text': 'Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de leur collecte ou du dernier contact de votre part.',
    'rgpd.rights.title': 'Vos droits',
    'rgpd.rights.text': 'Conformément au RGPD, vous disposez des droits suivants :',
    'rgpd.rights.access': 'Droit d\'accès à vos données',
    'rgpd.rights.rectification': 'Droit de rectification',
    'rgpd.rights.erasure': 'Droit à l\'effacement',
    'rgpd.rights.limitation': 'Droit à la limitation du traitement',
    'rgpd.rights.portability': 'Droit à la portabilité',
    'rgpd.rights.opposition': 'Droit d\'opposition',
    'rgpd.rights.contact': 'Pour exercer ces droits, contactez-nous à : contact@aerolustre.com',
    'rgpd.security.title': 'Sécurité',
    'rgpd.security.text': 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.',
    
    // FAQ Certifications
    'faq.faa.title': 'FAA',
    'faq.faa.certified': 'CERTIFIÉ',
    'faq.faa.description': 'Installation certifiée par l\'Administration fédérale de l\'aviation, garantissant que tous les services répondent aux plus hauts standards de sécurité et de qualité.',
    'faq.iso.title': 'ISO',
    'faq.iso.certified': '9001:2015',
    'faq.iso.description': 'Système de gestion de la qualité certifié ISO 9001:2015, démontrant notre engagement envers l\'excellence et l\'amélioration continue.',
    'faq.nbaa.title': 'NBAA',
    'faq.nbaa.member': 'MEMBRE',
    'faq.nbaa.description': 'Membre de l\'Association nationale de l\'aviation d\'affaires, offrant l\'accès aux meilleures pratiques de l\'industrie et aux ressources de développement professionnel.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.legal': 'Legal Notice',
    'nav.quote': 'Request a Quote',
    
    // Services
    'service.exterior': 'Exterior Cleaning',
    'service.interior': 'Interior Cleaning',
    'service.disinfection': 'Disinfection',
    'service.exterior.description': 'Exterior cleaning service',
    'service.interior.description': 'Interior cleaning services',
    'service.disinfection.description': 'Sanitization services',
    
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
    
    // About page CTA
    'about.cta.title': 'Ready to transform your Private Jet?',
    'about.cta.subtitle': 'Let\'s create something extraordinary together.',
    'about.cta.button': 'Get Started',
    
    // About page Stats
    'about.stats.aircraft_serviced': 'Aircraft Serviced',
    'about.stats.satisfied_clients': 'Satisfied Clients',
    'about.stats.years_experience': 'Years Experience',
    'about.stats.safety_record': 'Safety Record',
    
    // About page Main Section
    'about.our_story': 'OUR STORY',
    'about.title': 'About AeroLustre',
    'about.description': 'We are a passionate team of professionals dedicated to excellence in aircraft maintenance and detailing. With meticulous attention to detail and a commitment to excellence, we transform your vision into reality.',
    'about.portfolio_button': 'Our Portfolio',
    
    // About page Services
    'about.service.cleaning.title': 'Cleaning',
    'about.service.cleaning.description': 'Expert aircraft cleaning services ensuring your aircraft maintains peak appearance. Our certified technicians provide comprehensive care and attention to every detail.',
    'about.service.detailing.title': 'Detailing',
    'about.service.detailing.description': 'Professional aircraft detailing services that restore and maintain the pristine appearance of your aircraft. From exterior washing to interior deep cleaning.',
    'about.service.safety.title': 'Safety',
    'about.service.safety.description': 'Uncompromising safety standards in all our services. We follow strict protocols and regulations to ensure the highest level of safety for your aircraft.',
    'about.service.technology.title': 'Technology',
    'about.service.technology.description': 'State-of-the-art equipment and advanced techniques for superior results. We use the latest technology to deliver exceptional service quality.',
    'about.service.expertise.title': 'Expertise',
    'about.service.expertise.description': 'Years of experience in aircraft cleaning and detailing. Our team of professionals brings unparalleled expertise to every project.',
    'about.service.quality.title': 'Quality',
    'about.service.quality.description': 'Commitment to excellence in every service we provide. We take pride in delivering the highest quality results that exceed expectations.',
    
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
    'contact.call_24_7': 'Call 24/7',
    'contact.form.reason_label': 'Please select the reason for your enquiry',
    'contact.form.general_enquiry': 'Renseignement',
    'contact.form.press': 'Prestation',
    'contact.form.other': 'Autre',
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
    
    // Quote Request Form
    'quote.title': 'Request a Quote',
    'quote.subtitle': 'Fill out this form to receive a personalized quote',
    'quote.aircraft_type': 'Aircraft Type',
    'quote.aircraft_type.private_jet': 'Private Jet',
    'quote.aircraft_type.commercial': 'Commercial Aircraft',
    'quote.aircraft_type.helicopter': 'Helicopter',
    'quote.aircraft_type.other': 'Other',
    'quote.aircraft_model': 'Aircraft Model',
    'quote.aircraft_model.select': 'Select a model',
    'quote.aircraft_model.gulfstream_g650': 'Gulfstream G650',
    'quote.aircraft_model.gulfstream_g550': 'Gulfstream G550',
    'quote.aircraft_model.bombardier_global_7500': 'Bombardier Global 7500',
    'quote.aircraft_model.bombardier_global_6000': 'Bombardier Global 6000',
    'quote.aircraft_model.dassault_falcon_8x': 'Dassault Falcon 8X',
    'quote.aircraft_model.dassault_falcon_7x': 'Dassault Falcon 7X',
    'quote.aircraft_model.embraer_phenom_300': 'Embraer Phenom 300',
    'quote.aircraft_model.embraer_legacy_600': 'Embraer Legacy 600',
    'quote.aircraft_model.citation_x': 'Cessna Citation X',
    'quote.aircraft_model.citation_latitude': 'Cessna Citation Latitude',
    'quote.aircraft_model.airbus_acj320': 'Airbus ACJ320',
    'quote.aircraft_model.boeing_bbj': 'Boeing BBJ',
    'quote.aircraft_model.other_model': 'Other model',
    'quote.aircraft_registration': 'Registration',
    'quote.service_type': 'Service Type',
    'quote.service_type.exterior': 'Exterior Cleaning',
    'quote.service_type.interior': 'Interior Cleaning',
    'quote.service_type.disinfection': 'Disinfection',
    'quote.service_type.complete': 'Complete Service',
    'quote.urgency': 'Urgency',
    'quote.urgency.select': 'Select urgency',
    'quote.urgency.free': 'No urgency - free date',
    'quote.urgency.low': 'Low urgency - 1-2 weeks',
    'quote.urgency.medium': 'Medium urgency - 3-7 days',
    'quote.urgency.high': 'High urgency - 1-2 days',
    'quote.urgency.emergency': 'Emergency - Same day',
    'quote.airport_location': 'Airport / Location',
    'quote.preferred_date': 'Preferred Date',
    'quote.preferred_time': 'Preferred Time',
    'quote.budget_range': 'Budget Range',
    'quote.budget_range.low': 'Economy',
    'quote.budget_range.medium': 'Standard',
    'quote.budget_range.high': 'Premium',
    'quote.budget_range.luxury': 'Luxury',
    'quote.additional_services': 'Additional Services',
    'quote.additional_services.paint_protection': 'Paint Protection',
    'quote.additional_services.engine_cleaning': 'Engine Cleaning',
    'quote.additional_services.cockpit_cleaning': 'Cockpit Cleaning',
    'quote.additional_services.carpet_cleaning': 'Carpet Cleaning',
    'quote.additional_services.uv_treatment': 'UV Treatment',
    'quote.special_requirements': 'Special Requirements',
    'quote.aircraft_condition': 'Aircraft Condition',
    'quote.aircraft_condition.excellent': 'Excellent',
    'quote.aircraft_condition.good': 'Good',
    'quote.aircraft_condition.fair': 'Fair',
    'quote.aircraft_condition.poor': 'Poor',
    'quote.previous_service': 'Previous Service',
    'quote.previous_service.none': 'None',
    'quote.previous_service.other_company': 'Other Company',
    'quote.previous_service.aerolustre': 'AeroLustre',
    'quote.contact_preference': 'Contact Preference',
    'quote.contact_preference.phone': 'Phone',
    'quote.contact_preference.email': 'Email',
    'quote.contact_preference.whatsapp': 'WhatsApp',
    'quote.contact_preference.any': 'Any',
    'quote.send_quote_request': 'Request Quote',
    
    // Quote Form Sections
    'quote.aircraft_information': 'Aircraft Information',
    'quote.aircraft_brand': 'Aircraft Brand',
    'quote.aircraft_brand.select': 'Aircraft Brand',
    'quote.aircraft_brand.gulfstream': '✈️ Gulfstream',
    'quote.aircraft_brand.bombardier': '✈️ Bombardier',
    'quote.aircraft_brand.dassault': '✈️ Dassault Aviation',
    'quote.aircraft_brand.cessna': '✈️ Cessna',
    'quote.aircraft_brand.embraer': '✈️ Embraer',
    'quote.aircraft_brand.hondajet': '✈️ HondaJet',
    'quote.aircraft_model_label': 'Aircraft Model',
    'quote.aircraft_model.select_brand_first': 'Select a brand first',
    'quote.aircraft_model.other_brand': 'Other Brand',
    'quote.aircraft_model.select_model': 'Select a model',
    'quote.aircraft_model.not_applicable': 'Not applicable',
    
    // Airport options
    'quote.airport.select': 'Select an airport',
    'quote.airport.other': 'Other airport',
    'quote.services_requested': 'Requested Services',
    'quote.scheduling_urgency': 'Scheduling & Urgency',
    'quote.airport_placeholder': 'e.g.: Paris-Charles de Gaulle (CDG)',
    'quote.special_requirements_placeholder': 'Describe your special requirements, constraints or specific requests...',
    
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
    
    // Steps Section
    'steps.title': 'The Steps',
    'steps.exterior.title': 'Exterior Cleaning Process',
    'steps.exterior.step1.title': 'Initial Inspection',
    'steps.exterior.step1.content': 'Comprehensive assessment of aircraft condition and identification of areas requiring special attention.',
    'steps.exterior.step2.title': 'Preparation and Protection',
    'steps.exterior.step2.content': 'Protection of sensitive areas and surface preparation for optimal cleaning.',
    'steps.exterior.step3.title': 'Deep Cleaning',
    'steps.exterior.step3.content': 'Application of professional techniques to remove all impurities and restore shine.',
    'steps.exterior.step4.title': 'Protection and Finishing',
    'steps.exterior.step4.content': 'Application of waxes and protections to maintain appearance and protect against elements.',
    
    'steps.interior.title': 'Interior Cleaning Process',
    'steps.interior.step1.title': 'Cabin Assessment',
    'steps.interior.step1.content': 'Detailed inspection of interior condition and identification of areas requiring restoration.',
    'steps.interior.step2.title': 'Equipment Protection',
    'steps.interior.step2.content': 'Protection of flight instruments and sensitive electronic equipment.',
    'steps.interior.step3.title': 'Specialized Cleaning',
    'steps.interior.step3.content': 'Deep cleaning of seats, carpets and surfaces with premium products.',
    'steps.interior.step4.title': 'Restoration and Finishing',
    'steps.interior.step4.content': 'Restoration of original shine and application of protections to maintain quality.',
    
    'steps.disinfection.title': 'Disinfection Process',
    'steps.disinfection.step1.title': 'Risk Analysis',
    'steps.disinfection.step1.content': 'Assessment of high-risk areas and identification of potential pathogens.',
    'steps.disinfection.step2.title': 'Sterile Preparation',
    'steps.disinfection.step2.content': 'Setting up a sterile work environment and protecting sensitive areas.',
    'steps.disinfection.step3.title': 'Complete Disinfection',
    'steps.disinfection.step3.content': 'Application of medical-grade disinfection products on all surfaces.',
    'steps.disinfection.step4.title': 'Validation and Control',
    'steps.disinfection.step4.content': 'Verification of disinfection effectiveness and final quality control.',
    
    // Service Page Content
    'services.exterior.perfection_title': 'Plongez dans l\'univers de la perfection avec AeroLustre.',
    'services.exterior.perfection_desc1': 'Chez AeroLustre, nous comprenons que chaque Jet Privé est le reflet de l\'excellence et du prestige. Notre service de nettoyage extérieur transforme votre appareil en véritable œuvre d\'art, où chaque détail compte et chaque surface brille de mille feux.',
    'services.exterior.perfection_desc2': 'Notre expertise unique combine techniques traditionnelles et technologies de pointe pour offrir un résultat incomparable. Nous ne nous contentons pas de nettoyer, nous restaurons la splendeur originelle de votre avion, préservant sa valeur et son éclat pour les années à venir.',
    
    'services.interior.pristine_title': 'Immerse yourself in the world of pristine presentation with AeroLustre Detailing.',
    'services.interior.pristine_desc1': 'Regardless of the destination or passenger, the interior and exterior of a Private Jet are a visual representation, and this is reflected in the comfort and quality of your passengers travel. AeroLustre Detailing prides itself on delivering unrivalled detailing performance with a comprehensive range of services utilising industry-leading processes.',
    'services.interior.pristine_desc2': 'Our dedication to preserving an aircraft\'s aesthetic appeal while increasing its value and longevity is unwavering. The Cabin is where passengers spend the duration of their experience, and maximising the quality of this unique space should be at the forefront of ensuring your aircraft becomes more than just a mode of travel; it\'s an embodiment of sophistication and elegance.',
    
    // Contact Success Page
    'contact_success.title': 'We have received your message',
    'contact_success.subtitle': 'We have received your message and, in order to respond to it as best as possible, we invite you to fill out this complementary form.\n\nOur team will then get back to you as soon as possible.',
    'contact_success.quote_title': 'We have received your message and, in order to respond to it as best as possible, we invite you to fill out this complementary form.',
    'contact_success.quote_description': 'Our team will then get back to you as soon as possible.',
    
    // Page Titles
    'page.contact.title': 'Contact',
    'page.contact.description': 'Get in touch with AeroLustre for all your aircraft detailing needs. Our team is ready to provide you with exceptional service and support.',
    'page.legal.title': 'Legal Notice',
    'page.legal.description': 'Legal information and data protection policy',
    'page.rgpd.title': 'GDPR',
    'page.rgpd.description': 'Personal data protection policy',
    'page.mentions.title': 'Legal Notice',
    'page.mentions.description': 'Legal information and mandatory notices',
    'page.about.title': 'About',
    'page.about.description': 'Discover the story and expertise of AeroLustre',
    
    // Legal Page Content
    'legal.editor.title': 'Publisher',
    'legal.editor.company': 'AEROLUSTRE',
    'legal.editor.address': 'Address: [Company address]',
    'legal.editor.phone': 'Phone: [Phone number]',
    'legal.editor.email': 'Email: contact@aerolustre.com',
    'legal.hosting.title': 'Hosting',
    'legal.hosting.text': 'This site is hosted by [Host name]',
    'legal.hosting.address': 'Address: [Host address]',
    'legal.intellectual_property.title': 'Intellectual Property',
    'legal.intellectual_property.text': 'This entire site is subject to French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.',
    'legal.responsibility.title': 'Liability',
    'legal.responsibility.text': 'The information contained on this site is as accurate as possible and the site is periodically updated, but may nevertheless contain inaccuracies, omissions or gaps. If you notice a gap, error or what appears to be a malfunction, please report it by email to contact@aerolustre.com.',
    
    // RGPD Page Content
    'rgpd.policy.title': 'Data Protection Policy (GDPR)',
    'rgpd.controller.title': 'Data Controller',
    'rgpd.controller.text': 'AEROLUSTRE is responsible for processing personal data collected on this website.',
    'rgpd.data_collected.title': 'Data Collected',
    'rgpd.data_collected.text': 'We collect the following data:',
    'rgpd.data_collected.name': 'First and last name',
    'rgpd.data_collected.email': 'Email address',
    'rgpd.data_collected.phone': 'Phone number',
    'rgpd.data_collected.quote': 'Information related to your quote request',
    'rgpd.data_collected.navigation': 'Navigation data (cookies)',
    'rgpd.purpose.title': 'Purpose of Processing',
    'rgpd.purpose.text': 'Your data is collected for:',
    'rgpd.purpose.quote': 'Responding to your quote requests',
    'rgpd.purpose.contact': 'Contacting you regarding our services',
    'rgpd.purpose.improve': 'Improving our website',
    'rgpd.purpose.legal': 'Complying with our legal obligations',
    'rgpd.retention.title': 'Data Retention',
    'rgpd.retention.text': 'Your personal data is retained for a maximum period of 3 years from collection or your last contact.',
    'rgpd.rights.title': 'Your Rights',
    'rgpd.rights.text': 'In accordance with GDPR, you have the following rights:',
    'rgpd.rights.access': 'Right of access to your data',
    'rgpd.rights.rectification': 'Right of rectification',
    'rgpd.rights.erasure': 'Right to erasure',
    'rgpd.rights.limitation': 'Right to limitation of processing',
    'rgpd.rights.portability': 'Right to data portability',
    'rgpd.rights.opposition': 'Right to object',
    'rgpd.rights.contact': 'To exercise these rights, contact us at: contact@aerolustre.com',
    'rgpd.security.title': 'Security',
    'rgpd.security.text': 'We implement appropriate technical and organizational measures to protect your personal data against any unauthorized access, modification, disclosure or destruction.',
    
    // FAQ Certifications
    'faq.faa.title': 'FAA',
    'faq.faa.certified': 'CERTIFIED',
    'faq.faa.description': 'Federal Aviation Administration certified facility, ensuring all services meet the highest safety and quality standards.',
    'faq.iso.title': 'ISO',
    'faq.iso.certified': '9001:2015',
    'faq.iso.description': 'ISO 9001:2015 certified quality management system, demonstrating our commitment to excellence and continuous improvement.',
    'faq.nbaa.title': 'NBAA',
    'faq.nbaa.member': 'MEMBER',
    'faq.nbaa.description': 'National Business Aviation Association member, providing access to industry best practices and professional development resources.',
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
