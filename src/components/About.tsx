import { Button } from "@/components/ui/button";
import { Heart, Coffee, Code, Rocket, Award, Target, BookOpen, GraduationCap, ArrowUpRight, ShieldCheck, Activity, Lock, Cpu } from "lucide-react";

const About = () => {
  const handleDownloadResume = () => {
    window.open('https://docs.google.com/document/d/16UjVpveS0x3j9AfnSakfU2l2kjfoMC8t7d_sHEuZLg8/edit?tab=t.0#heading=h.bexukqdrxvy7', '_blank', 'noopener noreferrer');
  };

  const certificates = [
    { title: "Generative AI with LLMs", issuer: "DeepLearning.AI & AWS" },
    { title: "LangChain for LLM Development", issuer: "DeepLearning.AI" },
    { title: "ChatGPT Prompt Engineering", issuer: "DeepLearning.AI & OpenAI" },
    { title: "API Development & Integration", issuer: "LinkedIn Learning" }
  ];

  return (
    <section id="about" className="bg-white relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="flex items-center gap-6 mb-12 opacity-40">
          <div className="h-px w-32 bg-primary" />
          <div className="text-[10px] font-bold tracking-[0.5em] text-gray-900 uppercase">S_02 // ABOUT_ME</div>
          <div className="h-px flex-1 bg-black/[0.06]" />
        </div>

        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-gray-900 uppercase leading-[0.85] md:leading-[0.8]">
              ABOUT <br />
              <span className="text-primary italic">ME</span>
            </h2>
          </div>
          <div className="text-[10px] font-bold text-black/20 tracking-[0.4em] uppercase">Professional_Profile_v3.0</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {/* Main Bio Card */}
          <div className="md:col-span-4 lg:col-span-4 fin-card flex flex-col justify-between space-y-16">
            <div className="space-y-10">
              <div className="text-[10px] font-bold text-primary tracking-[0.5em] uppercase border-l-2 border-primary pl-4">Core Philosophy</div>
              <h3 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[0.85] tracking-tighter uppercase">
                Bridging complex logic <br />
                with <span className="text-primary/40 italic">clean code.</span>
              </h3>
              <div className="space-y-8 text-black/40 text-2xl font-medium leading-tight max-w-2xl uppercase tracking-tighter">
                <p>
                  Specialized in architecting scalable Full-Stack applications and delivering high-impact software solutions.
                </p>
                <div className="h-[1px] w-full bg-black/[0.05]" />
                <p>
                  Designing robust, data-driven systems leveraging Modern Web Frameworks and AWS Cloud Architecture.
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadResume}
              className="group w-fit flex items-center gap-6 px-12 py-6 bg-gray-900 text-white rounded-lg font-bold text-xs tracking-[0.4em] uppercase transition-all duration-300 hover:bg-primary hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.5)]"
            >
              CV_ACCESS_LEDGER <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Mission Card */}
          <div className="md:col-span-2 lg:col-span-2 fin-card flex flex-col justify-between min-h-[400px]">
            <div className="p-5 bg-primary/10 border border-primary/20 rounded-xl w-fit">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-black/20 tracking-widest uppercase">Technical_Mission</div>
              <p className="text-3xl font-bold text-gray-900 leading-none tracking-tighter uppercase italic">
                TO ENGINEER SYSTEMS THAT EMPOWER USERS AND DRIVE INNOVATION.
              </p>
            </div>
          </div>

          {/* Certificates Bento */}
          <div className="md:col-span-3 lg:col-span-3 fin-card space-y-16">
            <div className="flex justify-between items-center border-b border-black/[0.05] pb-8">
              <div className="text-[10px] font-bold text-black/20 tracking-[0.4em] uppercase">Security_Certifications</div>
              <Activity className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {certificates.map((cert, i) => (
                <div key={i} className="space-y-2 group cursor-default">
                  <div className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors uppercase tracking-tight leading-none">{cert.title}</div>
                  <div className="text-[9px] font-bold text-black/25 uppercase tracking-[0.3em]">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Row */}
          <div className="md:col-span-3 lg:col-span-3 grid grid-cols-2 gap-6">
            <div className="fin-card flex flex-col justify-between hover:bg-gray-900 group cursor-pointer transition-all duration-500">
              <Lock className="w-8 h-8 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-bold text-gray-900 group-hover:text-white uppercase tracking-tight transition-colors">Encrypted</div>
            </div>
            <div className="fin-card flex flex-col justify-between hover:bg-gray-900 group cursor-pointer transition-all duration-500">
              <ShieldCheck className="w-8 h-8 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-bold text-gray-900 group-hover:text-white uppercase tracking-tight transition-colors">Secure</div>
            </div>
            <div className="fin-card flex flex-col justify-between hover:bg-gray-900 group cursor-pointer transition-all duration-500">
              <Cpu className="w-8 h-8 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-bold text-gray-900 group-hover:text-white uppercase tracking-tight transition-colors">Scalable</div>
            </div>
            <div className="fin-card flex flex-col justify-between hover:bg-gray-900 group cursor-pointer transition-all duration-500" onClick={() => window.location.href = "#contact"}>
              <Activity className="w-8 h-8 text-black/10 group-hover:text-white transition-colors" />
              <div className="text-xl font-bold text-gray-900 group-hover:text-white uppercase tracking-tight transition-colors">Live_Sync</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;