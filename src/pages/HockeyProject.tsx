
// import ProjectPageLayout from '@/components/ProjectPageLayout';
// import { Activity, Gauge, Flag, Users, BarChart3 } from 'lucide-react';

// const HockeyProject = () => {
//   return (
//     <ProjectPageLayout
//       title="Ice Hockey Elite Skill Tracker"
//       subtitle="Advanced motion analysis for optimal performance"
//       imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
//       brandName="Mars Blades"
//     >
//       <h2 className="text-3xl font-bold mb-6">Case Study: Hockey Performance Analysis System</h2>
      
//       <div className="bg-gray-50 p-6 rounded-lg mb-8">
//         <h3 className="text-xl font-semibold mb-2">Background</h3>
//         <p>
//           Mars Blades, a leading innovator in hockey training equipment, sought to develop a system for 
//           quantifying and analyzing the specific movements that contribute to elite hockey performance. They approached 
//           Everstone Technologies Technologies to create a solution that could capture detailed metrics during real skating sessions and 
//           translate that data into actionable insights for player development.
//         </p>
//       </div>
      
//       <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
//       <p>
//           Previous attempts to measure hockey performance relied on multiple external sensors or camera systems 
//           that were cumbersome, expensive, and limited to controlled environments. Mars Blades needed a solution that 
//           was simple enough for daily use but sophisticated enough to capture the nuanced movements that differentiate 
//           elite players, particularly focusing on acceleration, speed transitions, and maneuverability on ice.
//       </p>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
//       <p>
//         Everstone Technologies Technologies developed a specialized single-point IMU (Inertial Measurement Unit) system embedded directly 
//         in hockey footwear that could:
//       </p>
      
//       <div className="grid md:grid-cols-2 gap-6 my-8">
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Motion Pattern Recognition</h4>
//             <p>Identify and categorize specific skating movements from crossovers to tight turns.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Gauge className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Performance Metrics</h4>
//             <p>Measure acceleration forces, edge angles, weight distribution, and power output in real-time.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Flag className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Benchmark Comparisons</h4>
//             <p>Compare athlete's movements to established elite player patterns and historical personal bests.</p>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
//           <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
//           <div>
//             <h4 className="text-lg font-semibold mb-2 text-gray-700">Coach Integration</h4>
//             <p>Provide coaches with detailed skill development metrics across team members.</p>
//           </div>
//         </div>
//       </div>
      
//       <h4 className="text-xl font-semibold mb-4">System Components</h4>
//       <ul className="list-disc pl-6 space-y-2 mb-8">
//         <li>Embedded sensors designed to withstand the harsh conditions of ice hockey</li>
//         <li>Bluetooth connectivity with real-time data streaming to rinkside devices</li>
//         <li>Athlete-facing mobile app with immediate performance feedback</li>
//         <li>Coach dashboard for tracking player development and team trends</li>
//         <li>Machine learning algorithm that improves pattern recognition over time</li>
//       </ul>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
//       <div className="space-y-6 mb-8">
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Skill Development</h4>
//             <p>Players using the system showed faster improvement in targeted skating skills.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Injury Prevention</h4>
//             <p>Early detection of asymmetrical movements helped reduce strain-related injuries.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Elite Performance Insights</h4>
//             <p>Identified specific movement patterns that correlate with elite acceleration and agility.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
//           <div>
//             <h4 className="font-semibold">Coaching Efficiency</h4>
//             <p>Reduced subjective assessment with quantifiable metrics for player development.</p>
//           </div>
//         </div>
//       </div>
      
//       <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
//       <p>
//         The Ice Hockey Elite Skill Tracker has been successfully adopted by professional teams and elite hockey 
//         academies across North America and Europe. Mars Blades has integrated the technology into their premium training 
//         products, creating a new standard for performance analysis in ice hockey. The data collected has also led to 
//         improvements in skate design and training methodologies based on the scientific insights provided.
//       </p>
      
//       <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
//         <BarChart3 className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
//         <div>
//           <h4 className="text-lg font-semibold mb-2 text-gray-700">Research Impact</h4>
//           <p>
//             The data gathered from this project has contributed to academic research on elite athletic performance 
//             and has been cited in sports science publications focused on optimizing movement efficiency in winter sports.
//           </p>
//         </div>
//       </div>
//     </ProjectPageLayout>
//   );
// };

// export default HockeyProject;



import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import {
  BarChart3,
  Clock,
  Calendar,
  Pizza,
  TrendingUp,
  Database,
  Cloud,
  Code,
  Sparkles,
} from 'lucide-react';

const NavigliPizzaDashboardProject = () => {
  return (
    <ProjectPageLayout
      title="Navigli Pizza Sales Dashboard"
      subtitle="Data-driven insights for smarter staffing & inventory"
      imageUrl="/lovable-uploads/navigli-pizza-dashboard.jpg"
      brandName="Navigli Pizza"
      darkMode={false}
    >
      <SEO
        title="Everstone Technologies - Navigli Pizza Sales Dashboard"
        description="Interactive Power BI dashboard revealing peak hours, top-selling pizzas, and sales trends to optimize operations."
        type="website"
      />

      {/* Live Project Banner */}
      <div className="bg-emerald-50 p-4 rounded-lg mb-6 flex items-center border border-emerald-200">
        <Sparkles className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
        <p className="text-emerald-800 font-medium text-sm">Live Dashboard — Real-Time Sales Intelligence</p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Case Study: Navigli Pizza — Sales Performance Dashboard
      </h2>

      {/* Overview */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-8 border border-orange-100">
        <h3 className="text-xl font-semibold mb-3 text-orange-900 flex items-center">
          <Pizza className="h-6 w-6 mr-2" />
          Project Overview
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This data visualization project helped a popular pizza chain understand their sales patterns and make data-driven decisions about staffing and inventory.
        </p>
      </div>

      {/* Key Features */}
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <BarChart3 className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Interactive Dashboard</h4>
            <p className="text-sm text-gray-600">Real-time visualization of sales performance and trends</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Clock className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Peak Sales Hours</h4>
            <p className="text-sm text-gray-600">12 PM – 3 PM and 6 PM – 9 PM identified as busiest</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Calendar className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Busiest Days</h4>
            <p className="text-sm text-gray-600">Tuesday and Wednesday show highest order volumes</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <TrendingUp className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Top Pizza Categories</h4>
            <p className="text-sm text-gray-600">Chicken and Supreme are customer favorites</p>
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Technologies Used</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {['Power BI', 'SQL Server', 'Azure Data Factory', 'Python'].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 text-red-800 rounded-full text-sm font-medium border border-red-200 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Outcome */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Business Impact</h3>
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100 mb-8">
        <p className="text-lg leading-relaxed text-gray-800">
          With clear insights into peak hours, top-selling items, and daily trends, Navigli Pizza optimized staffing schedules, reduced ingredient waste, and improved order fulfillment speed. The dashboard became a daily tool for managers across all locations.
        </p>
      </div>

      {/* Data Flow Insight */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
        <h4 className="text-lg font-semibold mb-3 text-blue-900 flex items-center">
          <Database className="h-6 w-6 mr-2" />
          Data Pipeline
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="h-10 w-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <Database className="h-5 w-5 text-blue-600" />
            </div>
            <p className="font-medium">SQL Server</p>
            <p className="text-gray-600">POS Data</p>
          </div>
          <div className="text-center">
            <div className="h-10 w-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <Cloud className="h-5 w-5 text-blue-600" />
            </div>
            <p className="font-medium">Azure Data Factory</p>
            <p className="text-gray-600">ETL Pipeline</p>
          </div>
          <div className="text-center">
            <div className="h-10 w-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <Code className="h-5 w-5 text-blue-600" />
            </div>
            <p className="font-medium">Python</p>
            <p className="text-gray-600">Data Processing</p>
          </div>
          <div className="text-center">
            <div className="h-10 w-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>
            <p className="font-medium">Power BI</p>
            <p className="text-gray-600">Interactive Reports</p>
          </div>
        </div>
      </div>

      {/* Project Highlights */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Project Highlights: Real-Time Analytics • Peak Hour Optimization • Inventory Forecasting • Manager Empowerment
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default NavigliPizzaDashboardProject;