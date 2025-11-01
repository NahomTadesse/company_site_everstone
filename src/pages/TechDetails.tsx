
import { ArrowLeft, ArrowRight, Code, Cloud, Smartphone, Database, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TechDetails = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              Our Technology Stack
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-muted-foreground mb-12">
                We use modern, battle-tested technologies to build scalable applications that perform flawlessly across all devices.
              </motion.p>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Frontend Technologies</h2>
                </div>
                
                <p className="text-muted-foreground mb-8 text-base max-w-3xl">
                  We build beautiful, responsive user interfaces with modern JavaScript frameworks and component libraries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[{
                  title: "React & Next.js",
                  icon: <Code className="w-6 h-6 text-primary" />,
                  description: "Component-based architecture with server-side rendering for optimal performance and SEO."
                }, {
                  title: "TypeScript",
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  description: "Type-safe code that catches errors early and improves developer productivity."
                }, {
                  title: "Tailwind CSS",
                  icon: <Zap className="w-6 h-6 text-primary" />,
                  description: "Utility-first CSS framework for rapid, consistent UI development."
                }].map((tech, i) => <motion.div key={tech.title} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.1 + i * 0.1
                }} className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/10 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{tech.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-base">{tech.description}</p>
                    </motion.div>)}
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Backend & Infrastructure</h2>
                </div>
                
                <p className="text-muted-foreground mb-8 text-base max-w-3xl">
                  Scalable server architectures that handle millions of requests with reliability and security.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[{
                  title: "Node.js & Express",
                  description: "Fast, scalable server-side JavaScript for building RESTful APIs and microservices."
                }, {
                  title: "PostgreSQL & MongoDB",
                  description: "Robust relational and NoSQL databases for structured and flexible data storage."
                }, {
                  title: "AWS & Cloud Platforms",
                  description: "Enterprise-grade cloud infrastructure with auto-scaling and global distribution."
                }, {
                  title: "Docker & Kubernetes",
                  description: "Containerization and orchestration for consistent deployments and easy scaling."
                }].map((tech, i) => <motion.div key={tech.title} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.1
                }} className="bg-white p-6 rounded-lg border border-primary/10 hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                      <p className="text-muted-foreground text-base">{tech.description}</p>
                    </motion.div>)}
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Mobile Development</h2>
                </div>
                
                <p className="text-muted-foreground mb-8 text-base max-w-3xl">
                  Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[{
                  title: "React Native",
                  description: "Build iOS and Android apps with a single codebase and native performance."
                }, {
                  title: "Native Development",
                  description: "Swift for iOS and Kotlin for Android when platform-specific features are needed."
                }, {
                  title: "Mobile APIs",
                  description: "RESTful and GraphQL APIs optimized for mobile connectivity and offline support."
                }].map((tech, i) => <Card key={tech.title} className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/10">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                        <p className="text-muted-foreground text-sm">{tech.description}</p>
                      </CardContent>
                    </Card>)}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-primary/10">
              <Link to="/development-process" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-all group shadow-lg">
                Explore Our Development Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;