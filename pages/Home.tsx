import React, { useState } from "react";
import { ArrowRight, ChevronRight, Plus, Minus, CheckCircle2, Sparkles, Layout, Box, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const Home: React.FC = () => {
  const jottaNoteLink = "https://chromewebstore.google.com/detail/jlfafdancjekjfhmajfggchmpbgolefk?utm_source=item-share-cb";

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const products = [
    {
      name: "Caselify",
      description:
        "Integrated case management platform for legal practitioners and justice systems. Reimagined for modern efficiency.",
      color: "bg-[#1A1A1A]",
      textColor: "text-white",
    },
    {
      name: "EazySales",
      description: "Simple tool for managing products, prices, and stock levels for small teams. Focus on what sells.",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      name: "Jotta Note",
      description:
        "Keep tabs of ideas or jot things that pop in your mind while browsing the web. Group these notes under projects for total clarity.",
      color: "bg-[#0E9D44]",
      textColor: "text-white",
      large: true,
      image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=2070",
    },
    {
      name: "Your Product",
      description: "We help you build products that your users will love.",
      color: "bg-[#1A1A1A]",
      textColor: "text-white",
    },
  ];

  const services = [
    {
      number: "01",
      category: "BRAND",
      title: "Brand & Visual Systems",
      description:
        "Building clear, consistent visual identities and design systems that scale across products and reflect the purpose behind the work.",
      icon: <Sparkles size={24} className="text-black" />,
    },
    {
      number: "02",
      category: "WEB",
      title: "Web & Mobile Applications",
      description: "Creating seamless, intuitive digital products that solve real problems for users and businesses.",
      icon: <Layout size={24} className="text-black" />,
    },
    {
      number: "03",
      category: "PRODUCT",
      title: "MVP & Product Design",
      description: "Rapidly prototyping and launching core product features for market testing.",
      icon: <Box size={24} className="text-black" />,
    },
    {
      number: "04",
      category: "DEV",
      title: "Cloud Infrastructure & DevOps",
      description:
        "Building reliable, scalable cloud infrastructure and DevOps pipelines that keep your products running smoothly.",
      icon: <Code size={24} className="text-black" />,
    },
  ];

  const faqs = [
    {
      question: "What do you provide?",
      answer:
        "We provide end-to-end product design and development services, including brand strategy, UI/UX design, web and mobile development, and product infrastructure.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes, we love working with startups. We provide a flexible and fast-paced environment to help you move quickly and build things the right way.",
    },
    {
      question: "Is your pricing transparent?",
      answer:
        "Absolutely. We provide clear, upfront pricing based on the scope of your project. No hidden fees, no surprises.",
    },
    {
      question: "What about after sales?",
      answer: "We offer ongoing support and maintenance to ensure your product continues to perform at its best.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.3em] mb-12 block">
              TRUSTED BY 20+ COMPANIES
            </span>
            <h1 className="text-4xl md:text-[40px] font-medium tracking-tight leading-[1.1] max-w-4xl">
              <span className="text-neutral-400">Design, develop, and scale products</span> with speed and strong
              foundations for companies that want to move fast and build properly.
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-end items-end gap-12 reveal stagger-1 mb-20">
            <div className="max-w-md">
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-regular">
                HyperlandHQ is a product-focused studio creating tools that matter. We understand the friction in
                productivity, business, and legal tech, then solve it with precision.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  to="/contact"
                  className="bg-neutral-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-all text-sm uppercase tracking-wider whitespace-nowrap"
                >
                  Contact Us
                </Button>
                <Button
                  to="/works"
                  variant="secondary"
                  className="bg-brand-accent text-neutral-900 px-8 py-4 rounded-lg font-bold hover:bg-neutral-200 transition-all text-sm uppercase tracking-wider whitespace-nowrap"
                >
                  See recent work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Marquee Section */}
      <section className="pb-32 overflow-hidden border-b border-neutral-100">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {[1, 2].map((group) => (
            <div key={group} className="flex space-x-6 px-3">
              <div className="w-125 aspect-16/10 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                <img src="/images/carefusion.png" className="w-full h-full object-cover" alt="Product" />
              </div>
              <div className="w-150 aspect-16/10 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                <img src="/images/caselify.png" className="w-full h-full object-cover" alt="Product" />
              </div>
              <div className="w-125 aspect-16/10 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                <img src="/images/carefusion.png" className="w-full h-full object-cover" alt="Product" />
              </div>
              <div className="w-150 aspect-16/10 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                <img src="/images/eazysales.png" className="w-full h-full object-cover" alt="Product" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 border-y border-neutral-100 overflow-hidden bg-neutral-50">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 px-6">
              <span className="text-6xl md:text-8xl font-black text-neutral-200">ENGINEERING PRECISION</span>
              <span className="text-6xl md:text-8xl font-black text-neutral-200">TECHNICAL ACCURACY</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Works Section */}
      <section className="bg-black py-32 px-6" id="works">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em] mb-4 block">
              WHAT WE HAVE BUILT
            </span>
            <h2 className="text-5xl font-bold text-white uppercase tracking-tight">Our Works</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Caselify */}
            <div className="bg-[#1A1A1A] p-12 rounded-lg flex flex-col justify-between group reveal">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Caselify</h3>
                <p className="text-neutral-500 text-lg max-w-sm leading-relaxed">
                  Integrated case management platform for legal practitioners and justice systems. Reimagined for modern
                  efficiency..
                </p>
              </div>
              <div>
                <div className="w-full h-[1px] bg-neutral-800 mb-8"></div>
                <Link
                  to="/works"
                  className="text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center group-hover:text-primary transition-colors"
                >
                  VIEW DETAILS <ArrowRight size={14} className="ml-2 -rotate-45" />
                </Link>
              </div>
            </div>

            {/* Eazysales */}
            <div className="bg-white p-12 rounded-lg min-h-[320px] flex flex-col justify-between group reveal stagger-1">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">Eazysales</h3>
                <p className="text-neutral-500 text-lg max-w-sm leading-relaxed">
                  Simple tool for managing products, prices, and stock levels for small teams. Focus on what sells.
                </p>
              </div>
              <div>
                <div className="w-full h-[1px] bg-neutral-100 mb-8"></div>
                <Link
                  to="/products"
                  className="text-[10px] font-bold text-black uppercase tracking-[0.2em] flex items-center group-hover:text-primary transition-colors"
                >
                  LEARN MORE <ArrowRight size={14} className="ml-2 -rotate-45" />
                </Link>
              </div>
            </div>
          </div>
z
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Jotta Note - Spans 2 columns */}
            <div className="lg:col-span-2 bg-[#1A1A1A] rounded-lg overflow-hidden flex flex-col md:flex-row reveal">
              <div className="flex-1 min-h-[300px]">
                <img src="/images/jotta-note.png" alt="Jotta Note" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 bg-[#0E9D44] p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                    Jotta
                    <br />
                    Note
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    Keep tabs of ideas or jot things that pop in your mind while browsing the web. Group these notes
                    under projects for total clarity..
                  </p>
                </div>
                <Link
                  to={jottaNoteLink}
                  target="_blank"
                  rel="noopener"
                  className="text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center mt-12 hover:underline underline-offset-8"
                >
                  TRY JOTTA <ArrowRight size={14} className="ml-2 -rotate-45" />
                </Link>
              </div>
            </div>

            {/* Your Work */}
            <div className="bg-[#1A1A1A] p-12 rounded-lg flex flex-col justify-between group reveal stagger-2">
              <div>
                <span className="text-[10px] font-bold text-orange-700 uppercase tracking-[0.2em] mb-4 block">
                  NEXT IN LINE
                </span>
                <h3 className="text-3xl font-bold text-white mb-6">Your Work</h3>
                <p className="text-neutral-500 text-lg leading-relaxed">
                  Your vision, engineered. We partner with founders to build the next category-defining product.
                </p>
              </div>
              <div>
                <div className="w-full h-[1px] bg-neutral-800 mb-8"></div>
                <Link
                  to="/contact"
                  className="text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center group-hover:text-primary transition-colors"
                >
                  GET STARTED <ArrowRight size={14} className="ml-2 -rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-32 px-6 bg-[#FAFAFA]" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <span className="text-[10px] font-bold text-[#E25C3D] uppercase tracking-[0.3em] mb-4 block">
              CAPABILITIES
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight max-w-4xl">
              Strategy, design, and code all under one roof.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className={`p-12 bg-white flex flex-col justify-between min-h-[400px] rounded-lg reveal stagger-${(i % 4) + 1}`}
              >
                <div>
                  <div className="mb-12">{service.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">{service.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-auto pt-12">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
                    {service.number} / {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 px-6 border-t border-neutral-100 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 gap-6">
            <h2 className="text-5xl font-bold text-neutral-900 tracking-tight">Our approach</h2>
            <Link
              to="/about"
              className="px-6 py-3 bg-[#F0F0F0] text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              The people behind HyperlandHQ
            </Link>
          </div>

          <div className="space-y-16 mb-40">
            {/* Row 1: OUR BELIEFS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t border-neutral-100 pt-10">
              <div className="lg:col-span-4 text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] font-mono">
                WHO WE ARE
              </div>
              <div className="lg:col-span-8 text-2xl font-bold text-neutral-800 leading-snug">
                We believe that the best products are built at the intersection of rigorous engineering and intuitive
                human design.
              </div>
            </div>

            {/* Row 2: A SIMPLE PHILOSOPHY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t border-neutral-100 pt-10">
              <div className="lg:col-span-4 text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] font-mono leading-relaxed">
                A SIMPLE PHILOSOPHY:
                <br />
                ENGINEERING PRECISION
              </div>
              <div className="lg:col-span-8 text-xl text-neutral-600 leading-relaxed">
                We avoid the arbitrary. Every line of code and every design decision is measured against its impact on
                performance and user clarity. At HyperlandHQ, we don't just build features; we build technical
                foundations that scale as fast as your ambition.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Team Card 1: Kwesi Image */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden reveal shadow-none">
              <img src="/images/kwesi.jpeg" alt="Kwesi" className="w-full h-full object-cover" />
              <div className="absolute top-10 left-10 text-black text-shadow-md text-shadow-gray-400">
                <h4 className="text-2xl font-bold mb-1 tracking-tight">Kwesi</h4>
                <p className="text-black/80 font-light">Co-founder</p>
              </div>
            </div>

            {/* Team Card 1: Kwesi Bio */}
            <div className="bg-white p-10 rounded-xl flex items-start reveal stagger-1 shadow-none">
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
                With 8+ years of experience and over 10 projects led, Kwesi has partnered with founders, CTOs, and CXOs
                to shape strategy and drive results from an engineering standpoint.
              </p>
            </div>

            {/* Team Card 2: Pearl Image */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden reveal stagger-2 shadow-none">
              <img src="/images/pearl-pic.jpg" alt="Pearl" className="w-full h-full object-cover" />
              <div className="absolute top-10 left-10 text-black text-shadow-md text-shadow-gray-400">
                <h4 className="text-2xl font-bold mb-1 tracking-tight">Pearl</h4>
                <p className="text-black/80 font-light">Co-founder</p>
              </div>
            </div>

            {/* Team Card 2: Pearl Bio */}
            <div className="bg-white p-10 rounded-xl flex items-start reveal stagger-3 shadow-none">
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
                Pearl is the heart of HyperlandHQ's creative direction. A true art director, she brings humanity, depth,
                and vision to every project she touches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Things founders usually ask before starting working together
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border border-neutral-100 overflow-hidden reveal stagger-${(i % 4) + 1}`}
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span className="text-sm font-bold text-neutral-900">{faq.question}</span>
                {activeFaq === i ? <Minus size={16} /> : <Plus size={16} />}
              </button>
              {activeFaq === i && (
                <div className="px-8 pb-6 text-sm text-neutral-500 leading-relaxed border-t border-neutral-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-lg overflow-hidden bg-black text-white p-12 md:p-24 min-h-[500px] flex flex-col justify-center reveal">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Good products don't happen by accident...
              </h2>
              <div className="flex items-start space-x-4 mb-12 border-l-2 border-[#0E9D44] pl-6 py-2">
                <p className="text-neutral-300 text-lg">They are built by teams that care about every detail.</p>
              </div>
              <Button
                to="/works"
                className="bg-[#0E9D44] text-white px-8 py-4 rounded-md font-bold hover:bg-[#0c8a3c] transition-all inline-flex items-center space-x-3"
              >
                <span>See our work</span>
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
