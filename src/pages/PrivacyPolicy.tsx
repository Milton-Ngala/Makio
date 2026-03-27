import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="font-opensans text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none font-opensans space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Makio Tours and Travel ("we", "us", or "our") is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard data when you visit our website or
              contact us regarding our safari services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name and contact details (email address, phone number) when you reach out via our contact form or WhatsApp</li>
              <li>Booking preferences and travel details you share with us</li>
              <li>Usage data such as pages visited and time spent on the site (via analytics tools)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to enquiries and process safari bookings</li>
              <li>Send relevant updates, offers, or newsletters (only if you have opted in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal data to third parties. We may share information with trusted
              service providers (e.g. accommodation partners, transport operators) solely to fulfil your booking,
              and only to the extent necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">5. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to provide our services or as required
              by law. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">7. Contact Us</h2>
            <p>
              For any privacy-related questions, please contact us at{' '}
              <a href="mailto:info@makiotours.com" className="text-safari-green hover:underline">
                info@makiotours.com
              </a>{' '}
              or call <a href="tel:+254774156869" className="text-safari-green hover:underline">+254 774 156 869</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
