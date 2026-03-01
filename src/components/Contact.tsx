import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar, ArrowUpRight, Copy, Check, Linkedin, Github, Twitter, MapPin, Activity, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "muhammadusman20um@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Connection Established: Protocol Copied.");
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "STRATEGY_SESSION",
      description: "Book architectural debug",
      action: "RESERVE",
      href: "https://cal.com/muhammad-osman-rbpokc/30min",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "DIRECT_ENCRYPTION",
      description: "+92 325 9283582",
      action: "WHATSAPP",
      href: "https://wa.me/923259283582",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "GEOSPATIAL_AUTH",
      description: "Karachi, PK (UTC+5)",
      action: "GMAPS",
      href: "https://goo.gl/maps/example",
    }
  ];

  return (
    <section id="contact" className="bg-white relative pt-20">

      {/* Background Fintech Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="flex items-center gap-6 mb-12 opacity-40">
          <div className="h-px w-32 bg-primary" />
          <div className="text-[10px] font-bold tracking-[0.5em] text-gray-900 uppercase">S_06 // GET_IN_TOUCH</div>
          <div className="h-px flex-1 bg-black/[0.06]" />
        </div>

        <div className="mb-24">
          <div className="text-[10px] font-bold text-primary tracking-[0.8em] uppercase mb-8">Get In Touch</div>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-gray-900 uppercase leading-[0.85] md:leading-[0.75]">
            CONTACT <br />
            <span className="text-primary italic">ME</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {/* Main Transmission Card */}
          <div
            className="fin-card md:col-span-2 lg:col-span-4 p-12 flex flex-col justify-between min-h-[500px] cursor-pointer hover:border-primary/50 transition-all border-black/[0.06]"
            onClick={() => window.location.href = `mailto:${email}`}
          >
            <div className="flex justify-between items-start">
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl text-primary shadow-sm group-hover:bg-primary/15 transition-all">
                <Mail className="w-10 h-10" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-4 rounded-lg bg-black/[0.04] border border-black/[0.08] text-black/50 hover:text-gray-900 hover:bg-black/[0.08] transition-all flex items-center gap-3"
              >
                {copied ? <Check className="w-5 h-5 text-primary" /> : <Copy className="w-5 h-5" />}
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{copied ? "SYNCED" : "COPY_PROTO"}</span>
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[10px] font-bold text-primary tracking-[0.5em] uppercase border-l-2 border-primary pl-4">
                Primary Transmission Protocol
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight break-all leading-none uppercase">
                {email.split('@')[0]}<span className="text-black/30">@{email.split('@')[1]}</span>
              </h3>
            </div>
          </div>

          {/* Secondary Channels */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 gap-6">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target="_blank"
                className="fin-card group flex items-center justify-between p-8 hover:bg-black/[0.02] transition-all border-black/[0.06]"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-black/[0.04] rounded-lg border border-black/[0.08] group-hover:border-primary/30 transition-all">
                    <div className="text-primary">{method.icon}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-bold tracking-widest text-black/40 uppercase">{method.title}</div>
                    <div className="text-base font-bold text-gray-900 tracking-tight uppercase">{method.description}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-45" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
