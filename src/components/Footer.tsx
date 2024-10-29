import React from 'react';
import { Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">YOUR VISION, OUR PLATFORM – WOW-CMS</h3>
            <ul className="space-y-2">
              <li><a href="/contribute" className="text-gray-400 hover:text-white">Contribute</a></li>
              <li><a href="/affiliate" className="text-gray-400 hover:text-white">Affiliate Program</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-white">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP CENTER</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.gg/wow-cms" className="text-gray-400 hover:text-white inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Our Discord
                </a>
              </li>
              <li><a href="/bugtracker" className="text-gray-400 hover:text-white">Bugtracker</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/licensing" className="text-gray-400 hover:text-white">Licensing</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2017-2024 WoW-CMS. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/wow-cms" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://discord.gg/wow-cms" className="text-gray-400 hover:text-white">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;