import React from 'react';
import { Shield, Zap, Layout, Settings, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: 'Secure & Reliable',
      description: 'Built with security in mind, featuring robust authentication and data protection.'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency, ensuring smooth user experience.'
    },
    {
      icon: <Layout className="w-12 h-12 text-purple-400" />,
      title: 'Customizable Themes',
      description: 'Easily customize the look and feel of your gaming community.'
    },
    {
      icon: <Settings className="w-12 h-12 text-green-400" />,
      title: 'Flexible Configuration',
      description: 'Extensive configuration options to match your specific needs.'
    },
    {
      icon: <Globe className="w-12 h-12 text-red-400" />,
      title: 'MultiLanguage Support',
      description: 'Reach a global audience with built-in language support.'
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-400" />,
      title: 'Community Tools',
      description: 'Built-in tools for managing and growing your gaming community.'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Powerful Features for Your Gaming Community
        </h1>
        <p className="text-xl text-gray-400">
          Everything you need to create, manage, and grow your gaming community
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose WoW-CMS?</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-6 py-3 text-left">Feature</th>
                <th className="px-6 py-3 text-center">WoW-CMS</th>
                <th className="px-6 py-3 text-center">Others</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4">Open Source</td>
                <td className="px-6 py-4 text-center text-green-400">✓</td>
                <td className="px-6 py-4 text-center text-red-400">✗</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4">Custom Themes</td>
                <td className="px-6 py-4 text-center text-green-400">✓</td>
                <td className="px-6 py-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4">MultiLanguage</td>
                <td className="px-6 py-4 text-center text-green-400">✓</td>
                <td className="px-6 py-4 text-center text-red-400">✗</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-6 py-4">Community Support</td>
                <td className="px-6 py-4 text-center text-green-400">✓</td>
                <td className="px-6 py-4 text-center text-red-400">✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Features;