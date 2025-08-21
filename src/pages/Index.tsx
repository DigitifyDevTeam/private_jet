import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import DiscoverFleetSection from "@/components/site/DiscoverFleetSection";
import AVISSection from "@/components/site/AVISSection";
import ExperienceSection from "@/components/site/ExperienceSection";
import FAQSection from "@/components/site/FAQSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <DiscoverFleetSection />
        <AVISSection />
        <ExperienceSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
