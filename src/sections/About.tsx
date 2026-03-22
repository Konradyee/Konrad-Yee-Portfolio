import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Building2, Users } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Building2, value: '60+', label: 'Solar Projects' },
    { icon: Award, value: '65.5m', label: 'Bridge Designed' },
    { icon: Users, value: '3rd', label: 'Transportation Debate' },
    { icon: GraduationCap, value: '2029', label: 'Expected Graduation' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="reveal opacity-0-init">
              <span className="text-[hsl(var(--gold))] font-semibold text-sm uppercase tracking-wider">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mt-3 mb-6">
                Education & Background
              </h2>
            </div>

            <div className="reveal opacity-0-init space-y-6" style={{ animationDelay: '100ms' }}>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[hsl(var(--navy))]/10 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-[hsl(var(--navy))]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Bachelor of Applied Science
                    </h3>
                    <p className="text-[hsl(var(--navy))] font-medium">
                      Civil Engineering + PEY Co-op
                    </p>
                    <p className="text-gray-500 mt-1">
                      University of Toronto
                    </p>
                    <p className="text-gray-400 text-sm">
                      Sept 2024 – Apr 2029 (Expected)
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))] rounded-full text-sm font-medium">
                      <Award className="w-4 h-4" />
                      Minor in Business
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Construction Management (Revit)',
                    'Engineering Strategies & Practices',
                    'Excel/Gantt Planning',
                    'Statics',
                    'Structural Analysis',
                    'GIS & Spatial Analysis',
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 bg-slate-100 text-gray-700 rounded-lg text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="reveal opacity-0-init" style={{ animationDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[hsl(var(--navy))]/10 rounded-xl mb-4">
                    <stat.icon className="w-6 h-6 text-[hsl(var(--navy))]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[hsl(var(--navy))] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[hsl(var(--navy))] rounded-2xl text-white">
              <h4 className="text-lg font-semibold mb-3">My Focus Areas</h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full" />
                  Structural Design & Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full" />
                  Bridge & Infrastructure Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full" />
                  Construction Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full" />
                  GIS & Spatial Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full" />
                  Sustainable Engineering Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
