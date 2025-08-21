import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Link } from "react-router-dom";

const services = [
  {
    id: "concierge",
    title: "Concierge",
    image: "/images/concierge-service.jpg",
    href: "/services/concierge",
    description: "Premium concierge services for your aircraft needs"
  },
  {
    id: "maintenance",
    title: "Maintenance & Detailing",
    image: "/images/maintenance-service.jpg",
    href: "/services/maintenance",
    description: "Professional aircraft maintenance and detailing services"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Our Services
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of aviation services designed to meet your every need
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={service.href}
                  className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <div className="aspect-[16/9] relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                    <div className="absolute inset-0 flex items-end p-8">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {service.title}
                        </h2>
                        <p className="text-white/80">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
