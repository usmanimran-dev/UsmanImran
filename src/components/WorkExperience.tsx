import { Briefcase, Globe, Code, TrendingUp, Layers, ArrowUpRight, ShieldCheck, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    company: "iVisionGate",
    role: "Full-Stack Engineer",
    location: "Onsite",
    dates: "2024 – Present",
    summary: "Engineering scalable enterprise (HBL) and logistics (SwiftPack) systems. Designing resilient AWS infrastructure and high-performance Node.js/Angular architectures."
  },
  {
    company: "Sociam",
    role: "Flutter Developer",
    location: "Remote",
    dates: "2023 – 2024",
    summary: "Developed production-ready Flutter applications for Android & iOS. Focused on clean architecture, real-time data sync, and optimized mobile performance."
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="bg-background relative pt-20">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="flex items-center gap-6 mb-12 opacity-30">
          <div className="h-px w-32 bg-primary" />
          <div className="text-[10px] font-bold tracking-[0.5em] text-white uppercase">S_05 // WORK_EXPERIENCE</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white uppercase leading-[0.85] md:leading-[0.8]">
              WORK <br />
              <span className="text-primary italic">EXPERIENCE</span>
            </h2>
          </div>
          <div className="h-1 w-32 bg-primary mb-8 hidden md:block opacity-50" />
          <div className="mb-4">
            <a
              href="https://docs.google.com/document/d/16UjVpveS0x3j9AfnSakfU2l2kjfoMC8t7d_sHEuZLg8/edit?tab=t.0#heading=h.bexukqdrxvy7"
              target="_blank"
              className="text-white/40 hover:text-primary transition-all flex flex-col items-end gap-1 group font-bold tracking-widest text-[10px] uppercase"
            >
              <span className="opacity-40 group-hover:opacity-100 italic">Full Archive Request</span>
              <span className="flex items-center gap-3 border-b border-white/5 group-hover:border-primary transition-all pb-1">DATABASE_HISTORY <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" /></span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="fin-card group !rounded-2xl p-10 flex flex-col md:flex-row md:items-center justify-between gap-12 group cursor-default"
            >
              <div className="md:w-1/4 space-y-3">
                <div className="text-[10px] font-bold text-primary tracking-[0.6em] uppercase mb-4 opacity-70">{exp.dates}</div>
                <div className="text-4xl font-bold tracking-tight text-white uppercase leading-[0.8] group-hover:text-primary transition-colors">{exp.company}</div>
                <div className="h-1 w-12 bg-white/5 group-hover:bg-primary/30 transition-all rounded-full" />
              </div>

              <div className="flex-1 max-w-2xl">
                <div className="text-xl font-bold mb-4 uppercase tracking-tight text-white/90">{exp.role}</div>
                <p className="text-xl text-white/40 font-medium uppercase tracking-tighter leading-tight transition-colors italic">
                  {exp.summary}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="px-6 py-2 rounded-lg border border-white/10 text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">
                  {exp.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Philosophy Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="fin-card flex flex-col justify-end min-h-[400px] group border-white/5">
            <div className="absolute top-10 right-10">
              <Zap className="w-16 h-16 text-primary opacity-5 group-hover:opacity-20 transition-all duration-700" />
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-primary tracking-[0.8em] uppercase border-l-2 border-primary pl-6">Core Principal</div>
              <div className="text-5xl font-bold text-white uppercase tracking-tighter leading-none">SCALABILITY</div>
              <p className="text-xl text-white/40 font-medium uppercase tracking-tight leading-tight italic max-w-sm">ENGINEER SYSTEMS THAT GROW SEAMLESSLY WITH GLOBAL DEMAND.</p>
            </div>
          </div>
          <div className="fin-card flex flex-col justify-end min-h-[400px] group border-white/5">
            <div className="absolute top-10 right-10">
              <ShieldCheck className="w-16 h-16 text-accent opacity-5 group-hover:opacity-20 transition-all duration-700" />
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-accent tracking-[0.8em] uppercase border-l-2 border-accent pl-6">Global Vision</div>
              <div className="text-5xl font-bold text-white uppercase tracking-tighter leading-none">RESILIENCE</div>
              <p className="text-xl text-white/40 font-medium uppercase tracking-tight leading-tight italic max-w-sm">BUILDING SOFTWARE THAT TRANSCENDS BORDERS AND LANGUAGES.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
