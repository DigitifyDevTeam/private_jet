import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useLanguage } from "@/contexts/LanguageContext";

// Logos images créés par l'utilisateur
function Logo1(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo1.png"
      alt="Logo 1"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo2(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo2.png"
      alt="Logo 2"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo3(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo3.png"
      alt="Logo 3"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo4(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo4.png"
      alt="Logo 4"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo5(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo5.png"
      alt="Logo 5"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo6(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo6.png"
      alt="Logo 6"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo7(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo7.png"
      alt="Logo 7"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo8(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo8.png"
      alt="Logo 8"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

function Logo9(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo9.png"
      alt="Logo 9"
      width="100"
      height="100"
      style={{ objectFit: 'contain' }}
      {...props}
    />
  );
}

// Array of user-created logos
const userLogos = [
  { name: "Logo 1", id: 1, img: Logo1 },
  { name: "Logo 2", id: 2, img: Logo2 },
  { name: "Logo 3", id: 3, img: Logo3 },
  { name: "Logo 4", id: 4, img: Logo4 },
  { name: "Logo 5", id: 5, img: Logo5 },
  { name: "Logo 6", id: 6, img: Logo6 },
  { name: "Logo 7", id: 7, img: Logo7 },
  { name: "Logo 8", id: 8, img: Logo8 },
  { name: "Logo 9", id: 9, img: Logo9 },
];

export function TrustSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-bold" style={{ fontFamily: '"Mozilla Headline", sans-serif', fontWeight: 600 }}>
            {t('trust.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto" style={{ fontFamily: '"Mozilla Headline", sans-serif', fontWeight: 400 }}>
            {t('trust.description')}
          </p>
        </div>
        
        <div className="flex justify-center">
          <LogoCarousel columnCount={3} logos={userLogos} />
        </div>
      </div>
    </section>
  );
}
