import React from 'react';
import { Search, Filter, Star } from 'lucide-react';

const Marketplace = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="text-center max-w-4xl mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Marketplace
        </h1>
        <p className="text-xl text-gray-400">
          Discover themes, plugins, and extensions for your WoW-CMS project
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search marketplace..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="bg-gray-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
              <img
                src={`https://source.unsplash.com/800x600/?gaming,${item}`}
                alt="Product preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gaming Theme {item}</h3>
                    <p className="text-gray-400">By WoW-CMS</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-400">4.8</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  A beautiful and responsive gaming theme for your community.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$49</span>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Marketplace;