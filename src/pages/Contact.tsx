import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">Email Support</h2>
            <p className="text-gray-400 mb-4">
              For general inquiries and support
            </p>
            <p className="text-blue-400">
              support@wow-cms.com
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">Discord Community</h2>
            <p className="text-gray-400 mb-4">
              Join our Discord for real-time support
            </p>
            <a
              href="https://discord.gg/wow-cms"
              className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg"
            >
              Join Discord
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;