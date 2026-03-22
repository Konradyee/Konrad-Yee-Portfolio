import { useEffect, useRef } from 'react';
import { Tag, FileText, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  fileUrl?: string;
  fileType?: 'pdf' | 'pptx' | 'html';
}

const civilEngineeringProjects: Project[] = [
  {
    title: 'Improving Pedestrian Safety at Finch Ave W and Weston Rd',
    category: 'Transportation / Safety Engineering',
    description:
      'Comprehensive traffic safety analysis and improvement recommendations for a high-risk pedestrian intersection in Toronto, including signal timing optimization, crosswalk enhancements, and pedestrian refuge island proposals.',
    image: '/projects/Improving Pedestrian Safety at Finch Ave W and Weston Rd.png',
    tags: ['Traffic Safety', 'Pedestrian Infrastructure', 'Intersection Design', 'Transportation Planning'],
    fileUrl: '/projects/Improving Pedestrian Safety at Finch Ave W and Weston Rd.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Suspended Pedestrian Bridge Design - Ácora, Peru',
    category: 'Bridge Engineering / International Development',
    description:
      'Co-led structural design of a 65.5m suspended pedestrian bridge serving ~300 residents in Ácora, Peru. Achieved Factor of Safety of 3.46, optimized abutment configurations, and prepared full construction documentation for Engineers in Action.',
    image: '/projects/proposed_design.png',
    tags: ['Bridge Design', 'Structural Analysis', 'International Development', 'AutoCAD'],
    fileUrl: '/projects/aguas_calientes_portfolio.html',
    fileType: 'html',
  },
  {
    title: 'Lynde Creek Watershed Delineation',
    category: 'GIS / Water Resources',
    description:
      'Complete watershed delineation and topographic analysis using ArcGIS Pro. Generated detailed hydrological models and stream network mapping for environmental assessment and flood risk evaluation.',
    image: '/projects/Lynde Creek WaterShed Delineation.png',
    tags: ['ArcGIS Pro', 'Hydrology', 'Environmental', 'Watershed Analysis'],
    fileUrl: '/projects/Lynde Creek Watershed Delineation in ArcGIS Pro.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Precipitation Data Interpolation',
    category: 'GIS / Data Analysis',
    description:
      'IDW interpolation of precipitation data across Toronto area, creating comprehensive rainfall distribution maps for hydrological modeling and infrastructure planning applications.',
    image: '/projects/Idw Interpolated 2022.png',
    tags: ['ArcGIS', 'IDW Interpolation', 'Data Analysis', 'Hydrology'],
    fileUrl: '/projects/Areal Average and Spatial Interpolation of Precipitation Data in ArcGIS Pro.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Geological Modeling Report',
    category: 'Geotechnical Engineering',
    description:
      '3D geological modeling and subsurface analysis for structural foundation planning. Developed contour maps and cross-sectional views for comprehensive site characterization.',
    image: '/projects/Geological Modeling Report.png',
    tags: ['Geotechnical', '3D Modeling', 'Site Analysis', 'Foundation Design'],
    fileUrl: '/projects/Geological Modeling Report.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Warren Truss Bridge Design',
    category: 'Structural / Bridge Engineering',
    description:
      'Designed and fabricated 70cm arched Warren truss bridge achieving 234.6 load-to-weight efficiency ratio. Applied CAD-based structural analysis and full-scale cost modeling.',
    image: '/projects/Warren Truss.png',
    tags: ['Structural Analysis', 'AutoCAD', 'Fabrication', 'Cost Modeling'],
    fileUrl: '/projects/Bridge Design Culminating -1.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Bahen Courtyard Site Analysis',
    category: 'Construction / Site Planning',
    description:
      'Comprehensive site analysis of Bahen Centre courtyard at U of T, including building layout, access points, circulation patterns, and spatial planning documentation.',
    image: '/projects/Bahen Courtyard.png',
    tags: ['Site Planning', 'Documentation', 'Revit', 'Spatial Analysis'],
    fileUrl: '/projects/Tut18_Team165_CDS.docx.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Construction Safety Trends Analysis',
    category: 'Construction Management',
    description:
      'Research and analysis of construction safety trends, identifying key risk factors and mitigation strategies for improved workplace safety and regulatory compliance.',
    image: '/projects/Analysis of Construction Safety Trends,.png',
    tags: ['Safety', 'Research', 'Construction Management', 'Risk Analysis'],
    fileUrl: '/projects/Analysis of Construction Safety Trends,.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Motion Commotion Transportation Debate',
    category: 'Transportation Engineering',
    description:
      'Achieved 3rd place in competitive technical transportation debate at ITE University of Toronto chapter, demonstrating applied knowledge of civil infrastructure systems.',
    image: '/projects/Motion Commotion.png',
    tags: ['Transportation', 'Debate', 'ITE', 'Infrastructure'],
    fileUrl: '/projects/motion commotion  - Page 1.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Urban Metabolism Study - Lima, Peru',
    category: 'Environmental / Urban Planning',
    description:
      'Comprehensive urban metabolism analysis of Lima, Peru, examining energy flows, water systems, waste management, and sustainability metrics for 10.4 million population.',
    image: '/projects/Urban Metabolism.png',
    tags: ['Urban Planning', 'Sustainability', 'Environmental', 'Data Analysis'],
    fileUrl: '/projects/Urban Metabolism Report Konrad Yee.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Dairy Queen Site Engineering Observation',
    category: 'Site Engineering',
    description:
      'Engineering site observation and documentation of Dairy Queen location, analyzing site conditions, drainage systems, parking layout, and structural elements.',
    image: '/projects/Dairy Queen Islington Engineering Observation.png',
    tags: ['Site Observation', 'Documentation', 'Drainage', 'Civil Design'],
    fileUrl: '/projects/Dairy Queen Islington Engineering Observation.pdf',
    fileType: 'pdf',
  },
];

const otherProjects: Project[] = [
  {
    title: 'Etching Press Modular Cart System',
    category: 'Mechanical / Structural Design',
    description:
      'Designed modular mobility and bed-stop system for mid-century etching press. Confirmed 1,400 lb load capacity through detailed force modeling and load-path verification.',
    image: '/projects/Etching Press.png',
    tags: ['AutoCAD', 'Mechanical Design', 'Load Analysis', 'Team Leadership'],
    fileUrl: '/projects/Etching Press Conceptual Design Specifications.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Cardboard Chair "Ampersand"',
    category: 'Structural / Materials',
    description:
      'Engineered load-bearing chair from corrugated cardboard with zero adhesives, achieving 220 lb single-load capacity and 150 lb sustained hold for 30 minutes.',
    image: '/projects/Cardboard Chair.png',
    tags: ['Structural Design', 'Materials', 'Fabrication', 'Sustainable Design'],
    fileUrl: '/projects/PROJECT &MPERSAND.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Deep-Sea Submersible Viewport Design',
    category: 'Materials Engineering',
    description:
      'Material selection analysis for deep-sea submersible pressure hull viewport rated for 6,000m depth and 60 MPa pressure with optical clarity requirements.',
    image: '/projects/Material Selection for Deep-Sea Submersible Pressure Hull Viewport.png',
    tags: ['Materials Science', 'Pressure Analysis', 'Ocean Engineering'],
    fileUrl: '/projects/Material Selection for Deep-Sea Submersible Pressure Hull Viewport.pptx',
    fileType: 'pptx',
  },
  {
    title: 'Precise Pop Cans Manufacturing Analysis',
    category: 'Manufacturing / Design',
    description:
      '3D modeling and analysis of aluminum can design, examining material efficiency, manufacturing tolerances, and structural optimization.',
    image: '/projects/Precise Pop Cans.png',
    tags: ['Manufacturing', '3D Modeling', 'SolidWorks', 'Design Analysis'],
    fileUrl: '/projects/Precise Pop Cans.pdf',
    fileType: 'pdf',
  },
  {
    title: 'BioLegos Biomaterial Project',
    category: 'Materials / Bioengineering',
    description:
      'Development of biodegradable building blocks using sustainable materials, exploring eco-friendly alternatives in construction and material science.',
    image: '/projects/PROJECT BIOLEGOS By Cristiano Da Silva & Konrad Yee.png',
    tags: ['Biomaterials', 'Sustainability', 'Innovation', 'Research'],
    fileUrl: '/projects/PROJECT BIOLEGOS By Cristiano Da Silva & Konrad Yee.pdf',
    fileType: 'pdf',
  },
  {
    title: 'E-Waste Awareness Presentation',
    category: 'Environmental Engineering',
    description:
      'Educational presentation on electronic waste management and environmental impact, with actionable solutions for reduction and responsible disposal.',
    image: '/projects/E-waste.png',
    tags: ['Environmental', 'Presentation', 'Sustainability', 'Education'],
    fileUrl: '/projects/E-Waste.pptx',
    fileType: 'pptx',
  },
  {
    title: 'Paper Airplane Design',
    category: 'Aerospace / Design',
    description:
      'Aerodynamic analysis and design optimization of paper airplane configurations for maximum flight performance and stability.',
    image: '/projects/Paper Airplane.png',
    tags: ['Aerodynamics', 'Design', 'Physics', 'Optimization'],
    fileUrl: '/projects/Paper Airplane Design.pdf',
    fileType: 'pdf',
  },
  {
    title: 'VEX LiftBot Robotics',
    category: 'Robotics',
    description:
      'Designed and built VEX robotics lift mechanism with detailed CAD documentation and assembly drawings for competitive robotics.',
    image: '/projects/LiftBot.png',
    tags: ['Robotics', 'CAD', 'VEX', 'Mechanical Design'],
    fileUrl: '/projects/Vex Liftboft.pdf',
    fileType: 'pdf',
  },
  {
    title: 'VEX SpeedBot Robotics',
    category: 'Robotics',
    description:
      'High-speed VEX robotics vehicle design with omnidirectional drive system and competitive specifications for tournament play.',
    image: '/projects/Speedbot.png',
    tags: ['Robotics', 'VEX', 'Mechanical', 'Competition'],
    fileUrl: '/projects/Vex Speedbot.pdf',
    fileType: 'pdf',
  },
  {
    title: 'ANT - Generative AI Learning Research',
    category: 'Academic Research',
    description:
      'Research project examining how Generative AI impacts learning processes, with conceptual mapping of educational technology relationships and academic integrity.',
    image: '/projects/ANT.png',
    tags: ['Research', 'AI', 'Education', 'Academic Integrity'],
    fileUrl: '/projects/yeekonra—ANT.pdf',
    fileType: 'pdf',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardContent = (
    <div className="project-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[hsl(var(--navy))] text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
        {project.fileUrl && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-[hsl(var(--navy))] text-xs font-medium rounded-full">
              <FileText className="w-3 h-3" />
              {project.fileType === 'pptx' ? 'PPTX' : 'PDF'}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-gray-600 text-xs rounded-md"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 text-gray-500 text-xs rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* View File Link */}
        {project.fileUrl && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--navy))] group">
              <span className="group-hover:underline">
                View {project.fileType === 'pptx' ? 'Presentation' : 'Document'}
              </span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (project.fileUrl) {
    return (
      <div
        className="reveal opacity-0-init h-full"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <a
          href={project.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full cursor-pointer"
        >
          {cardContent}
        </a>
      </div>
    );
  }

  return (
    <div
      className="reveal opacity-0-init h-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {cardContent}
    </div>
  );
};

const Projects = () => {
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
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0-init text-center mb-16">
          <span className="text-[hsl(var(--gold))] font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mt-3">
            Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of engineering projects showcasing skills in structural design, 
            GIS analysis, construction management, and more. Click on any project to view the full document.
          </p>
        </div>

        {/* Civil Engineering Projects */}
        <div className="mb-20">
          <div className="reveal opacity-0-init flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(var(--navy))] to-transparent" />
            <h3 className="text-2xl font-bold text-[hsl(var(--navy))]">
              Civil Engineering Projects
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(var(--navy))] to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilEngineeringProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Engineering Projects */}
        <div>
          <div className="reveal opacity-0-init flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <h3 className="text-2xl font-bold text-gray-700">
              Other Engineering Projects
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + civilEngineeringProjects.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
