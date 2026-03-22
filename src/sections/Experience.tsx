import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlights?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Bridge Design Specialist',
    company: 'Engineers in Action — University of Toronto Chapter',
    location: 'Toronto, ON',
    period: 'Sept 2025 – Present',
    description: [
      'Co-led structural design of a 65.5 m suspended pedestrian bridge in Ácora, Peru, serving ~300 residents',
      'Produced full AutoCAD construction drawings, calculation packages, and contract-ready documentation',
      'Engineered optimized abutment configurations to minimize excavation volume while satisfying EIA requirements',
    ],
    highlights: ['Factor of Safety: 3.46', 'Flood Freeboard: 6.81m'],
  },
  {
    title: 'Structural Engineering Intern',
    company: 'Exactus Energy',
    location: 'Toronto, ON',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Delivered structural assessments and code-compliance documentation for 60+ rooftop solar installation projects',
      'Calculated wind, seismic, and uplift loads per ASCE, NBC, IBC, and IEBC standards',
      'Modelled framing systems using WoodWorks, AutoCAD, BricsCAD, and Excel',
    ],
    highlights: ['60+ Projects', 'Multi-code Compliance'],
  },
  {
    title: 'STEM Instructor',
    company: 'Focus on Youth Day Camp',
    location: 'Etobicoke, ON',
    period: 'Jul 2023 – Aug 2023',
    description: [
      'Designed and delivered 3+ original hands-on STEM modules from scratch',
      'Adapted instruction to individual skill levels across groups of 15–20 campers per session',
      'Mentored 2 junior instructors on lesson delivery technique',
    ],
    highlights: ['100% Incident-free Record'],
  },
  {
    title: 'Engineering Intern — Civil Infrastructure',
    company: 'Green Infrastructure Partners Inc.',
    location: 'North York, ON',
    period: 'Mar 2023 – Jun 2023',
    description: [
      'Reduced data retrieval time by 50% by designing Excel-based asphalt pile inventory system',
      'Integrated Propeller drone software and QGIS for precision volumetric calculations',
      'Authored standardized materials handling and equipment-use guides for field workers',
    ],
    highlights: ['50% Efficiency Gain', 'Drone Integration'],
  },
  {
    title: 'Facilities Management Assistant',
    company: 'Black Creek Co-operative Homes',
    location: 'Toronto, ON',
    period: 'Jun 2022 – Aug 2022',
    description: [
      'Resolved 50+ maintenance work orders on time by coordinating with contractors',
      'Reduced average maintenance response time by 13% by redesigning inspection workflow',
      'Executed hands-on carpentry, plumbing, and electrical repairs',
    ],
    highlights: ['50+ Work Orders', '13% Response Time Improvement'],
  },
];

const Experience = () => {
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0-init text-center mb-16">
          <span className="text-[hsl(var(--gold))] font-semibold text-sm uppercase tracking-wider">
            Work Experience
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mt-3">
            Professional Journey
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hands-on experience across structural engineering, construction management, 
            and infrastructure development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--navy))] to-[hsl(var(--gold))] transform -translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`reveal opacity-0-init relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-[hsl(var(--navy))] rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-[hsl(var(--navy))]/10 rounded-xl flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-[hsl(var(--navy))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-[hsl(var(--navy))] font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600 text-sm"
                        >
                          <ChevronRight className="w-4 h-4 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    {exp.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))] rounded-full text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
