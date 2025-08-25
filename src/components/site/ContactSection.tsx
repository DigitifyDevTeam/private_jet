import Reveal from "./Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ContactSectionProps {
  onContactSubmit?: () => void;
}

export default function ContactSection({ onContactSubmit }: ContactSectionProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    reason: '',
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    privacyAccepted: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.fullName || !formData.email || !formData.phone || !formData.privacyAccepted) {
      alert('Veuillez remplir tous les champs obligatoires et accepter la politique de confidentialité.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'envoi de formulaire (remplacez par votre API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Appel du callback si fourni
      onContactSubmit?.();
      
      // Redirection vers la page de devis
      navigate('/contact/quote-request');
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div 
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7"
            style={{
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
                  className="card__container rounded-[30px] px-4 sm:px-6 lg:px-10 pb-6 sm:pb-7 lg:pb-9 pt-6 sm:pt-7 lg:pt-8 flex flex-col justify-between h-full"
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
                      className="text-[20px] sm:text-[24px] lg:text-[31px] leading-tight tracking-tight font-semibold"
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
                    className="leading-6 md:leading-[27px] text-[14px] sm:text-[16px] md:text-[19px] font-medium"
                    style={{
                      color: '#cccccc',
                      fontSize: 'var(--wp--preset--font-size--normal)',
                      lineHeight: 'inherit',
                      fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                    }}
                  >
                    {t('contact.whatsapp_description')}
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
                  className="card__container rounded-[30px] px-4 sm:px-6 lg:px-10 pb-6 sm:pb-7 lg:pb-9 pt-6 sm:pt-7 lg:pt-8 flex flex-col"
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
                  {t('contact.phone_24h_description')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 w-full">
            {/* Contact Form Card */}
            <div
              className="card form-card lg:col-span-2 max-w-[100%]"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '30px',
                border: '1px solid #d1d5db'
              }}
            >
                              <div
                  className="card__container p-4 sm:p-6 lg:p-10 pt-4 sm:pt-6 lg:pt-[35px] max-w-[100%]"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '30px'
                }}
              >
                <div className="form-container max-w-[100%]">
                  <form 
                    className="space-y-6 sm:space-y-8"
                    onSubmit={handleSubmit}
                  >
                    {/* Reason for Enquiry */}
                    <div>
                      <label className="block mb-4 sm:mb-6 font-semibold text-base sm:text-lg" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                        {t('contact.form.reason_label')} <span style={{ color: '#cf2e2e' }}>*</span>
                      </label>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={() => handleInputChange('reason', 'general_enquiry')}
                          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border font-medium transition-colors text-sm sm:text-base ${
                            formData.reason === 'general_enquiry'
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-gray-400 bg-white text-black hover:bg-gray-100'
                          }`}
                          style={{
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        >
                          {t('contact.form.general_enquiry')}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleInputChange('reason', 'press')}
                          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border font-medium transition-colors text-sm sm:text-base ${
                            formData.reason === 'press'
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-gray-400 bg-white text-black hover:bg-gray-100'
                          }`}
                          style={{
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        >
                          {t('contact.form.press')}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleInputChange('reason', 'other')}
                          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border font-medium transition-colors text-sm sm:text-base ${
                            formData.reason === 'other'
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-gray-400 bg-white text-black hover:bg-gray-100'
                          }`}
                          style={{
                            fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                          }}
                        >
                          {t('contact.form.other')}
                        </button>
                      </div>
                    </div>

                    {/* Personal Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block mb-4 font-semibold text-base" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                          {t('contact.form.full_name')} <span style={{ color: '#cf2e2e' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
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
                          {t('contact.form.phone')} <span style={{ color: '#cf2e2e' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
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
                          {t('contact.form.email')} <span style={{ color: '#cf2e2e' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
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
                          {t('contact.form.company')}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
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
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
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
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            required
                            checked={formData.privacyAccepted}
                            onChange={(e) => handleInputChange('privacyAccepted', e.target.checked)}
                            className="mt-1 w-4 h-4 border-gray-400 rounded focus:ring-gray-500"
                            style={{
                              border: '1px solid #9ca3af'
                            }}
                          />
                          <label className="text-sm" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                            {t('contact.form.privacy_policy')}<span style={{ color: '#cf2e2e' }}>*</span>
                          </label>
                        </div>
                        <p className="text-xs" style={{ color: '#6b7280', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>
                          {t('contact.form.recaptcha_text')}{' '}
                          <a href="#" className="underline hover:text-gray-800" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>{t('contact.form.google_privacy')}</a>
                          {' '}{t('contact.form.and')}{' '}
                          <a href="#" className="underline hover:text-gray-800" style={{ color: '#000000', fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif' }}>{t('contact.form.terms_of_service')}</a>
                          {' '}{t('contact.form.apply')}
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-3 font-semibold rounded-full transition-colors ${
                          isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-black hover:bg-gray-800'
                        }`}
                        style={{
                          color: '#ffffff',
                          fontFamily: 'Inter, Helvetica Neue, SF Pro Text, Segoe UI, Arial, sans-serif'
                        }}
                      >
                        {isSubmitting ? 'Envoi en cours...' : t('contact.form.send_message')}
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
                  className="card__container p-4 sm:p-6 lg:p-10 pb-4 sm:pb-6 lg:pb-10 flex flex-col justify-between h-full"
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '30px'
                }}
              >
                <div className="main-content">
                  <div className="testimonial__person flex flex-row items-center">
                    <div className="!h-[80px] sm:!h-[100px] lg:!h-[127px] !w-[80px] sm:!w-[100px] lg:!w-[127px] relative flex-shrink-0">
                      <img 
                        className="rounded-[20px] sm:rounded-[24px] w-full h-full absolute left-0 top-0 object-cover object-center"
                        src="/images/founder.png"
                        alt="John Shelton"
                        style={{
                          objectPosition: 'center 20%'
                        }}
                      />
                    </div>
                    <div className="person_info ml-3 sm:ml-6 lg:ml-[30px] py-2 sm:py-4 lg:py-[18px]">
                                              <h5 
                          className="!text-[20px] sm:!text-[24px] xl:!text-[28px] mb-2 sm:mb-2.5 !leading-tight sm:!leading-[38px] !text-white"
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
                        {t('contact.founder.title')}
                      </h5>
                    </div>
                  </div>
                  <p 
                    className="text font-heading text-base sm:text-lg lg:text-21 leading-6 sm:leading-[31px] pt-4 sm:pt-5 lg:pt-[30px] text-white"
                    style={{
                      color: '#ffffff',
                      fontSize: 'var(--wp--preset--font-size--medium)',
                      lineHeight: 'inherit'
                    }}
                  >
                    "{t('contact.founder.welcome')} <span style={{ color: '#AEAFB0' }}>{t('contact.founder.commitment')}</span> {t('contact.founder.discover')}"
                  </p>
                </div>
                <div 
                  className="external-link mt-6 sm:mt-8 lg:mt-[50px]"
                  style={{
                    color: '#ffffff'
                  }}
                >
                  {t('contact.founder.meet')}

                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
