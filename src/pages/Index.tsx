import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import DiscoverFleetSection from "@/components/site/DiscoverFleetSection";
import ExperienceSection from "@/components/site/ExperienceSection";
import FAQSection from "@/components/site/FAQSection";
import { TrustSection } from "@/components/site/TrustSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <DiscoverFleetSection />
        <ExperienceSection />
        <FAQSection />
        <TrustSection />
        <ContactSection showTitle={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
