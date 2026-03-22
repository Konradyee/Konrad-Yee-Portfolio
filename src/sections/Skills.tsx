import { useEffect, useRef } from 'react';
import {
  Monitor,
  Calculator,
  Map,
  FolderKanban,
  Code,
  CheckCircle,
} from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Monitor,
    title: 'CAD & Design',
    skills: [
      'AutoCAD',
      'Civil 3D',
      'MicroStation',
      'BricsCAD',
      'Revit',
      'Rhino 3D',
      'SketchUp',
      'SolidWorks',
      'Floor Planner',
    ],
  },
  {
    icon: Calculator,
    title: 'Engineering Analysis',
    skills: [
      'WoodWorks®',
      'MATLAB',
      'Structural Load Analysis',
      'Wind & Seismic Loads',
      'Uplift Analysis',
      'Quantity Take-offs',
      'Cost Estimation',
      'Force Modelling',
    ],
  },
  {
    icon: Map,
    title: 'GIS & Spatial',
    skills: [
      'ArcGIS',
      'ArcGIS Pro',
      'QGIS',
      'Propeller®',
      'Drone Volumetrics',
      'Spatial Analysis',
      'Watershed Delineation',
      'IDW Interpolation',
    ],
  },
  {
    icon: FolderKanban,
    title: 'Project & Data Tools',
    skills: [
      'Microsoft Office',
      'Excel / Gantt',
      'Power BI',
      'Smartsheet',
      'Dynamics CRM',
      'Notion',
      'Slack',
      'Teams',
      'Google Suite',
      'Jupyter Notebook',
    ],
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'C', 'MATLAB', 'Data Analysis', 'Automation'],
  },
  {
    icon: CheckCircle,
    title: 'Core Competencies',
    skills: [
      'Structural Analysis',
      'Constructability Review',
      'Technical Documentation',
      'Construction Cost Estimation',
      'Materials Management',
      'Project Coordination',
      'Multi-disciplinary Collaboration',
      'Bridge Design',
    ],
  },
];

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0-init text-center mb-16">
          <span className="text-[hsl(var(--gold))] font-semibold text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mt-3">
            Skills & Tools
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technical proficiencies and core competencies developed through academic 
            coursework and professional experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="reveal opacity-0-init bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-[hsl(var(--navy))]/10 rounded-xl">
                  <category.icon className="w-6 h-6 text-[hsl(var(--navy))]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 bg-slate-100 text-gray-700 rounded-lg text-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="reveal opacity-0-init mt-16" style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--navy-light))] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <h4 className="font-semibold">3rd Place</h4>
                  <p className="text-gray-300 text-sm">
                    Motion Commotion Transportation Debate, ITE U of T
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <h4 className="font-semibold">Bridge Design</h4>
                  <p className="text-gray-300 text-sm">
                    Engineers in Action - Peru Bridge Project
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <h4 className="font-semibold">Minor in Business</h4>
                  <p className="text-gray-300 text-sm">
                    University of Toronto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
