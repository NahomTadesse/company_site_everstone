import { useEffect, useRef, useState } from 'react';
import { Smartphone, Globe, Cloud, Zap, ArrowRight, Code, CheckCircle, Rocket, Database, Layout, MessageSquare, Layers, Cpu } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Code className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Custom Software Development",
      description: "Enterprise Resource Planning (ERP) systems, Student Management Systems, Healthcare Information Systems, and industry-specific software solutions tailored to your exact requirements and workflows.",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
      category: "Custom Software"
    },
    {
      icon: <Globe className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Web Applications",
      description: "Progressive web apps, enterprise SaaS platforms, e-commerce solutions, and custom web applications built with React, Next.js, Vue, and cutting-edge frameworks for optimal performance and user experience.",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
      category: "Web"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Mobile Development",
      description: "Native iOS and Android applications, or cross-platform solutions with React Native and Flutter. Full-featured mobile apps with offline capabilities, push notifications, and seamless device integration.",
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png",
      category: "Mobile"
    },
    {
      icon: <Cloud className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Cloud & Backend",
      description: "Scalable RESTful APIs, GraphQL endpoints, microservices architecture, serverless functions, comprehensive database design, and robust cloud infrastructure on AWS, Azure, or Google Cloud Platform.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png",
      category: "Cloud"
    },
    {
      icon: <Zap className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "AI & Machine Learning",
      description: "Custom machine learning models, intelligent chatbots with NLP, computer vision systems, predictive analytics, automated decision engines, and AI-powered features that transform user experiences.",
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png",
      category: "AI"
    },
    {
      icon: <Database className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Data Analytics & BI",
      description: "Interactive business intelligence dashboards, real-time data visualization, advanced predictive analytics, KPI tracking systems, automated reporting, and data warehouse solutions for data-driven decision making.",
      image: "/lovable-uploads/cbd073dd-ecad-4643-bf2b-efc3d5846994.png",
      category: "Analytics"
    },
    {
      icon: <Cpu className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Digital Consulting",
      description: "Strategic technology consulting, comprehensive digital transformation roadmaps, enterprise architecture design, cloud migration strategies, and expert guidance to accelerate your organization's digital evolution.",
      image: "/lovable-uploads/6fdd3d0d-5dca-470a-a845-bd7b07bff599.png",
      category: "Consulting"
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);

  const pillars = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Custom Software & Development",
      description: "Enterprise software solutions including ERP systems, healthcare management platforms, student information systems, and bespoke applications. We also build modern web and mobile apps with React, React Native, and cloud-native architectures."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Analytics & AI",
      description: "Transform raw data into strategic insights with business intelligence dashboards, predictive analytics, machine learning models, and AI-powered automation that drives measurable business outcomes."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Consulting & Digital Strategy",
      description: "Strategic technology consulting for digital transformation, enterprise architecture design, cloud migration planning, process optimization, and technology roadmaps that align with your business objectives."
    }
  ];

  return (
    <>
      <section id="features" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Complete Digital Solutions for Modern Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From custom enterprise software and ERP systems to cutting-edge web applications and AI integration, we deliver comprehensive technology solutions that transform how you do business. Built with modern architecture, designed for scale, and optimized for performance.
            </p>
          </div>

          {/* Three Pillars Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Core Expertise</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital services spanning custom enterprise software development, modern web and mobile applications, advanced analytics, AI integration, cloud infrastructure, and strategic technology consulting. We deliver end-to-end solutions backed by deep technical expertise and proven methodologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors border border-primary/10">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mx-auto mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Industry Applications - Simplified grid */}
          <div className="text-center mb-8 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Technology Stack
            </div>
            <h3 className="text-2xl font-bold mb-4">Modern Development Solutions</h3>
            <p className="text-muted-foreground">
              We leverage the latest technologies and best practices to deliver scalable, maintainable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item rounded-xl overflow-hidden transform transition-all duration-300 relative shadow-lg hover:-translate-y-1 h-[320px]"
                onMouseEnter={() => setHoveredFeature(index)} 
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-all duration-300 grayscale hover:grayscale-0" 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    hoveredFeature === index ? "bg-gradient-to-br from-primary/70 to-accent/70" : "bg-gradient-to-br from-primary/80 to-accent/80"
                  )}></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-2">
                      {feature.icon}
                      <span className="text-white/80 text-sm font-medium">{feature.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              From Idea to Launch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our agile development process ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          {isMobile ? (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {[
                  { 
                    phase: "01", 
                    title: "Discovery & Planning", 
                    description: "Understanding your vision, defining requirements, and creating a strategic roadmap for success.",
                    icon: <MessageSquare className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "02", 
                    title: "Design & Prototype", 
                    description: "Creating intuitive user interfaces and interactive prototypes to validate the user experience.",
                    icon: <Layout className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "03", 
                    title: "Development & Testing", 
                    description: "Building your application with clean code, automated testing, and continuous integration.",
                    icon: <Code className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "04", 
                    title: "Quality Assurance", 
                    description: "Rigorous testing across devices and browsers to ensure flawless functionality.",
                    icon: <CheckCircle className="h-8 w-8 text-white" />
                  },
                  { 
                    phase: "05", 
                    title: "Launch & Support", 
                    description: "Seamless deployment to production and ongoing maintenance to keep your app running smoothly.",
                    icon: <Rocket className="h-8 w-8 text-white" />
                  }
                ].map((step, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="h-80">
                        <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center">
                          <div className="bg-gradient-to-br from-primary to-accent rounded-full p-4 mb-4">
                            {step.icon}
                          </div>
                          <div className="text-2xl font-bold text-muted-foreground mb-2">{step.phase}</div>
                          <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { 
                  phase: "01", 
                  title: "Discovery & Planning", 
                  description: "Understanding your vision, defining requirements, and creating a strategic roadmap for success.",
                  icon: <MessageSquare className="h-8 w-8 text-white" />
                },
                { 
                  phase: "02", 
                  title: "Design & Prototype", 
                  description: "Creating intuitive user interfaces and interactive prototypes to validate the user experience.",
                  icon: <Layout className="h-8 w-8 text-white" />
                },
                { 
                  phase: "03", 
                  title: "Development & Testing", 
                  description: "Building your application with clean code, automated testing, and continuous integration.",
                  icon: <Code className="h-8 w-8 text-white" />
                },
                { 
                  phase: "04", 
                  title: "Quality Assurance", 
                  description: "Rigorous testing across devices and browsers to ensure flawless functionality.",
                  icon: <CheckCircle className="h-8 w-8 text-white" />
                },
                { 
                  phase: "05", 
                  title: "Launch & Support", 
                  description: "Seamless deployment to production and ongoing maintenance to keep your app running smoothly.",
                  icon: <Rocket className="h-8 w-8 text-white" />
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground mb-2">{step.phase}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  
                  {index < 4 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-primary/30" />
                  )}
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 px-8 py-3 text-lg shadow-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Our Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Modern Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use proven technologies and frameworks to build reliable, scalable applications that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-4 mb-4">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Frontend Excellence</h3>
                <p className="text-sm text-muted-foreground">React, Vue, Next.js, TypeScript, and modern CSS frameworks</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-accent/10 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent/10 rounded-full p-4 mb-4">
                  <Database className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Backend Power</h3>
                <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB, and serverless architecture</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-4 mb-4">
                  <Cloud className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cloud Infrastructure</h3>
                <p className="text-sm text-muted-foreground">AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipelines</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium">
              Built for Scale, Performance & Security
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project we build is architected for growth, optimized for speed, and secured with industry best practices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;