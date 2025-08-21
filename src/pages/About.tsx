import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import AboutUsSection from "@/components/site/AboutUsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
    

        {/* About Us Section */}
        <AboutUsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
