import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="font-opensans text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none font-opensans space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site
              remember your preferences and understand how you interact with it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">2. How We Use Cookies</h2>
            <p>Makio Tours and Travel uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-semibold">Essential cookies</span> — required for the website to function correctly (e.g. navigation, page rendering)</li>
              <li><span className="font-semibold">Analytics cookies</span> — help us understand which pages are visited most and how users navigate the site, so we can improve the experience</li>
              <li><span className="font-semibold">Preference cookies</span> — remember settings such as language or region to personalise your visit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">3. Third-Party Cookies</h2>
            <p>
              Some cookies may be set by third-party services embedded on our site, such as:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cloudinary (image delivery)</li>
              <li>Google Analytics (if enabled) for site usage statistics</li>
              <li>Social media platforms (Instagram, Facebook, TikTok) via embedded links</li>
            </ul>
            <p className="mt-2">
              These third parties have their own privacy and cookie policies, which we encourage you to review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">4. Managing Cookies</h2>
            <p>
              You can control or delete cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>View cookies currently stored on your device</li>
              <li>Block cookies from specific or all websites</li>
              <li>Delete cookies when you close your browser</li>
            </ul>
            <p className="mt-2">
              Note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page
              with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">6. Contact</h2>
            <p>
              For questions about our use of cookies, contact us at{' '}
              <a href="mailto:info@makiotours.com" className="text-safari-green hover:underline">
                info@makiotours.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
