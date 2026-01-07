import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#fffef8] pt-24 pb-16">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#4a4a4a] mb-6">
              Last updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Acceptance of Terms</h2>
              <p className="text-[#4a4a4a] mb-4">
                By accessing and using S.R. Electronics services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Products and Services</h2>
              <p className="text-[#4a4a4a] mb-4">
                S.R. Electronics specializes in manufacturing high-quality transformers including:
              </p>
              <ul className="list-disc pl-6 text-[#4a4a4a] mb-4">
                <li>Control Transformers</li>
                <li>Isolation Transformers</li>
                <li>Auto Transformers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Quality Assurance</h2>
              <p className="text-[#4a4a4a] mb-4">
                All products are manufactured to meet industry standards and undergo rigorous testing. We provide warranties as per standard industry practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Limitation of Liability</h2>
              <p className="text-[#4a4a4a] mb-4">
                S.R. Electronics shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Intellectual Property</h2>
              <p className="text-[#4a4a4a] mb-4">
                All content, designs, and technical specifications are the property of S.R. Electronics and are protected by applicable intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl text-[#1a1a1a] mb-4">Contact Information</h2>
              <p className="text-[#4a4a4a] mb-4">
                For questions regarding these terms, please contact us at:
              </p>
              <p className="text-[#4a4a4a]">
                Email: info@srelectronics.store<br />
                Phone: +91 9313618021<br />
                Address: GI/107, 1st Floor Back Portion, Mayapuri Phase-II, New Delhi, India 110064
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;