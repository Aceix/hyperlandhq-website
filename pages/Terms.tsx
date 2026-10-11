import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';

const h2 = 'font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm';
const h3 = 'font-bold text-neutral-900 mb-3';
const strong = 'font-semibold text-neutral-900';
const link = 'text-green-600 hover:underline font-medium';
const th = 'text-left font-bold text-neutral-900 py-3 pr-6 align-top';
const td = 'py-3 pr-6 align-top';

const supportEmail = <a href="mailto:support@hyperlandhq.com" className={link}>support@hyperlandhq.com</a>;
const website = <a href="https://hyperlandhq.com" className={link}>https://hyperlandhq.com</a>;

const paymentChannels = [
  ['Web Application Billing', 'Paystack, Stripe, PayPal, and regional mobile money or card gateways', 'Billed recurringly or on-demand as specified at checkout'],
  ['Mobile In-App Purchases', 'Apple App Store (StoreKit) and Google Play Billing', 'Billed through your Apple ID or Google Play account'],
];

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
      <SEO
        title="Terms and Conditions | HyperlandHQ"
        description="Read the Terms and Conditions governing your use of HyperlandHQ websites, applications, and services."
        path="/terms"
      />
      <div className="max-w-3xl mx-auto">
        <header className="mb-20 reveal">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.4em] block mb-6">
            LEGAL
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-8">
            Terms and <span className="font-serif italic font-normal text-neutral-500">Conditions</span>
          </h1>
          <p className="text-neutral-500 text-sm uppercase tracking-widest font-bold">
            Last Updated: October 11, 2026
          </p>
        </header>

        <div className="space-y-12 text-neutral-600 leading-relaxed reveal stagger-1">
          <section>
            <p>
              Please read these Terms and Conditions carefully before using any websites, mobile applications, or software services operated under HyperlandHQ.
            </p>
          </section>

          <section>
            <h2 className={h2}>1. Introduction and Agreement to Terms</h2>
            <p className="mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement made between you ("User", "you", or "your") and HyperlandHQ ("Company", "We", "Us", or "Our").
            </p>
            <p className="mb-4">
              These Terms govern your access to and use of the HyperlandHQ website located at {website}, along with any other software programs, mobile applications, web applications, or IT services operated under HyperlandHQ, including EazySales, Caselify, CaptionHype, and custom software builds (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you agree that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the Services and must discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Eligibility and Account Registration</h2>
            <h3 className={h3}>2.1 Eligibility Requirements</h3>
            <p className="mb-6">
              The Services are intended solely for users who are at least 13 years of age (or 16 years of age in certain European jurisdictions). By using the Services, you represent and warrant that you meet the age requirement and have the legal capacity to enter into a binding agreement.
            </p>
            <h3 className={h3}>2.2 Account Security</h3>
            <p className="mb-4">
              To access certain features of our Services, you may be required to register an account or log in via a Third-Party Social Media Service (such as Google, Apple, or GitHub). You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate, current, and complete account information.</li>
              <li>Maintain the security of your account password and credentials.</li>
              <li>Promptly notify Us if you discover or suspect any unauthorized access or security breach regarding your account.</li>
              <li>Accept responsibility for all activities that occur under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>3. Scope of Services and Product-Specific Terms</h2>
            <p className="mb-6">
              HyperlandHQ provides a range of digital tools, SaaS applications, mobile software, and custom IT services:
            </p>
            <h3 className={h3}>3.1 Software-as-a-Service (SaaS) and Mobile Applications</h3>
            <p className="mb-6">
              Our software products (including EazySales, Caselify, and CaptionHype) are provided on a subscription or feature-limited free access basis. We grant you a non-exclusive, non-transferable, revocable license to access and use the software strictly in accordance with these Terms.
            </p>
            <h3 className={h3}>3.2 AI-Powered Features and Content Generation</h3>
            <p className="mb-4">
              Certain Services (such as CaptionHype) utilize artificial intelligence to generate text, captions, or image enhancements.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>
                <span className={strong}>Input and Output Ownership:</span> As between you and HyperlandHQ, you retain ownership of the original text, photos, and media you upload ("Inputs"). HyperlandHQ assigns to you all rights in the output generated by the AI based on your Inputs ("Outputs").
              </li>
              <li>
                <span className={strong}>AI Disclaimer:</span> You acknowledge that AI-generated content is generated by automated algorithms and may contain errors, inaccuracies, or unexpected results. You are solely responsible for reviewing and verifying generated Outputs prior to publishing or distributing them.
              </li>
            </ul>
            <h3 className={h3}>3.3 E-Commerce Storefronts and Merchant Responsibilities</h3>
            <p className="mb-4">
              For Services (such as EazySales) that enable merchants to host public storefronts and receive order requests:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>
                <span className={strong}>Platform Provider Role:</span> HyperlandHQ acts solely as a technology provider hosting the platform. We are not a party to any contract, sale, or delivery agreed upon between a merchant and an end customer.
              </li>
              <li>
                <span className={strong}>Merchant Liability:</span> Merchants are solely responsible for setting product prices, fulfilling orders, resolving customer disputes, collecting taxes, and complying with applicable consumer protection laws.
              </li>
            </ul>
            <h3 className={h3}>3.4 Confidential Legal and Business Records</h3>
            <p className="mb-6">
              For Services (such as Caselify) designed for legal practitioners and corporate management, HyperlandHQ maintains strict confidentiality protocols. We process uploaded files and operational records exclusively to deliver, maintain, and secure the software.
            </p>
            <h3 className={h3}>3.5 B2B IT and Software Development Services</h3>
            <p>
              Custom software development, UI/UX design, and DevOps consultancy provided by HyperlandHQ to clients are subject to separate service agreements or statements of work (SOWs). In the event of a conflict between these Terms and a signed agreement or SOW, the signed agreement shall prevail for that engagement.
            </p>
          </section>

          <section>
            <h2 className={h2}>4. Subscriptions, Pricing, and Payments</h2>
            <h3 className={h3}>4.1 Payment Channels</h3>
            <p className="mb-6">
              We offer both free tiers and paid subscriptions (Monthly and Annual plans). Payments are processed through authorized payment channels based on the platform used:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[520px] text-sm border-t border-neutral-100">
                <thead>
                  <tr className="border-b border-neutral-100">
                    <th className={th}>Payment Category</th>
                    <th className={th}>Supported Methods &amp; Channels</th>
                    <th className={th}>Billing Terms</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentChannels.map(([category, methods, billing]) => (
                    <tr key={category} className="border-b border-neutral-100">
                      <td className={`${td} ${strong}`}>{category}</td>
                      <td className={td}>{methods}</td>
                      <td className={td}>{billing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className={h3}>4.2 Auto-Renewal and Cancellation</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>
                <span className={strong}>Recurring Subscriptions:</span> Subscriptions automatically renew at the end of each billing cycle (monthly or annually) unless cancelled prior to the renewal date.
              </li>
              <li>
                <span className={strong}>Web Subscription Cancellation:</span> You may cancel recurring web subscriptions at any time through your account billing settings or by contacting {supportEmail}.
              </li>
              <li>
                <span className={strong}>In-App Purchase Cancellation:</span> In-app subscriptions purchased through Apple or Google must be managed and cancelled directly through your Apple ID or Google Play account settings.
              </li>
            </ul>
            <h3 className={h3}>4.3 Refunds</h3>
            <p>
              Except as required by applicable law or specific platform terms (such as Apple or Google Play refund policies), payments are non-refundable. Fee adjustments or credits may be issued at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className={h2}>5. Acceptable Use and Prohibited Activities</h2>
            <p className="mb-4">
              You may use the Services only for lawful purposes. You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className={strong}>System Abuse and Interference:</span> Attempting to disrupt, disable, overburden, or compromise the security, integrity, or availability of our servers, networks, or applications.
              </li>
              <li>
                <span className={strong}>Reverse Engineering:</span> Decompiling, reverse engineering, disassembling, or attempting to derive the source code of any software provided under HyperlandHQ.
              </li>
              <li>
                <span className={strong}>Unauthorized Scraping:</span> Using automated bots, scrapers, or data extraction tools to crawl or extract data from the Services without our written authorization.
              </li>
              <li>
                <span className={strong}>Illegal Content:</span> Uploading, posting, or transmitting content that is unlawful, defamatory, harassing, fraudulent, abusive, or infringing upon third-party intellectual property rights.
              </li>
              <li>
                <span className={strong}>Account Reselling:</span> Renting, leasing, selling, or sublicensing access to your account or the Services to third parties without prior written approval.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>6. Intellectual Property Rights</h2>
            <h3 className={h3}>6.1 Company Ownership</h3>
            <p className="mb-6">
              The Services, including all software code, visual interface designs, graphics, text, branding, logos, trademarks, and proprietary tools, are owned by or licensed to HyperlandHQ and are protected by applicable intellectual property laws and international treaties.
            </p>
            <h3 className={h3}>6.2 User Content License</h3>
            <p>
              By uploading, submitting, or creating content through our Services, you grant HyperlandHQ a worldwide, non-exclusive, royalty-free license to host, store, process, display, and transmit your content solely for the purpose of operating, delivering, and improving the Services.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Disclaimers and Limitation of Liability</h2>
            <h3 className={h3}>7.1 Disclaimer of Warranties</h3>
            <p className="mb-6">
              The Services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability.
            </p>
            <h3 className={h3}>7.2 Limitation of Liability</h3>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, in no event shall HyperlandHQ, its operators, employees, partners, or suppliers be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, data, revenue, or business reputation, arising out of or in connection with your use of the Services.
            </p>
            <p>
              In any event, the aggregate liability of HyperlandHQ for any claims arising under these Terms shall not exceed the total amount paid by you to Us for the Services in the twelve (12) months preceding the event giving rise to liability, or $100 USD, whichever is greater.
            </p>
          </section>

          <section>
            <h2 className={h2}>8. Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless HyperlandHQ, its operators, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or in connection with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your access to or use of the Services.</li>
              <li>Your violation of these Terms or any applicable law.</li>
              <li>Your infringement of any third-party intellectual property, privacy, or contractual rights.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>9. Termination and Account Suspension</h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate your account and access to the Services at our sole discretion, without prior notice, for conduct that We believe violates these Terms, harms other users, or creates legal liability for HyperlandHQ.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately cease. Sections relating to intellectual property, disclaimers, limitation of liability, indemnification, and governing law shall survive termination.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Governing Law and Dispute Resolution</h2>
            <h3 className={h3}>10.1 Governing Law</h3>
            <p className="mb-6">
              These Terms and any disputes arising out of or related to them shall be governed by and construed in accordance with the laws of the Republic of Ghana, without regard to its conflict of law principles.
            </p>
            <h3 className={h3}>10.2 Dispute Resolution</h3>
            <p>
              In the event of any dispute or claim arising out of these Terms, the parties agree to first attempt to resolve the dispute informally by contacting {supportEmail}. If the dispute cannot be resolved informally within thirty (30) days, the dispute shall be submitted to the competent courts of Ghana.
            </p>
          </section>

          <section>
            <h2 className={h2}>11. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or update these Terms at any time. When updates are made, We will post the revised Terms on this page and update the "Last updated" date at the top of the document.
            </p>
            <p>
              For material changes, We may provide additional notification via email or through an in-app notice prior to the changes taking effect. Continued use of the Services after updated Terms become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className={h2}>12. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>By email: {supportEmail}</li>
              <li>By web: {website}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
