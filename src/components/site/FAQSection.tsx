import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What aircraft detailing services does AeroLustre provide?",
      answer: "AeroLustre offers comprehensive aircraft detailing services including interior deep cleaning, exterior wash and wax, engine cleaning, cockpit detailing, and specialized paint protection. Our services cover everything from routine maintenance to complete aircraft restoration, ensuring your aircraft maintains its pristine appearance and optimal performance."
    },
    {
      question: "How long does a typical aircraft detailing service take?",
      answer: "Service duration varies based on aircraft size and service level. A basic exterior wash typically takes 2-3 hours, while a complete interior and exterior detailing service can take 6-8 hours for smaller aircraft and up to 24 hours for larger jets. We provide detailed time estimates during consultation and can accommodate urgent requests when possible."
    },
    {
      question: "What safety certifications does AeroLustre maintain?",
      answer: "AeroLustre maintains the highest industry safety certifications including IS-BAO Stage 2, ARGUS Platinum rating, and FAA compliance standards. Our team consists of certified aviation professionals with extensive training in aircraft maintenance, safety protocols, and industry best practices to ensure your aircraft receives the highest quality care."
    },
    {
      question: "Do you provide emergency maintenance services?",
      answer: "Yes, AeroLustre offers 24/7 emergency maintenance and detailing services. Our rapid response team is available around the clock to handle urgent aircraft maintenance needs, ensuring minimal downtime and maximum safety. We maintain emergency protocols and can deploy teams to your location within hours for critical situations."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
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
          className="mb-[50px] md:mb-[63.5px] text-gray-light font-bold text-center mozilla-headline-faq"
          style={{
            fontSize: '60px',
            lineHeight: '70px'
          }}
        >
          Frequently Asked <span style={{ color: '#fff' }}>Questions</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
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
                    fontSize: '28px'
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
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* FAA */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2 mozilla-headline-faq">FAA</h3>
            <p className="text-gray-400 text-sm mb-3 mozilla-headline-faq">CERTIFIED</p>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
              Federal Aviation Administration certified maintenance facility, ensuring all services meet the highest safety and quality standards.
            </p>
          </div>

          {/* ISO */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2 mozilla-headline-faq">ISO</h3>
            <p className="text-gray-400 text-sm mb-3 mozilla-headline-faq">9001:2015</p>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
              ISO 9001:2015 certified quality management system, demonstrating our commitment to excellence and continuous improvement.
            </p>
          </div>

          {/* NBAA */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
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
