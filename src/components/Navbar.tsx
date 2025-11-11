


import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  /* ---------- Scroll handling ---------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------- Mobile helpers ---------- */
  const toggleMenu = () => {
    setIsMenuOpen(v => !v);
    if (!isMenuOpen) setOpenMobileSection(null); // reset dropdowns when closing
  };

  const toggleSection = (section: string) => {
    setOpenMobileSection(prev => (prev === section ? null : section));
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenMobileSection(null);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    closeAll();
  };

  /* ---------- Portfolio items (mobile) ---------- */
  const portfolioItems = [
     { to: "/projects/project", title: "Projects" },
    { to: "/projects/firecat", title: "Addis Books" },
    { to: "/projects/sport-retail", title: "Mayet Art" },
    { to: "/projects/workwear", title: "N8stalgia" },
    { to: "/projects/hockey", title: "Pizza Dashboard" },
    { to: "/projects/pet-tracker", title: "ATM Dashboard" },
    { to: "/projects/insuranceProj", title: "Insurance Analytics" },
  ];

  /* ---------- Services items (mobile) ---------- */
  const servicesItems = [
    { to: "/tech-details", title: "Technology Stack" },
    { to: "/development-process", title: "Development Process" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full bg-white transition-all duration-300",
        isScrolled ? "shadow-md border-b border-gray-200" : ""
      )}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeAll}>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-bold text-transparent">
                Everstone Technologies
              </span>
            </Link>
          </div>

          {/* ---------- Desktop Navigation ---------- */}
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

                {/* Portfolio */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {[
                        { to: "/projects/project", title: "Projects", desc: "Our projects summary" },
                        { to: "/projects/firecat", title: "BookNest", desc: "Friendly book marketplace with smart recommendations" },
                        { to: "/projects/sport-retail", title: "Mayet Art", desc: "Virtual gallery with 3D tours and artist tools" },
                        { to: "/projects/workwear", title: "N8stalgia", desc: "Vintage collectibles marketplace with live auctions" },
                        { to: "/projects/hockey", title: "Pizza Dashboard", desc: "Sales analytics for pizza chain operations" },
                        { to: "/projects/pet-tracker", title: "ATM Dashboard", desc: "ATM network performance and cash flow insights" },
                        { to: "/projects/insuranceProj", title: "Insurance Analytics", desc: "Risk assessment and claims portfolio analysis" },
                      ].map(item => (
                        <li key={item.to}>
                          <Link to={item.to} className="block rounded-md p-3 hover:bg-gray-100">
                            <div className="font-medium">{item.title}</div>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block rounded-md p-3 hover:bg-gray-100">
                          <div className="font-medium">Technology Stack</div>
                          <p className="text-sm text-gray-500">Modern tools and frameworks</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block rounded-md p-3 hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">Agile from concept to launch</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-gray-900")}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-white transition-opacity hover:opacity-90"
                  >
                    Get Started
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ---------- Mobile toggle ---------- */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Menu (with dropdowns) ---------- */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-white transition-all duration-300",
          isMenuOpen ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-3 py-2">

          {/* Home */}
          <Link to="/" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={closeAll}>
            Home
          </Link>

          {/* About */}
          <Link to="/about" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={closeAll}>
            About Us
          </Link>

          {/* Portfolio dropdown */}
          <div>
            <button
              onClick={() => toggleSection('portfolio')}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Portfolio
              {openMobileSection === 'portfolio' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {openMobileSection === 'portfolio' && (
              <div className="mt-1 space-y-1 rounded-md bg-gray-50 pl-6">
                {portfolioItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-md px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900"
                    onClick={closeAll}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div>
            <button
              onClick={() => toggleSection('services')}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Services
              {openMobileSection === 'services' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {openMobileSection === 'services' && (
              <div className="mt-1 space-y-1 rounded-md bg-gray-50 pl-6">
                {servicesItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-md px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900"
                    onClick={closeAll}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Careers */}
          <Link to="/careers" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={closeAll}>
            Careers
          </Link>

          {/* Get Started */}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full rounded-md bg-gradient-to-r from-primary to-accent px-3 py-2 text-left text-sm text-white hover:opacity-90"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;