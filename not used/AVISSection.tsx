import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useLanguage } from "@/contexts/LanguageContext";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AVISSection() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const swiperRef = useRef<any>(null);

  const testimonials = [
    {
      id: 1,
      avatar: "CR",
      name: "Claudia Robbertse",
      title: "AIR CHARTER SERVICE",
      quote: t('testimonial.1.quote')
    },
    {
      id: 2,
      avatar: "SG",
      name: "Samar El Gamal",
      title: "CORPORATE EXECUTIVE",
      quote: t('testimonial.2.quote')
    },
    {
      id: 3,
      avatar: "MJ",
      name: "Michael Johnson",
      title: "EXECUTIVE DIRECTOR",
      quote: t('testimonial.3.quote')
    },
    {
      id: 4,
      avatar: "AL",
      name: "Anna Lopez",
      title: "LUXURY TRAVEL CONSULTANT",
      quote: t('testimonial.4.quote')
    }
  ];

  const nextTestimonial = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevTestimonial = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const onSlideChange = (swiper: any) => {
    setCurrentTestimonial(swiper.realIndex);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap');
          .mozilla-headline-avis {
            font-family: "Mozilla Headline", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }
          
          .swiper-slide {
            width: 100% !important;
          }
          
          .swiper-wrapper {
            transition-timing-function: ease-in-out;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start relative">
          {/* Left side - Swiper Carousel */}
          <div className="space-y-8">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              onSlideChange={onSlideChange}
              className="testimonial-swiper"
              style={{ width: '100%' }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="space-y-8">
                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center text-white text-lg font-medium">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 
                          className="text-white font-medium"
                          style={{
                            fontSize: '18px'
                          }}
                        >
                          {testimonial.name}
                        </h3>
                        <p className="text-neutral-400 text-sm tracking-wider uppercase">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <h3 
                      className="text-white leading-relaxed font-light mozilla-headline-avis"
                      style={{
                        fontSize: '44px',
                        lineHeight: '54px'
                      }}
                    >
                      <span className="text-gray-light">"</span>
                      {testimonial.quote}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="bg-transparent border-neutral-600 text-white hover:bg-neutral-800 rounded-full w-10 h-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="bg-transparent border-neutral-600 text-white hover:bg-neutral-800 rounded-full w-10 h-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Pagination */}
              <div className="flex items-center gap-2 ml-4">
                <span className="text-white text-sm font-medium">
                  {String(currentTestimonial + 1).padStart(2, '0')}
                </span>
                <span className="text-neutral-500 text-sm">/</span>
                <span className="text-neutral-500 text-sm">
                  {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Next testimonial preview */}
          <div className="hidden lg:block">
            <div className="space-y-6 opacity-40 scale-90">
              {/* Profile for next testimonial */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center text-white text-base font-medium">
                  {testimonials[(currentTestimonial + 1) % testimonials.length].avatar}
                </div>
                <div>
                  <h4 
                    className="text-white font-medium"
                    style={{
                      fontSize: '18px'
                    }}
                  >
                    {testimonials[(currentTestimonial + 1) % testimonials.length].name}
                  </h4>
                  <p className="text-neutral-400 text-sm tracking-wider uppercase">
                    {testimonials[(currentTestimonial + 1) % testimonials.length].title}
                  </p>
                </div>
              </div>

              {/* Next testimonial quote preview */}
              <h4 
                className="text-neutral-300 leading-relaxed font-light"
                style={{
                  fontSize: '44px',
                  lineHeight: '54px'
                }}
              >
                <span className="text-gray-light">"</span>
                {testimonials[(currentTestimonial + 1) % testimonials.length].quote}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
