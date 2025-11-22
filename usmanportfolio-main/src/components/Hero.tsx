import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import blockchainBg from "@/assets/blockchain-bg.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Full-Stack Builder";

  useEffect(() => {
    setIsVisible(true);
    // Typewriter effect
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      </div>

      {/* Blockchain/Fintech Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Image */}
        <img
          src={blockchainBg}
          alt="Blockchain network background"
          className="w-full h-full object-cover opacity-40"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80"></div>

        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className={`text-gradient-hero inline-block ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0'}`}>
                  {text}<span className="animate-pulse">|</span>
                </span>
              </h1>

              <div className={`text-xl lg:text-2xl text-muted-foreground font-medium ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]' : 'opacity-0'}`}>
                AI & No-Code Solutions Expert ✨
              </div>

              <p className={`text-lg text-muted-foreground max-w-2xl leading-relaxed ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]' : 'opacity-0'}`}>
                Delivering next-generation digital solutions through AI integration, powerful automation, and rapid no-code development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]' : 'opacity-0'}`}>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hero-button group h-11 px-8 py-2 text-primary-foreground shadow-glow hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.5)] hover:scale-105"
                aria-label="View my work and projects"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://docs.google.com/document/d/16UjVpveS0x3j9AfnSakfU2l2kjfoMC8t7d_sHEuZLg8/edit?tab=t.0#heading=h.8dw6554pc91r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary hover:scale-105 hover:shadow-lg h-11 px-8 py-2"
                download
              >
                📄 Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className={`flex items-center space-x-6 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]' : 'opacity-0'}`}>
              <a
                href="https://github.com/usmanimran-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-glow hover:rotate-6"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-osman-037aa0302/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-glow hover:rotate-6"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Visual Element - Stats/Highlights */}
          <div className={`hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="project-card p-6 text-center hover:scale-110 transition-all duration-500 hover:shadow-glow group animate-[fadeIn_0.8s_ease-out_1s_forwards] opacity-0">
                <div className="text-3xl font-bold text-gradient-primary mb-2 group-hover:scale-125 transition-transform duration-300">13+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="project-card p-6 text-center hover:scale-110 transition-all duration-500 hover:shadow-glow group animate-[fadeIn_0.8s_ease-out_1.2s_forwards] opacity-0">
                <div className="text-3xl font-bold text-gradient-primary mb-2 group-hover:scale-125 transition-transform duration-300">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="project-card p-6 text-center hover:scale-110 transition-all duration-500 hover:shadow-glow group animate-[fadeIn_0.8s_ease-out_1.4s_forwards] opacity-0">
                <div className="text-3xl font-bold text-gradient-primary mb-2 group-hover:scale-125 transition-transform duration-300">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="project-card p-6 text-center hover:scale-110 transition-all duration-500 hover:shadow-glow group animate-[fadeIn_0.8s_ease-out_1.6s_forwards] opacity-0">
                <div className="text-3xl font-bold text-gradient-primary mb-2 group-hover:scale-125 transition-transform duration-300">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center hover:border-primary transition-colors">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;