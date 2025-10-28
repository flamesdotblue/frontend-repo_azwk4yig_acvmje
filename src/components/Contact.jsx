import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Let’s create something extraordinary.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400"
        >
          I collaborate with ambitious teams and founders on brand-defining work across industries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="mailto:hello@alexmorrow.studio?subject=Project%20Inquiry"
            className="group inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-7 py-3 text-sm font-semibold text-blue-200 backdrop-blur transition-colors hover:border-blue-400 hover:bg-blue-500/20"
          >
            Email Me
            <span className="ml-3 inline-flex size-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
