
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white shadow-md border-b border-gray-200" initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vertex</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-gray-900")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-gray-900")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/projects/firecat" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">E-commerce Platform</div>
                          <p className="text-sm text-gray-500">Full-stack retail solution with payment integration</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/sport-retail" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Mobile Fitness App</div>
                          <p className="text-sm text-gray-500">Cross-platform health and wellness application</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/workwear" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">SaaS Dashboard</div>
                          <p className="text-sm text-gray-500">Enterprise analytics and reporting platform</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/hockey" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Real-time Chat App</div>
                          <p className="text-sm text-gray-500">Messaging platform with WebSocket technology</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/pet-tracker" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AI-Powered CRM</div>
                          <p className="text-sm text-gray-500">Smart customer relationship management system</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Technology Stack</div>
                          <p className="text-sm text-gray-500">Modern frameworks and tools we use</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">Agile workflow from concept to launch</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-gray-900")}>
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-gray-900")}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-md transition-colors bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                    Get Started
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className="px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80 bg-white">
          <Link to="/" className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          {/* Simplified Portfolio - no dropdown */}
          <Link to="/projects/firecat" className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Portfolio
          </Link>
          
          {/* Simplified Services - no dropdown */}
          <Link to="/tech-details" className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Services
          </Link>
          
          <Link to="/blog" className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            News
          </Link>
          
          <Link to="/careers" className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Careers
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-white bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
