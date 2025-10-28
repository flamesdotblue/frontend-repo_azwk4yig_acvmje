import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Subtle gradient overlay to add cinematic depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 sm:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ lineHeight: 1.05 }}
        >
          ALEX MORROW
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-xl text-sm font-medium uppercase tracking-[0.25em] text-zinc-300 sm:text-base"
        >
          Graphic Designer · Art Direction · Visual Systems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center rounded-full border border-zinc-700/60 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition-colors hover:border-blue-500/70 hover:bg-zinc-900/80"
          >
            View Selected Works
            <span className="ml-3 inline-flex size-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-6 text-zinc-400"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
            <span className="h-5 w-px bg-zinc-600" />
            Scroll
          </div>
        </motion.div>
      </div>
    </section>
  );
}
