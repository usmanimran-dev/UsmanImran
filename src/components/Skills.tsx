import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Layers, Cpu, Smartphone, Database, Globe, Zap, CheckCircle2 } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "Full-Stack", icon: <Zap className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend", icon: <Layers className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Database className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "nocode", label: "Development", icon: <Cpu className="w-4 h-4" /> }
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
    <section id="skills" className="bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="hud-divider mb-8">
          <div className="hud-line" />
          <div className="hud-label">S_03 // TECHNICAL_STACK</div>
          <div className="hud-line" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-12">
          <div className="space-y-4">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.8]">
              CORE <br />
              <span className="text-black/10 italic lowercase">Stack</span>
            </h2>
            <div className="h-1.5 w-32 bg-[#06B6D4] mt-6" />
          </div>

          <div className="flex flex-wrap gap-3">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-700 border ${activeCategory === category.id
                  ? "bg-black text-white border-black shadow-2xl scale-105"
                  : "bg-black/[0.02] text-black/30 border-black/[0.05] hover:border-black/20 hover:text-black"
                  } flex items-center gap-3`}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bento-card !p-10 flex flex-col justify-between group hover:translate-y-[-8px] transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-black/10 group-hover:text-accent transition-colors duration-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-[9px] font-black text-black/10 tracking-[0.3em] uppercase">{skill.level}</div>
              </div>
              <div className="text-xl font-black text-black tracking-tighter uppercase leading-none group-hover:text-accent transition-colors duration-700">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Summary Bento Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card border-black/[0.05] bg-black/[0.01] flex flex-col justify-end min-h-[300px] group">
            <div className="space-y-6">
              <div className="text-xs font-black text-accent tracking-[0.5em] uppercase border-l-2 border-accent pl-4">Focus 01</div>
              <h4 className="text-2xl font-black text-black mb-2 uppercase leading-none group-hover:translate-x-2 transition-transform duration-700">Cross-Platform</h4>
              <p className="text-sm text-black/40 font-bold uppercase tracking-tight">Unified experiences across web & mobile.</p>
            </div>
          </div>
          <div className="bento-card border-black/[0.05] bg-black/[0.01] flex flex-col justify-end min-h-[300px] group">
            <div className="space-y-6">
              <div className="text-xs font-black text-black/20 tracking-[0.5em] uppercase border-l-2 border-black/10 pl-4">Focus 02</div>
              <h4 className="text-2xl font-black text-black mb-2 uppercase leading-none group-hover:translate-x-2 transition-transform duration-700">Scalability</h4>
              <p className="text-sm text-black/40 font-bold uppercase tracking-tight">Cloud-native infrastructure and distributed systems.</p>
            </div>
          </div>
          <div className="bento-card border-black/[0.05] bg-black/[0.01] flex flex-col justify-end min-h-[300px] group">
            <div className="space-y-6">
              <div className="text-xs font-black text-black/20 tracking-[0.5em] uppercase border-l-2 border-black/10 pl-4">Focus 03</div>
              <h4 className="text-2xl font-black text-black mb-2 uppercase leading-none group-hover:translate-x-2 transition-transform duration-700">Architecture</h4>
              <p className="text-sm text-black/40 font-bold uppercase tracking-tight">SOLID principles and modular, maintainable codebases.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;