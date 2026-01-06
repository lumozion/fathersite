import React, { useEffect, useRef, useState } from 'react';
import { contactData } from '../data/mock';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send via WhatsApp Business API (free)
      const message = `🔔 New inquiry!\n\n👤 ${formData.name}\n📧 ${formData.email}\n🏢 ${formData.company}\n💬 ${formData.message}`;
      
      await fetch('https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: '919876543210', // Your father's WhatsApp number
          type: 'text',
          text: { body: message }
        })
      });

      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-spacing bg-[#fffef8]"
    >
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Contact Info */}
          <div>
            <p
              className={`section-subtitle mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {contactData.subtitle}
            </p>
            <h2
              className={`section-title mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {contactData.title}
            </h2>

            {/* Decorative Line */}
            <div
              className={`w-16 h-px bg-[#C5A572] mb-12 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left' }}
            />

            {/* Contact Details */}
            <div className="space-y-8 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg animate-float">
              <div
                className={`flex items-start gap-4 transition-all duration-700 delay-300 magnetic ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <MapPin size={20} strokeWidth={1.5} className="text-[#C5A572] mt-1 flex-shrink-0 animate-pulse-glow" />
                <div>
                  <h4 className="text-sm tracking-wider uppercase text-[#8a8a8a] mb-2">Address</h4>
                  <p className="text-[#1a1a1a] whitespace-pre-line">{contactData.address}</p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 transition-all duration-700 delay-400 magnetic ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Phone size={20} strokeWidth={1.5} className="text-[#C5A572] mt-1 flex-shrink-0 animate-pulse-glow" />
                <div>
                  <h4 className="text-sm tracking-wider uppercase text-[#8a8a8a] mb-2">Phone</h4>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-[#1a1a1a] hover:text-[#C5A572] transition-colors duration-300"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 transition-all duration-700 delay-500 magnetic ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Mail size={20} strokeWidth={1.5} className="text-[#C5A572] mt-1 flex-shrink-0 animate-pulse-glow" />
                <div>
                  <h4 className="text-sm tracking-wider uppercase text-[#8a8a8a] mb-2">Email</h4>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-[#1a1a1a] hover:text-[#C5A572] transition-colors duration-300"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl animate-morphing-border magnetic">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm tracking-wider uppercase text-[#8a8a8a] mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#e5e5e0] focus:border-[#1a1a1a] focus:outline-none focus:ring-0 text-[#1a1a1a] placeholder-[#8a8a8a] transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm tracking-wider uppercase text-[#8a8a8a] mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#e5e5e0] focus:border-[#1a1a1a] focus:outline-none focus:ring-0 text-[#1a1a1a] placeholder-[#8a8a8a] transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm tracking-wider uppercase text-[#8a8a8a] mb-3"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#e5e5e0] focus:border-[#1a1a1a] focus:outline-none focus:ring-0 text-[#1a1a1a] placeholder-[#8a8a8a] transition-colors duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm tracking-wider uppercase text-[#8a8a8a] mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#e5e5e0] focus:border-[#1a1a1a] focus:outline-none focus:ring-0 text-[#1a1a1a] placeholder-[#8a8a8a] transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-dark inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="backdrop-blur-md bg-white/5 p-4 rounded-2xl border border-white/10 shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0234567890123!2d77.1234567!3d28.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMayapuri%20Phase%20II%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
