
import { ArrowLeft, CheckCircle, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
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
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About Vertex Digital
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-muted-foreground mb-12"
              >
                We're a comprehensive digital solutions provider specializing in custom software development, enterprise systems, data analytics, strategic consulting, and AI integration. From ERP systems to mobile apps, we deliver scalable solutions that drive measurable business outcomes.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground">
                    At Vertex Digital, we believe that exceptional digital solutions are the cornerstone of modern business success. 
                    We partner with organizations to build custom enterprise software, implement data-driven strategies, and develop 
                    intelligent systems that transform operations and unlock growth.
                  </p>
                  <p className="text-muted-foreground">
                    From healthcare management platforms to sophisticated ERP systems, from predictive analytics to strategic digital 
                    transformation—we bring deep technical expertise, industry knowledge, and strategic thinking to every engagement. 
                    Whether you're a startup building your first product or an enterprise modernizing legacy systems, we deliver 
                    solutions that scale with your ambitions.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Core Services</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Custom Software Development:</strong> Enterprise Resource Planning (ERP) systems, Healthcare Management platforms, Student Information Systems (SIS), and bespoke business applications tailored to your unique workflows and compliance requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Data Analytics & Intelligence:</strong> Transform raw data into actionable insights with predictive modeling, business intelligence dashboards, real-time analytics, and machine learning solutions that drive informed decision-making.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Digital Consulting:</strong> Strategic technology roadmapping, digital transformation planning, system architecture review, and technology stack optimization to align your tech investments with business objectives.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Web & Mobile Development:</strong> High-performance web applications using React, Next.js, and modern frameworks, plus native iOS/Android and cross-platform mobile solutions with seamless user experiences.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Cloud Infrastructure & AI:</strong> Scalable cloud architectures on AWS, Azure, and GCP, with AI-powered features, microservices, APIs, and intelligent automation that grows with your business.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-primary/10 p-8 shadow-sm">
                  <p className="text-muted-foreground mb-4">
                    Vertex Digital was founded with a vision to make enterprise-grade digital solutions accessible to organizations 
                    of all sizes. We witnessed too many businesses struggling with legacy systems, siloed data, and technology partners 
                    who couldn't translate business needs into scalable solutions. We knew there was a better way.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our team brings together decades of experience from Fortune 500 tech leaders, successful startups, and specialized 
                    domains like healthcare, education, and enterprise software. We've architected ERP systems managing complex supply 
                    chains, built healthcare platforms handling sensitive patient data with HIPAA compliance, developed student information 
                    systems serving thousands of institutions, and created data analytics solutions that have transformed how companies 
                    make strategic decisions.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we partner with forward-thinking organizations across healthcare, education, retail, finance, and technology 
                    sectors who understand that digital excellence is a competitive imperative. From venture-backed startups needing 
                    MVP development to enterprises requiring complex system integration and digital transformation—we deliver solutions 
                    that are secure, scalable, and purpose-built for your industry.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Leadership</h2>
                <p className="text-muted-foreground mb-8">
                  Our team brings together expertise in software architecture, product design, DevOps, and business strategy 
                  to deliver comprehensive digital solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Team Member 1",
                      role: "CEO and Founder",
                      bio: "Leading Vertex with a vision to democratize access to world-class digital development.",
                      bgColor: "bg-primary/10"
                    },
                    {
                      name: "Team Member 2",
                      role: "Head of Engineering",
                      bio: "Expert in scalable architecture, cloud infrastructure, and high-performance systems.",
                      bgColor: "bg-accent/10"
                    },
                    {
                      name: "Team Member 3",
                      role: "Head of Product",
                      bio: "Specialist in user experience, product strategy, and turning insights into features.",
                      bgColor: "bg-primary/20"
                    },
                    {
                      name: "Team Member 4",
                      role: "COO",
                      bio: "Ensuring seamless project delivery, client satisfaction, and operational excellence.",
                      bgColor: "bg-accent/20"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gradient-to-br from-secondary to-white border border-primary/10 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-32 h-32 relative mb-4 rounded-full flex items-center justify-center ${member.bgColor}`}>
                            <User className="w-16 h-16 text-primary" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                          <p className="text-muted-foreground text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-primary/10">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-all group shadow-lg">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;