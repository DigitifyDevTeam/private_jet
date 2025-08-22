import Reveal from "./Reveal";

const quotes = [
  {
    q: "Impeccable finish and flawless discretion. The cabin felt brand new.",
    a: "Director of Flight Ops, Global Charter Group",
  },
  {
    q: "Fast, precise, and consistent across bases. Our go‑to for turnarounds.",
    a: "Chief Pilot, European Operator",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {quotes.map((t, i) => (
              <blockquote key={i} className="rounded-2xl hairline p-6 card-elevated bg-secondary/10">
                <p className="text-xl leading-relaxed">“{t.q}”</p>
                <footer className="mt-4 text-sm text-muted-foreground">{t.a}</footer>
              </blockquote>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
