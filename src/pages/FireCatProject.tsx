
// import ProjectPageLayout from '@/components/ProjectPageLayout';
// import { Shield, Radio, Activity, Box } from 'lucide-react';

// const FireCatProject = () => {
//   return (
//     <ProjectPageLayout
//       title="FireCat's 6th SENSE"
//       subtitle="Advanced safety system for high-risk environments"
//       imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
//       brandName="FireCat Group"
//       darkMode={true}
//     >
//       <h2 className="text-3xl font-bold mb-6">Case Study: FireCat's 6th SENSE by Everstone Technologies Technologies</h2>
      
//       <div className="bg-gray-50 p-6 rounded-lg mb-8">
//         <h3 className="text-xl font-semibold mb-2">Background</h3>
//         <p>
//           FireCat Group aimed to enhance the safety and operational effectiveness of personnel in high-risk 
//           environments such as law enforcement, military operations, and firefighting. They required an advanced, 
//           integrated sensor solution that could provide critical real-time data for risk management and decision-making.
//         </p>
//       </div>
      
//       <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
//       <p>
//         Traditional approaches lacked comprehensive real-time tracking and situational awareness, leaving personnel 
//         vulnerable and decision-making delayed. The market required a robust solution capable of capturing essential 
//         data while being resilient enough for extreme conditions.
//       </p>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
//       <p>
//         Everstone Technologies Technologies provided an end-to-end solution called the 6th SENSE, combining sophisticated AI-driven 
//         sensors seamlessly integrated into uniforms. The solution features:
//       </p>
      
//       <div className="grid md:grid-cols-2 gap-6 my-8">
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Main Unit</h4>
//             <p>Secure real-time data transmission with encrypted communication.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Radio className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">High-Quality Sensors</h4>
//             <p>Durable sensors resistant to dust, water, and extreme temperatures.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Box className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Integrated Clothing</h4>
//             <p>Customized shirts embedding AI-powered sensors, maintaining user comfort.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Control Unit</h4>
//             <p>Centralized AI interface providing transparent data visualization and management via an intuitive supervisor app.</p>
//           </div>
//         </div>
//       </div>
      
//       <h4 className="text-xl font-semibold mb-4">Critical Features</h4>
//       <ul className="list-disc pl-6 space-y-2 mb-8">
//         <li>Man Down Alarm for immediate alerts</li>
//         <li>Precise GPS positioning for location tracking</li>
//         <li>Real-time monitoring of vital signs</li>
//         <li>Easily accessible Panic Button for emergencies</li>
//       </ul>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
//       <div className="space-y-6 mb-8">
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Life-saving technology</h4>
//             <p>Rapid data acquisition facilitates quicker responses in emergencies.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Technological advancement</h4>
//             <p>Machine learning prevents false alarms by adapting to individual behavioral baselines.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Long-lasting and secure</h4>
//             <p>Durable hardware with extended lifespan, robust encryption, and full GDPR compliance.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Easy Maintenance</h4>
//             <p>Sensors are fully washable and require minimal maintenance.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">User-Friendly</h4>
//             <p>Plug & Play installation within minutes, providing hours of continuous operation per charge.</p>
//           </div>
//         </div>
//       </div>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
//       <p>
//         FireCat successfully implemented the 6th SENSE solution, significantly enhancing situational awareness, 
//         safety, and operational efficiency of high-risk personnel. Everstone Technologies' innovative platform and specialized 
//         knowledge allowed for rapid deployment, immediate positive impact, and a scalable model for future expansions.
//       </p>
//     </ProjectPageLayout>
//   );
// };

// export default FireCatProject;


import ProjectPageLayout from '@/components/ProjectPageLayout';
import { BookOpen, ShoppingCart, Truck, CreditCard, Globe, Smartphone } from 'lucide-react';

const BookNestProject = () => {
  return (
    <ProjectPageLayout
      title="BookNest"
      subtitle="A friendly marketplace for buying, selling, and swapping books"
      imageUrl="/lovable-uploads/booknest-hero.png"
      brandName="BookNest"
      darkMode={false}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: BookNest — The Welcoming Book Marketplace</h2>

      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">Overview</h3>
        <p className="text-gray-700">
          BookNest is a friendly marketplace—on both web and mobile—where readers can buy, sell, or swap new and used books. 
          It's designed to feel welcoming, with smart recommendations and an easy listing process.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Smartphone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Intuitive Apps</h4>
            <p className="text-sm text-gray-600">Web & mobile with personalized book recommendations</p>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <BookOpen className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Real-Time Inventory</h4>
            <p className="text-sm text-gray-600">Live tracking across 50+ partner bookstores</p>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Truck className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">AI Delivery Optimization</h4>
            <p className="text-sm text-gray-600">Reduced delivery times by 35% with smart routing</p>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex items-start">
          <Globe className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Multi-Currency Payments</h4>
            <p className="text-sm text-gray-600">Secure global transactions with local currency support</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Challenges</h3>
      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-0.5 text-sm font-bold">⚠</div>
          <p>Keeping the site fast and responsive as more readers joined</p>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-0.5 text-sm font-bold">⚠</div>
          <p>Letting sellers manage both brand-new and secondhand titles smoothly</p>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-0.5 text-sm font-bold">⚠</div>
          <p>Offering secure, seamless payments without friction</p>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-0.5 text-sm font-bold">⚠</div>
          <p>Making sure the look and feel stayed consistent across phones and browsers</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Our Solution</h3>
      <div className="space-y-5 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 text-lg">➔</div>
          <div>
            <h4 className="font-semibold">Scalable Backend</h4>
            <p>Built a reliable, auto-scaling backend so pages always load quickly—even during peak traffic.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 text-lg">➔</div>
          <div>
            <h4 className="font-semibold">Seller Dashboard</h4>
            <p>Simple interface for listing books, setting conditions (new/used), and tracking sales in real time.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 text-lg">➔</div>
          <div>
            <h4 className="font-semibold">Secure Payments</h4>
            <p>Integrated Stripe with automatic fraud detection and support for multiple currencies.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5 text-lg">➔</div>
          <div>
            <h4 className="font-semibold">Unified Design System</h4>
            <p>Responsive templates ensure a consistent, familiar experience on web and mobile.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Support & Training</h3>
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-lg border border-indigo-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-2">✆</div>
            <h4 className="font-semibold text-indigo-900">Live Onboarding</h4>
          </div>
          <p className="text-sm text-gray-600">Hands-on sessions to manage listings and process refunds</p>
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-5 rounded-lg border border-teal-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center mr-2">✆</div>
            <h4 className="font-semibold text-teal-900">Help Center</h4>
          </div>
          <p className="text-sm text-gray-600">Step-by-step guides and FAQs for daily operations</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-lg border border-amber-100">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center mr-2">✆</div>
            <h4 className="font-semibold text-amber-900">24/7 Support</h4>
          </div>
          <p className="text-sm text-gray-600">Instant help for urgent issues, anytime</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Technologies Used</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe Integration'].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p className="text-lg leading-relaxed">
        BookNest launched successfully as a vibrant, trusted community for book lovers. With fast performance, 
        seamless seller tools, secure global payments, and AI-optimized logistics, the platform now connects 
        readers and sellers across cities—delivering joy, one book at a time.
      </p>
    </ProjectPageLayout>
  );
};

export default BookNestProject;