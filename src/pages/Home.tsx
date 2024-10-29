import React from 'react';
import { ArrowRight, Code2, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/20 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Vision, Our Platform – WoW-CMS
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our tight-knit community, where we specialize in creating CMS projects tailored for gaming enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/community"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2"
              >
                Join our community
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/docs"
                className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2"
              >
                Discover more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Mission: Transforming Gaming Community Interaction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
              <Code2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Open-Source</h3>
              <p className="text-gray-400">
                We embrace the open-source philosophy. Our CMS is built on the power of community and transparency.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
              <Globe className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">MultiLanguage</h3>
              <p className="text-gray-400">
                We've made our CMS truly global. With multilingual support, you can now experience our platform in your preferred language.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-400">
                Our community is the heart of everything we do. Share ideas, and create together in a passionate network.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;