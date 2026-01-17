import React from 'react';
import { Button } from '../components/Button';
import { ExternalLink, LayoutGrid, Zap, Scale } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: "caselify",
      name: "Caselify",
      icon: <Scale size={20} />,
      tagline: "Legal and justice case management",
      description: "Reimagining how legal professionals manage documentation and deadlines. Designed for transparency and speed in justice systems.",
      status: "In development / Coming soon",
      tags: ["Software Development", "Design"],
      link: "https://caselify.com/",
      features: ["Case tracking", "Document automation", "Secure collaboration", "Deadline engine"]
    },
    {
      id: "inventory",
      name: "Eazysales",
      icon: <LayoutGrid size={20} />,
      tagline: "Product, Price and Stock Management",
      description: "Tailored for small businesses who find spreadsheets too loose and ERPs too complex. A clean, focused interface for managing your most vital assets.",
      status: "Live",
      tags: ["Software Development", "Design"],
      link: "https://eazysales.online/",
      features: ["Real-time updates", "Multi-user support", "Dynamic pricing rules", "Simple reporting"]
    },
    {
      id: "jotta",
      name: "Jotta Note",
      icon: <Zap size={20} />,
      tagline: "Productivity for browsers",
      description: "Jotta Note allows you to keep tabs of ideas or jot things that pop in your mind while browsing the web. You can also group these notes under projects for better organization.",
      status: "Live",
      tags: ["Software Development", "Design"],
      link: "https://chromewebstore.google.com/detail/jotta-note/jlfafdancjekjfhmajfggchmpbgolefk",
      features: ["Instant capture", "Cloud sync", "Project grouping", "Markdown support"]
    }
  ];

  return (
    <div className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-32 reveal">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight">Products</h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-3xl">
            HyperlandHQ builds focused, practical software products. We don't chase trends; we build tools that earn their place in your dock.
          </p>
        </div>

        <div className="space-y-48">
          {products.map((product, idx) => (
            <div key={product.id} className={`reveal relative group`}>
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className={`flex-1 order-2 lg:order-1 reveal stagger-1`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                      {product.icon}
                    </div>
                    <span className={`text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full transition-colors ${
                      product.status === 'Live' ? 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-white bg-neutral-800 dark:bg-neutral-800 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-700 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-primary font-medium text-lg mb-8">{product.tagline}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-10 font-light">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 border-t border-neutral-100 dark:border-neutral-800 pt-8">
                    {product.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-3 text-sm text-neutral-700 dark:text-neutral-300 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    to={product.link} 
                    variant={product.status === 'Live' ? 'primary' : 'outline'} 
                    className="w-full sm:w-auto text-base px-10 py-4 group/btn hover:-translate-y-1 hover:shadow-xl transition-all"
                  >
                    {product.status === 'Live' ? 'Get started' : 'Join waitlist'} 
                    {product.status === 'Live' && <ExternalLink size={16} className="ml-2 group-hover/btn:rotate-12 transition-transform" />}
                  </Button>
                </div>
                <div className={`flex-1 order-1 lg:order-2 w-full reveal stagger-2`}>
                  <div className="aspect-[4/3] bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] overflow-hidden relative shadow-3xl transition-all duration-700 group-hover:border-primary/40 group-hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                    
                    {/* Abstract Product UI Representation with floating interaction */}
                    <div className={`absolute inset-10 border border-neutral-200 dark:border-neutral-800/50 rounded-2xl flex flex-col p-8 bg-white dark:bg-neutral-950 shadow-inner overflow-hidden ${idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
                       <div className="flex items-center space-x-2 mb-8">
                          <div className="w-3 h-3 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-primary/20 transition-colors"></div>
                          <div className="w-3 h-3 rounded-full bg-neutral-100 dark:bg-neutral-800"></div>
                          <div className="w-3 h-3 rounded-full bg-neutral-100 dark:bg-neutral-800"></div>
                       </div>
                       <div className="w-full h-4 bg-neutral-50 dark:bg-neutral-900 rounded-full mb-4 animate-pulse"></div>
                       <div className="w-3/4 h-4 bg-neutral-50 dark:bg-neutral-900 rounded-full mb-12"></div>
                       <div className="grid grid-cols-2 gap-6 flex-grow">
                          <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-100 dark:border-neutral-800 group-hover:border-primary/10 transition-all duration-500 transform group-hover:scale-[1.02]"></div>
                          <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-100 dark:border-neutral-800 group-hover:border-primary/10 transition-all duration-500 transform group-hover:scale-[1.02] delay-100"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;