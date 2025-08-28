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
      { value: 'gulfstream_g280', label: 'G280' },
      { value: 'gulfstream_g400', label: 'G400' },
      { value: 'gulfstream_g500', label: 'G500' },
      { value: 'gulfstream_g550', label: 'G550' },
      { value: 'gulfstream_g600', label: 'G600' },
      { value: 'gulfstream_g650', label: 'G650/ER' },
      { value: 'gulfstream_g700', label: 'G700' },
      { value: 'gulfstream_g800', label: 'G800' }
    ],
    bombardier: [
      { value: 'bombardier_challenger_300', label: 'Challenger 300' },
      { value: 'bombardier_challenger_350', label: 'Challenger 350' },
      { value: 'bombardier_challenger_650', label: 'Challenger 650' },
      { value: 'bombardier_global_6000', label: 'Global 6000' },
      { value: 'bombardier_global_5500', label: 'Global 5500' },
      { value: 'bombardier_global_6500', label: 'Global 6500' },
      { value: 'bombardier_learjet_40xr', label: 'Learjet 40XR' },
      { value: 'bombardier_learjet_45xr', label: 'Learjet 45XR' },
      { value: 'bombardier_learjet_60xr', label: 'Learjet 60XR' },
      { value: 'bombardier_learjet_75xr', label: 'Learjet 75XR' }
    ],
    cessna: [
      { value: 'cessna_citation_m2_gen2', label: 'Citation M2 Gen2' },
      { value: 'cessna_citation_cj3_plus', label: 'Citation CJ3+' },
      { value: 'cessna_citation_cj4_gen2', label: 'Citation CJ4 Gen2' },
      { value: 'cessna_citation_xls_gen2', label: 'Citation XLS Gen2' },
      { value: 'cessna_citation_latitude', label: 'Citation Latitude' },
      { value: 'cessna_citation_longitude', label: 'Citation Longitude' }
    ],
    dassault: [
      { value: 'dassault_falcon_2000', label: 'Falcon 2000 series' },
      { value: 'dassault_falcon_7x', label: 'Falcon 7X' },
      { value: 'dassault_falcon_8x', label: 'Falcon 8X' },
      { value: 'dassault_falcon_6x', label: 'Falcon 6X' },
      { value: 'dassault_falcon_10x', label: 'Falcon 10X' }
    ],
    embraer: [
      { value: 'embraer_phenom_100', label: 'Phenom 100' },
      { value: 'embraer_phenom_300', label: 'Phenom 300' },
      { value: 'embraer_legacy_450', label: 'Legacy 450' },
      { value: 'embraer_legacy_500', label: 'Legacy 500' },
      { value: 'embraer_legacy_650e', label: 'Legacy 650E' },
      { value: 'embraer_praetor_500', label: 'Praetor 500' },
      { value: 'embraer_praetor_600', label: 'Praetor 600' },
      { value: 'embraer_lineage_1000', label: 'Lineage 1000' }
    ],
    hondajet: [
      { value: 'hondajet_ha420', label: 'HondaJet HA-420' },
      { value: 'hondajet_elite', label: 'HondaJet Elite' },
      { value: 'hondajet_elite_ii', label: 'HondaJet Elite II' }
    ],
    pilatus: [
      { value: 'pilatus_pc24', label: 'PC-24' }
    ],
    boeing: [
      { value: 'boeing_bbj1', label: 'BBJ1' },
      { value: 'boeing_bbj2', label: 'BBJ2' },
      { value: 'boeing_bbj3', label: 'BBJ3' },
      { value: 'boeing_bbj_max', label: 'BBJ MAX' },
      { value: 'boeing_bbj_vip', label: 'BBJ VIP' },
      { value: 'boeing_747_8', label: '747-8' },
      { value: 'boeing_777_vip', label: '777 VIP' }
    ],
    airbus: [
      { value: 'airbus_acj318', label: 'ACJ318' },
      { value: 'airbus_acj319', label: 'ACJ319' },
      { value: 'airbus_acj320neo', label: 'ACJ320neo' },
      { value: 'airbus_acj330', label: 'ACJ330' },
      { value: 'airbus_acj350', label: 'ACJ350' },
      { value: 'airbus_acj380', label: 'ACJ380' }
    ],
    nextant: [
      { value: 'nextant_400xt', label: 'Nextant 400XT' }
    ],
    beechcraft: [
      { value: 'beechcraft_king_air', label: 'King Air' },
      { value: 'beechcraft_bonanza', label: 'Bonanza' },
      { value: 'beechcraft_baron_g58', label: 'Baron G58' }
    ],
    autre: [
      { value: 'autre' }
    ]
  };

  const handleBrandChange = (brand: string) => {
    setSelectedAircraftBrand(brand);
    setSelectedAircraftModel(''); // Reset model when brand changes
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => {
      // If clicking on "complete" service
      if (service === 'complete') {
        // If already selected, deselect it
        if (prev.includes(service)) {
          return prev.filter(s => s !== service);
        }
        // If not selected, select only "complete" and deselect others
        return ['complete'];
      }
      
      // If clicking on other services
      if (prev.includes(service)) {
        // Deselect the service
        return prev.filter(s => s !== service);
      } else {
        // Select the service, but remove "complete" if it was selected
        return [...prev.filter(s => s !== 'complete'), service];
      }
    });
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
                  {t('quote.aircraft_information')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Aircraft Type */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.aircraft_brand')} <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={selectedAircraftBrand}
                      onChange={(e) => handleBrandChange(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black hover:border-gray-400"
                    >
                      <option value="">{t('quote.aircraft_brand.select')}</option>
                      <option value="gulfstream">Gulfstream</option>
                      <option value="bombardier">Bombardier</option>
                      <option value="cessna">Cessna (Textron)</option>
                      <option value="dassault">Dassault</option>
                      <option value="embraer">Embraer</option>
                      <option value="hondajet">HondaJet</option>
                      <option value="pilatus">Pilatus</option>
                      <option value="boeing">Boeing (BBJ)</option>
                      <option value="airbus">Airbus (ACJ)</option>
                      <option value="nextant">Nextant</option>
                      <option value="beechcraft">Beechcraft</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Aircraft Model */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.aircraft_model_label')} <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={selectedAircraftModel}
                      onChange={(e) => setSelectedAircraftModel(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black hover:border-gray-400"
                      disabled={!selectedAircraftBrand || selectedAircraftBrand === 'autre'}
                    >
                      <option value="">
                        {!selectedAircraftBrand 
                          ? t('quote.aircraft_model.select_brand_first')
                          : selectedAircraftBrand === 'autre'
                          ? t('quote.aircraft_model.not_applicable')
                          : t('quote.aircraft_model.select_model')
                        }
                      </option>
                      {selectedAircraftBrand && selectedAircraftBrand !== 'autre' && 
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
                  {t('quote.services_requested')}
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
                            ? 'bg-gray-600 border-gray-600 text-white'
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
                            ? 'bg-gray-600 border-gray-600 text-white'
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
                  {t('quote.scheduling_urgency')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Urgency */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.urgency')} <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black hover:border-gray-400">
                      <option value="">{t('quote.urgency.select')}</option>
                      <option value="free">{t('quote.urgency.free')}</option>
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
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black hover:border-gray-400">
                      <option value="">{t('quote.airport.select')}</option>
                      <option value="XCR">Paris-Vatry </option>
                      <option value="CDG">Paris-Charles de Gaulle </option>
                      <option value="NCE">Nice-Côte d'Azur  </option>
                      <option value="CEQ">Cannes-Mandelieu  </option>
                      <option value="MRS">Marseille-Provence </option>
                      <option value="BOD">Bordeaux-Mérignac </option>
                      <option value="other">{t('quote.airport.other')}</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.preferred_date')}
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black hover:border-gray-400"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.preferred_time')}
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black hover:border-gray-400"
                    />
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block mb-3 font-semibold text-black">
                      {t('quote.contact_preference')}
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black hover:border-gray-400">
                      <option value="">{t('quote.contact_preference')}</option>
                      <option value="phone">{t('quote.contact_preference.phone')}</option>
                      <option value="email">{t('quote.contact_preference.email')}</option>
                      <option value="whatsapp">{t('quote.contact_preference.whatsapp')}</option>
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none bg-white text-black resize-none hover:border-gray-400"
                    placeholder={t('quote.special_requirements_placeholder')}
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
