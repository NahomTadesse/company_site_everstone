// import ProjectPageLayout from '@/components/ProjectPageLayout';
// import { Thermometer, ShieldCheck, Mountain, FileSymlink, Cpu, FlaskConical } from 'lucide-react';

// const WorkwearProject = () => {
//   return (
//     <ProjectPageLayout
//       title="Workwear Climate Control"
//       subtitle="Intelligent temperature regulation for extreme work environments"
//       imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
//       brandName="European Multinational Textile Producer"
//     >
//       <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
//         <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
//         <p className="text-yellow-700 font-medium text-sm">Ongoing R&D Project — Currently in Prototyping Phase</p>
//       </div>
      
//       <h2 className="text-3xl font-bold mb-6">Case Study: Advanced Climate Control Workwear</h2>
      
//       <div className="bg-gray-50 p-6 rounded-lg mb-8">
//         <h3 className="text-xl font-semibold mb-2">Background</h3>
//         <p>
//           A leading European textile manufacturer sought to create next-generation workwear for professionals operating in 
//           extreme temperature environments. From arctic construction workers to foundry operators, they needed a solution 
//           that could actively regulate body temperature without compromising mobility or safety compliance.
//         </p>
//       </div>
      
//       <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
//       <p>
//         Traditional approaches to temperature regulation in workwear were either passive (insulation) or bulky active systems 
//         with external power sources and limited zoning capabilities. The client needed a fully integrated solution that could adapt 
//         to changing conditions, worker activity levels, and provide targeted temperature control while maintaining all safety certifications.
//       </p>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
//       <p>
//         Everstone Technologies Technologies developed a comprehensive climate control workwear platform featuring:
//       </p>
      
//       <div className="grid md:grid-cols-2 gap-6 my-8">
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Thermometer className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Adaptive Heating/Cooling</h4>
//             <p>Textile-integrated heating and cooling elements with multi-zone temperature control.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Control System</h4>
//             <p>AI-driven controller that learns user preferences and optimizes power usage based on conditions.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <ShieldCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Safety Integration</h4>
//             <p>Systems designed to maintain all industry safety certifications including flame resistance and electrical safety.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Mountain className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Extreme Durability</h4>
//             <p>Components rated for operation in extreme temperatures with full washability and construction durability.</p>
//           </div>
//         </div>
//       </div>
      
//       <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
//       <ul className="list-disc pl-6 space-y-2 mb-8">
//         <li>Modular design supporting full-body integration or focused application</li>
//         <li>Extended battery life depending on conditions and settings</li>
//         <li>Smartphone app for manual control and environmental monitoring</li>
//         <li>Washable for multiple industrial cleaning cycles without performance degradation</li>
//         <li>Compliance with industry-specific safety standards</li>
//       </ul>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
//       <p>
//         The prototype climate-controlled workwear has shown promising results in controlled testing environments. 
//         The technology is being evaluated by select industrial clients across Northern Europe and Canada, focusing on 
//         oil & gas, mining, and construction sectors operating in extreme climates. Initial feedback indicates 
//         significant potential for reducing cold-related work disruptions.
//       </p>
      
//       <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
//         <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
//         <div>
//           <h4 className="text-lg font-semibold mb-2 text-gray-700">Ongoing Development</h4>
//           <p>
//             Current R&D efforts are focused on refining the prototypes, improving power efficiency, and 
//             exploring the potential to include environmental hazard detection capabilities 
//             and integration with wider workplace safety systems.
//           </p>
//         </div>
//       </div>
//     </ProjectPageLayout>
//   );
// };

// export default WorkwearProject;



import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import {
  Package,
  ShieldCheck,
  Gavel,
  Heart,
  AlertCircle,
  ArrowRight,
  Headphones,
  HelpCircle,
  Globe,
  Sparkles,
} from 'lucide-react';

const N8stalgiaProject = () => {
  return (
    <ProjectPageLayout
      title="N8stalgia"
      subtitle="Premium Vintage E-Commerce Platform"
      imageUrl="/lovable-uploads/n8stalgia-hero.jpg"
      brandName="N8stalgia"
      darkMode={false}
    >
      <SEO
        title="Everstone Technologies - N8stalgia Vintage Marketplace"
        description="A trusted digital home for collectors of rare vintage items — authenticated listings, live auctions, and personalized discovery."
        type="website"
      />

      {/* Live Project Banner */}
      <div className="bg-amber-50 p-4 rounded-lg mb-6 flex items-center border border-amber-200">
        <Sparkles className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
        <p className="text-amber-800 font-medium text-sm">Live Project — Explore the Marketplace</p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Case Study: N8stalgia — The Trusted Vintage Collectibles Hub
      </h2>

      {/* Overview */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl mb-8 border border-orange-100">
        <h3 className="text-xl font-semibold mb-3 text-orange-900 flex items-center">
          <Package className="h-6 w-6 mr-2" />
          Overview
        </h3>
        <p className="text-gray-700 leading-relaxed">
          N8stalgia brings together collectors of rare and nostalgic items—furniture, records, memorabilia—in one trusted web and mobile marketplace featuring authenticated listings and live auctions.
        </p>
      </div>

      {/* Key Features */}
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Package className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Curated Marketplace</h4>
            <p className="text-sm text-gray-600">Rare vintage furniture, records, and collectible memorabilia</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <ShieldCheck className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Authentication System</h4>
            <p className="text-sm text-gray-600">Expert-verified provenance with digital certificates</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Gavel className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Live Bidding</h4>
            <p className="text-sm text-gray-600">Real-time auctions with auto-bid and instant updates</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Heart className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Personalized Discovery</h4>
            <p className="text-sm text-gray-600">AI-driven recommendations based on collector tastes</p>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Challenges</h3>
      <div className="space-y-4 mb-10">
        {[
          "Building buyer confidence in authenticity",
          "Running smooth, real-time auctions without lag or confusion",
          "Helping collectors discover items they love without overwhelming them",
          "Protecting big purchases with secure, escrow-style payments",
        ].map((challenge, i) => (
          <div key={i} className="flex items-start">
            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 mt-0.5">
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
          {
            title: "Authenticity Certificates",
            desc: "Simple verification process with expert review and clear digital certificates",
          },
          {
            title: "Live Auction Engine",
            desc: "Real-time bidding with auto-bid helpers and instant sync via WebSockets",
          },
          {
            title: "Curated + Personalized",
            desc: "Featured collections paired with AI suggestions for balanced discovery",
          },
          {
            title: "Escrow Payments",
            desc: "Funds held until buyer confirms condition; easy dispute resolution",
          },
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
            <h4 className="font-semibold text-rose-900">Live Webinars</h4>
          </div>
          <p className="text-sm text-gray-600">How to list items, join auctions, and verify provenance</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 rounded-xl border border-cyan-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-cyan-600 text-white flex items-center justify-center mr-2">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-cyan-900">Knowledge Base</h4>
          </div>
          <p className="text-sm text-gray-600">Clear guides on authenticity, payments, and best practices</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center mr-2">
              <Headphones className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-amber-900">Dedicated Support</h4>
          </div>
          <p className="text-sm text-gray-600">Vintage-market experts available for personalized help</p>
        </div>
      </div>

      {/* Technologies */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Technologies Used</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {['Vue.js', 'Firebase', 'Image Recognition API', 'WebSockets'].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 rounded-full text-sm font-medium border border-amber-200 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Outcome */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Outcome</h3>
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100 mb-8">
        <p className="text-lg leading-relaxed text-gray-800">
          Collectors felt confident buying high-value items, and auctions ran smoothly, fostering lively participation. Sellers and buyers alike returned again and again, drawn by the platform's trustworthiness and ease of use.
        </p>
      </div>

      {/* Live Project CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="https://n8stalgia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg"
        >
          <Globe className="h-5 w-5 mr-2" />
          Visit N8stalgia
        </a>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Project Highlights: Authenticated Collectibles • Live Auctions • Trusted Escrow • Collector Community
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default N8stalgiaProject;