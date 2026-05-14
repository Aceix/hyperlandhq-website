import React from 'react';
import { Link } from 'react-router-dom';

const CaptionHypePrivacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20 font-sans text-[#171837] md:px-20">
      <div className="mx-auto max-w-3xl">
        <Link to="/captionhype" className="mb-12 inline-flex text-sm font-medium text-[#853dc1] hover:underline">
          Back to CaptionHype
        </Link>

        <header className="mb-14">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.3em] text-[#9333ea]">Legal</span>
          <h1 className="mb-6 font-serif text-5xl leading-none tracking-tight md:text-[68px]">
            Privacy Policy
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-black/45">
            Last updated: May 13, 2026
          </p>
        </header>

        <div className="space-y-10 text-base leading-8 text-[#4c4352]">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">1. Overview</h2>
            <p>
              CaptionHype is a content creation app by HyperlandHQ that helps users generate captions, improve visuals, and create social-ready content from photos. This Privacy Policy explains how CaptionHype collects, uses, shares, and protects information when you use the app, website, and related services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">2. Information We Collect</h2>
            <p className="mb-4">
              We collect information needed to provide CaptionHype, including:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Photos or images you choose to upload or capture for caption generation.</li>
              <li>Captions, prompts, preferences, edits, and saved caption history.</li>
              <li>Basic account or contact details if you create an account, contact support, or join a waitlist.</li>
              <li>Subscription, purchase status, and usage limits from app stores or payment providers.</li>
              <li>Device, app, analytics, crash, and diagnostic information used to keep the app reliable.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">3. How We Use Information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Generate captions and related content from images you provide.</li>
              <li>Save caption history, streaks, preferences, and usage progress when those features are enabled.</li>
              <li>Operate subscriptions, enforce free or paid usage limits, and provide customer support.</li>
              <li>Improve CaptionHype, fix bugs, monitor performance, and prevent abuse.</li>
              <li>Send service messages, product updates, or support replies when appropriate.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">4. Photos and AI Processing</h2>
            <p>
              CaptionHype processes photos you choose to provide so the app can understand the image and generate relevant captions. Do not upload images you do not have the right to use, private images you do not want processed, or sensitive personal information unless you are comfortable using it with the app.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">5. Sharing of Information</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share information only with:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Service providers that help us run CaptionHype, such as hosting, analytics, AI processing, crash reporting, payment, and support tools.</li>
              <li>App stores or payment processors for subscriptions, purchases, refunds, and entitlement checks.</li>
              <li>Authorities or other parties when required by law, to protect users, or to enforce our terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">6. Retention</h2>
            <p>
              We keep information for as long as needed to provide CaptionHype, comply with legal obligations, resolve disputes, prevent abuse, and maintain business records. You may request deletion of your information by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">7. Your Choices</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>You can choose not to upload a photo or not to save generated captions.</li>
              <li>You can manage subscriptions through the app store or platform where you purchased them.</li>
              <li>You can request access, correction, or deletion by emailing us.</li>
              <li>You can disable certain device permissions through your device settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">8. Security</h2>
            <p>
              We use reasonable technical and organizational safeguards to protect information. No internet or electronic storage system is completely secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#171837]">9. Contact</h2>
            <p>
              Questions or privacy requests can be sent to <a href="mailto:captionhype@hyperlandhq.com" className="font-medium text-[#853dc1] hover:underline">captionhype@hyperlandhq.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaptionHypePrivacy;
