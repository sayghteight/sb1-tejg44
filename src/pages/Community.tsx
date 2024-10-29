import React from 'react';
import { Users, Github, MessageCircle, Heart } from 'lucide-react';

const Community = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="text-center max-w-4xl mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Join Our Community
        </h1>
        <p className="text-xl text-gray-400">
          Connect with fellow developers, share your experiences, and build amazing things together.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Active Members</h3>
            <p className="text-3xl font-bold text-blue-400">5,000+</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <Github className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Contributors</h3>
            <p className="text-3xl font-bold text-purple-400">200+</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Discord Members</h3>
            <p className="text-3xl font-bold text-green-400">3,000+</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Projects Created</h3>
            <p className="text-3xl font-bold text-red-400">1,000+</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Github className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3">Contribute on GitHub</h3>
            <p className="text-gray-400 mb-4">
              Help improve WoW-CMS by contributing code, reporting bugs, or suggesting new features.
            </p>
            <a
              href="https://github.com/wow-cms"
              className="inline-block bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg"
            >
              View Repository
            </a>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <MessageCircle className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3">Join Discord</h3>
            <p className="text-gray-400 mb-4">
              Connect with the community, get help, and participate in discussions.
            </p>
            <a
              href="https://discord.gg/wow-cms"
              className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg"
            >
              Join Server
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;