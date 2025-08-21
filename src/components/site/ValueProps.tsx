import { Clock, ShieldCheck, Armchair, Eye } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: Clock, title: "Turnaround Under 3h", desc: "Rapid response, precise delivery." },
  { icon: ShieldCheck, title: "Hospital‑Grade Sanitation", desc: "Cabin disinfection, verified." },
  { icon: Armchair, title: "Interior Specialists", desc: "Leather, veneers, textiles." },
  { icon: Eye, title: "Confidential & Discreet", desc: "Quiet operations, NDA‑ready." },
];

export default function ValueProps() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="rounded-lg hairline p-6 card-elevated bg-secondary/10">
                <Icon className="mb-4 opacity-80" />
                <h3 className="font-medium text-lg tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
