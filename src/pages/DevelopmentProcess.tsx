import { ArrowLeft, CheckCircle, Clock, FileSearch, Settings, Code, TestTube, Rocket, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/PageLayout';

const DevelopmentProcess = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processes = [{
    id: 1,
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target users, and technical requirements to create a comprehensive project roadmap.",
    steps: ["Stakeholder interviews and workshops", "Market research and competitive analysis", "Technical feasibility assessment", "Project scope and timeline definition"]
  }, {
    id: 2,
    title: "Design & Prototyping",
    description: "Our design team creates intuitive user interfaces and interactive prototypes to validate the user experience before development begins.",
    steps: ["User journey mapping", "Wireframing and UI design", "Interactive prototype creation", "User testing and feedback integration"]
  }, {
    id: 3,
    title: "Development & Testing",
    description: "We build your application with clean, maintainable code following industry best practices and conduct rigorous testing throughout.",
    steps: ["Agile sprint-based development", "Automated testing implementation", "Code reviews and quality assurance", "Performance optimization"]
  }, {
    id: 4,
    title: "Deployment & Launch",
    description: "We ensure smooth deployment to production environments with proper monitoring, security, and scalability configurations.",
    steps: ["Environment setup and configuration", "Security audit and hardening", "Performance testing and optimization", "Production deployment"]
  }, {
    id: 5,
    title: "Support & Iteration",
    description: "Post-launch, we provide ongoing maintenance, monitoring, and feature enhancements based on user feedback and analytics.",
    steps: ["24/7 monitoring and support", "Analytics tracking and insights", "Bug fixes and updates", "Feature enhancements and scaling"]
  }];

  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;

      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });

      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const developmentSteps = [{
    icon: <FileSearch className="h-6 w-6" />,
    title: "1. Discovery & Requirements",
    description: "We begin by understanding your business objectives, target audience, and technical requirements to establish clear project parameters."
  }, {
    icon: <Settings className="h-6 w-6" />,
    title: "2. Design & Planning",
    description: "Our design team creates intuitive user experiences and our architects plan scalable technical solutions."
  }, {
    icon: <Code className="h-6 w-6" />,
    title: "3. Agile Development",
    description: "We build your application in iterative sprints, delivering working features regularly for your feedback."
  }, {
    icon: <TestTube className="h-6 w-6" />,
    title: "4. Quality Assurance",
    description: "Comprehensive testing ensures your application works flawlessly across all devices and use cases."
  }, {
    icon: <Rocket className="h-6 w-6" />,
    title: "5. Deployment & Launch",
    description: "We handle the technical complexities of launching your application to production environments."
  }, {
    icon: <BarChart className="h-6 w-6" />,
    title: "6. Ongoing Support",
    description: "Post-launch monitoring, maintenance, and feature enhancements keep your application running smoothly."
  }];

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-6">Our Development Process</h1>
            
            <p className="text-xl text-muted-foreground mb-12">
              Our proven agile methodology ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Development Lifecycle</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developmentSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Detailed Process Breakdown</h2>
              
              <div className="space-y-12">
                {processes.map((process, index) => (
                  <div 
                    key={process.id}
                    ref={el => processSectionsRef.current[index] = el}
                    className={cn(
                      "border-l-4 pl-6 transition-all duration-300",
                      activeProcess === process.id ? "border-primary" : "border-primary/20"
                    )}
                  >
                    <div className="flex items-center mb-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 transition-colors",
                        activeProcess === process.id ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      )}>
                        {process.id}
                      </div>
                      <h3 className="text-2xl font-bold">{process.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{process.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {process.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss your requirements and create a custom development plan tailored to your needs and timeline.
              </p>
              <Link 
                to="/#contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-all shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DevelopmentProcess;