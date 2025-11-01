import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Zap, Users, TrendingUp, Rocket, Award, ArrowRight, Target, Shield, ChartBar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};

const WhyWrlds = () => {
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
  return <section id="why-vertex" className="relative py-16 md:py-24 bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Why Choose Vertex Digital?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We deliver exceptional digital products that combine technical excellence with business value
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-foreground text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={98} suffix="%" /> Quality
            </h3>
            <p className="text-muted-foreground">Clean, maintainable code with comprehensive testing and documentation</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-xl border border-accent/20 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-foreground text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={50} suffix="%" /> Faster
            </h3>
            <p className="text-muted-foreground">
              Agile development process delivering results faster than traditional agencies
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-foreground text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={100} suffix="%" /> 
            </h3>
            <p className="text-muted-foreground">
              Transparent communication and collaboration throughout every project phase
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What We Deliver
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your business with solutions designed for growth and user satisfaction
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-primary/10 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Scalable Architecture</h4>
                  <p className="text-muted-foreground">Built to grow with your business, handling increased traffic and features seamlessly.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-accent/10 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-3 mr-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Modern UI/UX</h4>
                  <p className="text-muted-foreground">Beautiful, intuitive interfaces that users love and convert visitors into customers.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-primary/10 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Performance Optimized</h4>
                  <p className="text-muted-foreground">Lightning-fast load times and smooth interactions for the best user experience.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-accent/10 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-3 mr-4">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Future-Ready Technology</h4>
                  <p className="text-muted-foreground">Stay ahead with cutting-edge frameworks and tools that evolve with your needs.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Link 
              to="/development-process" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-all group shadow-lg"
            >
              Discover Our Process
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};

export default WhyWrlds;