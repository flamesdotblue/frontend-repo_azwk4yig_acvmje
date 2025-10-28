import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const handler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="scroll-smooth bg-black text-zinc-100 antialiased">
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-30 hidden -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:block"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.14), rgba(59,130,246,0.06) 40%, transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Minimal top bar */}
      <header className="fixed left-0 top-0 z-20 w-full border-b border-white/5 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="text-sm font-semibold tracking-widest text-zinc-300">
            AM
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#about" className="hover:text-zinc-100">
              About
            </a>
            <a href="#work" className="hover:text-zinc-100">
              Work
            </a>
            <a href="#contact" className="hover:text-zinc-100">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-200 backdrop-blur hover:border-blue-400 hover:bg-blue-500/20 sm:text-sm"
          >
            Start a project
          </a>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black/60 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Alex Morrow — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
