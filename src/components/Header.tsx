import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, Cpu, Radio, Globe, ShieldCheck, Activity } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#work-experience", label: "EXPERIENCE" },
    { href: "#blog", label: "BLOG" },
    { href: "#contact", label: "CONTACT" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? "py-4 m-0" : "py-10"}`}>
      <div className={`container mx-auto px-6 max-w-[1400px] transition-all duration-700 ${isScrolled
        ? "bg-background/80 backdrop-blur-2xl py-3 border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
        : "bg-transparent"
        }`}>
        <div className="flex items-center justify-between">

          {/* Logo & Fintech Metadata */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="group flex flex-col items-start"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white uppercase group-hover:text-primary transition-colors">
                  USMAN IMRAN<span className="text-primary">.</span>
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-hidden h-3 mt-1">
                <span className="text-[7px] font-bold tracking-[0.4em] text-white/20 uppercase group-hover:-translate-y-full transition-transform duration-500">SOFTWARE_ENGINEER</span>
                <span className="text-[7px] font-bold tracking-[0.4em] text-primary uppercase translate-y-full group-hover:-translate-y-full transition-transform duration-500">FULL_STACK_DEV</span>
              </div>
            </a>

            {/* Signal Status (Desktop Only) */}
            <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-white/5">
              <div className="flex flex-col gap-0.5">
                <div className="text-[6px] font-bold text-white/10 tracking-[0.5em] uppercase">Status</div>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-1 h-3 rounded-full ${i < 3 ? 'bg-primary/40' : 'bg-white/5'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Fintech Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <nav className="flex items-center gap-8 pr-12 border-r border-white/5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative group py-2"
                >
                  <span className="text-[9px] font-bold tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors uppercase">
                    {item.label}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="relative group p-1"
            >
              <div className="px-8 py-3 bg-primary text-primary-foreground rounded-lg text-[10px] font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.5)]">
                <span className="relative z-10 flex items-center gap-2"> <Activity className="w-3 h-3 animate-pulse" /> HIRE_ME</span>
              </div>
            </a>
          </div>

          {/* Mobile HUD Controls */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex flex-col items-end gap-1">
              <div className="text-[6px] font-bold text-white/20 tracking-widest uppercase">Encryption</div>
              <div className="w-8 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-pulse w-full" />
              </div>
            </div>
            <button
              className={`w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300 ${isMenuOpen ? "bg-primary text-primary-foreground" : "bg-white/5 text-white border border-white/10"
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator (Fintech Bar) */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_8px_rgba(34,197,94,0.8)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Fullscreen HUD Overlay */}
        <div className={`md:hidden fixed inset-0 top-[100px] bg-background/95 backdrop-blur-xl transition-all duration-500 border-t border-white/5 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}>
          <div className="container mx-auto px-8 py-12 flex flex-col gap-8 h-full">
            <div className="text-[8px] font-bold tracking-[0.5em] text-primary/50 uppercase mb-4">Navigation</div>
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <div key={item.href} className="flex items-center gap-8 group">
                  <span className="text-white/10 font-bold text-2xl group-hover:text-primary/20">0{i + 1}</span>
                  <a
                    href={item.href}
                    className="text-4xl font-bold tracking-tight text-white uppercase hover:text-primary transition-colors"
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-auto border-t border-white/5 pt-12 space-y-8">
              <div className="flex justify-between items-center text-[8px] font-bold tracking-widest text-white/20 uppercase">
                <span className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary" /> PORTFOLIO_ACTIVE</span>
                <span>v3.0.4 // TS</span>
              </div>
              <Button
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full h-20 bg-primary text-primary-foreground rounded-2xl text-xl font-bold tracking-tight uppercase hover:bg-primary/90"
              >
                CONTACT_ME
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;