import { useEffect, useRef } from 'react';
import { ArrowDown, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Availability Badge */}
          <div
            className="reveal opacity-0-init inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--navy))]/10 text-[hsl(var(--navy))] rounded-full text-sm font-medium mb-8"
          >
            <Briefcase className="w-4 h-4" />
            Available May 2026
          </div>

          {/* Main Title */}
          <h1
            className="reveal opacity-0-init text-5xl sm:text-6xl lg:text-7xl font-bold text-[hsl(var(--navy))] mb-6 tracking-tight"
            style={{ animationDelay: '100ms' }}
          >
            Konrad Yee
          </h1>

          {/* Subtitle */}
          <p
            className="reveal opacity-0-init text-xl sm:text-2xl text-gray-600 mb-4 font-medium"
            style={{ animationDelay: '200ms' }}
          >
            Civil Engineering Student
          </p>

          <p
            className="reveal opacity-0-init text-lg text-gray-500 mb-8"
            style={{ animationDelay: '300ms' }}
          >
            University of Toronto | BASc + PEY Co-op
          </p>

          {/* Description */}
          <p
            className="reveal opacity-0-init text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ animationDelay: '400ms' }}
          >
            Passionate about structural design, infrastructure development, and sustainable engineering solutions. 
            Currently pursuing a <span className="font-semibold text-[hsl(var(--navy))]">minor in Business</span> to complement technical expertise with strategic thinking.
          </p>

          {/* CTA Buttons */}
          <div
            className="reveal opacity-0-init flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: '500ms' }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="btn-primary bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy-light))] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              View Projects
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[hsl(var(--navy))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white px-8 py-6 text-lg rounded-xl transition-all"
              onClick={() => window.open('/Konrad_Yee_Resume.pdf', '_blank')}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
