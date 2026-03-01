import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter, ArrowUpRight, ArrowRight, ChevronDown, ChevronUp, Shield, Activity, Lock } from "lucide-react";
import { useState, useMemo } from "react";
import greenImg from '../assets/green.png';
import keyeImg from '../assets/keye.png';
import videon8nImg from '../assets/videon8n.png';
import solanaImg from '../assets/solana.jpeg';
import linkedinImg from '../assets/linkedin.png';
import dawoodImg from '../assets/dawood.png';
import rhsImg from '../assets/rhs.png';
import cocoImg from '../assets/coco.png';
import totkyImg from '../assets/totky.png';
import libasImg from '../assets/libas.png';
import cartistan from '../assets/cartistan.png';
import flowImg from '../assets/flow.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { id: "all", label: "All" },
    { id: "full-stack", label: "Full-Stack" },
    { id: "shopify-wordpress", label: "E-Commerce" },
    { id: "nocode", label: "No-Code" }
  ];

  const projects = [
    {
      id: 20260225,
      title: "NGO Assist",
      subtitle: "Aid Distribution Platform",
      description: "A full-stack aid distribution platform using Flutter (Web & Mobile), Node.js, and Prisma. Manages beneficiary registration, verification workflows, vendor-based assistance redemption, and audit monitoring with role-based access control.",
      image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-02-25%20204034.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDItMjUgMjA0MDM0LnBuZyIsImlhdCI6MTc3MjAzNDI1MywiZXhwIjoxODAzNTcwMjUzfQ.NV-sbWkxZb15E2zX83ZHuUzoBiPJ1d9eRpIb_JLxOIQ",
      category: "full-stack",
      tags: ["Flutter", "Node.js", "Prisma"],
      link: "https://ngo.virtuohr.com"
    },

    {
      id: 20260129,
      title: "Smart Pump",
      subtitle: "IoT Telemetry & ERP",
      description: "A secure ERP system for fuel stations that monitors real-time transaction pipelines to prevent revenue loss. Login: usman@gmail.com | Pwd: usman123",
      image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-29%20220645.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMjkgMjIwNjQ1LnBuZyIsImlhdCI6MTc3MTg3OTM4NiwiZXhwIjoxODAzNDE1Mzg2fQ.7s7Y_XInBw1mi_QiiHKVJIWPWlELnxMfaK7e6U3LlVw",
      category: "full-stack",
      tags: ["Angular", "Supabase", "IoT"],
      link: "https://smart-pump-2eyt.vercel.app/login",
      github: "https://github.com/usmanimran-dev/SmartPump"
    },
    {
      id: 20260130,
      title: "Velora",
      subtitle: "Dating Discovery App",
      description: "A modern, secure dating platform featuring real-time matching and encrypted communication channels.",
      image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035558.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NTU4LnBuZyIsImlhdCI6MTc3MTg3OTQyOSwiZXhwIjoxODAzNDE1NDI5fQ.4kGdL9utvVG8wS-08P1m3cx6SgXtcoMPmeJABUBM8bY",
      category: "full-stack",
      tags: ["Angular", "Firebase", "Logic"],
      link: "https://datingapp-arxi.vercel.app/signup",
      github: "https://github.com/usmanimran-dev/datingapp"
    },
    {
      id: 20260131,
      title: "Yelo Search",
      subtitle: "Market Discovery Engine",
      description: "A high-performance indexing engine for local market intelligence, optimized for low-latency search and data retrieval.",
      image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035500.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NTAwLnBuZyIsImlhdCI6MTc3MTg3OTQ1MCwiZXhwIjoxODAzNDE1NDUwfQ.owfuUOWWmbTdUR1UeW1ZsnxBcjkmYen4hg_HHAZ5XOo",
      category: "full-stack",
      tags: ["React", "Cloud", "SEO"],
      link: "https://pakistan-finds-red.vercel.app/",
      github: "https://github.com/usmanimran-dev/pakistan-finds-red"
    },
    {
      id: 20260132,
      title: "Zyfloatix",
      subtitle: "Digital Treasury Ecosystem",
      description: "A high-fidelity platform for digital asset firms, featuring encrypted data visualization and ultra-modern terminal aesthetics.",
      image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035422.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NDIyLnBuZyIsImlhdCI6MTc3MTg3OTQ3MywiZXhwIjoxODAzNDE1NDczfQ.eFbN5eP05R6asL0-AhaQ_etaNZ4qnqR3mRf0XiBf6OA",
      category: "full-stack",
      tags: ["Next.js", "Framer", "Tailwind"],
      link: "https://zyfloatix-2wcu.vercel.app/",
      github: "https://github.com/usmanimran-dev/Zyfloatix"
    },
    {
      id: 20250813,
      title: "Green Vitality Bali",
      subtitle: "Wellness Shopify Store",
      description: "A wellness-focused Shopify store offering organic supplements with a clean, eco-conscious design for health-conscious customers.",
      image: greenImg,
      category: "shopify",
      tags: ["Shopify", "E-commerce", "Wellness"],
      link: "https://www.greenvitality-bali.com/"
    },
    {
      id: 131,
      title: "Kaycee's Premium",
      subtitle: "Luxury Personal Care",
      description: "An elegant Shopify site for luxury wellness products, featuring high-quality displays and seamless navigation.",
      image: keyeImg,
      category: "shopify",
      tags: ["Shopify", "E-commerce", "Luxury"],
      link: "https://www.kayceespremium.com/"
    },
    {
      id: 20250807,
      title: "AI Email Auto-Reply",
      subtitle: "n8n Automation",
      description: "A smart, fully automated email response system using n8n, GPT, and Gmail API to save time and ensure professional responses.",
      image: videon8nImg,
      category: "nocode",
      tags: ["n8n", "AI", "Automation"],
      link: "https://vimeo.com/1107894672?share=copy#t=0"
    },
    {
      id: 999,
      title: "BECM Solana",
      subtitle: "NFT Marketplace",
      description: "A decentralized marketplace on Solana for minting and trading digital collectibles with real-time Phantom Wallet integration.",
      image: solanaImg,
      category: "full-stack",
      tags: ["Solana", "Rust", "NFT"],
      link: "https://github.com/usmanimran-dev/Master",
      github: "https://github.com/usmanimran-dev/Master"
    },
    {
      id: 1000,
      title: "LinkedIn Clone",
      subtitle: "Bubble.io Social Engine",
      description: "A feature-rich LinkedIn-style web app developed using Bubble.io, with real-time messaging and job listings.",
      image: linkedinImg,
      category: "nocode",
      tags: ["Bubble.io", "No-Code", "Networking"],
      link: "https://bubble.io/page?id=linkedin-16318&tab=Design&name=index"
    },
    {
      id: 1,
      title: "Dawood Super Store",
      subtitle: "Shopify Grocery",
      description: "A comprehensive Shopify-based grocery platform optimized for everyday essentials and high-volume traffic.",
      image: dawoodImg,
      category: "shopify",
      tags: ["Shopify", "E-commerce", "Liquid"],
      link: "https://dawoodsuperstore.myshopify.com/"
    },
    {
      id: 10,
      title: "RHS Wellness",
      subtitle: "Natural Health Shop",
      description: "High-quality, doctor-recommended supplements supported by a science-focused Shopify storefront.",
      image: rhsImg,
      category: "shopify",
      tags: ["Shopify", "Health", "Wellness"],
      link: "https://shoprhswellness.com/"
    },
    {
      id: 23,
      title: "Cocoba Chocolate",
      subtitle: "UK Gourmet E-com",
      description: "Elegant Shopify customization for a UK-based chocolate brand, focusing on intuitive product presentation.",
      image: cocoImg,
      category: "shopify",
      tags: ["Shopify", "Gourmet", "UI/UX"],
      link: "https://www.cocobachocolate.com/collections/hot-chocolate-bombs"
    },
    {
      id: 22,
      title: "Totkay.com",
      subtitle: "Wellness Blog",
      description: "A wellness and lifestyle blog sharing natural home remedies in Urdu and English using a clean Shopify platform.",
      image: totkyImg,
      category: "shopify",
      tags: ["Shopify", "Blog", "Wellness"],
      link: "https://totkay.com/"
    },
    {
      id: 2,
      title: "Libaas By RM",
      subtitle: "Fashion Retail",
      description: "Modern fashion storefront built on Shopify with a focus on high-fidelity visual presentation and mobile optimization.",
      image: libasImg,
      category: "shopify",
      tags: ["Shopify", "Fashion", "Liquid"],
      link: "https://libaasbyrm.myshopify.com/"
    },
    {
      id: 11,
      title: "Solana CRUD",
      subtitle: "dApp Journal",
      description: "A decentralized journal app built on Solana using Anchor, allowing users to store data directly on-chain.",
      image: solanaImg,
      category: "full-stack",
      tags: ["Solana", "Rust", "dApp"],
      link: "https://github.com/usmanimran-dev/CRUD-Dapp-Project-Solana",
      github: "https://github.com/usmanimran-dev/CRUD-Dapp-Project-Solana"
    },
    {
      id: 5,
      title: "Cartistan",
      subtitle: "Grocery Delivery",
      description: "On-demand grocery delivery application prototype built with Bubble.io for rapid deployment and scale.",
      image: cartistan,
      category: "nocode",
      tags: ["Bubble.io", "Delivery", "UX"],
      link: "https://cartistan-73886.bubbleapps.io/version-test"
    },
    {
      id: 6,
      title: "FlowNest",
      subtitle: "AI Project Manager",
      description: "AI-powered internal tool for project management, engineered with Bubble.io's advanced logic engine.",
      image: flowImg,
      category: "nocode",
      tags: ["Bubble.io", "AI", "Management"],
      link: "https://demo-app-63324.bubbleapps.io/version-test/?&v=projects"
    },
    {
      id: 20260221,
      title: "Diamond Sync Engine",
      subtitle: "B2B Shopify Integration",
      description: "A custom Node.js desktop engine that bridges a B2B diamond supplier API to Shopify. Auto-syncs 1,200+ products daily with 60+ metafields, custom OAuth, and zero cloud hosting costs.",
      image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/WhatsApp%20Image%202026-02-21%20at%207.14.23%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9XaGF0c0FwcCBJbWFnZSAyMDI2LTAyLTIxIGF0IDcuMTQuMjMgUE0uanBlZyIsImlhdCI6MTc3MjAzNTI4NCwiZXhwIjoxODAzNTcxMjg0fQ.m3IUjzIuOCXRRl3pLEjrstbMiLFRRy7UzbCNGH2nlpQ",
      category: "full-stack",
      tags: ["Node.js", "Shopify API", "Automation"],
      link: "https://github.com/usmanimran-dev/CGD-API-Project",
      github: "https://github.com/usmanimran-dev/CGD-API-Project"
    }
  ];

  const filteredProjects = useMemo(() => {
    const base = activeFilter === "all"
      ? projects
      : activeFilter === "shopify-wordpress"
        ? projects.filter(project => project.category === "shopify" || project.category === "wordpress")
        : projects.filter(project => project.category === activeFilter);

    return showAll ? base : base.slice(0, 3);
  }, [activeFilter, showAll]);

  const hasMore = useMemo(() => {
    const base = activeFilter === "all"
      ? projects
      : activeFilter === "shopify-wordpress"
        ? projects.filter(project => project.category === "shopify" || project.category === "wordpress")
        : projects.filter(project => project.category === activeFilter);

    return base.length > 3;
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-white relative pt-10">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Fintech Header Transition */}
        <div className="flex items-center gap-6 mb-12 opacity-40">
          <div className="h-px w-32 bg-primary" />
          <div className="text-[10px] font-bold tracking-[0.5em] text-gray-900 uppercase">S_04 // MY_PROJECTS</div>
          <div className="h-px flex-1 bg-black/[0.06]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-gray-900 uppercase leading-[0.85] md:leading-[0.8]">
              MY <br />
              <span className="text-primary italic">PROJECTS</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setShowAll(false);
                }}
                className={`px-8 py-4 rounded-lg text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-300 border ${activeFilter === filter.id
                  ? "bg-primary text-white border-primary shadow-[0_4px_20px_-5px_rgba(34,197,94,0.3)]"
                  : "bg-black/[0.02] text-black/40 border-black/[0.08] hover:border-black/20 hover:text-gray-900"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="fin-card grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center group cursor-default"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl bg-black border border-black/[0.06] transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Image Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 p-2 lg:p-3 bg-white/90 backdrop-blur-md rounded-lg border border-black/[0.08] opacity-100 shadow-sm">
                  <div className="flex items-center gap-1.5 lg:gap-2 text-[8px] font-bold text-primary tracking-widest uppercase">
                    <Lock className="w-2.5 h-2.5" /> <span className="hidden sm:inline">PROJECT_</span>{index + 1}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-12 h-12 lg:w-16 lg:h-16 rounded-lg bg-primary text-white flex items-center justify-center lg:translate-y-4 opacity-100 lg:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                >
                  <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              </div>

              <div className="lg:col-span-5 space-y-6 lg:space-y-8 px-2 lg:px-0">
                <div className="flex items-center gap-4">
                  <div className="text-[9px] font-bold text-primary tracking-[0.4em] uppercase">{project.category}</div>
                  <div className="h-[1px] flex-1 bg-black/[0.06]" />
                  <Activity className="w-4 h-4 text-primary opacity-50 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight uppercase leading-none group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm md:text-lg font-bold text-black/30 tracking-widest uppercase">{project.subtitle}</div>
                </div>

                <p className="text-base md:text-xl text-black/60 font-medium leading-relaxed uppercase tracking-tighter">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag px-3 py-1 bg-black/[0.04] border border-black/[0.06] text-[8px] lg:text-[9px] font-bold rounded-full text-black/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 lg:pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 lg:p-4 rounded-lg bg-black/[0.04] border border-black/[0.08] text-gray-900 hover:bg-black/[0.08] hover:border-primary/50 transition-all flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex-1 btn-fin flex items-center justify-center gap-2 text-[8px] lg:text-[10px] tracking-widest px-4 lg:px-6 py-3 lg:py-4"
                  >
                    VIEW_LIVE <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button Toggle */}
        {hasMore && (
          <div className="mt-32 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline-fin group flex items-center gap-8 mx-auto py-6 text-gray-900"
            >
              <div className="flex flex-col items-center">
                <span className="text-[8px] opacity-40 mb-1">Toggle View</span>
                <span>{showAll ? "SHOW LESS" : "VIEW ALL PROJECTS"}</span>
              </div>
              {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;