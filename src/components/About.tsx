import { Button } from "@/components/ui/button";
import { Heart, Coffee, Code, Rocket, Award, Target, BookOpen, GraduationCap, ArrowUpRight } from "lucide-react";

const About = () => {
  const handleDownloadResume = () => {
    window.open('https://docs.google.com/document/d/16UjVpveS0x3j9AfnSakfU2l2kjfoMC8t7d_sHEuZLg8/edit?tab=t.0#heading=h.8dw6554pc91r', '_blank', 'noopener noreferrer');
  };

  const certificates = [
    { title: "Generative AI with LLMs", issuer: "DeepLearning.AI & AWS" },
    { title: "LangChain for LLM Development", issuer: "DeepLearning.AI" },
    { title: "ChatGPT Prompt Engineering", issuer: "DeepLearning.AI & OpenAI" },
    { title: "API Development & Integration", issuer: "LinkedIn Learning" }
  ];

  return (
    <section id="about" className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="hud-divider mb-8">
          <div className="hud-line" />
          <div className="hud-label">S_02 // SYSTEM_INTEL</div>
          <div className="hud-line" />
        </div>

        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.8]">
              ABOUT <br />
              <span className="text-black/10 italic lowercase">Me</span>
            </h2>
            <div className="h-1.5 w-32 bg-accent mt-6" />
          </div>
          <div className="text-[10px] font-black text-black/20 tracking-[0.4em] uppercase">Professional Profile</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">

          {/* Main Bio Card */}
          <div className="md:col-span-4 lg:col-span-4 bento-card flex flex-col justify-between space-y-16">
            <div className="space-y-10">
              <div className="text-[10px] font-black text-accent tracking-[0.5em] uppercase border-l-2 border-accent pl-4">Engineering Philosophy</div>
              <h3 className="text-5xl md:text-6xl font-black text-black leading-[0.85] tracking-tighter uppercase">
                Bridging complex logic <br />
                with <span className="text-black/30 italic lowercase font-serif">seamless experiences.</span>
              </h3>
              <div className="space-y-6 text-black/50 text-2xl font-bold leading-none max-w-2xl uppercase tracking-tight">
                <p>
                  Specialized in architecting scalable Full-Stack applications and delivering high-impact digital solutions.
                </p>
                <div className="h-px w-full bg-black/5" />
                <p>
                  Designing robust, data-driven systems leveraging Modern Web Frameworks and Cloud Architecture.
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadResume}
              className="group w-fit flex items-center gap-6 px-12 py-6 bg-black text-white rounded-full font-black text-xs tracking-[0.4em] uppercase transition-all duration-500 hover:scale-105 shadow-2xl"
            >
              Curriculum Vitae <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Mission Card */}
          <div className="md:col-span-2 lg:col-span-2 bento-card bg-black/[0.01] group flex flex-col justify-between min-h-[400px]">
            <div className="p-6 bg-black text-white rounded-[2rem] w-fit group-hover:bg-accent transition-colors duration-500 shadow-2xl">
              <Target className="w-10 h-10" />
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-black text-black/20 tracking-widest uppercase">Technical Vision</div>
              <p className="text-3xl font-black text-black leading-none tracking-tighter uppercase">
                TO ENGINEER SYSTEMS THAT EMPOWER USERS AND DRIVE INNOVATION.
              </p>
            </div>
          </div>

          {/* Certificates Bento */}
          <div className="md:col-span-3 lg:col-span-3 bento-card space-y-16">
            <div className="flex justify-between items-center border-b border-black/5 pb-8">
              <div className="text-[10px] font-black text-black/20 tracking-[0.4em] uppercase">Core Certifications</div>
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificates.map((cert, i) => (
                <div key={i} className="space-y-2 group cursor-default">
                  <div className="text-xs font-black text-black group-hover:text-accent transition-colors uppercase tracking-tight leading-none">{cert.title}</div>
                  <div className="text-[8px] font-black text-black/20 uppercase tracking-[0.3em]">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Row */}
          <div className="md:col-span-3 lg:col-span-3 grid grid-cols-2 gap-6">
            <div className="bento-card flex flex-col justify-between hover:bg-black group cursor-pointer transition-all duration-700">
              <Code className="w-10 h-10 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-black text-black group-hover:text-white uppercase tracking-tighter">Clean Code</div>
            </div>
            <div className="bento-card flex flex-col justify-between hover:bg-black group cursor-pointer transition-all duration-700">
              <Rocket className="w-10 h-10 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-black text-black group-hover:text-white uppercase tracking-tighter">Scale</div>
            </div>
            <div className="bento-card flex flex-col justify-between hover:bg-black group cursor-pointer transition-all duration-700">
              <Heart className="w-10 h-10 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-black text-black group-hover:text-white uppercase tracking-tighter">Precision</div>
            </div>
            <div className="bento-card flex flex-col justify-between hover:bg-black group cursor-pointer transition-all duration-700" onClick={() => window.location.href = "#contact"}>
              <Coffee className="w-10 h-10 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-black text-black group-hover:text-white uppercase tracking-tighter">Connect</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;