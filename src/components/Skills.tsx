import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Layers, Cpu, Smartphone, Database, Globe, Zap, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "Full-Stack", icon: <Zap className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend", icon: <Layers className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Database className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "nocode", label: "Logic", icon: <Cpu className="w-4 h-4" /> }
  ];

  const skills = [
    { name: "React / Next.js", category: "frontend", level: "Expert" },
    { name: "Angular", category: "frontend", level: "Expert" },
    { name: "TypeScript", category: "frontend", level: "Expert" },
    { name: "Node.js", category: "backend", level: "Expert" },
    { name: "Firebase / Supabase", category: "backend", level: "Expert" },
    { name: "AWS / Cloud Infra", category: "backend", level: "Advanced" },
    { name: "Flutter / Dart", category: "mobile", level: "Expert" },
    { name: "Bubble.io", category: "nocode", level: "Expert" },
    { name: "SQL / NoSQL", category: "backend", level: "Advanced" }
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="bg-background relative pt-20">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="flex items-center gap-6 mb-12 opacity-30">
          <div className="h-px w-32 bg-primary" />
          <div className="text-[10px] font-bold tracking-[0.5em] text-white uppercase">S_03 // TECHNICAL_SKILLS</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white uppercase leading-[0.85] md:leading-[0.8]">
              TECH <br />
              <span className="text-primary italic">SKILLS</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-lg text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-300 border ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]"
                  : "bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white"
                  } flex items-center gap-3`}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="fin-card !p-8 flex flex-col justify-between group group-hover:bg-white/[0.05]"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="text-primary/20 group-hover:text-primary transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-[8px] font-bold text-white/20 tracking-[0.3em] uppercase">{skill.level}</div>
              </div>
              <div className="text-lg font-bold text-white tracking-tight uppercase group-hover:text-primary transition-colors">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Summary Bento Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="fin-card flex flex-col justify-end min-h-[300px] border-white/5">
            <div className="space-y-6">
              <div className="text-xs font-bold text-primary tracking-[0.5em] uppercase border-l-2 border-primary pl-4">Focus 01</div>
              <h4 className="text-2xl font-bold text-white mb-2 uppercase leading-none">Cross-Platform</h4>
              <p className="text-sm text-white/40 font-medium uppercase tracking-tight italic">Unified ecosystems spanning web & mobile secure layers.</p>
            </div>
          </div>
          <div className="fin-card flex flex-col justify-end min-h-[300px] border-white/5">
            <div className="space-y-6">
              <div className="text-xs font-bold text-white/20 tracking-[0.5em] uppercase border-l-2 border-white/10 pl-4">Focus 02</div>
              <h4 className="text-2xl font-bold text-white mb-2 uppercase leading-none">Scalability</h4>
              <p className="text-sm text-white/40 font-medium uppercase tracking-tight italic">AWS infrastructure with high-frequency data processing.</p>
            </div>
          </div>
          <div className="fin-card flex flex-col justify-end min-h-[300px] border-white/5">
            <div className="space-y-6">
              <div className="text-xs font-bold text-white/20 tracking-[0.5em] uppercase border-l-2 border-white/10 pl-4">Focus 03</div>
              <h4 className="text-2xl font-bold text-white mb-2 uppercase leading-none">Security</h4>
              <p className="text-sm text-white/40 font-medium uppercase tracking-tight italic">Encrypted communication and resilient backend architecture.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;