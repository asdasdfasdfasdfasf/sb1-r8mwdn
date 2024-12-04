import { TrendingUp, PieChart, FileText, Building } from 'lucide-react';

const sections = [
  {
    title: 'Financial Reports',
    description: 'Access our quarterly and annual financial reports.',
    icon: FileText
  },
  {
    title: 'Stock Information',
    description: 'Real-time stock quotes and historical data.',
    icon: TrendingUp
  },
  {
    title: 'Corporate Governance',
    description: 'Learn about our leadership and governance structure.',
    icon: Building
  },
  {
    title: 'Financial Metrics',
    description: 'Key performance indicators and metrics.',
    icon: PieChart
  }
];

export default function InvestorRelations() {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Investor Relations</h1>
          <p className="text-xl text-blue-200">Financial information and corporate updates</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div 
              key={section.title}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <section.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}