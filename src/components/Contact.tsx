import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar, ArrowUpRight, Copy, Check, Linkedin, Github, Twitter, MapPin } from "lucide-react";
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
    toast.success("Link Established: Identity Copied.");
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "STRATEGY_SESSION",
      description: "Book architectural session",
      action: "RESERVE",
      href: "https://cal.com/muhammad-osman-rbpokc/30min",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "DIRECT_WHATSAPP",
      description: "+92 325 9283582",
      action: "WHATSAPP",
      href: "https://wa.me/923259283582",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "LOCATION_BASE",
      description: "Karachi, PK (UTC+5)",
      action: "GMAPS",
      href: "https://goo.gl/maps/example",
    }
  ];

  return (
    <section id="contact" className="bg-white relative overflow-hidden">

      {/* Background HUD Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HUD Transition Section */}
        <div className="hud-divider mb-12">
          <div className="hud-line" />
          <div className="hud-label">S_06 // CONTACT_PORTAL</div>
          <div className="hud-line" />
        </div>

        <div className="mb-32">
          <div className="text-[10px] font-black text-accent tracking-[0.8em] uppercase mb-8">Establish Link</div>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.75]">
            INITIATE <br />
            <span className="text-black/10 italic lowercase">Contact</span>
          </h2>
          <div className="h-2 w-48 bg-black mt-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">

          {/* Main Transmission Card */}
          <div
            className="bento-card md:col-span-2 lg:col-span-4 group relative overflow-hidden p-16 flex flex-col justify-between min-h-[500px] cursor-pointer bg-black text-white border-transparent hover:scale-[0.98] transition-all duration-1000 shadow-[0_80px_150px_-40px_rgba(0,0,0,0.5)]"
            onClick={() => window.location.href = `mailto:${email}`}
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="p-8 bg-white/10 rounded-[2.5rem] text-white shadow-2xl backdrop-blur-3xl group-hover:bg-accent transition-colors duration-700">
                <Mail className="w-12 h-12" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/20 transition-all flex items-center gap-4 group/copy"
              >
                {copied ? <Check className="w-6 h-6 text-accent" /> : <Copy className="w-6 h-6 group-hover/copy:scale-110 transition-transform duration-700" />}
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">{copied ? "SYNCED" : "COPY_HEX"}</span>
              </button>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="text-[10px] font-black text-accent tracking-[0.8em] uppercase border-l-4 border-accent pl-6">Primary Protocol</div>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter break-all leading-[0.85] uppercase group-hover:translate-x-4 transition-transform duration-1000">
                {email.split('@')[0]}<span className="text-white/10">@{email.split('@')[1]}</span>
              </h3>
            </div>

            {/* HUD Grid Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.1) 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
          </div>

          {/* Secondary Channels */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 gap-8">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target="_blank"
                className="bento-card group flex items-center justify-between p-10 hover:bg-black hover:text-white transition-all duration-1000 shadow-sm hover:shadow-2xl"
              >
                <div className="flex items-center gap-8">
                  <div className="p-5 bg-black/[0.03] rounded-3xl group-hover:bg-white/10 transition-all duration-700">
                    <div className="text-black group-hover:text-white transition-colors duration-700">{method.icon}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black tracking-widest text-black/20 group-hover:text-white/30 transition-colors uppercase">{method.title}</div>
                    <div className="text-lg font-black tracking-tighter uppercase group-hover:translate-x-1 transition-transform">{method.description}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-45" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
