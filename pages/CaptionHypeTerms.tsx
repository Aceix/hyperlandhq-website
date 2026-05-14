import React from 'react';
import { Link } from 'react-router-dom';

const CaptionHypeTerms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20 font-sans text-[#171837] md:px-20">
      <div className="mx-auto max-w-3xl">
        <Link to="/captionhype" className="mb-12 inline-flex text-sm font-medium text-[#853dc1] hover:underline">
          Back to CaptionHype
        </Link>

        <header className="mb-14">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.3em] text-[#9333ea]">Legal</span>
          <h1 className="mb-6 font-serif text-5xl leading-none tracking-tight md:text-[68px]">
            Terms of Use
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-black/45">
            Last updated: May 13, 2026
          </p>
        </header>

        <div className="space-y-10 text-base leading-8 text-[#4c4352]">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">1. Agreement</h2>
            <p>
              These Terms of Use govern your access to and use of CaptionHype, a content creation app by HyperlandHQ. By using CaptionHype, you agree to these Terms. If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">2. What CaptionHype Does</h2>
            <p>
              CaptionHype helps users generate captions, improve visuals, save caption history, and prepare content for social platforms. Generated content is assisted by AI and may not always be accurate, appropriate, original, or suitable for every use.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">3. Your Responsibilities</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use CaptionHype only for lawful purposes.</li>
              <li>Only upload photos, images, or materials you own or have permission to use.</li>
              <li>Review generated captions before posting or sharing them.</li>
              <li>Do not use CaptionHype to create harmful, abusive, deceptive, infringing, illegal, or spam content.</li>
              <li>Do not attempt to reverse engineer, overload, scrape, or interfere with the app or its systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">4. User Content and Generated Content</h2>
            <p>
              You retain rights you have in photos, prompts, captions, and other content you provide or create with CaptionHype. You grant HyperlandHQ a limited license to process that content as needed to operate, support, secure, and improve CaptionHype. You are responsible for how you use and publish generated captions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">5. Subscriptions and Purchases</h2>
            <p>
              CaptionHype may offer free usage limits and paid plans. Prices, caption limits, features, and billing periods may vary by platform or promotion. Subscriptions renew unless cancelled through the app store or payment platform where you purchased them. Refunds are handled according to the policies of the relevant app store or payment provider, unless required otherwise by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">6. AI Output Disclaimer</h2>
            <p>
              CaptionHype provides generated captions and content suggestions for convenience. We do not guarantee that output will be error-free, non-infringing, platform-compliant, or effective for marketing, sales, engagement, or any other result. You should check all output before relying on it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">7. Intellectual Property</h2>
            <p>
              CaptionHype, including its design, branding, software, features, and related materials, is owned by HyperlandHQ or its licensors. These Terms do not grant you ownership of CaptionHype or permission to use our brand except as allowed by law or with our written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">8. Account Suspension or Termination</h2>
            <p>
              We may suspend or terminate access to CaptionHype if we believe you violated these Terms, created risk for other users or our systems, or used the app in a harmful or unlawful way.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, HyperlandHQ will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost data, lost business, or reputational harm arising from your use of CaptionHype.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">10. Changes</h2>
            <p>
              We may update these Terms from time to time. If changes are material, we will take reasonable steps to notify users. Continued use of CaptionHype after changes take effect means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">11. Contact</h2>
            <p>
              Questions about these Terms can be sent to <a href="mailto:captionhype@hyperlandhq.com" className="font-medium text-[#853dc1] hover:underline">captionhype@hyperlandhq.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaptionHypeTerms;
