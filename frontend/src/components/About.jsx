import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Award, Users } from 'lucide-react';

const CountUp = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const startTime = Date.now();
    const endValue = parseInt(end.replace(/[^0-9]/g, ''));
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration, isVisible]);
  
  return <span>{count}{end.includes('+') ? '+' : ''}{end.includes('/') ? '/7' : ''}</span>;
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-spacing bg-[#f8f7f2]"
    >
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p
            className={`section-subtitle mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Meet Our Founder
          </p>
          <h2
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            About S.R. Electronics
          </h2>
        </div>

        {/* Owner Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`backdrop-blur-md bg-white/10 p-8 lg:p-12 rounded-3xl border border-white/20 shadow-xl transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#C5A572] to-[#b87333] p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="/dad.jpeg"
                        alt="Rajesh Asthana - Founder"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#C5A572] rounded-full flex items-center justify-center">
                    <Award size={24} className="text-[#0d0d0d]" />
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <h3 className="font-display text-3xl lg:text-4xl text-[#1a1a1a] mb-2">
                  Rajesh Asthana
                </h3>
                <p className="text-[#C5A572] text-lg tracking-wider uppercase mb-6">
                  Founder & Managing Director
                </p>
                
                <p className="text-[#4a4a4a] text-lg leading-relaxed mb-8">
                  With over two decades of experience in electrical engineering and transformer manufacturing, 
                  Rajesh Asthana founded S.R. Electronics with a vision to deliver precision-engineered power 
                  solutions. His commitment to quality and innovation has established the company as a trusted 
                  name in the industry.
                </p>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="tel:+919313618021"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#C5A572] text-[#0d0d0d] rounded-full hover:bg-[#b87333] transition-colors duration-300 font-medium"
                  >
                    <Phone size={18} />
                    +91 9313618021
                  </a>
                  <a
                    href="mailto:info@srelectronics.store"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-[#C5A572] text-[#C5A572] rounded-full hover:bg-[#C5A572] hover:text-[#0d0d0d] transition-all duration-300 font-medium"
                  >
                    <Mail size={18} />
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { number: '20+', label: 'Years Experience' },
            { number: '500+', label: 'Projects Completed' },
            { number: '100+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl text-[#C5A572] mb-2">
                <CountUp end={stat.number} isVisible={isVisible} />
              </div>
              <div className="text-[#8a8a8a] text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;