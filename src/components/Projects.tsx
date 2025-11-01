
import { useState, useRef, useEffect, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    id: 1,
    title: "Healthcare Management System",
    brand: "MediCare Solutions",
    description: "Comprehensive healthcare information system with patient records management, appointment scheduling, electronic prescriptions, lab integration, billing, insurance claims, and HIPAA-compliant data security serving 15+ hospitals and 200K+ patients.",
    tags: ["Healthcare", "ERP", "React", "PostgreSQL", "FHIR"],
    imageUrl: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    isFeatured: true,
    link: "/projects/firecat",
    details: `Built a complete healthcare management platform with patient portal, doctor dashboard, pharmacy integration, lab results system, and comprehensive reporting. Features include appointment management, telemedicine capabilities, prescription management, and real-time notifications.`
  },
  {
    id: 2,
    title: "Student Information System",
    brand: "EduTech University",
    description: "Enterprise-grade student management platform with admissions, enrollment, grade management, attendance tracking, parent portal, timetable generation, examination system, and comprehensive analytics serving 50K+ students across multiple campuses.",
    tags: ["Education", "SaaS", "React", "Node.js", "MongoDB"],
    imageUrl: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
    link: "/projects/sport-retail",
    details: `Developed an all-in-one student management system with role-based access for administrators, teachers, students, and parents. Includes course management, assignment tracking, gradebook, financial management, library system, and mobile app integration.`
  },
  {
    id: 3,
    title: "Enterprise Resource Planning System",
    brand: "GlobalCorp Industries",
    description: "Custom ERP solution integrating finance, HR, inventory, procurement, manufacturing, supply chain, CRM, and analytics. Automated workflows, real-time reporting, and multi-location support for 1000+ employee organization with $50M+ annual revenue.",
    tags: ["ERP", "Enterprise", "Java", "Oracle", "SAP"],
    imageUrl: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
    link: "/projects/hockey",
    details: `Built comprehensive ERP system with modules for financial management, human resources, inventory control, procurement, production planning, sales, and customer relationship management. Includes advanced reporting, workflow automation, and third-party integrations.`
  },
  {
    id: 4,
    title: "E-Commerce Platform with AI",
    brand: "RetailNext",
    description: "Full-stack e-commerce solution with AI-driven product recommendations, intelligent search, dynamic pricing, inventory management, multi-vendor support, payment integration, order fulfillment automation processing $5M+ monthly transactions.",
    tags: ["E-commerce", "AI", "React", "Microservices"],
    imageUrl: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
    link: "/projects/workwear",
    details: `Developed scalable e-commerce platform with personalized product recommendations using machine learning, automated inventory management, multi-payment gateway integration, customer behavior analytics, automated marketing campaigns, and comprehensive admin dashboard.`
  },
  {
    id: 5,
    title: "Business Intelligence & Analytics Suite",
    brand: "DataFlow Analytics",
    description: "Enterprise BI platform with interactive dashboards, predictive analytics, custom KPI tracking, real-time data pipelines, automated reporting, data warehouse integration, and ML-powered forecasting serving Fortune 500 clients with petabytes of data.",
    tags: ["Analytics", "BI", "Python", "Spark", "Tableau"],
    imageUrl: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png",
    link: "/projects/pet-tracker",
    details: `Created comprehensive business intelligence suite with real-time data visualization, predictive modeling, automated insights generation, custom reporting engine, data integration from multiple sources, and self-service analytics capabilities for business users.`
  },
  {
    id: 6,
    title: "Digital Transformation Consulting",
    brand: "Enterprise Solutions Corp",
    description: "Full-scale consulting engagement: assessed legacy systems, designed cloud-native architecture, led migration to AWS microservices, implemented DevOps/CI-CD pipelines, agile transformation, and trained 500+ staff achieving 40% cost reduction and 3x faster deployment.",
    tags: ["Consulting", "Cloud", "AWS", "DevOps", "Agile"],
    imageUrl: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    link: "/projects/firecat",
    details: `Led comprehensive digital transformation: modernized monolithic applications to microservices, migrated infrastructure to cloud, established DevOps practices, implemented automated testing and deployment, trained development teams, and established governance frameworks.`
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2
    });
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveProject(prev => (prev + 1) % projects.length);
    } else if (isRightSwipe) {
      setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === activeProject) return "scale-100 opacity-100 z-20";
    if (index === (activeProject + 1) % projects.length) return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (activeProject - 1 + projects.length) % projects.length) return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };
  
  return <section id="projects" ref={projectsRef} className="bg-white py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Portfolio
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Enterprise Software & Digital Solutions
          </h2>
          <p className="text-muted-foreground">
            Explore our portfolio of custom enterprise systems, ERP solutions, healthcare platforms, student management systems, e-commerce applications, and analytics platforms serving thousands of users and driving millions in business value.
          </p>
          {isMobile && (
            <div className="flex items-center justify-center mt-4 animate-pulse-slow">
              <div className="flex items-center text-primary">
                <ChevronLeft size={16} />
                <p className="text-sm mx-1">Swipe to navigate</p>
                <ChevronRight size={16} />
              </div>
            </div>
          )}
        </div>
        
        <div 
          className="relative h-[550px] overflow-hidden" 
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`} 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Card className="overflow-hidden h-[500px] border border-primary/10 shadow-sm hover:shadow-md flex flex-col">
                  <div 
                    className="relative bg-gradient-to-br from-primary to-accent p-6 flex items-center justify-center h-48 overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.brand.toUpperCase()}</h3>
                      <div className="w-12 h-1 bg-white mb-2"></div>
                      <p className="text-white/90 text-sm">{project.title}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">{project.brand}</p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs animate-pulse-slow" 
                            style={{ animationDelay: `${idx * 300}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={project.link} 
                        className="text-primary flex items-center hover:underline relative overflow-hidden group"
                        onClick={() => {
                          if (project.link.startsWith('/')) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10">View case study</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {!isMobile && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110" 
                onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110" 
                onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {projects.map((_, idx) => (
              <button 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeProject === idx ? 'bg-primary w-5' : 'bg-primary/30 hover:bg-primary/50'}`} 
                onClick={() => setActiveProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default Projects;