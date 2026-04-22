
import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
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
            Privacy <span className="font-serif italic font-normal text-neutral-500">Policy</span>
          </h1>
          <p className="text-neutral-500 text-sm uppercase tracking-widest font-bold">
            Last Updated: April 22, 2026
          </p>
        </header>

        <div className="space-y-12 text-neutral-600 leading-relaxed reveal stagger-1">
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">1. Introduction</h2>
            <p>
              At HyperlandHQ, we respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information that you provide directly to us, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name and contact information</li>
              <li>Project details and business information</li>
              <li>Communications you send to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you updates and marketing communications (where permitted)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@hyperlandhq.com" className="text-green-600 hover:underline font-medium">hello@hyperlandhq.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
