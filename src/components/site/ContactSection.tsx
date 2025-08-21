import Reveal from "./Reveal";

<h2 className="text-4xl md:text-5xl font-light mb-4 text-center text-white">À Propos d'AeroLustre</h2>


export default function ContactSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div 
            className="w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '1.75rem',
              color: '#dad9d6',
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
              fontSize: '100%',
              lineHeight: 'inherit',
              WebkitTextSizeAdjust: '100%',
              fontFeatureSettings: 'normal',
              fontVariationSettings: 'normal',
              tabSize: 4,
              border: '0 solid',
              boxSizing: 'border-box',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            {/* WhatsApp Card - Dark Background */}
            <a 
              href="https://wa.me/+447584900500" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card rounded-[30px] hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #ffffff',
                color: '#ffffff',
                textDecoration: 'none'
              }}
            >
              <div 
                className="card__container rounded-[30px] px-[30px] pb-7 pt-[27px] lg:px-10 lg:pt-8 lg:pb-9 flex flex-col justify-between h-full"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff'
                }}
              >
                <div className="text">
                  <div className="heading flex flex-row items-center mb-4 sm:mb-[15px]">
                    <img 
                      className="w-[26px] h-auto mr-[15px]" 
                      src="https://www.airx.aero/wp-content/uploads/2024/03/Group-4309.svg" 
                      alt="WhatsApp Icon"
                    />
                    <h5 
                      className="text-[24px] lg:text-[31px] leading-tight tracking-tight font-semibold"
                      style={{
                        color: '#ffffff',
                        fontSize: 'var(--wp--preset--font-size--large)',
                        lineHeight: 'inherit'
                      }}
                    >
                      WhatsApp
                    </h5>
                  </div>
                  <p 
                    className="leading-6 md:leading-[27px] text-[16px] md:text-[19px] font-medium"
                    style={{
                      color: '#cccccc',
                      fontSize: 'var(--wp--preset--font-size--normal)',
                      lineHeight: 'inherit',
                      fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                    }}
                  >
                    Manage your enquiries and bookings on the go via private chat with our team
                  </p>
                </div>
                <div 
                  className="external-link mt-5"
                  style={{
                    color: '#ffffff'
                  }}
                ></div>
              </div>
            </a>

            {/* Contact Info Card - Light Background */}
            <div 
              className="card rounded-[30px]"
              style={{
                backgroundColor: '#f5f5f5',
                color: '#1a1a1a'
              }}
            >
              <div 
                className="card__container rounded-[30px] px-[30px] pb-7 pt-[27px] lg:px-10 lg:pt-8 lg:pb-9 flex flex-col"
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#1a1a1a'
                }}
              >
                <a 
                  href="mailto:info@AeroLustre.fr" 
                  className="leading-tight font-semibold mb-3 sm:mb-[15px] hover:opacity-80 transition-opacity duration-300"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'var(--wp--preset--font-size--large)',
                    lineHeight: 'inherit',
                    textDecoration: 'none',
                    fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                  }}
                >
                  info@AeroLustre.fr
                </a>
                <a 
                  href="tel:+123456789012" 
                  className="leading-tight font-semibold mb-8 md:mb-[31px] hover:opacity-80 transition-opacity duration-300"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'var(--wp--preset--font-size--large)',
                    lineHeight: 'inherit',
                    textDecoration: 'none',
                    fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                  }}
                >
                  +12 345 678 9012
                </a>
                <p 
                  className="font-medium leading-tight"
                  style={{
                    color: '#666666',
                    fontSize: 'var(--wp--preset--font-size--medium)',
                    lineHeight: 'inherit',
                    fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                  }}
                >
                  Telephone line open 24 hours a day
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-3 sm:gap-5 lg:gap-7 w-full">
            {/* Contact Form Card */}
            <div
              className="card form-card md:col-span-2 max-w-[100%]"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '30px',
                border: '1px solid #d1d5db'
              }}
            >
              <div
                className="card__container p-[30px] lg:p-10 pt-[25px] lg:pt-[35px] max-w-[100%]"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '30px'
                }}
              >
                <div className="form-container max-w-[100%]">
                  <form className="space-y-8">
                    {/* Reason for Enquiry */}
                    <div>
                      <label className="block mb-6 font-semibold text-lg" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                        Please select the reason for your enquiry <span style={{ color: '#cf2e2e' }}>*</span>
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          className="px-6 py-3 rounded-full border border-gray-400 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                          style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #9ca3af',
                            color: '#000000',
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        >
                          General Enquiry
                        </button>
                        <button
                          type="button"
                          className="px-6 py-3 rounded-full border border-gray-400 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                          style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #9ca3af',
                            color: '#000000',
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        >
                          Press
                        </button>
                        <button
                          type="button"
                          className="px-6 py-3 rounded-full border border-gray-400 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                          style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #9ca3af',
                            color: '#000000',
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        >
                          Other
                        </button>
                      </div>
                    </div>

                    {/* Personal Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-4 font-semibold text-base" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                          Full Name <span style={{ color: '#cf2e2e' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-gray-600 focus:outline-none"
                          style={{ 
                            color: '#000000',
                            borderBottom: '2px solid #9ca3af',
                            backgroundColor: 'transparent',
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        />
                      </div>
                      <div>
                        <label className="block mb-4 font-semibold text-base" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                          Phone Number <span style={{ color: '#cf2e2e' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-gray-600 focus:outline-none"
                          style={{ 
                            color: '#000000',
                            borderBottom: '2px solid #9ca3af',
                            backgroundColor: 'transparent',
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        />
                      </div>
                      <div>
                        <label className="block mb-4 font-semibold text-base" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                          Email Address <span style={{ color: '#cf2e2e' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-gray-600 focus:outline-none"
                          style={{ 
                            color: '#000000',
                            borderBottom: '2px solid #9ca3af',
                            backgroundColor: 'transparent',
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        />
                      </div>
                      <div>
                        <label className="block mb-4 font-semibold text-base" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-gray-600 focus:outline-none"
                          style={{ 
                            color: '#000000',
                            borderBottom: '2px solid #9ca3af',
                            backgroundColor: 'transparent',
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block mb-4 font-semibold text-base" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                        Your Message
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-gray-600 focus:outline-none resize-none"
                        style={{ 
                          color: '#000000',
                          borderBottom: '2px solid #9ca3af',
                          backgroundColor: 'transparent',
                          fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                        }}
                      ></textarea>
                    </div>

                    {/* Privacy and Submit */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            required
                            className="mt-1 w-4 h-4 border-gray-400 rounded focus:ring-gray-500"
                            style={{
                              border: '1px solid #9ca3af'
                            }}
                          />
                          <label className="text-sm" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                            I agree to the AeroLustre Privacy Policy<span style={{ color: '#cf2e2e' }}>*</span>
                          </label>
                        </div>
                        <p className="text-xs" style={{ color: '#6b7280', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                          This site is protected by reCAPTCHA and the{' '}
                          <a href="#" className="underline hover:text-gray-800" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>Google Privacy Policy</a>
                          {' '}and{' '}
                          <a href="#" className="underline hover:text-gray-800" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>Terms of Service</a>
                          {' '}apply
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
                        style={{
                          backgroundColor: '#000000',
                          color: '#ffffff',
                          fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div 
              className="card testimonial"
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '30px'
              }}
            >
              <div 
                className="card__container p-[30px] lg:p-10 pb-[26px] lg:pb-10 flex flex-col justify-between h-full"
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '30px'
                }}
              >
                <div className="main-content">
                  <div className="testimonial__person flex flex-row items-center">
                    <div className="!h-[100px] lg:!h-[127px] !w-[100px] lg:!w-[127px] relative flex-shrink-0">
                      <img 
                        className="rounded-[20px] sm:rounded-[24px] w-full h-full absolute left-0 top-0 object-cover object-center"
                        src="/images/founder.png"
                        alt="John Shelton"
                        style={{
                          objectPosition: 'center 20%'
                        }}
                      />
                    </div>
                    <div className="person_info ml-[23px] lg:ml-[30px] py-[18px]">
                      <h5 
                        className="!text-[24px] xl:!text-[28px] mb-2.5 !leading-[38px] !text-white"
                        style={{
                          color: '#ffffff',
                          fontSize: 'var(--wp--preset--font-size--large)',
                          lineHeight: 'inherit',
                          fontFamily: '"Mozilla Headline", sans-serif'
                        }}
                      >
                        John Shelton
                      </h5>
                      <h5 
                        className="!text-8 lg:!text-10 2xl:!text-12 !tracking-[2.4px] lg:!tracking-[3px] text-white leading-tight font-semibold font-copy uppercase opacity-50"
                        style={{
                          color: '#ffffff',
                          opacity: 0.5
                        }}
                      >
                        Founder
                      </h5>
                    </div>
                  </div>
                  <p 
                    className="text font-heading text-17 sm:text-21 leading-6 sm:leading-[31px] pt-5 lg:pt-[30px] text-white"
                    style={{
                      color: '#ffffff',
                      fontSize: 'var(--wp--preset--font-size--medium)',
                      lineHeight: 'inherit'
                    }}
                  >
                    "Bienvenue chez AeroLustre, où l'excellence et la sophistication se rencontrent dans l'aviation privée. <span style={{ color: '#AEAFB0' }}>Nous nous engageons à dépasser vos attentes</span> avec notre service premium et notre attention aux détails. Découvrez l'apogée du luxe aérien."
                  </p>
                </div>
                <div 
                  className="external-link mt-[50px]"
                  style={{
                    color: '#ffffff'
                  }}
                >
                  Meet the AEROLUSTRE Founder

                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
