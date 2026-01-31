import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, Cpu, Radio, Globe } from "lucide-react";

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
    { href: "#home", label: "INDEX" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "T.STACK" },
    { href: "#projects", label: "WORK" },
    { href: "#work-experience", label: "HISTORY" },
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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? "py-4 m-4" : "py-10"}`}>
      <div className={`container mx-auto px-6 max-w-[1400px] transition-all duration-700 ${isScrolled
        ? "bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-black/[0.05] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]"
        : "bg-transparent"
        }`}>
        <div className="flex items-center justify-between py-4">

          {/* Logo & HUD Metadata */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="group flex flex-col items-start"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tighter text-black uppercase">
                  USMAN IMRAN<span className="text-accent italic">.</span>
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-hidden h-3">
                <span className="text-[7px] font-black tracking-[0.4em] text-black/20 uppercase group-hover:-translate-y-full transition-transform duration-500">CORE_ARCHITECT</span>
                <span className="text-[7px] font-black tracking-[0.4em] text-accent uppercase translate-y-full group-hover:-translate-y-full transition-transform duration-500">SYSTEM_STABLE</span>
              </div>
            </a>

            {/* HUD Divider (Desktop Only) */}
            <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-black/5">
              <div className="flex flex-col gap-0.5">
                <div className="text-[6px] font-black text-black/10 tracking-[0.5em] uppercase">Transmission</div>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-1 h-3 rounded-full ${i < 3 ? 'bg-accent/40' : 'bg-black/5'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop HUD Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-8 pr-12 border-r border-black/5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative group py-2"
                >
                  <span className="text-[9px] font-black tracking-[0.3em] text-black/40 group-hover:text-black transition-colors uppercase">
                    {item.label}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="relative group p-1"
            >
              <div className="px-8 py-3 bg-black text-white rounded-full text-[10px] font-black tracking-widest uppercase overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 hover:bg-black/90">
                <span className="relative z-10">ESTABLISH_LINK</span>
              </div>
            </a>
          </div>

          {/* Mobile HUD Controls */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex flex-col items-end gap-1">
              <div className="text-[6px] font-black text-black/20 tracking-widest uppercase">Battery</div>
              <div className="w-8 h-1.5 bg-black/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-3/4" />
              </div>
            </div>
            <button
              className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-500 ${isMenuOpen ? "bg-black text-white" : "bg-black/5 text-black border border-black/5"
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator (HUD Style) */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/5">
          <div
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Fullscreen HUD Overlay */}
        <div className={`md:hidden fixed inset-0 top-[100px] bg-white transition-all duration-500 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}>
          <div className="container mx-auto px-8 py-12 flex flex-col gap-8 h-full">
            <div className="text-[8px] font-black tracking-[0.5em] text-black/20 uppercase mb-4">Master_INDEX</div>
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <div key={item.href} className="flex items-center gap-6 group">
                  <span className="text-black/10 font-black text-3xl">0{i + 1}</span>
                  <a
                    href={item.href}
                    className="text-4xl font-black tracking-tighter text-black uppercase hover:text-accent transition-colors"
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-auto border-t border-black/5 pt-12 space-y-8">
              <div className="flex justify-between items-center text-[8px] font-black tracking-widest text-black/20 uppercase">
                <span>LAT: 24.8607° N</span>
                <span>LNG: 67.0011° E</span>
              </div>
              <Button
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full h-20 bg-black text-white rounded-3xl text-xl font-black tracking-tighter uppercase"
              >
                INITIATE_CONTACT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;