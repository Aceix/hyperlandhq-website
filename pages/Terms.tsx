
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white px-6 pt-32 pb-24 md:pt-40 md:pb-40">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20 reveal">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.4em] block mb-6">
            LEGAL
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-8">
            Terms of <span className="font-serif italic font-normal text-neutral-500">Service</span>
          </h1>
          <p className="text-neutral-500 text-sm uppercase tracking-widest font-bold">
            Last Updated: April 22, 2026
          </p>
        </header>

        <div className="space-y-12 text-neutral-600 leading-relaxed reveal stagger-1">
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the HyperlandHQ website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">2. Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for all activities that occur under your account or in connection with your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">3. Intellectual Property</h2>
            <p>
              The content, features, and functionality of our website and services, including but not limited to text, graphics, logos, and code, are owned by HyperlandHQ and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">4. Limitation of Liability</h2>
            <p>
              In no event shall HyperlandHQ be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">5. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms of Service at any time. We will provide notice of any material changes by posting the new Terms on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:hello@hyperlandhq.com" className="text-green-600 hover:underline font-medium">hello@hyperlandhq.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
