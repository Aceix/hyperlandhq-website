
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: "caselify",
      name: "Ridgerunner",
      displayName: "Caselify",
      tagline: "software development | legal architecture | product design",
      image: "/images/caselify.png",
      link: "https://caselify.com/",
    },
    {
      id: "eazysales",
      displayName: "Eazysales",
      tagline: "software development | inventory management | web design",
      image: "/images/eazysales.png",
      link: "https://eazysales.online/",
    },
    {
      id: "Carefusion",
      displayName: "Carefusion",
      tagline: "software development | healthtech | product design",
      image: "/images/carefusion.png",
      link: "https://carefusion.health/",
    }
  ];

  return (
    <div className="bg-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 md:mb-24 reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-900 mb-8 tracking-tighter max-w-4xl">
            Turning ideas into world-class digital products.
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {products.map((product, idx) => (
            <div key={product.id} className="reveal group cursor-pointer group">
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="block">
                {/* Image Container */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 mb-8 relative">
                  <img
                    src={product.image}
                    alt={product.displayName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Metadata */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
                      {product.displayName}
                    </h2>
                    <ExternalLink size={20} className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-neutral-500 font-medium tracking-wide">
                    {product.tagline}
                  </p>
                </div>
              </a>
            </div>
          ))}

          {/* "Your Product" placeholder to maintain the grid feel like Nuova often does */}
          <div className="reveal stagger-3 group">
            <div className="aspect-[4/3] rounded-lg border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center p-12 text-center transition-colors group-hover:border-neutral-900">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">Your Work?</h3>
              <p className="text-sm text-neutral-500 max-w-xs mx-auto mb-8 font-medium">
                We partner with founders to build the next category-defining product.
              </p>
              <a
                href="/contact"
                className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;