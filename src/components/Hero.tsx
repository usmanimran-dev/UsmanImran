import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin, MousePointer2, ChevronDown, Sparkles, Binary, Cpu, Globe, Radio, Database, Zap, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import userImg from '../assets/user-profile.jpeg';

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

  return (
    <section id="home" className="relative min-h-[110vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-white">

      {/* Background Layer: Multi-layered Technical Grid */}
      <div className="absolute inset-0 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` }}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute inset-0 opacity-[0.01]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      {/* Global Ambiance Glows */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#8B5CF6]/5 rounded-full blur-[200px] -mr-[400px] -mt-[400px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[#06B6D4]/5 rounded-full blur-[180px] -ml-[300px] -mb-[300px] animate-blob" style={{ animationDelay: '-7s' }} />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Massive Typographic Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-16">

            {/* Professional Status Bar */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in">
              <div className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-md">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase">AVAILABLE_FOR_HIRE</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-black/30 uppercase border-l border-black/10 pl-6">
                <span>EST. 2023</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>BASED_IN_KARACHI</span>
              </div>
            </div>

            {/* Massive Hero Headline */}
            <div
              className="space-y-8 relative"
              style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
            >
              <h1 className="text-[10vw] lg:text-[8.5rem] font-black text-black leading-[0.8] tracking-tighter uppercase select-none">
                FULL-STACK <br />
                <span className="text-holographic italic">SOFTWARE</span> <br />
                ENGINEER
              </h1>

              <div className="max-w-2xl space-y-10 pl-2">
                <p className="text-2xl md:text-3xl font-black text-black/30 tracking-tight uppercase leading-none">
                  Building high-performance, <br />
                  scalable web ecosystems with <br />
                  <span className="text-black">modern engineering precision.</span>
                </p>

                {/* Professional Domains */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
                  <div className="space-y-2 border-l-2 border-accent pl-4">
                    <div className="text-[8px] font-black text-black/20 uppercase tracking-[0.3em]">Frontend_Architecture</div>
                    <div className="text-xs font-black text-black uppercase tracking-widest">React & Next.js</div>
                  </div>
                  <div className="space-y-2 border-l-2 border-[#06B6D4] pl-4">
                    <div className="text-[8px] font-black text-black/20 uppercase tracking-[0.3em]">Backend_Systems</div>
                    <div className="text-xs font-black text-black uppercase tracking-widest">Node & Cloud</div>
                  </div>
                  <div className="space-y-2 border-l-2 border-black/10 pl-4">
                    <div className="text-[8px] font-black text-black/20 uppercase tracking-[0.3em]">Mobile_Solutions</div>
                    <div className="text-xs font-black text-black uppercase tracking-widest">Flutter & Native</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium CTA Segment */}
            <div className="flex flex-col sm:flex-row items-center gap-10 w-full sm:w-auto pt-8">
              <a
                href="#projects"
                className="w-full sm:w-auto relative group"
              >
                <div className="relative px-16 py-7 bg-black text-white rounded-full font-black text-xs tracking-[0.5em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-4">
                  ACCESS REPOSITORY <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
              <a
                href="#contact"
                className="group flex flex-col items-start gap-1"
              >
                <span className="text-[8px] font-black tracking-[0.4em] text-black/20 uppercase">COLLABORATION_LAYER</span>
                <span className="text-sm font-black text-black tracking-[0.2em] uppercase border-b-2 border-black/5 group-hover:border-black transition-all">ESTABLISH_LINK</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Ultra-High-Fidelity Artifact Portrait */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end py-12">
            <div
              className="relative w-full max-w-[550px] aspect-[4/5] bg-white rounded-[5rem] p-5 shadow-[0_100px_150px_-40px_rgba(0,0,0,0.15)] overflow-hidden border border-black/[0.05] transition-all duration-1000"
              style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(${mousePosition.x * 0.08}deg)` }}
            >
              <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden transition-all duration-1000">
                <img
                  src="https://abwdibpowpyrbqbcncng.supabase.co/storage/v1/object/public/projects/WhatsApp%20Image%202026-01-31%20at%209.43.14%20PM.jpeg"
                  alt="Usman Imran Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Advanced Technical Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-40" />
                <div className="absolute top-12 right-12 flex flex-col items-end gap-3 z-30">
                  <div className="w-16 h-[2px] bg-accent" />
                  <span className="text-[10px] font-black tracking-[0.5em] text-black/40 uppercase">ID_USMAN_V2</span>
                </div>

                {/* HUD Data Decals on Image */}
                <div className="absolute bottom-12 left-12 z-30 space-y-2 opacity-40">
                  <div className="flex items-center gap-2 text-[8px] font-black text-black tracking-widest uppercase bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-sm">
                    <Zap className="w-2 h-2 text-accent" /> High_Impact
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-black text-black tracking-widest uppercase bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-sm">
                    <Database className="w-2 h-2 text-[#06B6D4]" /> Scale_Ready
                  </div>
                </div>
              </div>

              {/* Corner Framing Detail */}
              <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-black/[0.05]" />
              <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-black/[0.05]" />
              <div className="absolute top-12 left-12 w-6 h-6 border-t-2 border-l-2 border-accent/20 animate-pulse" />
              <div className="absolute bottom-12 right-12 w-6 h-6 border-b-2 border-r-2 border-[#06B6D4]/20 animate-pulse" />
            </div>

            {/* floating Decorative Labels */}
            <div className="absolute -left-12 top-1/2 -rotate-90 origin-center hidden xl:block opacity-10">
              <span className="text-6xl font-black tracking-tighter text-black uppercase">PORTAL_01</span>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Technical Segments Background */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-64 opacity-5 pointer-events-none">
        <Terminal className="w-12 h-12" />
        <Globe className="w-12 h-12" />
        <Zap className="w-12 h-12" />
      </div>

      {/* Bottom Floating Technical Marquee */}
      <div className="absolute bottom-12 left-0 right-0 py-6 bg-black/[0.01] border-y border-black/[0.03] overflow-hidden whitespace-nowrap hidden lg:block">
        <div className="flex items-center gap-16 animate-marquee">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-[9px] font-black tracking-[0.5em] text-black/10 uppercase italic">
                {`CORE::SEGMENT_${i.toString().padStart(2, '0')} // STATUS_OPTIMAL`}
              </span>
              <div className="w-2 h-[1px] bg-black/10" />
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
