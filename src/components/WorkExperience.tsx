import { Briefcase, Globe, Code, TrendingUp, Layers, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    company: "iVisionGate",
    role: "Full-Stack Software Engineer",
    location: "Onsite",
    dates: "2024 – Present",
    summary: "Architecting high-performance Fintech solutions for HBL and scalable logistics ecosystems for SwifPack. Engineering resilient backend architectures on AWS."
  },
  {
    company: "Eagle Scout",
    role: "Lead Full-Stack Developer",
    location: "Remote",
    dates: "2024 – Present",
    summary: "Leading architectural development of enterprise-grade web applications with complex API integrations and responsive high-fidelity interfaces."
  },
  {
    company: "Freelance",
    role: "Senior Full-Stack Consultant",
    location: "Remote",
    dates: "2023 – Present",
    summary: "Providing strategic technical consulting and building specialized web applications for international clients, focused on performance and scale."
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="hud-divider mb-8">
          <div className="hud-line" />
          <div className="hud-label">S_05 // CAREER_HISTORY</div>
          <div className="hud-line" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.8]">
              CAREER <br />
              <span className="text-black/10 italic lowercase">History</span>
            </h2>
          </div>
          <div className="h-2 w-32 bg-accent mb-8 hidden md:block" />
          <div className="mb-4">
            <a
              href="https://docs.google.com/document/d/16UjVpveS0x3j9AfnSakfU2l2kjfoMC8t7d_sHEuZLg8/edit?tab=t.0#heading=h.bexukqdrxvy7"
              target="_blank"
              className="text-black/40 hover:text-black transition-all flex flex-col items-end gap-1 group font-black tracking-widest text-[10px] uppercase"
            >
              <span className="opacity-40 group-hover:opacity-100 italic">Full Archive Request</span>
              <span className="flex items-center gap-3 border-b-2 border-black/5 group-hover:border-black transition-all pb-1">DATABASE_HISTORY <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" /></span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="group bento-card border-black/[0.12] bg-white hover:bg-black hover:text-white !rounded-[3rem] p-12 flex flex-col md:flex-row md:items-center justify-between gap-12 transition-all duration-1000 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)]"
            >
              <div className="md:w-1/4 space-y-3">
                <div className="text-[10px] font-black text-accent tracking-[0.6em] uppercase mb-4 opacity-100 group-hover:text-accent transition-colors">{exp.dates}</div>
                <div className="text-4xl font-black tracking-tighter uppercase leading-[0.8]">{exp.company}</div>
                <div className="h-0.5 w-12 bg-black/10 group-hover:bg-white/20 transition-colors" />
              </div>

              <div className="flex-1 max-w-2xl">
                <div className="text-xl font-black mb-4 uppercase tracking-tight leading-none text-black group-hover:text-white transition-colors">{exp.role}</div>
                <p className="text-xl text-black/40 group-hover:text-white/40 font-bold uppercase tracking-tighter leading-none transition-colors italic">
                  {exp.summary}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="px-6 py-2 rounded-full border border-black/10 group-hover:border-white/20 text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-700">
                  {exp.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Philosophy Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="bento-card border-black/[0.08] bg-black/[0.01] flex flex-col justify-end min-h-[400px] group">
            <div className="absolute top-0 right-0 p-10">
              <TrendingUp className="w-20 h-20 text-black opacity-[0.03] group-hover:opacity-10 transition-all duration-1000" />
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-black text-accent tracking-[0.8em] uppercase border-l-4 border-accent pl-6">Core Principal</div>
              <div className="text-5xl font-black text-black uppercase tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-1000">SCALABILITY</div>
              <p className="text-xl text-black/40 font-bold uppercase tracking-tight leading-none italic max-w-sm">ENGINEER SYSTEMS THAT GROW SEAMLESSLY WITH WORLD DEMAND.</p>
            </div>
          </div>
          <div className="bento-card border-black/[0.08] bg-black/[0.01] flex flex-col justify-end min-h-[400px] group">
            <div className="absolute top-0 right-0 p-10">
              <Globe className="w-20 h-20 text-black opacity-[0.03] group-hover:opacity-10 transition-all duration-1000" />
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-black text-[#06B6D4] tracking-[0.8em] uppercase border-l-4 border-[#06B6D4] pl-6">Global Vision</div>
              <div className="text-5xl font-black text-black uppercase tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-1000">RESILIENCE</div>
              <p className="text-xl text-black/40 font-bold uppercase tracking-tight leading-none italic max-w-sm">BUILDING SOFTWARE THAT TRANSCENDS BORDERS AND LANGUAGES.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
