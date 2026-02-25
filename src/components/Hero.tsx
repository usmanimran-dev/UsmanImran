import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin, MousePointer2, ChevronDown, Sparkles, Binary, Cpu, Globe, Radio, Database, Zap, Terminal, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const domains = [
    "Full-Stack Development",
    "Enterprise Web Apps",
    "E-Commerce Solutions",
    "Cross-Platform Mobile",
    "Cloud Infrastructure",
    "No-Code Automations"
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-32 overflow-hidden bg-background">

      {/* Fintech Scanner Line */}
      <div className="scanline" />

      {/* Global Ambiance Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-primary/5 rounded-full blur-[200px] -mt-[300px]" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[180px] -ml-[300px] -mb-[300px]" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] -mr-[200px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fade-in relative z-20">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-md backdrop-blur-md">
            <div className="fin-indicator">
              <span className="fin-indicator-ping" />
              <span className="fin-indicator-dot" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary text-center">AVAILABLE_FOR_HIRE // OPEN_TO_WORK</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] text-foreground/30 uppercase sm:border-l border-white/10 sm:pl-6">
            <TrendingUp className="w-3 h-3 text-primary animate-pulse hidden sm:block" />
            <span>UPTIME: 99.9%</span>
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            <span>LATENCY: 12ms</span>
          </div>
        </div>

        {/* Hero Headline — Centered, proportional */}
        <div
          className="text-center mb-12 sm:mb-16 relative z-20"
          style={{ transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px)` }}
        >
          <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.85] tracking-tighter uppercase select-none mb-8 sm:mb-10">
            SOFTWARE<br />
            <span className="text-primary italic drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">ENGINEER</span><br />
            & DEVELOPER
          </h1>

          <p className="text-base sm:text-lg md:text-2xl font-medium text-foreground/40 tracking-tight uppercase leading-relaxed max-w-2xl mx-auto px-4">
            Building scalable, modern<br className="hidden sm:block" />
            <span className="text-foreground"> web & mobile applications.</span>
          </p>
        </div>

        {/* Expertise Domain Tags — Inline Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {domains.map((domain, i) => (
            <div
              key={domain}
              className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm text-xs font-bold text-foreground/60 tracking-widest uppercase hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {domain}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href="#projects">
            <div className="btn-fin flex items-center gap-4 justify-center px-10 py-4">
              VIEW PROJECTS <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
          <a
            href="#contact"
            className="group flex flex-col items-center gap-1"
          >
            <span className="text-[8px] font-bold tracking-[0.4em] text-primary uppercase">GET_IN_TOUCH</span>
            <span className="text-sm font-bold text-foreground tracking-[0.2em] uppercase border-b-2 border-white/5 group-hover:border-primary transition-all">CONTACT_ME</span>
          </a>
        </div>

      </div>

      {/* Decorative Technical Segments Background */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-64 opacity-5 pointer-events-none">
        <Database className="w-12 h-12" />
        <Activity className="w-12 h-12" />
        <Zap className="w-12 h-12" />
      </div>

      {/* Bottom Floating Technical Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-5 bg-white/[0.02] border-y border-white/[0.05] overflow-hidden whitespace-nowrap hidden lg:block">
        <div className="flex items-center gap-16 animate-marquee">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-[9px] font-bold tracking-[0.5em] text-foreground/20 uppercase italic">
                {`SYS_MODULE::NODE_${i.toString().padStart(2, '0')} // BUILD: PRODUCTION_READY`}
              </span>
              <div className="w-2 h-[1px] bg-primary/20" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
