import { ArrowUp, Github, Linkedin, Twitter, Mail, ExternalLink, Globe, MapPin, Clock, ShieldCheck, Activity } from "lucide-react";
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
    <footer className="bg-background pt-64 pb-16 relative overflow-hidden border-t border-white/5">

      {/* HUD Transition Section (Final) */}
      <div className="absolute top-0 left-0 right-0 py-0 opacity-20">
        <div className="flex items-center gap-6">
          <div className="h-px w-32 bg-primary" />
          <div className="text-[10px] font-bold tracking-[0.5em] text-white uppercase">S_07 // TERMINAL_LOGOUT_SEQUENCE</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      {/* Massive Decorative Typography Background */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden h-[45vh] flex items-end opacity-[0.02]">
        <h2 className="text-[25vw] font-bold leading-[0.65] tracking-tighter text-white uppercase whitespace-nowrap translate-y-1/4">
          USMAN IMRAN USMAN IMRAN
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-64">

          <div className="md:col-span-6 space-y-16">
            <div className="space-y-6">
              <h3 className="text-6xl font-bold tracking-tighter uppercase text-white leading-[0.85]">
                Engineering <br />
                <span className="text-primary italic">secure</span> <br /> scalable systems.
              </h3>
              <p className="text-2xl text-white/20 font-medium uppercase tracking-tighter max-w-md leading-none italic">
                Authorized for global remote operations and strategic engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-16 pt-8">
              <div className="space-y-3">
                <div className="text-[10px] font-bold tracking-[0.5em] text-white/5 uppercase flex items-center gap-3">
                  <MapPin className="w-3 h-3 text-primary" /> SERVER_LOCATION
                </div>
                <div className="text-lg font-bold text-white uppercase tracking-tight">Karachi, PK</div>
              </div>
              <div className="space-y-3">
                <div className="text-[10px] font-bold tracking-[0.5em] text-white/5 uppercase flex items-center gap-3">
                  <Clock className="w-3 h-3 text-primary" /> SYSTEM_UPTIME
                </div>
                <div className="text-lg font-bold text-white uppercase tracking-tight">{currentTime} (GMT+5)</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="text-[10px] font-bold tracking-[0.8em] text-white/5 uppercase border-b border-white/5 pb-4 uppercase">System_Nodes</div>
              <ul className="space-y-6 text-xs font-bold tracking-[0.4em] text-white/40 uppercase">
                <li><a href="#home" className="hover:text-primary transition-all hover:translate-x-2 inline-block">NODE_INDEX</a></li>
                <li><a href="#about" className="hover:text-primary transition-all hover:translate-x-2 inline-block">INTEL_LOG</a></li>
                <li><a href="#projects" className="hover:text-primary transition-all hover:translate-x-2 inline-block">LEDGER_VIEW</a></li>
                <li><a href="#contact" className="hover:text-primary transition-all hover:translate-x-2 inline-block">HANDSHAKE</a></li>
              </ul>
            </div>
            <div className="space-y-10">
              <div className="text-[10px] font-bold tracking-[0.8em] text-white/5 uppercase border-b border-white/5 pb-4 uppercase">External_Links</div>
              <ul className="space-y-6 text-xs font-bold tracking-[0.4em] text-white/40 uppercase">
                <li><a href="https://linkedin.com/in/usmanimran-dev" target="_blank" className="hover:text-primary transition-all hover:translate-x-2 inline-block">LINKEDIN_AUTH</a></li>
                <li><a href="https://github.com/usmanimran-dev" target="_blank" className="hover:text-primary transition-all hover:translate-x-2 inline-block">GITHUB_CORE</a></li>
                <li><a href="https://wa.me/923259283582" target="_blank" className="hover:text-primary transition-all hover:translate-x-2 inline-block">DIRECT_CHANNEL</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-[10px] font-bold tracking-[0.8em] text-white/5 uppercase">
              © 2026 USMAN IMRAN // PROPRIETARY_CODEBASE // ALL_HANDS_SECURED.
            </div>
            <div className="flex items-center gap-4 opacity-10">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <Activity className="w-4 h-4 text-primary" />
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-6 py-4"
          >
            <div className="p-8 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)] hover:-translate-y-4">
              <ArrowUp className="w-8 h-8" />
            </div>
            <span className="text-[9px] font-bold tracking-[1em] text-white/5 uppercase italic">Reboot_To_Header</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;