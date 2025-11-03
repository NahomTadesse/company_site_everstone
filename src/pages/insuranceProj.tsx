import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import {
  Shield,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Database,
  Brain,
  Globe,
  Sparkles,
  Activity,
} from 'lucide-react';

const EthiopiaInsuranceDashboardProject = () => {
  return (
    <ProjectPageLayout
      title="Ethiopia Insurance Portfolio Summary"
      subtitle="Analytics Platform for Risk & Profitability Insights"
      imageUrl="/lovable-uploads/ethiopia-insurance-dashboard.jpg"
      brandName="Ethiopia Insurance"
      darkMode={false}
    >
      <SEO
        title="Everstone Technologies - Ethiopia Insurance Portfolio Analytics"
        description="Power BI dashboard analyzing £1B in premiums and £2B in claims to identify high-risk segments and optimize pricing strategies."
        type="website"
      />

      {/* Live Project Banner */}
      <div className="bg-emerald-50 p-4 rounded-lg mb-6 flex items-center border border-emerald-200">
        <Sparkles className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
        <p className="text-emerald-800 font-medium text-sm">Live Project — Real-Time Portfolio Intelligence</p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Case Study: Ethiopia Insurance — Portfolio Risk & Profitability Analytics
      </h2>

      {/* Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border border-indigo-100">
        <h3 className="text-xl font-semibold mb-3 text-indigo-900 flex items-center">
          <Shield className="h-6 w-6 mr-2" />
          Project Overview
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This insurance analytics platform helps underwriters identify profitable and high-risk segments of their portfolio, enabling better risk assessment and pricing strategies.
        </p>
      </div>

      {/* Key Features */}
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <BarChart3 className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Portfolio Scale Analysis</h4>
            <p className="text-sm text-gray-600">
              <strong>£1B</strong> Total Premium • <strong>£2B</strong> Total Claims
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">High-Risk Segments</h4>
            <p className="text-sm text-gray-600">
              Ambulance • Car Hire • Own Goods identified as top loss drivers
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <Activity className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Claims Trend Analysis</h4>
            <p className="text-sm text-gray-600">Peak claims volume between <strong>2015–2017</strong></p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
          <TrendingUp className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-1 text-gray-800">Premium-to-Claim Ratio</h4>
            <p className="text-sm text-gray-600">
              <strong>59%</strong> overall ratio — highlighting loss-making segments
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Technologies Used</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {['Power BI', 'Azure Machine Learning', 'SQL Server Analysis Services'].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-800 rounded-full text-sm font-medium border border-indigo-200 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Outcome */}
      <h3 className="text-2xl font-semibold mb-5 mt-8 text-gray-800">Business Outcome</h3>
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100 mb-8">
        <p className="text-lg leading-relaxed text-gray-800">
          Provided critical insights for risk reassessment and product line adjustments. Underwriters now use data-driven evidence to refine pricing models, reduce exposure in high-loss segments, and improve overall portfolio profitability.
        </p>
      </div>

      {/* Data Intelligence Layer */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 mb-8">
        <h4 className="text-lg font-semibold mb-3 text-purple-900 flex items-center">
          <Brain className="h-6 w-6 mr-2" />
          Predictive Analytics Layer
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <Database className="h-5 w-5 text-purple-600 mr-2" />
            <span>SSAS Cubes for Fast Aggregation</span>
          </div>
          <div className="flex items-center">
            <Brain className="h-5 w-5 text-purple-600 mr-2" />
            <span>ML Models for Risk Scoring</span>
          </div>
          <div className="flex items-center">
            <BarChart3 className="h-5 w-5 text-purple-600 mr-2" />
            <span>Interactive Drill-Down Reports</span>
          </div>
        </div>
      </div>

      {/* Live Project CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="https://ethiopia-insurance-dashboard.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
        >
          <Globe className="h-5 w-5 mr-2" />
          View Live Dashboard
        </a>
      </div>

      {/* Project Highlights */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Project Highlights: £3B Portfolio Analysis • High-Risk Segment Detection • 59% P/C Ratio • Predictive Underwriting
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default EthiopiaInsuranceDashboardProject;