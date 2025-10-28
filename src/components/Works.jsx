import { motion } from "framer-motion";

const projects = [
  { title: "Eclipse Studio", tag: "Brand Identity" },
  { title: "Nova OS", tag: "Product UI" },
  { title: "Alta Optics", tag: "Art Direction" },
  { title: "Vector Labs", tag: "Design System" },
  { title: "Aerial", tag: "Motion Design" },
  { title: "Monument", tag: "Brand Strategy" },
  { title: "Flux Finance", tag: "Web Experience" },
  { title: "Halo Camera", tag: "Packaging" },
];

export default function Works() {
  return (
    <section id="work" className="relative w-full bg-black py-24 text-zinc-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-end justify-between"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Works</h2>
          <a
            href="#contact"
            className="hidden text-sm font-medium text-blue-300 hover:text-blue-200 sm:inline"
          >
            Get in touch →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} index={i} title={p.title} tag={p.tag} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, tag, index }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.04 }}
      whileHover={{ scale: 1.02, rotate: -0.2 }}
      whileTap={{ scale: 0.99 }}
      className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
    >
      {/* Accent gradient glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)]" />
      </div>

      {/* Thumbnail substitute: geometric gradient with subtle pattern */}
      <div className="relative h-44 w-full overflow-hidden bg-[radial-gradient(1200px_300px_at_0%_0%,#0ea5e9_0%,transparent_40%),linear-gradient(to_bottom_right,#0B0B0C,#0B0B0C,#050506)] sm:h-48">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:6px_6px] mix-blend-overlay" />
      </div>

      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-zinc-400">{tag}</p>
        </div>
        <div className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition-colors group-hover:border-blue-400 group-hover:text-blue-200">
          →
        </div>
      </div>
    </motion.a>
  );
}
