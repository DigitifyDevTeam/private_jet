import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function QuoteRequestForm() {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState<string[]>([]);
  const [selectedAircraftBrand, setSelectedAircraftBrand] = useState<string>('');
  const [selectedAircraftModel, setSelectedAircraftModel] = useState<string>('');

  const aircraftModels = {
    gulfstream: [
      { value: 'gulfstream_g650', label: 'Gulfstream G650 / G650ER' },
      { value: 'gulfstream_g700', label: 'Gulfstream G700' },
      { value: 'gulfstream_g500', label: 'Gulfstream G500' },
      { value: 'gulfstream_g600', label: 'Gulfstream G600' }
    ],
    bombardier: [
      { value: 'bombardier_global_7500', label: 'Global 7500' },
      { value: 'bombardier_challenger_650', label: 'Challenger 650' },
      { value: 'bombardier_learjet_75', label: 'Learjet 75 Liberty' }
    ],
    dassault: [
      { value: 'dassault_falcon_7x', label: 'Falcon 7X' },
      { value: 'dassault_falcon_8x', label: 'Falcon 8X' },
      { value: 'dassault_falcon_10x', label: 'Falcon 10X' },
      { value: 'dassault_falcon_2000lxs', label: 'Falcon 2000LXS' }
    ],
    cessna: [
      { value: 'cessna_citation_longitude', label: 'Citation Longitude' },
      { value: 'cessna_citation_xls', label: 'Citation XLS+' },
      { value: 'cessna_citation_cj4', label: 'Citation CJ4' },
      { value: 'cessna_citation_mustang', label: 'Citation Mustang' }
    ],
    embraer: [
      { value: 'embraer_phenom_300e', label: 'Phenom 300E' },
      { value: 'embraer_praetor_500', label: 'Praetor 500' },
      { value: 'embraer_praetor_600', label: 'Praetor 600' },
      { value: 'embraer_legacy_650', label: 'Legacy 650' }
    ],
    hondajet: [
      { value: 'hondajet_elite_ii', label: 'HondaJet Elite II' }
    ]
  };

  const handleBrandChange = (brand: string) => {
    setSelectedAircraftBrand(brand);
    setSelectedAircraftModel(''); // Reset model when brand changes
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleAdditionalServiceToggle = (service: string) => {
    setSelectedAdditionalServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="py-4 sm:py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Quote Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <form className="space-y-6">
              {/* Aircraft Information */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                  Informations sur l'avion
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Aircraft Type */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      Marque de l'appareil <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={selectedAircraftBrand}
                      onChange={(e) => handleBrandChange(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black"
                    >
                      <option value="">Marque de l'appareil</option>
                      <option value="gulfstream">✈️ Gulfstream</option>
                      <option value="bombardier">✈️ Bombardier</option>
                      <option value="dassault">✈️ Dassault Aviation</option>
                      <option value="cessna">✈️ Cessna</option>
                      <option value="embraer">✈️ Embraer</option>
                      <option value="hondajet">✈️ HondaJet</option>
                      <option value="other">Autre marque</option>
                    </select>
                  </div>

                  {/* Aircraft Model */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      Modèle de l'appareil <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={selectedAircraftModel}
                      onChange={(e) => setSelectedAircraftModel(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black"
                      disabled={!selectedAircraftBrand || selectedAircraftBrand === 'other'}
                    >
                      <option value="">
                        {!selectedAircraftBrand 
                          ? "Sélectionnez d'abord une marque" 
                          : selectedAircraftBrand === 'other' 
                            ? "Autre marque" 
                            : "Sélectionner un modèle"
                        }
                      </option>
                      {selectedAircraftBrand && selectedAircraftBrand !== 'other' && 
                        aircraftModels[selectedAircraftBrand as keyof typeof aircraftModels]?.map((model) => (
                          <option key={model.value} value={model.value}>
                            {model.label}
                          </option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                  Services demandés
                </h3>

                {/* Service Type */}
                <div>
                  <label className="block mb-4 font-semibold text-black">
                    {t('quote.service_type')} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { key: 'exterior', label: t('quote.service_type.exterior') },
                      { key: 'interior', label: t('quote.service_type.interior') },
                      { key: 'disinfection', label: t('quote.service_type.disinfection') },
                      { key: 'complete', label: t('quote.service_type.complete') }
                    ].map((service) => (
                      <button
                        key={service.key}
                        type="button"
                        onClick={() => handleServiceToggle(service.key)}
                        className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
                          selectedServices.includes(service.key)
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'bg-white border-gray-300 text-black hover:border-gray-400'
                        }`}
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <label className="block mb-4 font-semibold text-black">
                    {t('quote.additional_services')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { key: 'paint_protection', label: t('quote.additional_services.paint_protection') },
                      { key: 'engine_cleaning', label: t('quote.additional_services.engine_cleaning') },
                      { key: 'cockpit_cleaning', label: t('quote.additional_services.cockpit_cleaning') },
                      { key: 'carpet_cleaning', label: t('quote.additional_services.carpet_cleaning') },
                      { key: 'uv_treatment', label: t('quote.additional_services.uv_treatment') }
                    ].map((service) => (
                      <button
                        key={service.key}
                        type="button"
                        onClick={() => handleAdditionalServiceToggle(service.key)}
                        className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors text-sm ${
                          selectedAdditionalServices.includes(service.key)
                            ? 'bg-green-600 border-green-600 text-white'
                            : 'bg-white border-gray-300 text-black hover:border-gray-400'
                        }`}
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scheduling & Urgency */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: '"Mozilla Headline", sans-serif' }}>
                  Planification et urgence
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Urgency */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.urgency')} <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black">
                      <option value="">{t('quote.urgency')}</option>
                      <option value="low">{t('quote.urgency.low')}</option>
                      <option value="medium">{t('quote.urgency.medium')}</option>
                      <option value="high">{t('quote.urgency.high')}</option>
                      <option value="emergency">{t('quote.urgency.emergency')}</option>
                    </select>
                  </div>

                  {/* Airport Location */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.airport_location')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black"
                      placeholder="ex: Paris-Charles de Gaulle (CDG)"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.preferred_date')}
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.preferred_time')}
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black"
                    />
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.contact_preference')}
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black">
                      <option value="">{t('quote.contact_preference')}</option>
                      <option value="phone">{t('quote.contact_preference.phone')}</option>
                      <option value="email">{t('quote.contact_preference.email')}</option>
                      <option value="whatsapp">{t('quote.contact_preference.whatsapp')}</option>
                      <option value="any">{t('quote.contact_preference.any')}</option>
                    </select>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <label className="block mb-3 font-semibold text-black">
                    {t('quote.special_requirements')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black resize-none"
                    placeholder="Décrivez vos exigences spéciales, contraintes ou demandes particulières..."
                  ></textarea>
                </div>
              </div>

                             {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="px-12 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors text-lg"
                  style={{ fontFamily: '"Mozilla Headline", sans-serif' }}
                >
                  {t('quote.send_quote_request')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
