import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: March 15, 2024</p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
                <p className="text-gray-300 mb-4">
                  We collect minimal data necessary to provide our services. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Email address for account management</li>
                  <li>Usage statistics to improve our services</li>
                  <li>Technical data for system optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Data Security</h2>
                <p className="text-gray-300">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Regular security audits</li>
                  <li>Secure data storage practices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Data Usage</h2>
                <p className="text-gray-300">
                  Your data is used exclusively for:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Communication about updates and features</li>
                  <li>Technical support and issue resolution</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <FileCheck className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                <p className="text-gray-300">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data deletion</li>
                  <li>Opt-out of communications</li>
                  <li>Export your data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            For privacy concerns, contact us at{" "}
            <a href="mailto:privacy@wow-cms.com" className="text-blue-400 hover:underline">
              privacy@wow-cms.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;