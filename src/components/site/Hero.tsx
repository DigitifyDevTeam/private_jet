import heroPoster from "@/assets/hero-poster.jpg";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[88vh] flex items-end">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src="/videos/final.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 overlay-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
        <Reveal>
          <h1 
            className="font-semibold tracking-[-0.02em] max-w-3xl"
            style={{
              fontSize: 'clamp(32px, 8vw, 76px)',
              lineHeight: '1.1',
              fontFamily: '"Mozilla Headline", sans-serif'
            }}
          >
            {t('hero.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-sm sm:text-base">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" className="h-11 px-6">
              <a href="/demander-un-devis">{t('hero.cta')}</a>
            </Button>
            <Button asChild variant="ghostContrast" className="h-11 px-6">
              <a href="tel:+10000000000">{t('contact.call_24_7')}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
