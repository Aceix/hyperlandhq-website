
import React from 'react';
import { ArrowRight, Box, Shield, Zap, Palette, Layers, Code2, ShieldCheck, Cpu, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const Home: React.FC = () => {
  const categories = [
    {
      icon: <Shield className="text-primary" />,
      title: "Legal & Justice Tech",
      description: "Sophisticated platforms designed to bring efficiency and clarity to legal case management."
    },
    {
      icon: <Box className="text-primary" />,
      title: "Business & Operations",
      description: "Streamlined applications for managing pricing, inventory, and core commercial functions."
    },
    {
      icon: <Zap className="text-primary" />,
      title: "Productivity Tools",
      description: "Fast, lightweight utilities that streamline daily workflows and knowledge management."
    }
  ];

  const products = [
    {
      name: "Caselify",
      description: "Integrated case management platform for legal practitioners and justice systems. Reimagined for modern efficiency.",
      status: "Coming soon",
      tags: ["Software Development", "Design"],
      link: "/products"
    },
    {
      name: "Eazysales",
      description: "Simple tool for managing products, prices, and stock levels for small teams. Focus on what sells.",
      status: "Live",
      tags: ["Software Development", "Design"],
      link: "/products"
    },
    {
      name: "Jotta Note",
      description: "Keep tabs of ideas or jot things that pop in your mind while browsing the web. Group these notes under projects for total clarity.",
      status: "Live",
      tags: ["Software Development", "Design"],
      link: "/products"
    }
  ];

  const services = [
    {
      icon: <Palette size={24} />,
      title: "Brand & Visual Systems",
      description: "Building clear, consistent visual identities and design systems that scale across products and reflect the purpose behind the work."
    },
    {
      icon: <Layers size={24} />,
      title: "UX & Interface Design",
      description: "Designing simple, usable digital experiences that focus on real user needs and practical workflows."
    },
    {
      icon: <Code2 size={24} />,
      title: "Web & Mobile Applications",
      description: "Developing fast, reliable web and mobile platforms designed for performance, accessibility, and long-term maintainability."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Security & Data Protection",
      description: "Putting strong security practices in place to safeguard sensitive information and ensure dependable, trustworthy systems."
    },
    {
      icon: <Cpu size={24} />,
      title: "AI & Intelligent Systems",
      description: "Applying machine learning and AI thoughtfully to support decision-making, automation, and efficient digital operations."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Infrastructure & DevOps",
      description: "Setting up and managing scalable cloud environments that support growth, stability, and efficient deployment."
    }
  ];

  const steps = [
    { num: "01", title: "Understand the problem", desc: "We identify core frictions in existing workflows through client interactions and deep research." },
    { num: "02", title: "Design effective solutions", desc: "We strip away the noise to build intuitive interfaces that anyone can use." },
    { num: "03", title: "Build reliable software", desc: "Crafting robust codebases that scale and perform under pressure." },
    { num: "04", title: "Iterate with real users", desc: "Continuous improvement based on how tools are used in the wild." }
  ];

  return (
    <div className="pb-24 overflow-x-hidden bg-brand-light dark:bg-[#0a0a0a]">
      {/* Hero Section - Markopolo Style Cinematic Blending */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        {/* Background Image Container with Positive Stack */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5000ms] scale-110"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
            }}
          />
          
          {/* Grain / Noise Overlay for Cinematic Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

          {/* Master Cinematic Overlays */}
          {/* 1. Global Dimming */}
          <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-grayscale-[0.2]" />
          
          {/* 2. Top Vignette */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-brand-light dark:from-[#0a0a0a] to-transparent" />
          
          {/* 3. Radial Focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F5F2ED_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)]" />

          {/* 4. Bottom Blend - The transition into the rest of the page */}
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-brand-light dark:from-[#0a0a0a] via-brand-light/80 dark:via-[#0a0a0a]/80 to-transparent" />
        </div>

        {/* Content - Must be z-10 or higher */}
        <div className="max-w-5xl mx-auto py-24 relative z-10">
          <div className="animate-fade-in-blur">
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-neutral-900 dark:text-white mb-10 leading-[1.05] text-balance">
              When workflows stall, <br />
              <span className="font-serif italic text-neutral-900/95 dark:text-white/95">we build the path forward</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up stagger-1">
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-white/70 mb-14 max-w-3xl mx-auto font-light leading-relaxed text-balance">
              HyperlandHQ is a product-focused studio creating tools that matter. We understand the friction in productivity, business, and legal tech, then solve it with precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up stagger-2">
            <Button to="/products" variant="outline" className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-2xl border-neutral-900/10 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-neutral-900/10 dark:hover:bg-white/10 px-12 py-5 text-lg rounded-md border transition-all">
              See products
            </Button>
            <Button to="/contact" className="bg-primary text-white font-bold px-12 py-5 text-lg rounded-md hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(20,139,59,0.3)] border-none">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32 bg-brand-light dark:bg-[#0a0a0a] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {categories.map((cat, i) => (
            <div key={i} className={`reveal stagger-${i+1} space-y-6 group`}>
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10 group-hover:rotate-3 shadow-lg">
                <span className="text-primary">{cat.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-40 border-t border-neutral-200 dark:border-neutral-900 bg-brand-light dark:bg-[#0a0a0a] relative z-10">
        <div className="mb-24 reveal text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Our Products</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-xl font-light leading-relaxed">
            We focus on depth, not breadth. Every product we ship is designed to be the best version of itself.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <div key={i} className={`reveal stagger-${i+1} group relative p-12 bg-white dark:bg-neutral-900/40 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800/50 hover:border-primary/40 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(20,139,59,0.1)] transition-all duration-700 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-black rounded-full transition-all duration-500 ${
                    product.status === 'Live' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-500'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-neutral-900 dark:text-white bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 group-hover:border-primary/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12 leading-relaxed h-28 overflow-hidden group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                  {product.description}
                </p>
                <Link to={product.link} className="inline-flex items-center text-sm font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors tracking-[0.2em] uppercase">
                  Explore product <ArrowRight size={18} className="ml-3 group-hover:translate-x-4 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-40 border-t border-neutral-200 dark:border-neutral-900 bg-brand-light dark:bg-[#0a0a0a] relative z-10">
        <div className="mb-24 reveal text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Services</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-xl font-light leading-relaxed">
            Our capabilities extend beyond internal products. We partner with teams to architect and build resilient digital infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, i) => (
            <div key={i} className={`reveal stagger-${i % 3 + 1} group`}>
              <div className="mb-8 p-3 w-fit rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-brand-accent dark:bg-neutral-950 py-40 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-700 relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">How we work</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl font-light max-w-2xl leading-relaxed">Our process is anchored in craftsmanship, user research, and extreme focus on real-world utility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {steps.map((step, i) => (
              <div key={i} className={`reveal stagger-${i+1} space-y-8 group`}>
                <span className="text-8xl font-black text-neutral-200 dark:text-neutral-900 tracking-tighter group-hover:text-primary/10 group-hover:scale-125 group-hover:translate-x-6 inline-block transition-all duration-700 leading-none">{step.num}</span>
                <div>
                  <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-500 text-base leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-400 transition-colors">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
