import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills", emoji: "🔥" },
    { id: "ai", label: "AI/ML", emoji: "🤖" },
    { id: "frontend", label: "Frontend", emoji: "🎨" },
    { id: "backend", label: "Backend", emoji: "⚙️" },
    { id: "nocode", label: "No-Code", emoji: "🚀" }
  ];

  const skills = [
    { name: "Bubble.io", category: "nocode", level: "Expert", emoji: "🫧" },
    { name: "AI Agents", category: "ai", level: "Advanced", emoji: "🤖" },
    { name: "n8n", category: "nocode", level: "Advanced", emoji: "🔗" },
    { name: "TypeScript", category: "frontend", level: "Expert", emoji: "💙" },
    { name: "JavaScript", category: "frontend", level: "Expert", emoji: "💛" },
    { name: "Angular", category: "frontend", level: "Expert", emoji: "🅰️" },
    { name: "React", category: "frontend", level: "Expert", emoji: "⚛️" },
    { name: "Supabase", category: "backend", level: "Advanced", emoji: "💚" },
    { name: "Firebase", category: "backend", level: "Advanced", emoji: "🔥" },
    { name: "Node.js", category: "backend", level: "Expert", emoji: "💚" },
    { name: "SQL", category: "backend", level: "Advanced", emoji: "📊" }
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "skill-badge-primary";
      case "Advanced": return "skill-badge";
      default: return "skill-badge";
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🛠 <span className="text-gradient-hero">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
            with AI, automation, and no-code technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-glow"
                : "bg-card hover:bg-card-hover text-card-foreground"
                }`}
            >
              {category.emoji} {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`${getLevelColor(skill.level)} p-4 rounded-lg text-center group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.emoji}
              </div>
              <div className="font-semibold text-sm mb-1">{skill.name}</div>
              <div className="text-xs opacity-75">{skill.level}</div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="experience-card p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Specialized Focus</h3>
            <p className="text-muted-foreground">
              Deep expertise in emerging technologies and AI integration
            </p>
          </div>
          <div className="experience-card p-6 text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Rapid Development</h3>
            <p className="text-muted-foreground">
              No-code platforms for quick prototyping and MVP development
            </p>
          </div>
          <div className="experience-card p-6 text-center">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Full-Stack Mastery</h3>
            <p className="text-muted-foreground">
              End-to-end development from concept to deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;