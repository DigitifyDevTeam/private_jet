import Reveal from "./Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DiscoverFleetSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6 bg-background">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap');
          .mozilla-headline-fleet {
            font-family: "Mozilla Headline", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          {/* Header Section */}
          <div className="mb-4">
            <p
              className="text-sm tracking-widest uppercase mb-8"
              style={{
                color: '#9ca3af',
                fontSize: 'var(--wp--preset--font-size--small)',
                lineHeight: 'inherit'
              }}
            >
              {t('section.discover_fleet').toUpperCase()}
            </p>
          </div>

          <div className="mb-16">
            {/* Main Heading */}
            <div className="max-w-2xl">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl leading-tight mozilla-headline-fleet"
                style={{
                  color: '#dad9d6',
                  lineHeight: '1.1'
                }}
              >
                {t('section.discover_fleet_description')}
              </h2>
            </div>
          </div>

          {/* Fleet Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Private Jet */}
            <div className="group relative rounded-3xl overflow-hidden bg-gray-800 min-h-[400px] hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0">
                <img
                  src="/images/private-jet.png"
                  alt="Luxurious private jet interior with blue ambient lighting and plush seating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-500"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end group-hover:justify-center transition-all duration-500">
                <h4
                  className="mb-2.5 md:mb-3 !text-[36px] text-white !leading-[40px] mb-0 group-hover:mb-6 transition-all duration-500"
                  style={{
                    color: '#ffffff',
                    fontSize: '36px',
                    lineHeight: '40px'
                  }}
                >
                  {t('fleet.private_jet')}
                </h4>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 max-h-0 group-hover:max-h-96 overflow-hidden">
                  <p
                    className="text-white text-sm leading-relaxed"
                    style={{
                      color: '#ffffff',
                      fontSize: 'var(--wp--preset--font-size--small)',
                      lineHeight: '1.6'
                    }}
                  >
                    {t('fleet.private_jet_desc')}
                  </p>
                  <div className="mt-4 flex items-center text-white text-sm font-medium">
                    <span>{t('fleet.discover_more')}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Airliner */}
            <div className="group relative rounded-3xl overflow-hidden bg-gray-800 min-h-[400px] hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0">
                <img
                  src="/images/vip-airliner.png"
                  alt="Premium VIP airliner cabin with executive seating and luxury amenities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-500"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end group-hover:justify-center transition-all duration-500">
                <h4
                  className="mb-2.5 md:mb-3 !text-[36px] text-white !leading-[40px] mb-0 group-hover:mb-6 transition-all duration-500"
                  style={{
                    color: '#ffffff',
                    fontSize: '36px',
                    lineHeight: '40px'
                  }}
                >
                  {t('fleet.vip_airliner')}
                </h4>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 max-h-0 group-hover:max-h-96 overflow-hidden">
                  <p
                    className="text-white text-sm leading-relaxed"
                    style={{
                      color: '#ffffff',
                      fontSize: 'var(--wp--preset--font-size--small)',
                      lineHeight: '1.6'
                    }}
                  >
                    {t('fleet.vip_airliner_desc')}
                  </p>
                  <div className="mt-4 flex items-center text-white text-sm font-medium">
                    <span>{t('fleet.discover_more')}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial VIP */}
            <div className="group relative rounded-3xl overflow-hidden bg-gray-800 min-h-[400px] hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0">
                <img
                  src="/images/business-vip.png"
                  alt="Commercial VIP aircraft with sophisticated interior and business-class amenities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-500"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end group-hover:justify-center transition-all duration-500">
                <h4
                  className="mb-2.5 md:mb-3 !text-[36px] text-white !leading-[40px] mb-0 group-hover:mb-6 transition-all duration-500"
                  style={{
                    color: '#ffffff',
                    fontSize: '36px',
                    lineHeight: '40px'
                  }}
                >
                  {t('fleet.commercial_vip')}
                </h4>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 max-h-0 group-hover:max-h-96 overflow-hidden">
                  <p
                    className="text-white text-sm leading-relaxed"
                    style={{
                      color: '#ffffff',
                      fontSize: 'var(--wp--preset--font-size--small)',
                      lineHeight: '1.6'
                    }}
                  >
                    {t('fleet.commercial_vip_desc')}
                  </p>
                  <div className="mt-4 flex items-center text-white text-sm font-medium">
                    <span>{t('fleet.discover_more')}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
