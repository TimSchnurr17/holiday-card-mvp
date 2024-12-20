import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, Gift, Share2, Lock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="bg-white shadow hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      {icon}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Share2 className="w-12 h-12 text-red-500 mb-4" />,
      title: 'Selective Sharing',
      description: 'Share your holiday moments with specific friends and family members'
    },
    {
      icon: <Gift className="w-12 h-12 text-red-500 mb-4" />,
      title: 'Create Holiday Cards',
      description: 'Turn your favorite photos into beautiful printed cards and posters'
    },
    {
      icon: <Lock className="w-12 h-12 text-red-500 mb-4" />,
      title: 'Privacy Controls',
      description: 'Set approval processes and control who sees your content'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-500">HolidayShare</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600">
                Share Photos
              </button>
              <Bell className="w-6 h-6 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Share Your Holiday Moments
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Create, share, and order beautiful holiday cards and memories
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;