
// import ProjectPageLayout from '@/components/ProjectPageLayout';
// import SEO from '@/components/SEO';
// import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical } from 'lucide-react';

// const SportRetailProject = () => {
//   return (
//     <ProjectPageLayout
//       title="Performance Athletic Footwear"
//       subtitle="Revolutionary R&D for next-generation athletic footwear"
//       imageUrl="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
//       brandName="Global Sports Retail Leader"
//     >
//       <SEO 
//         title="Everstone Technologies - Performance Athletic Footwear Project" 
//         description="Revolutionary R&D for next-generation athletic footwear with embedded textile sensors for real-time performance analytics and personalized footwear."
//         type="article"
//       />
      
//       <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
//         <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
//         <p className="text-yellow-700 font-medium text-sm">Ongoing R&D Project — Currently in Prototyping Phase</p>
//       </div>
      
//       <h2 className="text-3xl font-bold mb-6">Case Study: Smart Footwear Development</h2>
      
//       <div className="bg-gray-50 p-6 rounded-lg mb-8">
//         <h3 className="text-xl font-semibold mb-2">Background</h3>
//         <p>
//           A global sports retail leader approached Everstone Technologies Technologies with a vision to revolutionize the development, 
//           fitting, and testing of athletic footwear. Their goal was to create a data-driven approach to footwear design 
//           that would enhance athlete performance while reducing development cycles.
//         </p>
//       </div>
      
//       <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
//       <p>
//         Traditional footwear development relied heavily on subjective feedback and limited quantitative testing. 
//         The company needed a precise way to measure actual performance metrics, foot movements, and pressure 
//         distribution in real-world athletic scenarios. Additionally, they wanted to personalize footwear recommendations 
//         based on individual biomechanics.
//       </p>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
//       <p>
//         Everstone Technologies Technologies developed a comprehensive smart footwear R&D platform that includes:
//       </p>
      
//       <div className="grid md:grid-cols-2 gap-6 my-8">
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Footprints className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Embedded Sensors</h4>
//             <p>Textile-based pressure and motion sensors integrated directly into prototype footwear.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-time Analysis</h4>
//             <p>Instant feedback on gait, pressure points, and energy transfer during athletic movements.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <LineChart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Performance Metrics</h4>
//             <p>Comprehensive data collection on acceleration, stability, and energy return across different sports movements.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Award className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Athlete Cloud Platform</h4>
//             <p>AI-powered analytics comparing performance across prototype iterations and athlete profiles.</p>
//           </div>
//         </div>
//       </div>
      
//       <h4 className="text-xl font-semibold mb-4">Key Features</h4>
//       <ul className="list-disc pl-6 space-y-2 mb-8">
//         <li>Machine washable sensor technology for extended testing periods</li>
//         <li>Low-profile design that doesn't interfere with natural movement</li>
//         <li>Cross-platform mobile app for real-time coaching and feedback</li>
//         <li>Materials testing module to evaluate durability and performance longevity</li>
//       </ul>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
//       <p>
//         The smart footwear prototype platform has shown promising results in initial testing phases. 
//         The data-driven approach has not only provided valuable insights for product development but also opened 
//         new possibilities for personalized product recommendations in retail environments. Patent applications have 
//         been filed based on innovations developed during this ongoing project.
//       </p>
      
//       <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
//         <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
//         <div>
//           <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap</h4>
//           <p>
//             Everstone Technologies Technologies continues to partner with this client on this R&D initiative to refine the prototype and 
//             develop potential consumer versions of this technology, which could enable everyday athletes to benefit 
//             from professional-grade footwear analysis and recommendations.
//           </p>
//         </div>
//       </div>
//     </ProjectPageLayout>
//   );
// };

// export default SportRetailProject;




import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Palette, Image, ShoppingBag, Globe, Sparkles, Headphones, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';

const MayetArtGalleryProject = () => {
  return (
    <ProjectPageLayout
      title="Mayet Art Gallery"
      subtitle="Premier Online Art Platform"
      imageUrl="/lovable-uploads/mayet-hero.jpg"
      brandName="Mayet Art Gallery"
      darkMode={false}
    >
      <SEO
        title="Everstone Technologies - Mayet Art Gallery Digital Platform"
        description="A stunning digital presence for Mayet Art Gallery featuring high-resolution artwork, artist tools, secure transactions, and immersive 3D virtual tours."
        type="website"
      />

      {/* Live Project Banner */}
      <div className="bg-amber-50 p-4 rounded-lg mb-6 flex items-center border border-amber-200">
        <Sparkles className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
        <p className="text-amber-800 font-medium text-sm">Live Project — Explore the Gallery Online</p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-900">Case Study: Mayet Art Gallery — Digital Art Experience</h2>

      {/* Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border border-indigo-100">
        <h3 className="text-xl font-semibold mb-3 text-indigo-900 flex items-center">
          <Palette className="h-6 w-6 mr-2" />
          Overview
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Mayet showcases fine art online, lets visitors buy or commission pieces, and offers virtual gallery tours—all in a beautifully designed web and mobile experience.
        </p>
      </div>

      {/* Key Features */}
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Image className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Elegant Art Display</h4>
            <p className="text-sm text-gray-600">Responsive design with high-resolution, adaptive image loading</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <ShoppingBag className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Artist Portfolio System</h4>
            <p className="text-sm text-gray-600">Full inventory control for originals, prints, and commissions</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Globe className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Secure Transactions</h4>
            <p className="text-sm text-gray-600">High-value sales with deposits, payment plans, and digital contracts</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Sparkles className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">3D Virtual Tours</h4>
            <p className="text-sm text-gray-600">Immersive, in-browser gallery walkthroughs on any device</p>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Challenges</h3>
      <div className="space-y-4 mb-10">
        {[
          "Displaying ultra-detailed artwork without making pages load slowly",
          "Giving artists a simple way to organize originals, prints, and commissions",
          "Handling high-value sales and payment plans with trust and clarity",
          "Building a smooth, immersive 3D tour that works on any device"
        ].map((challenge, i) => (
          <div key={i} className="flex items-start">
            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-0.5">
              <AlertCircle className="h-4 w-4" />
            </div>
            <p className="text-gray-700">{challenge}</p>
          </div>
        ))}
      </div>

      {/* Our Solution */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Our Solution</h3>
      <div className="space-y-6 mb-10">
        {[
          { title: "Smart Image Loading", desc: "High-res art appears instantly in preview and refines progressively" },
          { title: "Artist Portal", desc: "Intuitive dashboard for inventory, pricing, and commission management" },
          { title: "Secure Payment Flow", desc: "Deposit-and-release system with digital agreements for trust" },
          { title: "In-Browser 3D Tours", desc: "Lightweight WebGL experience with smooth navigation and animations" }
        ].map((sol, i) => (
          <div key={i} className="flex items-start">
            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mr-3 mt-0.5">
              <ArrowRight className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{sol.title}</h4>
              <p className="text-gray-600">{sol.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Support & Training */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Support & Training</h3>
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-xl border border-rose-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-rose-600 text-white flex items-center justify-center mr-2">
              <Headphones className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-rose-900">Live Artist Workshops</h4>
          </div>
          <p className="text-sm text-gray-600">Hands-on training for uploading, pricing, and tour tools</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 rounded-xl border border-cyan-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-cyan-600 text-white flex items-center justify-center mr-2">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-cyan-900">Help Center</h4>
          </div>
          <p className="text-sm text-gray-600">Best practices for digitizing and describing artwork</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center mr-2">
              <Headphones className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-amber-900">Priority Support</h4>
          </div>
          <p className="text-sm text-gray-600">Real-time monitoring and instant issue resolution</p>
        </div>
      </div>

      {/* Technologies */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Technologies Used</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {['Next.js', 'Cloudinary', 'WebGL', 'Stripe', 'Contentful CMS'].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Outcome */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Outcome</h3>
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100 mb-8">
        <p className="text-lg leading-relaxed text-gray-800">
          Galleries and artists praised how effortlessly visitors could explore and purchase works. The virtual tours felt engaging, sales workflows were clear, and partners appreciated the polished experience.
        </p>
      </div>

      {/* Live Project CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="https://mayetgallery.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
        >
          <Globe className="h-5 w-5 mr-2" />
          Visit Mayet Art Gallery
        </a>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>Project Highlights: Immersive 3D Tours • Artist Empowerment • Secure High-Value Sales</p>
      </div>
    </ProjectPageLayout>
  );
};

export default MayetArtGalleryProject;