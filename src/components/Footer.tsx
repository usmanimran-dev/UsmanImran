import { ArrowUp, Github, Linkedin, Twitter, Mail, ExternalLink, Globe, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-64 pb-16 relative overflow-hidden border-t-4 border-black/[0.03]">

      {/* HUD Transition Section (Final) */}
      <div className="absolute top-0 left-0 right-0 hud-divider !py-0 opacity-20">
        <div className="hud-line" />
        <div className="hud-label">S_07 // FOOTER_NAVIGATION</div>
        <div className="hud-line" />
      </div>

      {/* Massive Decorative Typography Background */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden h-[45vh] flex items-end opacity-[0.03]">
        <h2 className="text-[25vw] font-black leading-[0.65] tracking-tighter text-black uppercase whitespace-nowrap translate-y-1/4">
          USMAN IMRAN USMAN IMRAN
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-64">

          <div className="md:col-span-6 space-y-16">
            <div className="space-y-6">
              <h3 className="text-6xl font-black tracking-tighter uppercase text-black leading-[0.85]">
                Engineering <br />
                <span className="text-black/20 italic lowercase font-serif">robust</span> <br /> scalable systems.
              </h3>
              <p className="text-2xl text-black/30 font-bold uppercase tracking-tighter max-w-md leading-none">
                Available for worldwide remote collaboration and strategic consulting.
              </p>
            </div>

            <div className="flex flex-wrap gap-16 pt-8">
              <div className="space-y-3">
                <div className="text-[10px] font-black tracking-[0.5em] text-black/10 uppercase flex items-center gap-3">
                  <MapPin className="w-3 h-3" /> Origin_Point
                </div>
                <div className="text-lg font-black text-black uppercase tracking-tight">Karachi, PK</div>
              </div>
              <div className="space-y-3">
                <div className="text-[10px] font-black tracking-[0.5em] text-black/10 uppercase flex items-center gap-3">
                  <Clock className="w-3 h-3" /> System_Time
                </div>
                <div className="text-lg font-black text-black uppercase tracking-tight">{currentTime} (GMT+5)</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="text-[10px] font-black tracking-[0.8em] text-black/10 uppercase border-b border-black/5 pb-4">Navigation</div>
              <ul className="space-y-6 text-xs font-black tracking-[0.4em] text-black uppercase">
                <li><a href="#home" className="hover:text-accent transition-all hover:translate-x-2 inline-block">Index_Main</a></li>
                <li><a href="#about" className="hover:text-accent transition-all hover:translate-x-2 inline-block">Architecture</a></li>
                <li><a href="#projects" className="hover:text-accent transition-all hover:translate-x-2 inline-block">Operations</a></li>
                <li><a href="#contact" className="hover:text-accent transition-all hover:translate-x-2 inline-block">Interface</a></li>
              </ul>
            </div>
            <div className="space-y-10">
              <div className="text-[10px] font-black tracking-[0.8em] text-black/10 uppercase border-b border-black/5 pb-4">Social_Core</div>
              <ul className="space-y-6 text-xs font-black tracking-[0.4em] text-black uppercase">
                <li><a href="https://linkedin.com/in/usmanimran-dev" target="_blank" className="hover:text-accent transition-all hover:translate-x-2 inline-block">Linkedin_Link</a></li>
                <li><a href="https://github.com/usmanimran-dev" target="_blank" className="hover:text-accent transition-all hover:translate-x-2 inline-block">Github_Core</a></li>
                <li><a href="https://wa.me/923259283582" target="_blank" className="hover:text-accent transition-all hover:translate-x-2 inline-block">Direct_Net</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-black/10 gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-[10px] font-black tracking-[0.8em] text-black uppercase opacity-10">
              © 2026 USMAN IMRAN // ALL_PROTOCOLS_RESERVED.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-4 py-8"
          >
            <div className="p-8 rounded-full bg-black text-white hover:bg-accent transition-all duration-1000 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-6">
              <ArrowUp className="w-10 h-10" />
            </div>
            <span className="text-[9px] font-black tracking-[1em] text-black/10 uppercase italic">Return_To_Root</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;