
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    companySize: '',
    budget: '',
    service: '',
    details: '',
    referral: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const subject = encodeURIComponent(`Business Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Industry: ${formData.industry}\n` +
      `Company Size: ${formData.companySize}\n` +
      `Budget: ${formData.budget}\n` +
      `Service: ${formData.service}\n` +
      `How they heard: ${formData.referral}\n\n` +
      `Project Details:\n${formData.details}`
    );

    window.location.href = `mailto:hello@hyperlandhq.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24">

          {/* Left Column: Info & Founder Card */}
          <div className="lg:col-span-5 reveal">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-neutral-900 mb-8 tracking-tight">
              Contact
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12 md:mb-16 max-w-lg">
              Let’s turn your ideas into something powerful—fill out the form to begin.
            </p>

            {/* Founder Card */}
            <div className="bg-neutral-50 rounded-lg p-6 md:p-8 mb-12 md:mb-16 max-w-sm reveal stagger-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                  <img
                    src="/images/pearl-pic.jpg"
                    className="w-full h-full object-cover"
                    alt="Pearl"
                  />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-900 uppercase tracking-widest">Want to have a chat with the founder?</h3>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mt-1">PEARL / CO-FOUNDER</p>
                </div>
              </div>
            </div>

            {/* Contact Details Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] font-bold uppercase tracking-[0.3em] reveal stagger-2">
              <div>
                <p className="text-neutral-400 mb-4">Email</p>
                <a href="mailto:hello@hyperlandhq.com" className="text-neutral-900 break-all">hello@hyperlandhq.com</a>
              </div>
              <div>
                <p className="text-neutral-400 mb-4">Location</p>
                <p className="text-neutral-900">Remote / Global</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7 reveal stagger-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Your name *"
                    required
                    className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 placeholder:text-neutral-400 placeholder:font-medium placeholder:text-xs"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Business email *"
                    required
                    className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 placeholder:text-neutral-400 placeholder:font-medium placeholder:text-xs"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <div className="relative group">
                <select
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 appearance-none text-xs font-medium cursor-pointer"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="" disabled>Business industry?*</option>
                  <option value="Tech">Tech</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={14} />
              </div>

              <div className="relative group">
                <select
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 appearance-none text-xs font-medium cursor-pointer"
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                >
                  <option value="" disabled>Company size*</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={14} />
              </div>

              <div className="relative group">
                <select
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 appearance-none text-xs font-medium cursor-pointer"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="" disabled>What's your total budget for this project?*</option>
                  <option value="< $10k">&lt; $1k</option>
                  <option value="$10k-$25k">$1k-$5k</option>
                  <option value="$25k-$50k">$5k-$10k</option>
                  <option value="$50k+">$10k+</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={14} />
              </div>

              <div className="relative group">
                <select
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 appearance-none text-xs font-medium cursor-pointer"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="" disabled>What service are you interested in?*</option>
                  <option value="Full Product">Full Product</option>
                  <option value="MVP Build">MVP Build</option>
                  <option value="Brand Design/UI/UX">Brand Design/UI/UX</option>
                  <option value="Strategy">Strategy</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={14} />
              </div>

              <div className="relative group">
                <textarea
                  placeholder="Tell us more details about your project"
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 placeholder:text-neutral-400 placeholder:font-medium placeholder:text-xs min-h-[120px] resize-none"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <div className="relative group">
                <select
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-4 px-4 focus:outline-none focus:border-neutral-900 transition-all text-neutral-900 appearance-none text-xs font-medium cursor-pointer"
                  value={formData.referral}
                  onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                >
                  <option value="" disabled>How did you hear about us?*</option>
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={14} />
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  className="w-full bg-neutral-900 text-white font-bold py-5 rounded-lg hover:bg-neutral-800 transition-all text-[10px] uppercase tracking-[0.2em]"
                >
                  Contact us
                </Button>
                <p className="mt-4 text-[9px] text-neutral-400 leading-relaxed max-w-sm">
                  By clicking Contact us, you agree to the HyperlandHQ Privacy Policy and consent to the processing of your personal data.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
