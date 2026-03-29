
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="bg-white px-6 pt-24 pb-6 md:pt-32 md:pb-10">
      {/* Immersive Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] md:h-[90vh] md:min-h-[700px] w-full rounded-lg overflow-hidden group">
        <div className="absolute inset-0">
          <img
            src="/images/our-office.png"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="About HQ"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Headline Overlay */}
        <div className="absolute bottom-12 left-6 md:bottom-20 md:left-12 reveal">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            From first idea to  <span className="font-serif italic font-normal text-neutral-300">real impact</span><br />
            we design and build products <span className="font-serif italic font-normal text-neutral-300">that scale and lead</span>
          </h1>
        </div>

        {/* Footer Labels */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-12 md:right-12 flex justify-between items-center text-[10px] font-bold text-white/70 uppercase tracking-[0.4em] reveal stagger-1">
          <span className="flex-1 text-left">ABOUT US</span>
          <span className="flex-1 text-center hidden md:block">CREATIVE SPACE</span>
          <span className="flex-1 text-right">HYPERLANDHQ CULTURE</span>
        </div>
      </section>

      {/* Philosophy Section - Detailed Asymmetrical 2 Column */}
      <section className="py-20 md:py-40 px-6 bg-white border-t border-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 md:gap-24">
            <div className="md:col-span-4 reveal">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.4em]">
                ABOUT HYPERLANDHQ
              </span>
            </div>
            <div className="md:col-span-8 reveal stagger-1">
              <h2 className="text-3xl md:text-[40px] font-medium text-neutral-900 leading-[1.2] tracking-tight mb-8 md:mb-12 max-w-2xl">
                Engineering done with <span className="font-serif italic text-neutral-500">purpose</span>, built with precision and shaped alongside founders redefining their industries.
              </h2>

              <div className="max-w-2xl space-y-8 text-neutral-600 leading-relaxed font-regular">
                <p>
                  HyperlandHQ is a technical product studio built for founders who value speed without compromising on stability. We don’t just write code; we architect systems that grow with your ambition and reflect the high standards of the products they power.
                </p>
                <p>
                  We operate as a deep extension of your team. We don’t follow rigid agency playbooks. We lean into the uncertainty of early-stage builds, untangling technical complexity before it becomes debt, and building with a clear eye on the horizon.
                </p>

                <div className="pt-8">
                  <Button to="/contact" className="bg-neutral-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-all text-sm uppercase tracking-wider whitespace-nowrap">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Team Section */}
      <section className="py-20 md:py-40 px-6 bg-white border-t border-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 leading-tight tracking-tight max-w-2xl">
              Feels like in-house. <span className="font-serif italic text-neutral-500">Performs</span> like your best team ever.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 md:gap-24 items-start">
            <div className="md:col-span-4 reveal">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src="/images/kp1.jpg"
                  className="w-full h-full object-cover"
                  alt="Our Team"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-16 reveal stagger-1">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <span className="text-[10px] font-bold text-neutral-900 uppercase tracking-[0.3em]">OUR GOAL</span>
                </div>
                <div className="md:col-span-8">
                  <div className="space-y-6 text-neutral-600 leading-relaxed max-w-xl">
                    <p>
                      To eliminate the friction between a great idea and a functional, scalable product. We exist to provide the high-level engineering and product thinking that turns vision into traction. We've lived both sides of the journey—launching products from scratch and working inside high-pressure teams where speed determines everything.
                    </p>
                    <p>
                      No middlemen. No handoffs. No watered-down communication. Just direct access to the specialists doing the work—thinking with you, iterating with you, and helping you make the right technical decisions in real time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-16 border-t border-neutral-100">
                <div className="md:col-span-4">
                  <span className="text-[10px] font-bold text-neutral-900 uppercase tracking-[0.3em]">OUR VISION</span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-neutral-600 leading-relaxed max-w-xl">
                    A world where technology is a catalyst, not a bottleneck. We believe the best products are built by small, elite teams who are obsessed with the "how" as much as the "why."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-16 border-t border-neutral-100">
                <div className="md:col-span-4">
                  <span className="text-[10px] font-bold text-neutral-900 uppercase tracking-[0.3em]">OUR STRATEGY</span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-neutral-600 leading-relaxed max-w-xl">
                    Continuous deployment of thought and code. We blend deep technical expertise with rapid product iteration, ensuring every feature is a solid building block for the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-40 px-6 bg-white border-t border-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.4em] block mb-8 md:mb-12">
              MEET THE FOUNDERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 md:gap-24">
            {/* Kwesi */}
            <div className="reveal stagger-1 flex flex-col h-full">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-neutral-100 mb-8 md:mb-12">
                <img
                  src="/images/kwesi.jpeg"
                  className="w-full h-full object-cover grayscale"
                  alt="Robert"
                />
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-auto">
                Kwesi plays a hands-on role in every client partnership, working directly with founders, CTOs, and CXOs to shape strategy and drive results. Not only is he an amicable engineering savant; clients see him as a true partner and someone who understands their business, anticipates challenges from a technical standpoint, and delivers impact where it counts.
              </p>
              <div className="mt-8 pt-6 md:mt-12 md:pt-8 border-t border-neutral-100 flex justify-between items-center text-[10px] font-bold text-neutral-900 uppercase tracking-[0.2em]">
                <span>KWESI</span>
                <span className="text-neutral-400">CO-FOUNDER & ENGINEERING DIRECTOR</span>
              </div>
            </div>

            {/* Pearl */}
            <div className="reveal stagger-2 flex flex-col h-full">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-neutral-100 mb-8 md:mb-12">
                <img
                  src="/images/pearl-pic.jpg"
                  className="w-full h-full object-cover grayscale"
                  alt="Adelina"
                />
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-auto">
                Pearl is the design lead at HyperlandHQ. With 5+ years designing across agritech, fintech, EdTech, and HRTech, she brings clarity, depth, and intention to every product she touches. Her work shapes how digital experiences feel, not just how they look. She partners with grounded, purpose-driven teams building products that create real impact in people's lives, from smallholder farmers across Africa to HR teams managing distributed workforces. Known for her ability to go deep, she treats every product as her own, translating complex, messy workflows into experiences that are both intuitive and human.
              </p>
              <div className="mt-8 pt-6 md:mt-12 md:pt-8 border-t border-neutral-100 flex justify-between items-center text-[10px] font-bold text-neutral-900 uppercase tracking-[0.2em]">
                <span>PEARL</span>
                <span className="text-neutral-400">CO-FOUNDER & DESIGN DIRECTOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 md:py-28 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="reveal">
            <h4 className="text-3xl font-bold mb-6 tracking-tight">Work with us</h4>
            <p className="text-neutral-400 leading-relaxed mb-10 max-w-md">
              We're always looking for ambitious founders and companies that want to build something that lasts. If that's you, let's talk.
            </p>
            <Link to="/contact" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] group">
              START A CONVERSATION
              <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal stagger-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-white rounded-lg flex items-center justify-center border border-neutral-800 italic font-serif text-2xl text-neutral-900">
                {i === 1 ? 'Focus' : i === 2 ? 'Speed' : i === 3 ? 'Scale' : 'End'}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
