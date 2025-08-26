import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer')
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer')
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer')
    },
    {
      question: t('faq.4.question'),
      answer: t('faq.4.answer')
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap');
          .mozilla-headline-faq {
            font-family: "Mozilla Headline", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }
        `}
      </style>
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 
          className="mb-8 sm:mb-12 lg:mb-[50px] xl:mb-[63.5px] text-gray-light font-bold text-center mozilla-headline-faq"
          style={{
            fontSize: 'clamp(32px, 5vw, 60px)',
            lineHeight: '1.1'
          }}
        >
          {t('faq.title').split(' ').slice(0, -1).join(' ')} <span style={{ color: '#fff' }}>{t('faq.questions')}</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-6 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-start gap-4 text-left group hover:bg-gray-900/20 rounded-lg px-4 py-4 transition-all duration-300"
              >
                {/* Plus/Minus Icon */}
                <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg font-medium group-hover:bg-gray-600 transition-colors group-hover:scale-110">
                  {openIndex === index ? '×' : '+'}
                </div>
                
                {/* Question */}
                <h3 
                  className="text-white font-medium flex-1 text-left group-hover:text-gray-200 transition-all duration-300"
                  style={{
                    fontFamily: '"Mozilla Headline", serif',
                    textAlign: 'left',
                    fontSize: 'clamp(18px, 4vw, 28px)'
                  }}
                >
                  {faq.question}
                </h3>
              </button>
              
              {/* Answer */}
              {openIndex === index && (
                <div className="mt-4 ml-12">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partner Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* FAA */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/images/faa.png" 
                alt="FAA Certification" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-white text-xl font-bold mb-2 mozilla-headline-faq">FAA</h3>
            <p className="text-gray-400 text-sm mb-3 mozilla-headline-faq">CERTIFIED</p>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
              Federal Aviation Administration certified facility, ensuring all services meet the highest safety and quality standards.
            </p>
          </div>

          {/* ISO */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/images/iso.png" 
                alt="ISO 9001:2015 Certification" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-white text-xl font-bold mb-2 mozilla-headline-faq">ISO</h3>
            <p className="text-gray-400 text-sm mb-3 mozilla-headline-faq">9001:2015</p>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
              ISO 9001:2015 certified quality management system, demonstrating our commitment to excellence and continuous improvement.
            </p>
          </div>

          {/* NBAA */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/images/nbaa-logo.png" 
                alt="NBAA Member" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-white text-xl font-bold mb-2 mozilla-headline-faq">NBAA</h3>
            <p className="text-gray-400 text-sm mb-3 mozilla-headline-faq">MEMBER</p>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
              National Business Aviation Association member, providing access to industry best practices and professional development resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
