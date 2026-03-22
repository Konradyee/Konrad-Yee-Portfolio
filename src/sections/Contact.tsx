import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BASE = import.meta.env.BASE_URL;

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'konrad.yee@mail.utoronto.ca',
      href: 'mailto:konrad.yee@mail.utoronto.ca',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '437-345-6611',
      href: 'tel:437-345-6611',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, ON',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/konrad-yee-tor',
      href: 'https://linkedin.com/in/konrad-yee-tor',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[hsl(var(--navy))] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="reveal opacity-0-init text-center mb-16">
          <span className="text-[hsl(var(--gold))] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Interested in discussing engineering projects, collaboration opportunities, 
            or professional connections? I'd love to hear from you.
          </p>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mt-6">
            <Briefcase className="w-4 h-4 text-[hsl(var(--gold))]" />
            <span>Available for opportunities starting May 2026</span>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="reveal opacity-0-init grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" style={{ animationDelay: '100ms' }}>
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="p-3 bg-[hsl(var(--gold))]/20 rounded-xl w-fit mb-4">
                <item.icon className="w-6 h-6 text-[hsl(var(--gold))]" />
              </div>
              <p className="text-gray-400 text-sm mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-white font-medium hover:text-[hsl(var(--gold))] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0-init text-center" style={{ animationDelay: '200ms' }}>
          <Button
            size="lg"
            className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-[hsl(var(--navy))] px-8 py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open(`${BASE}Konrad_Yee_Resume.pdf`, '_blank')}
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-lg">Konrad Yee</p>
              <p className="text-gray-400 text-sm">
                Civil Engineering + PEY Co-op | Minor in Business
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:konrad.yee@mail.utoronto.ca"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/konrad-yee-tor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Konrad Yee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
