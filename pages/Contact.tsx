
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, MessageSquare, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    website: '',
    email: '',
    project: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 md:py-40 bg-brand-light dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="reveal animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">Contact</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-12">
            Interested in what we're building? Have a question about a project? Reach out and let's start a conversation.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-white/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:border-primary transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-1 group-hover:text-primary transition-colors">Email</p>
                <a href="mailto:hello@hyperlandhq.com" className="text-neutral-900 dark:text-white text-lg hover:text-primary transition-colors">
                  hello@hyperlandhq.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-white/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:border-primary transition-all">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-1 group-hover:text-primary transition-colors">Social</p>
                <div className="flex space-x-4 text-neutral-900 dark:text-white">
                  <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Twitter</a>
                  <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] p-8 md:p-12 relative shadow-xl reveal animate-fade-in-up stagger-1">
          <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>
          
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 animate-bounce">
                <Send size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Message sent</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">Thanks for reaching out. We'll be in touch soon.</p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-base font-medium text-neutral-900 dark:text-white mb-3">First name*</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl px-5 py-4 text-neutral-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 shadow-sm"
                    placeholder="Pearl"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-base font-medium text-neutral-900 dark:text-white mb-3">Last name*</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl px-5 py-4 text-neutral-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 shadow-sm"
                    placeholder="Smart"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-base font-medium text-neutral-900 dark:text-white mb-3">Current website (if applicable)</label>
                <input
                  type="text"
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl px-5 py-4 text-neutral-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 shadow-sm"
                  placeholder="hyperlandhq.com"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-neutral-900 dark:text-white mb-3">Email*</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl px-5 py-4 text-neutral-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 shadow-sm"
                  placeholder="pearl@hyperlandhq.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-base font-medium text-neutral-900 dark:text-white mb-3">Tell me a bit about the project*</label>
                <textarea
                  id="project"
                  required
                  rows={4}
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl px-5 py-4 text-neutral-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600 shadow-sm"
                  placeholder="I need new website for my business..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-white font-bold py-5 rounded-full hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 border-none shadow-[0_0_30px_rgba(20,139,59,0.3)]"
              >
                <span>Start today</span> <ArrowRight size={18} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
