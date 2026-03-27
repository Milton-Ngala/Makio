import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="font-opensans text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none font-opensans space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing our website or booking any service with Makio Tours and Travel, you agree to be bound
              by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">2. Bookings and Payments</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>All bookings are subject to availability and confirmed only upon receipt of a deposit or full payment as agreed.</li>
              <li>Prices are quoted in the currency specified at the time of booking and may be subject to change without notice prior to confirmation.</li>
              <li>A booking confirmation will be sent via email or WhatsApp once payment is received.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">3. Cancellations and Refunds</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cancellations made 7 or more days before the tour date may be eligible for a partial refund, minus any non-recoverable costs.</li>
              <li>Cancellations within 48 hours of the tour are non-refundable.</li>
              <li>We reserve the right to cancel or reschedule tours due to unforeseen circumstances (e.g. extreme weather, safety concerns). In such cases, a full refund or alternative date will be offered.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">4. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Ensuring they hold valid travel documents, visas, and any required vaccinations</li>
              <li>Arriving at the agreed meeting point on time</li>
              <li>Following the guide's instructions for safety during all activities</li>
              <li>Any personal expenses not included in the package</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>
              Makio Tours and Travel acts as an agent for accommodation, transport, and activity providers.
              We are not liable for any injury, loss, damage, or delay caused by third-party service providers,
              natural events, or circumstances beyond our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, and branding — is the property of
              Makio Tours and Travel and may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Kenya. Any disputes shall be subject to the exclusive
              jurisdiction of the courts of Nairobi, Kenya.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">8. Contact</h2>
            <p>
              Questions about these terms? Reach us at{' '}
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

export default TermsOfService;
