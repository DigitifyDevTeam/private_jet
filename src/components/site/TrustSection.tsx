import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useLanguage } from "@/contexts/LanguageContext";

// Logos d'aviation avec formes géométriques visibles
function BoeingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#003DA5" rx="12"/>
      <circle cx="30" cy="30" r="8" fill="white"/>
      <circle cx="70" cy="30" r="8" fill="white"/>
      <circle cx="30" cy="70" r="8" fill="white"/>
      <circle cx="70" cy="70" r="8" fill="white"/>
      <rect x="35" y="45" width="30" height="10" fill="white" rx="2"/>
    </svg>
  );
}

function AirbusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#E31837" rx="12"/>
      <path d="M20 30 L50 70 L80 30" stroke="white" strokeWidth="4" fill="none"/>
      <circle cx="50" cy="50" r="12" fill="white"/>
      <circle cx="50" cy="50" r="6" fill="#E31837"/>
    </svg>
  );
}

function GulfstreamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#1B365D" rx="12"/>
      <path d="M25 40 L75 40 L75 60 L25 60 Z" fill="white"/>
      <path d="M35 35 L65 35 L65 45 L35 45 Z" fill="white"/>
      <path d="M35 55 L65 55 L65 65 L35 65 Z" fill="white"/>
    </svg>
  );
}

function BombardierIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#00A0DC" rx="12"/>
      <circle cx="30" cy="30" r="10" fill="white"/>
      <circle cx="70" cy="30" r="10" fill="white"/>
      <circle cx="30" cy="70" r="10" fill="white"/>
      <circle cx="70" cy="70" r="10" fill="white"/>
      <path d="M40 50 L60 50" stroke="white" strokeWidth="3"/>
    </svg>
  );
}

function DassaultIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#003366" rx="12"/>
      <path d="M25 25 L75 25 L75 75 L25 75 Z" fill="none" stroke="white" strokeWidth="3"/>
      <path d="M35 35 L65 35 L65 65 L35 65 Z" fill="white"/>
      <circle cx="50" cy="50" r="8" fill="#003366"/>
    </svg>
  );
}

function EmbraerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#009639" rx="12"/>
      <path d="M20 30 L80 30 L80 70 L20 70 Z" fill="white"/>
      <path d="M30 40 L70 40 L70 60 L30 60 Z" fill="#009639"/>
      <circle cx="50" cy="50" r="6" fill="white"/>
    </svg>
  );
}

function CessnaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#DC143C" rx="12"/>
      <path d="M25 40 L75 40 L75 60 L25 60 Z" fill="white"/>
      <path d="M35 30 L65 30 L65 40 L35 40 Z" fill="white"/>
      <path d="M35 60 L65 60 L65 70 L35 70 Z" fill="white"/>
      <circle cx="50" cy="50" r="8" fill="#DC143C"/>
    </svg>
  );
}

function PiperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#FF6B35" rx="12"/>
      <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="white"/>
      <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="#FF6B35"/>
      <circle cx="50" cy="50" r="6" fill="white"/>
    </svg>
  );
}

function BeechcraftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#8B4513" rx="12"/>
      <path d="M25 35 L75 35 L75 65 L25 65 Z" fill="white"/>
      <path d="M35 25 L65 25 L65 35 L35 35 Z" fill="white"/>
      <path d="M35 65 L65 65 L65 75 L35 75 Z" fill="white"/>
      <circle cx="50" cy="50" r="8" fill="#8B4513"/>
    </svg>
  );
}

function CirrusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#4682B4" rx="12"/>
      <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="white"/>
      <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="#4682B4"/>
      <circle cx="50" cy="50" r="6" fill="white"/>
      <path d="M45 25 L55 25 L55 35 L45 35 Z" fill="white"/>
    </svg>
  );
}

function DiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#FFD700" rx="12"/>
      <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="white"/>
      <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#FFD700"/>
      <circle cx="50" cy="50" r="6" fill="white"/>
    </svg>
  );
}

function MooneyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" fill="#4B0082" rx="12"/>
      <path d="M25 30 L75 30 L75 70 L25 70 Z" fill="white"/>
      <path d="M35 40 L65 40 L65 60 L35 60 Z" fill="#4B0082"/>
      <circle cx="50" cy="50" r="8" fill="white"/>
      <path d="M40 20 L60 20 L60 30 L40 30 Z" fill="white"/>
    </svg>
  );
}

// Array of aviation logos
const aviationLogos = [
  { name: "Boeing", id: 1, img: BoeingIcon },
  { name: "Airbus", id: 2, img: AirbusIcon },
  { name: "Gulfstream", id: 3, img: GulfstreamIcon },
  { name: "Bombardier", id: 4, img: BombardierIcon },
  { name: "Dassault", id: 5, img: DassaultIcon },
  { name: "Embraer", id: 6, img: EmbraerIcon },
  { name: "Cessna", id: 7, img: CessnaIcon },
  { name: "Piper", id: 8, img: PiperIcon },
  { name: "Beechcraft", id: 9, img: BeechcraftIcon },
  { name: "Cirrus", id: 10, img: CirrusIcon },
  { name: "Diamond", id: 11, img: DiamondIcon },
  { name: "Mooney", id: 12, img: MooneyIcon },
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
          <LogoCarousel columnCount={3} logos={aviationLogos} />
        </div>
      </div>
    </section>
  );
}
