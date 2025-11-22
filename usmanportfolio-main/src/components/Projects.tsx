import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";
import projectShowcase from "@/assets/project-showcase.jpg";
import automatedn8nImg from '../assets/automatedn8n.png';
import RagImg from '../assets/Rag.png';
import gmailImg from '../assets/gmail.png';
import libasImg from '../assets/libas.png';
import yeloImg from '../assets/yelo.png';
import dawoodImg from '../assets/dawood.png';import cartistan from '../assets/cartistan.png';
import aiImg from '../assets/ai.png';
import solanaImg from '../assets/solana.jpeg';
import flowImg from '../assets/flow.png';
import chatImg from '../assets/chat.jpeg';
import rhsImg from '../assets/rhs.png';
import linkedinImg from '../assets/linkedin.png';
import totkyImg from '../assets/totky.png';
import cocoImg from '../assets/coco.png'; 
import videon8nImg from '../assets/videon8n.png';
import keyeImg from '../assets/keye.png';
import greenImg from '../assets/green.png';




const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", count: 17 },
    { id: "web3", label: "Web3", count: 3 },
    { id: "ai", label: "AI/ML", count: 4 },
    { id: "shopify-wordpress", label: "Shopify and WordPress", count: 7 },
    { id: "nocode", label: "No-Code", count: 4 }
  ];

  const projects = [
    {
      id: 20250813,
      title: "Green Vitality Bali – Shopify E-commerce Store",
      description: "Green Vitality Bali is a wellness-focused Shopify store offering organic supplements like Moringa and herbal blends. The site features a clean, eco-conscious design with high-quality product visuals, detailed descriptions, and a seamless checkout experience. Integrated with multiple payment options, it ensures a user-friendly journey for health-conscious customers seeking natural wellness solutions.",
      image: greenImg, // Using rhs.png as a temporary placeholder
      category: "shopify",
      tags: [
        "Shopify",
        "E-commerce",
        "Wellness",
        "Organic Supplements",
        "Eco-friendly Design",
        "Product Showcase",
        "Checkout Optimization",
        "Payment Integration"
      ],
      featured: true,
      link: "https://www.greenvitality-bali.com/" // Add the live URL when available
    },
    {
      title: "Kaycee's Premium – Shopify Store",
      description: "An elegant Shopify e-commerce site for luxury personal care and wellness products. Features include a clean, brand-focused design, seamless navigation, high-quality product displays, and a secure, user-friendly checkout. Integrated with social media and newsletter sign-ups to boost customer engagement and sales.",
      image: keyeImg, // Using dawood.png as a temporary placeholder
      category: "shopify",
      tags: [
        "Shopify",
        "E-commerce",
        "Luxury Branding",
        "Product Showcase",
        "Responsive Design",
        "Checkout Optimization",
        "Social Media Integration",
        "Newsletter Integration"
      ],
      featured: true,
      link: "https://www.kayceespremium.com/" // Add the live URL when available
    },
    {
      id: 20250807,
      title: "AI-Powered Email Auto-Reply System with n8n — Built to Save Time & Sanity!",
      description: `📩 Tired of replying to the same emails again and again?\nI was too. So I built a smart, fully automated email response system using n8n — powered by GPT and Gmail API — and it works like magic.\n\n🚀 What It Does:\n\n✅ Detects new emails (Gmail trigger)\n✅ Uses OpenAI GPT to write personalized replies\n✅ Adapts responses based on subject, sender, or context\n✅ Sends replies instantly\n✅ Logs each email + response into Google Sheets\n\n🎯 Outcome?\nProfessional, on-brand, and AI-written responses — 24/7, no manual work.`,
      image: videon8nImg,
      category: "nocode",
      tags: [
        "n8n",
        "Gmail API",
        "OpenAI GPT",
        "Google Sheets",
        "Automation",
        "No-Code",
        "AI",
        "Auto-Reply"
      ],
      featured: true,
      link: "https://vimeo.com/1107894672?share=copy#t=0"
    },
    {
      id: 999,
      title: "BECM – Blockchain Enabled Collectible Marketplace on Solana",
      description: "BECM is a decentralized NFT marketplace on Solana that lets users mint, trade, and explore digital collectibles with full on-chain metadata and real-time Phantom Wallet integration. It delivers a fast, low-cost Web3 experience using tools like Arweave/IPFS and Metaplex for a fully decentralized ecosystem.",
      image: solanaImg, // fallback image
      category: "web3",
      tags: [
        "Solana",
        "Rust",
        "Anchor",
        "NFT",
        "Metaplex",
        "Arweave",
        "IPFS",
        "spl-token",
        "Phantom Wallet",
        "Solana Wallet Adapter",
        "Web3",
        "Solscan",
        "Explorer Integration"
      ],
      featured: true,
      link: "https://github.com/usmanimran-dev/Master",
      github: "https://github.com/usmanimran-dev/Master",   
    },
    {
      id: -2,
      title: "Gmail AI Email Manager",
      description: "An AI-powered workflow for Gmail that automatically categorizes, summarizes, and drafts replies to emails. Integrates with OpenAI for smart suggestions, prioritization, and auto-organization. Boosts productivity by handling routine email tasks, flagging important messages, and providing one-click responses—all within your Gmail inbox.",
      image: gmailImg,
      category: "ai",
      tags: ["Gmail", "AI", "Email Automation", "OpenAI", "Productivity", "Smart Replies"],
      featured: true,
      link: "https://n8n.io/workflows/4722-gmail-ai-email-manager/",
      
    },
    {
      id: -1,
      title: "RAG Chatbot for Company Documents using Google Drive and Gemini",
      description: "A RAG-based chatbot that indexes company docs from Google Drive and answers queries using Gemini AI. Enables secure, real-time Q&A over internal files. Features: daily sync, semantic search, context-aware answers, and easy deployment.",
      image: RagImg,
      category: "ai",
      tags: ["RAG", "Chatbot", "Google Drive", "Gemini", "AI", "Semantic Search", "Automation"],
      featured: true,
      link: "https://n8n.io/workflows/advanced-content-research",
      github: undefined
    },

    {
      id: 1000,
      title: "Professional Networking Platform (LinkedIn Clone) – Built with Bubble.io",
      description: "A feature-rich LinkedIn-style web app developed using Bubble.io, enabling users to create profiles, connect with professionals, post updates, apply for jobs, and message in real-time. The platform includes dynamic user feeds, job listings, and role-based dashboards — all built without code, showcasing Bubble’s full-stack capabilities.",
      image: linkedinImg, // Placeholder image
      category: "nocode",
      tags: [
        "Bubble.io",
        "No-Code",
        "Professional Networking",
        "Real-Time Messaging",
        "Job Listings",
        "User Feeds",
        "Role-Based Dashboards",
        "Full-Stack"
      ],
      featured: true,
      link: "https://bubble.io/page?id=linkedin-16318&tab=Design&name=index", // Live demo link
      github: undefined // Not applicable for Bubble.io projects
    },
    
    {
      id: 1,
      title: "Dawood Super Store",
      description: "Your Everyday Grocery Destination (Built on Shopify)",
      image: dawoodImg,
      category: "shopify",
      tags: [
        "Shopify",
        "E-commerce Platform",
        "Liquid",
        "HTML",
        "CSS",
        "JavaScript",
        "Shopify Theme Editor",
        "Google Analytics",
        "Shopify Hosting",
        "Custom Domain",
        "SEO Optimization",
        "On-page SEO",

      ],
      featured: true,
      link: "https://dawoodsuperstore.myshopify.com/",
      github: undefined
    },
    {
      id: 10,
      title: "RHS Wellness – Premium Natural Health Supplements",
      description: "Explore RHS Wellness for high-quality, doctor-recommended supplements designed to support your immune system, energy, and overall well-being. Shop trusted health solutions backed by science.",
      image: rhsImg, // fallback image
      category: "shopify",
      tags: [
        "Shopify",
        "E-commerce",
        "Supplements",
        "Health",
        "Wellness",
        "Responsive Design",
        "Doctor Recommended",
        "Premium Products"
      ],
      featured: true,
      link: "https://shoprhswellness.com/"
    },
    {
      id: 23,
      title: "Cocoba Chocolate – Shopify Store",
      description: "Built and customized an elegant Shopify store for Cocoba Chocolate, a UK-based gourmet chocolate brand. Focused on intuitive product presentation, especially for their signature hot chocolate bombs, and ensured a smooth, user-friendly checkout experience.\n\nKey Highlights:\n- Enhanced UI/UX for better product showcasing\n- Mobile responsiveness\n- Smooth cart and checkout flow\n- Integrated collection pages and custom styling\n\nClient Source: Upwork",
      image: cocoImg, // Replace with a specific Cocoba image if available
      category: "shopify",
      tags: ["Shopify", "E-commerce", "UI/UX", "Mobile Responsive", "Custom Styling", "Upwork", "Chocolate", "Gourmet"],
      featured: true,
      link: "https://www.cocobachocolate.com/collections/hot-chocolate-bombs",
      github: undefined
    },
    {
      id: 22,
      title: "Totkay.com – Natural Home Remedies & Beauty Tips",
      description: "A wellness and lifestyle blog sharing simple, proven desi totkay (home remedies) for skincare, hair care, fitness, and everyday health—written in both Urdu and English. Founded by Dr. Nimra Chohan, the platform combines cultural wisdom with modern readability to help readers achieve holistic well-being.",
      image: totkyImg , // Update this to a specific asset if available
      category: "shopify",
      tags: ["Shopify", "Blog", "Wellness", "Home Remedies", "Beauty Tips", "Urdu", "English", "Lifestyle"],
      featured: true,
      link: "https://totkay.com/",
      github: undefined
    },
    {
      id: 2,
      title: "Libaas By RM",
      description: "Fashion Retail Store Built on Shopify",
      image: libasImg,
      category: "shopify",
      tags: [
        "Shopify",
        "Fashion",
        "E-commerce Platform",
        "Liquid",
        "HTML",
        "CSS",
        "JavaScript",
        "Meta fields",
        "Sitemap.xml",
        "Mobile Optimization",
        "Responsive Design",
        "Developer Tools",
        "Shopify CLI",
        "Git",
        "ThemeKit"
      ],
      featured: true,
      link: "https://libaasbyrm.myshopify.com/"
    },
    {
      id: 11,
      title: "Solana CRUD dApp – Journal App Powered by Anchor Framework",
      description: "A decentralized journal app built on Solana using the Anchor framework. Users can create, view, update, and delete journal entries directly on-chain. It features Phantom wallet integration, a React frontend, and ensures secure, transparent data storage.",
      image: solanaImg,
      category: "web3",
      tags: [
        "Solana",
        "Anchor",
        "Rust",
        "SPL",
        "Smart Contracts",
        "React.js",
        "Phantom Wallet",
        "CRUD",
        "Blockchain",
        "dApp",
        "State Management"
      ],
      featured: true,
      link: "https://github.com/usmanimran-dev/CRUD-Dapp-Project-Solana",
      github: "https://github.com/usmanimran-dev/CRUD-Dapp-Project-Solana"
    },
    {
      id: 3,
      title: "Yelo",
      description: "Pakistan’s Local Business Discovery & Review Platform (Built on Bubble.io)",
      image: yeloImg,
      category: "nocode",
      tags: ["Bubble.io", "Discovery", "Reviews"],
      featured: true,
      link: "https://yelo-13406.bubbleapps.io/version-test/login_into_business_account?"
    },
    {
      id: 4,
      title: "AI Proposal Generator",
      description: "Automated proposals with GPT-4, PandaDoc & Make.com Integration",
      image: aiImg,
      category: "ai",
      tags: ["AI", "GPT-4", "Automation"],
      featured: true,
      link: "https://www.linkedin.com/posts/muhammad-osman-037aa0302_automation-makedotcom-aiautomation-activity-7288342314706456576-c5eR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1nQisBIBfECXcsiCd_DoOk5hnMvOVSNNY",
    },
    {
      id: 5,
      title: "Cartistan",
      description: "On-Demand Grocery Delivery App (Built with Bubble.io)",
      image: cartistan,
      category: "nocode",
      tags: ["Bubble.io", "Delivery", "Grocery"],
      featured: true,
      link: "https://cartistan-73886.bubbleapps.io/version-test"
    },
    {
      id: 6,
      title: "FlowNest",
      description: "AI-Powered Project Manager (Built with Bubble.io)",
      image: flowImg,
      category: "nocode",
      tags: ["Bubble.io", "AI", "Project Management"],
      featured: true,
      link: "https://demo-app-63324.bubbleapps.io/version-test/?&v=projects"
    },
    {
      id: 7,
      title: "Web3 Voting dApp-On-Chain Polling System",
      description: "A decentralized voting application built with Solana and Anchor. Users can create proposals, vote securely via Phantom wallet, and view live results—all stored transparently on-chain with a modern React UI.",
      image:  solanaImg,
      category: "web3",
      tags: ["Solana", "Web3", "Voting"],
      featured: true,
      link: "https://github.com/usmanimran-dev/voting-dapp-3",
      github: "https://github.com/usmanimran-dev/voting-dapp-3"
    },
    {
      id: 8,
      title: "Open AI Chat Bot",
      description: "Conversational AI Chat Bot for instant support",
      image: chatImg,
      category: "ai",
      tags: ["OpenAI", "Chatbot"],
      featured: true,
      link: "https://bubble.io/page?id=open-ai-chatbot-92290&tab=Design&name=index",
    },
    
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : activeFilter === "shopify-wordpress"
      ? projects.filter(project => project.category === "shopify" || project.category === "wordpress")
      : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🚀 <span className="text-gradient-hero">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions across Web3, AI, and full-stack applications. 
            Each project demonstrates cutting-edge technology implementation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card hover:bg-card-hover text-card-foreground"
              }`}
            >
              <Filter className="h-4 w-4" />
              {filter.label}
              <Badge variant="secondary" className="ml-2">
                {filter.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button size="sm" variant="secondary" className="mb-4 w-full" disabled>
                  View More
                </Button>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={(e) => {
                      e.preventDefault();
                      if (project.github) {
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    disabled={!project.github}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 hero-button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    disabled={!project.link}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            className="hero-button" 
            size="lg"
            onClick={() => window.open('https://github.com/usmanimran-dev', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            Visit GitHub Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;