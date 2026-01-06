import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#fffef8] pt-24 pb-16">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#4a4a4a] mb-6">
              Last updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Information We Collect</h2>
              <p className="text-[#4a4a4a] mb-4">
                We collect information you provide directly to us, such as when you contact us through our website forms, email, or phone.
              </p>
              <ul className="list-disc pl-6 text-[#4a4a4a] mb-4">
                <li>Name and contact information</li>
                <li>Company details</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">How We Use Your Information</h2>
              <p className="text-[#4a4a4a] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[#4a4a4a] mb-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and fulfill your orders</li>
                <li>Send you technical information and updates</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Information Sharing</h2>
              <p className="text-[#4a4a4a] mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Data Security</h2>
              <p className="text-[#4a4a4a] mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Contact Us</h2>
              <p className="text-[#4a4a4a] mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-[#4a4a4a]">
                Email: info@srelectronics.store<br />
                Phone: +91 9313618021
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;