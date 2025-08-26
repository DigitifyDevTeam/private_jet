import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  const nav = [
    { href: "/", label: "Home" },
    { href: "#services", label: t('nav.services'), hasMegaMenu: true },
    { href: "/a-propos", label: t('nav.about') },
    { href: "/demander-un-devis", label: "Demander un devis" },
    { href: "/contact", label: t('nav.contact') },
  ];

  const servicesItems = [
    {
      href: "/nettoyage-exterieur",
      title: t('service.exterior'),
      image: "/images/detailing2.png",
      description: "Professional detailing services"
    },
    {
      href: "/nettoyage-interieur",
      title: t('service.interior'),
      image: "/images/interior.jpg",
      description: "Interior cleaning services"
    },
    {
      href: "/desinfection",
      title: t('service.disinfection'),
      image: "/images/detailing.webp",
      description: "Sanitization services"
    }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.includes('#') && !href.startsWith('/services')) {
      const id = href.replace('/', '').replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm glass border-b border-border/50" : ""
      }`}
      aria-label="Primary"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="font-semibold tracking-tight text-base sm:text-lg">
        AEROLUSTRE
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((item) => (
            item.hasMegaMenu ? (
              <div 
                key={item.href}
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button className="flex items-center gap-1 hover-scale text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Invisible bridge to prevent gap */}
                <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>
              </div>
            ) : item.href === '/' ? (
              <Link 
                key={item.href} 
                to={item.href} 
                className={`hover-scale transition-colors ${
                  location.pathname === item.href 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ) : item.href === '/contact' ? (
              <Link 
                key={item.href} 
                to={item.href} 
                className={`hover-scale transition-colors ${
                  location.pathname === item.href 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ) : item.href === '/a-propos' ? (
              <Link 
                key={item.href} 
                to={item.href} 
                className={`hover-scale transition-colors ${
                  location.pathname === item.href 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ) : item.href === '/demander-un-devis' ? (
              <Link 
                key={item.href} 
                to={item.href} 
                className={`hover-scale transition-colors ${
                  location.pathname === item.href 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="hover-scale text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Mega Menu */}
        <div 
          className={`absolute top-0 left-0 w-full bg-white shadow-2xl lg:rounded-b-[60px] z-50 transition-all duration-500 ease-in-out ${
            showMegaMenu 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          {/* Header Content */}
          <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <Link to="/" className="font-semibold tracking-tight text-base sm:text-lg">
              AEROLUSTRE
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm">
              {nav.map((item) => (
                item.hasMegaMenu ? (
                  <div 
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <button className="flex items-center gap-1 hover-scale text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                ) : item.href === '/' ? (
                  <Link 
                    key={item.href} 
                    to={item.href} 
                    className={`hover-scale transition-colors ${
                      location.pathname === item.href 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : item.href === '/contact' ? (
                  <Link 
                    key={item.href} 
                    to={item.href} 
                    className={`hover-scale transition-colors ${
                      location.pathname === item.href 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : item.href === '/a-propos' ? (
                  <Link 
                    key={item.href} 
                    to={item.href} 
                    className={`hover-scale transition-colors ${
                      location.pathname === item.href 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : item.href === '/demander-un-devis' ? (
                  <Link 
                    key={item.href} 
                    to={item.href} 
                    className={`hover-scale transition-colors ${
                      location.pathname === item.href 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    key={item.href} 
                    href={item.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="hover-scale text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button asChild variant="ghostContrast" className="h-10 px-4">
                <a href="tel:+10000000000" aria-label={t('contact.call_24_7')}>
                  <Phone className="mr-2" /> {t('contact.call_24_7')}
                </a>
              </Button>
              <Button asChild variant="hero" className="h-10 px-5">
                <a href="/demander-un-devis">Demander un devis</a>
              </Button>
            </div>
          </div>

          {/* Services Cards */}
          <div className="container mx-auto px-4 pb-12 lg:pb-16 mt-8 lg:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 max-w-5xl mx-auto">
              {servicesItems.map((service) => (
                <Link 
                  key={service.href} 
                  to={service.href}
                  className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-full relative rounded-[20px] sm:rounded-[30px] overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setShowMegaMenu(false)}
                >
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                    <div>
                      <h4 className="mb-2 md:mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] text-white font-bold leading-tight">
                        {service.title}
                      </h4>
                      <div className="text-white/90 font-semibold text-sm sm:text-base">
                        {service.description}
                      </div>
                      <div className="mt-4 flex items-center text-white text-sm font-medium">
                        <span>Discover More</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild variant="ghostContrast" className="h-10 px-4">
            <a href="tel:+10000000000" aria-label={t('contact.call_24_7')} style={{ fontFamily: '"Mozilla Headline", serif' }}>
              <Phone className="mr-2" /> {t('contact.call_24_7')}
            </a>
          </Button>
          <Button asChild variant="hero" className="h-10 px-5">
            <a href="/demander-un-devis" style={{ fontFamily: '"Mozilla Headline", serif' }}>Demander un devis</a>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center p-3 rounded-md hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-white min-w-[44px] min-h-[44px] bg-gray-800/50"
          onClick={() => {
            console.log('Mobile menu button clicked, setting open to true');
            setOpen(true);
          }}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu Overlay */}
        {open && (
          <div className="lg:hidden fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-white text-lg">AEROLUSTRE</span>
                  <LanguageSwitcher />
                </div>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Menu Content */}
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="space-y-4">
                  {nav.map((n) => (
                    <li key={n.href}>
                      {n.hasMegaMenu ? (
                        <div>
                          <button
                            onClick={() => setShowServices(!showServices)}
                            className="w-full flex items-center justify-between py-3 text-white font-semibold text-lg border-b border-gray-700 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <span>{n.label}</span>
                            {showServices ? (
                              <ChevronDown className="w-5 h-5" />
                            ) : (
                              <ChevronRight className="w-5 h-5" />
                            )}
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showServices ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="mt-3 space-y-2">
                              {servicesItems.map((service) => (
                                <li key={service.href}>
                                  <Link
                                    to={service.href}
                                    onClick={() => {
                                      setOpen(false);
                                      setShowServices(false);
                                    }}
                                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                  >
                                    {service.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : n.href === '/' ? (
                        <Link
                          to={n.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                        >
                          {n.label}
                        </Link>
                      ) : n.href === '/contact' ? (
                        <Link
                          to={n.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                        >
                          {n.label}
                        </Link>
                      ) : n.href === '/a-propos' ? (
                        <Link
                          to={n.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                        >
                          {n.label}
                        </Link>
                      ) : n.href === '/demander-un-devis' ? (
                        <Link
                          to={n.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                        >
                          {n.label}
                        </Link>
                      ) : (
                        <a
                          href={n.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            handleNavClick(n.href);
                          }}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                        >
                          {n.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                
                {/* Bottom Buttons */}
                <div className="mt-8">
                  {/* Menu content ends here - no additional buttons needed */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
