import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function OfficeLocationSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
            {t('section.offices')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            AeroLustre is a global business with offices strategically placed to support flight operations, maintenance and 
            ensure provision of our goal to be the leading luxury aircraft maintenance and detailing service.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* France Office */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col">
            {/* France Map Background */}
            <div className="mb-6 relative flex justify-center">
              <img 
                src="/images/france.png"
                alt="France Office Location"
                className="w-64 h-72 object-contain rounded-lg shadow-xl"
              />
            </div>

            <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">{t('office.france')}</h3>
            
            <div className="space-y-2 mb-8 text-gray-400 flex-grow">
              <p>Terminal 2F, Aéroport Charles de Gaulle,</p>
              <p>Zone Aviation Privée, Roissy</p>
              <p>95700, France</p>
            </div>

            <div className="text-white text-lg mt-auto">
              +33 1 70 36 39 50
            </div>
          </div>

          {/* Dubai Office */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col">
            {/* Dubai Map Background */}
            <div className="mb-6 relative flex justify-center">
              <img 
                src="/images/dubai.png"
                alt="Dubai Office Location"
                className="w-64 h-72 object-contain rounded-lg shadow-xl"
              />
            </div>

            <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">Dubai</h3>
            
            <div className="space-y-2 mb-8 text-gray-400 flex-grow">
              <p>Al Maktoum International Airport,</p>
              <p>Dubai World Central, Terminal 1</p>
              <p>Dubai, United Arab Emirates</p>
            </div>

            <div className="text-white text-lg mt-auto">
              +971 4 605 1234
            </div>
          </div>

          {/* Promotional Card */}
          <div className="bg-gray-200 rounded-2xl p-6 sm:p-8 text-gray-800 flex flex-col justify-between">
            <div className="mb-8">
              <p className="text-xl leading-relaxed">
                Get an exclusive insight of the luxury aircraft maintenance and detailing experience with AeroLustre, stay updated on our latest service offers, and become part of our community.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
