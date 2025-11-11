import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-screen w-full">
        <div className="absolute inset-0 bg-black w-full">
           <img 
             src="https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" 
             alt="Everstone Technologies Team Collaboration" 
             className={`w-full h-full object-cover  ${isMobile ? 'object-right' : 'object-center'}`} 
           />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-blue"></div>
        </div>
        
        <div className="banner-overlay bg-transparent absolute inset-0 flex items-end pb-16 md:pb-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div variants={itemVariants} className="-bottom-0 \xA7">
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-left">
              Ready to Transform Your Business with Technology
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 mt-4 sm:mt-6 md:text-base text-left">
                Empowering businesses with cutting-edge IT services and solutions that drive growth, efficiency, and competitive advantage.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8" variants={itemVariants}>
                <button className="min-h-[44px] px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-sm sm:text-base font-medium" onClick={e => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}>
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="min-h-[44px] px-6 sm:px-8 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-md hover:bg-white/20 transition-all shadow-lg flex items-center justify-center group text-sm sm:text-base font-medium" onClick={scrollToContact}>
                  Get Started
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-primary/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-foreground">Software Development</h3>
            <p className="text-muted-foreground text-xs md:text-sm">Custom enterprise systems, ERPs, healthcare platforms, web, mobile, and cloud applications.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-accent/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 flex items-center justify-center rounded-lg mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-foreground">Data & AI</h3>
            <p className="text-muted-foreground text-xs md:text-sm">Analytics dashboards, machine learning, and intelligent automation.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-primary/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-foreground">Consulting</h3>
            <p className="text-muted-foreground text-xs md:text-sm">Strategic guidance and digital transformation expertise.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};
export default Hero;