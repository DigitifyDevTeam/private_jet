import ext from "@/assets/service-exterior-wash.jpg";
import deep from "@/assets/service-interior-deep-clean.jpg";
import leather from "@/assets/service-leather-treatment.jpg";
import cabin from "@/assets/service-cabin-disinfection.jpg";
import bright from "@/assets/service-brightwork-polishing.jpg";
import ramp from "@/assets/service-oncall-ramp.jpg";
import Reveal from "./Reveal";

const services = [
  { img: ext, title: "Exterior Wash", desc: "Streak‑free, hand finished." },
  { img: deep, title: "Interior Deep Clean", desc: "Every surface, every seam." },
  { img: leather, title: "Leather Treatment", desc: "Conditioned and protected." },
  { img: cabin, title: "Cabin Disinfection", desc: "Hospital‑grade protocols." },
  { img: bright, title: "Brightwork Polishing", desc: "Mirror‑finish brilliance." },
  { img: ramp, title: "On‑Call Ramp Service", desc: "24/7, worldwide." },
];

export default function FeaturedServices() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.01em] mb-8">Featured Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="relative group overflow-hidden rounded-2xl hairline card-elevated">
                <img src={s.img} alt={`${s.title} — private jet cleaning`} loading="lazy" className="w-full h-64 object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
