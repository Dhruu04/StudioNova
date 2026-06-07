import { motion } from "motion/react";

const quotes = [
  { q: "They rebuilt our site in 3 weeks and bookings jumped 62%. Unreal.", a: "Mira K.", r: "Owner, Oak & Mane Salon" },
  { q: "The animations feel like a luxury magazine. Guests notice immediately.", a: "Lucas D.", r: "Chef, Maison Lumière" },
  { q: "Conversion on listings doubled. Worth every cent.", a: "Hana T.", r: "Director, Atrium Realty" },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <motion.figure
            key={q.a}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl border border-border bg-card p-8 flex flex-col justify-between min-h-[260px] hover:border-neon/40 transition"
          >
            <blockquote className="font-display text-2xl leading-snug">"{q.q}"</blockquote>
            <figcaption className="mt-6 text-sm">
              <div className="font-medium">{q.a}</div>
              <div className="text-muted-foreground">{q.r}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
