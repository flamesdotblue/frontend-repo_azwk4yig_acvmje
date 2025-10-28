import { Star, Rocket, Layers, PenTool } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-300"
        >
          I craft iconic brand identities and visual systems that move people. My work blends precision, clarity, and bold simplicity—designed for global impact across digital and physical touchpoints.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 max-w-3xl text-lg leading-relaxed text-zinc-400"
        >
          Philosophy: reduce to the essential, amplify what matters, and make every pixel speak with intent.
        </motion.p>

        {/* Services */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-6 backdrop-blur"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
              </div>
              <s.icon className="mb-4 h-6 w-6 text-blue-300" />
              <h3 className="text-lg font-semibold text-zinc-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Branding",
    desc: "Timeless identities, logos, and visual languages engineered for recognition and scale.",
    icon: Star,
  },
  {
    title: "UI/UX",
    desc: "Elegant digital products with world-class usability and refined visual hierarchy.",
    icon: Layers,
  },
  {
    title: "Art Direction",
    desc: "High-impact creative direction for campaigns, content, and launch moments.",
    icon: Rocket,
  },
  {
    title: "Motion Design",
    desc: "Cinematic motion systems and transitions that bring brands to life.",
    icon: PenTool,
  },
];
