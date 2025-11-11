import { useEffect, useRef, useState } from 'react';
import { 
  Smartphone, Globe, Cloud, Zap, ArrowRight, Code, CheckCircle, Rocket, 
  Database, Layout, MessageSquare, Layers, Cpu 
} from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Code className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business needs, enhancing efficiency and productivity.",
      image: "https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
      category: "Custom Software"
    },
    {
      icon: <Globe className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Web Applications",
      description: "Progressive web apps, enterprise SaaS platforms, e-commerce solutions, and custom web applications built with React, Next.js, Vue, and cutting-edge frameworks.",
      image: "https://www.milesweb.com/blog/wp-content/uploads/2024/04/types-of-web-application.png",
      category: "Web"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Mobile Development",
      description: "Native iOS/Android or cross-platform apps with React Native & Flutter. Offline sync, push notifications, and deep device integration.",
      image: "https://aaaeeetv.com/wp-content/uploads/2024/06/unnamed-1.jpg",
      category: "Mobile"
    },
    {
      icon: <Cloud className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Cloud & Backend",
      description: "Scalable APIs, microservices, serverless, and cloud infrastructure on AWS, Azure, or GCP.",
      image: "https://www.kvadrat.az/uploads/articles/66aa075661080.jpg",
      category: "Cloud"
    },
    {
      icon: <Database className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Data Analytics & BI",
      description: "Interactive dashboards, predictive analytics, KPI tracking, and automated reporting for data-driven decisions.",
      image: "https://gdcitsolutions.com/wp-content/uploads/What-Is-Business-Intelligence.jpg",
      category: "Analytics"
    },
    {
      icon: <Cpu className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Digital Consulting",
      description: "Technology strategy, digital transformation roadmaps, cloud migration, and enterprise architecture design.",
      image: "https://blog.outvise.com/wp-content/uploads/2021/12/Digital-strategy-consulting-skills-1024x576.png",
      category: "Consulting"
    }
  ];

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

  const projects = [
    {
      to: "/projects/firecat",
      title: "Addis Books",
      description: "A modern e-learning platform connecting Ethiopian students with digital textbooks, progress tracking, and interactive quizzes. Built with Next.js and real-time sync.",
      image: "https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Education"]
    },
    {
      to: "/projects/sport-retail",
      title: "Mayet Art",
      description: "Stunning digital gallery and e-commerce platform for contemporary Ethiopian artists. Features immersive 3D artwork previews and secure NFT integration.",
      image: "https://ethiopianfood.wordpress.com/wp-content/uploads/2014/04/mealwithspoon.jpg",
      tags: ["React", "Three.js", "Stripe", "Art & Culture"]
    },
    {
      to: "/projects/workwear",
      title: "N8stalgia",
      description: "Vintage-inspired streetwear brand with a bold retro-futuristic design system. Full e-commerce with custom animations and size-inclusive filtering.",
      image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=800&h=600&fit=crop",
      tags: ["Next.js", "GSAP", "Shopify API", "Fashion"]
    },
    {
      to: "/projects/hockey",
      title: "Pizza Dashboard",
      description: "Real-time restaurant chain analytics platform tracking sales, inventory, peak hours, and customer satisfaction across 50+ locations in Addis Ababa.",
      image: "https://i.redd.it/please-rate-my-pizza-sales-dashboard-and-suggest-required-v0-xvo6dltbrcsb1.png?width=1000&format=png&auto=webp&s=306fd0e529dedd94663c888a9b3c867069cb9e84",
      tags: ["React", "D3.js", "Node.js", "Food & Beverage"]
    },
    {
      to: "/projects/pet-tracker",
      title: "ATM Dashboard",
      description: "Secure banking operations dashboard for monitoring 200+ ATMs nationwide. Features real-time transaction alerts, uptime tracking, and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Vue.js", "WebSocket", "Python", "FinTech"]
    },
    {
      to: "/projects/insuranceProj",
      title: "Insurance Analytics",
      description: "AI-powered insurance underwriting platform with risk scoring, fraud detection, and automated claims processing. Reduced processing time by 78%.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["React", "TensorFlow", "FastAPI", "Insurance"]
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
<Navbar/>

   {/* Featured Projects Showcase */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world solutions we've built for clients across industries — from fintech dashboards to creative portfolios and enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.to}
                className="group relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-96"
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                      {project.title}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-300">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all delay-300 duration-300">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-500" />
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 px-10 py-7 text-xl font-semibold shadow-2xl"
            >
              Let's Build Your Project
              <Zap className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
      {/* Hero / Features Section */}
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
              From custom enterprise software and ERP systems to cutting-edge web applications and AI integration, we deliver comprehensive technology solutions that transform how you do business.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Core Expertise</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital services spanning custom enterprise software development, modern web and mobile applications, advanced analytics, AI integration, cloud infrastructure, and strategic technology consulting.
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

          {/* Feature Cards Grid */}
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

      {/* Development Process */}
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
                  { phase: "01", title: "Discovery & Planning", description: "Understanding your vision, defining requirements, and creating a strategic roadmap.", icon: <MessageSquare className="h-8 w-8 text-white" /> },
                  { phase: "02", title: "Design & Prototype", description: "Creating intuitive user interfaces and interactive prototypes.", icon: <Layout className="h-8 w-8 text-white" /> },
                  { phase: "03", title: "Development & Testing", description: "Building with clean code, automated testing, and CI/CD.", icon: <Code className="h-8 w-8 text-white" /> },
                  { phase: "04", title: "Quality Assurance", description: "Rigorous testing across devices and browsers.", icon: <CheckCircle className="h-8 w-8 text-white" /> },
                  { phase: "05", title: "Launch & Support", description: "Seamless deployment and ongoing maintenance.", icon: <Rocket className="h-8 w-8 text-white" /> }
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
                { phase: "01", title: "Discovery & Planning", description: "Understanding your vision, defining requirements, and creating a strategic roadmap.", icon: <MessageSquare className="h-8 w-8 text-white" /> },
                { phase: "02", title: "Design & Prototype", description: "Creating intuitive user interfaces and interactive prototypes.", icon: <Layout className="h-8 w-8 text-white" /> },
                { phase: "03", title: "Development & Testing", description: "Building with clean code, automated testing, and CI/CD.", icon: <Code className="h-8 w-8 text-white" /> },
                { phase: "04", title: "Quality Assurance", description: "Rigorous testing across devices and browsers.", icon: <CheckCircle className="h-8 w-8 text-white" /> },
                { phase: "05", title: "Launch & Support", description: "Seamless deployment and ongoing maintenance.", icon: <Rocket className="h-8 w-8 text-white" /> }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground mb-2">{step.phase}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < 4 && <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-primary/30" />}
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 px-8 py-3 text-lg shadow-lg">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
                <div className="bg-primary/10 rounded-full p-4 mb-4"><Code className="h-10 w-10 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">Frontend Excellence</h3>
                <p className="text-sm text-muted-foreground">React, Vue, Next.js, TypeScript, and modern CSS frameworks</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-accent/10 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent/10 rounded-full p-4 mb-4"><Database className="h-10 w-10 text-accent" /></div>
                <h3 className="text-lg font-bold mb-2">Backend Power</h3>
                <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB, and serverless architecture</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-4 mb-4"><Cloud className="h-10 w-10 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">Cloud Infrastructure</h3>
                <p className="text-sm text-muted-foreground">AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <Footer/>
    </>
  );
};

export default ProjectsPage;