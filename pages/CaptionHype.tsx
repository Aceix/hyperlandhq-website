import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Hash, Share2, Star, Check, Smartphone, MessageSquare, Copy } from 'lucide-react';

// VERSION: 2.0 - FIGMA IMPLEMENTATION
const CaptionHype: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);
  const monthlyPrice = 2.99;
  const yearlyPrice = 29.99;
  const yearlySavingsPercent = Math.round(((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12)) * 100);
  const proPrice = isYearly ? '$29.99' : '$2.99';
  const proInterval = isYearly ? '/ year' : '/mo';
  const proDescription = isYearly ? '150 captions per month · $2.50/mo billed yearly' : '100 captions per month';
  const proFeatures = isYearly
    ? ['150 captions/month', 'Caption history in The Reel', 'Streak tracking and milestones', 'Priority generation speed']
    : ['100 captions/month', 'Caption history in The Vault', 'Streak tracking and milestones', 'Priority generation speed'];

  useEffect(() => {
    // Scroll reveal logic
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Precise background gradients from Figma
  const heroGradient = {
    opacity: 0.4,
    background: `
      radial-gradient(141.42% 141.42% at 0% 0%, #853DC1 0%, rgba(133, 61, 193, 0.00) 50%),
      radial-gradient(141.42% 141.42% at 100% 0%, #FD42E6 0%, rgba(253, 66, 230, 0.00) 50%),
      radial-gradient(141.42% 141.42% at 100% 100%, #FFACEA 0%, rgba(255, 172, 234, 0.00) 50%),
      radial-gradient(141.42% 141.42% at 0% 100%, #772AF5 0%, rgba(119, 42, 245, 0.00) 50%)
    `,
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#171837] selection:bg-purple-100 lg:h-dvh lg:overflow-hidden">
      {/* Sidebar - Fixed Left */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden h-dvh w-[315px] flex-col overflow-hidden border-r border-purple-100/30 bg-[#853dc1]/5 p-8 lg:flex">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-12 h-12 bg-[#853dc1] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200">
            <img src="/images/captionhype/logo-plain.jpg" alt="" className="w-7 h-7 object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#853dc1] uppercase">CaptionHype</span>
        </div>

        <div className="mb-10 space-y-5">
          <h2 className="text-[27px] font-serif leading-tight text-black">Create content that gets noticed</h2>
          <p className="text-sm text-black/80 leading-relaxed">
            CaptionHype helps creators, businesses, and brands generate engaging captions, improve visuals, and create social-ready content in seconds with AI.
          </p>
        </div>

        <div className="mb-12 flex gap-4">
          <a href="#pricing" className="flex-1 py-3 px-4 rounded-full border border-[#853dc1] text-[#853dc1] text-sm font-bold hover:bg-white transition-all shadow-sm text-center">
            Pricing
          </a>
          <button className="flex-1 py-3 px-4 rounded-full bg-gradient-to-b from-[#853dc1] to-[#4c1d95] text-white text-sm font-bold shadow-lg shadow-purple-200 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Try for free
          </button>
        </div>

        <nav className="min-h-0 flex-1 space-y-6">
          <p className="text-xs font-bold text-black/50 uppercase tracking-widest">Jump to:</p>
          <div className="space-y-2">
            {[
              { icon: Smartphone, label: 'How it works', id: 'how-it-works' },
              { icon: Zap, label: 'Features', id: 'features' },
              { icon: Star, label: 'Pricing', id: 'pricing' }
            ].map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors group"
              >
                <link.icon size={18} className="text-black/60 group-hover:text-[#853dc1] transition-colors" />
                <span className="text-sm font-medium text-black/90 group-hover:text-[#853dc1]">{link.label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-8 border-t border-purple-100/50 pt-6 space-y-4">
          <p className="text-xs text-black/60 leading-relaxed italic">
            Built for everyday posters, creators, marketers, and businesses who want faster content creation without sacrificing quality.
          </p>
          <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
            Copyright 2026. CaptionHype Inc.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="min-w-0 bg-white lg:ml-[315px] lg:h-dvh lg:overflow-y-auto">
        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between p-6 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-purple-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#853dc1] rounded-lg flex items-center justify-center">
              <img src="/images/captionhype/logo-plain.jpg" alt="" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-black text-[#853dc1] uppercase tracking-tighter">CaptionHype</span>
          </div>
          <button className="bg-[#853dc1] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-purple-100">Get App</button>
        </div>

        {/* Hero Section */}
        <section className="relative isolate flex min-h-[90vh] flex-col items-center overflow-hidden bg-white px-6 pt-32 pb-0 text-center md:px-20">
          <div className="absolute inset-x-0 top-0 z-0 h-[68%] pointer-events-none" style={heroGradient}></div>
          
          <div className="reveal relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/50 backdrop-blur-xl border border-white shadow-xl shadow-purple-500/5 mb-10">
              <div className="w-2 h-2 bg-[#853dc1] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6b1ea7]">For businesses, creators, and everyday posters</span>
            </div>

            <h1 className="text-6xl md:text-[88px] font-serif leading-[1.08] tracking-tighter mb-8 text-[#171837]">
              Your photo deserves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#853dc1] via-[#fd42e6] to-[#7c3aed] italic">better caption.</span>
            </h1>

            <p className="text-lg md:text-[19px] text-[#4c4352] max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              The purpose-built design platform for every social media person. Generate captions and enhance photos in seconds.
            </p>

            <div className="flex flex-col items-center gap-5 mb-12">
              <button className="bg-[#853dc1] text-white px-10 py-4 rounded-full text-base font-bold shadow-[0_20px_50px_rgba(133,61,193,0.3)] hover:bg-[#722eb0] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(133,61,193,0.4)]">
                Get the app
              </button>
              <p className="text-[11px] font-bold text-black/40 tracking-[0.2em] uppercase">Free to start. No sign up required.</p>
            </div>
          </div>

          <div className="relative z-10 -mt-2 w-full max-w-4xl reveal stagger-1">
            <img 
              src="/images/captionhype/hero%20below.png" 
              alt="CaptionHype app preview" 
              className="w-full h-auto mix-blend-multiply drop-shadow-[0_50px_100px_rgba(133,61,193,0.12)]"
              onError={(e) => (e.currentTarget.src = "https://placehold.co/1200x800/ffffff/7c3aed?text=CaptionHype+Preview")}
            />
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-24 px-6 md:px-20 border-t border-purple-50">
          <div className="reveal max-w-6xl mx-auto mb-16">
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#9333ea]">How it works</span>
            <h2 className="text-4xl md:text-[58px] font-serif text-[#171837] tracking-tighter mt-5 leading-none">Three taps. Done.</h2>
            <p className="text-lg md:text-xl text-[#6b1ea7] mt-7 font-medium">From idea to post in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 max-w-6xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: 'Drop your photo',
                desc: "From your gallery or straight from your camera. That's the only input CaptionHype needs.",
                color: 'bg-orange-50 text-orange-500'
              },
              {
                icon: MessageSquare,
                title: 'Get your caption',
                desc: 'Reads your photo and writes a caption in seconds. No typing, no guessing, no blank boxes.',
                color: 'bg-emerald-50 text-emerald-500'
              },
              {
                icon: Copy,
                title: 'Copy and post',
                desc: "Paste it wherever you're posting — Instagram, WhatsApp, TikTok. That's it.",
                color: 'bg-purple-50 text-purple-500'
              }
            ].map((step, i) => (
              <div key={i} className={`reveal stagger-${i + 1}`}>
                <div className={`w-16 h-16 ${step.color} rounded-[22px] flex items-center justify-center mb-7 shadow-sm`}>
                  <step.icon size={28} />
                </div>
                <h3 className="text-2xl font-medium mb-4 tracking-tight text-[#171837]">{step.title}</h3>
                <p className="text-[#6d6d6d] leading-relaxed text-base font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 md:px-20 bg-purple-50/30">
          <div className="reveal max-w-6xl mx-auto mb-16">
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#9333ea]">FEATURES</span>
            <h2 className="text-4xl md:text-[58px] font-serif text-[#171837] tracking-tighter mt-5 leading-[1.05]">Built for people who post. <br />Not people who write.</h2>
            <p className="text-lg md:text-xl text-[#6b1ea7] mt-7 font-medium">Everything you need to stand out on social media.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Main Gradient Card */}
            <div className="md:col-span-8 bg-gradient-to-br from-[#853dc1] via-[#fd42e6] to-[#fface6] rounded-[40px] p-10 md:p-12 text-white relative overflow-hidden reveal shadow-2xl shadow-purple-200">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-[20px] flex items-center justify-center mb-9 border border-white/30">
                <Zap size={28} className="fill-white" />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">Photo Caption Generation</h3>
              <p className="text-white/90 text-lg max-w-md mb-10 leading-relaxed font-medium">
                CaptionHype looks at your photo and figures out what to write. No product names, no descriptions, no prompts.
              </p>
              <div className="flex flex-wrap gap-4">
                {['PHOTOS', 'CAPTIONS', 'COPY', 'SHARE', 'SAVE'].map(tag => (
                  <span key={tag} className="px-7 py-3 bg-white/15 backdrop-blur-xl rounded-2xl text-xs font-black border border-white/15 uppercase tracking-[0.2em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Smart CTAs Card */}
            <div className="md:col-span-4 bg-white rounded-[40px] p-10 md:p-12 reveal stagger-1 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-purple-50">
              <div className="w-14 h-14 bg-purple-50 rounded-[20px] flex items-center justify-center mb-9 text-[#853dc1]">
                <Hash size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-[#171837]">Smart CTAs</h3>
              <p className="text-[#4c4352] leading-relaxed text-base font-medium">
                Auto-add your WhatsApp or DM links to every post. Convert followers into community with one tap.
              </p>
            </div>

            {/* Reel History Card */}
            <div className="md:col-span-4 bg-white rounded-[40px] p-10 md:p-12 reveal stagger-2 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-purple-50">
              <div className="w-14 h-14 bg-purple-50 rounded-[20px] flex items-center justify-center mb-9 text-[#853dc1]">
                <Star size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-[#171837]">Your captions, saved</h3>
              <p className="text-[#4c4352] leading-relaxed text-base font-medium">
                Every caption lives in The Reel. Go back, reuse, or remix your best ones anytime.
              </p>
            </div>

            {/* Formats Card */}
            <div className="md:col-span-8 bg-white rounded-[40px] p-10 md:p-12 reveal stagger-3 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-purple-50 flex flex-col justify-center">
              <div className="flex items-center gap-5 mb-7">
                <div className="w-14 h-14 bg-purple-50 rounded-[20px] flex items-center justify-center text-[#853dc1]">
                  <MessageSquare size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-[#171837]">Short or long</h3>
              </div>
              <p className="text-[#4c4352] leading-relaxed text-lg font-medium max-w-xl">
                Need something punchy for TikTok? A full caption for Instagram? Pick your format before you generate.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 md:px-20 bg-white">
          <div className="reveal max-w-6xl mx-auto mb-16">
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#9333ea]">PRICING</span>
            <h2 className="text-4xl md:text-[58px] font-serif text-[#111827] tracking-tighter mt-5 leading-none">Simple pricing.</h2>
            <p className="text-lg md:text-xl text-[#6b1ea7] mt-7 font-medium">Start free. Upgrade when you need more.</p>
            
            <div className="mt-12 inline-flex items-center p-2 bg-neutral-100/80 rounded-full border border-neutral-200">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-12 py-4 rounded-full text-[15px] font-black transition-all ${!isYearly ? 'bg-white text-black shadow-xl' : 'text-neutral-500'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-12 py-4 rounded-full text-[15px] font-black transition-all flex items-center gap-3 ${isYearly ? 'bg-white text-black shadow-xl' : 'text-neutral-500'}`}
              >
                Yearly
                <span className="px-3 py-1 bg-[#f3e8ff] text-[#9333ea] text-[11px] rounded-full uppercase tracking-widest font-black shadow-inner">Save {yearlySavingsPercent}%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
            {/* Free Card */}
            <div className="bg-neutral-50/50 rounded-[44px] p-10 md:p-14 flex flex-col reveal border border-neutral-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-purple-500/5">
              <span className="text-xs font-black text-neutral-400 uppercase tracking-[0.3em] mb-9">FREE</span>
              <div className="mb-9">
                <span className="text-[72px] font-serif text-[#111827] tracking-tighter leading-none">$0</span>
                <span className="text-neutral-400 text-[13px] font-black ml-5 uppercase tracking-[0.3em]">/ month</span>
              </div>
              <p className="text-lg text-neutral-500 font-bold mb-10 leading-relaxed">5 captions to get started</p>
              <ul className="space-y-5 mb-14 flex-grow">
                {['5 lifetime generations', 'Full AI caption generation', 'Short or long captions', 'No card. No sign up.'].map(item => (
                  <li key={item} className="flex items-center text-[#4b5563] font-bold text-base">
                    <Check size={20} className="text-[#853dc1] mr-4 shrink-0" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-white border-2 border-neutral-200 rounded-[24px] text-lg font-black text-black hover:bg-neutral-50 transition-all shadow-sm">
                Download free
              </button>
            </div>

            {/* Pro Card */}
            <div className="bg-[#853dc1] rounded-[44px] p-10 md:p-14 text-white flex flex-col reveal stagger-1 shadow-2xl shadow-purple-300 relative overflow-hidden group">
              {isYearly && (
                <div className="absolute top-14 right-14 bg-white/20 backdrop-blur-xl px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-white/20 z-10">Recommended</div>
              )}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-colors"></div>
              
              <span className="text-xs font-black text-white/50 uppercase tracking-[0.3em] mb-9 relative z-10">PRO</span>
              <div className="mb-9 relative z-10">
                <span className="text-[72px] font-serif tracking-tighter leading-none">{proPrice}</span>
                <span className="text-white/50 text-[13px] font-black ml-5 uppercase tracking-[0.3em]">{proInterval}</span>
              </div>
              <p className="text-lg text-white/80 font-bold mb-10 leading-relaxed relative z-10">{proDescription}</p>
              <ul className="space-y-5 mb-14 flex-grow relative z-10">
                {proFeatures.map(item => (
                  <li key={item} className="flex items-center text-white font-bold text-base">
                    <Check size={20} className="text-white/50 mr-4 shrink-0" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-white text-[#853dc1] rounded-[24px] text-lg font-black shadow-2xl hover:bg-purple-50 transition-all relative z-10">
                Download and upgrade in-app
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative overflow-hidden rounded-t-[48px] bg-[#700a95] px-6 pt-20 pb-12 md:px-20 md:pt-24 md:pb-14 text-white">
          {/* Large Background Branding */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[35vw] font-semibold uppercase tracking-tighter text-white/[0.03] pointer-events-none md:-bottom-20 md:text-[22vw]">
            CaptionHype
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-16 flex flex-col items-center justify-between gap-12 md:mb-24 md:flex-row md:items-start">
              <p className="max-w-sm text-center text-xl font-medium leading-tight text-white/90 md:text-left md:text-2xl">
                One photo. <br className="hidden md:block" /> One caption. <br className="hidden md:block" /> Post every day.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 text-[11px] font-medium uppercase tracking-[0.3em] md:gap-x-16 md:text-[12px] md:tracking-[0.4em]">
                <Link to="/privacy" className="hover:text-purple-200 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-purple-200 transition-colors">Terms</Link>
                <a href="mailto:captionhype@hyperlandhq.com" className="hover:text-purple-200 transition-colors">Contact</a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="mb-12 flex flex-col items-center gap-6 group transition-all md:mb-16 md:flex-row md:gap-10">
                <div className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-transform group-hover:scale-105 group-hover:rotate-2 md:h-36 md:w-36 md:rounded-[36px]">
                  <img src="/images/captionhype/logo-plain.jpg" alt="CaptionHype Logo" className="h-14 w-14 object-contain md:h-20 md:w-20" />
                </div>
                <h2 className="text-4xl font-semibold uppercase leading-none tracking-tighter text-transparent select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] md:text-[110px] md:[-webkit-text-stroke:1px_rgba(255,255,255,0.45)]">
                  CaptionHype
                </h2>
              </div>
              <p className="text-center text-[10px] font-medium uppercase tracking-[0.6em] text-white/20 md:tracking-[0.8em]">
                © 2026 CaptionHype. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CaptionHype;
