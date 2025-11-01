
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Vertex Digital - Custom Software, ERP, Healthcare & Enterprise Solutions" 
        description="Vertex Digital: Custom enterprise software development, ERP systems, healthcare management, student information systems, web & mobile apps, data analytics, AI integration, and strategic technology consulting."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['custom software development', 'ERP systems', 'healthcare management software', 'student information system', 'enterprise software', 'web development', 'mobile app development', 'data analytics', 'business intelligence', 'digital consulting', 'AI integration', 'cloud solutions', 'digital transformation']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
