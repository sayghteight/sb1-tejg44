import React from 'react';
import { FileText, Shield, AlertTriangle, HelpCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400">Last updated: March 15, 2024</p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Agreement to Terms</h2>
                <p className="text-gray-300">
                  By accessing or using WoW-CMS, you agree to be bound by these Terms and Conditions
                  and our Privacy Policy. If you disagree with any part of the terms, you may not
                  access our services.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  WoW-CMS and its original content, features, and functionality are owned by
                  WoW-CMS and are protected by international copyright, trademark, patent, trade
                  secret, and other intellectual property laws.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>You may not use our trademarks without permission</li>
                  <li>Respect the MIT license terms when using our code</li>
                  <li>Attribution is required when using our software</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">User Responsibilities</h2>
                <p className="text-gray-300 mb-4">
                  As a user of WoW-CMS, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Not use the service for any illegal purposes</li>
                  <li>Not attempt to breach or circumvent security measures</li>
                  <li>Not distribute malicious code or content</li>
                  <li>Maintain the security of your account credentials</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
                <p className="text-gray-300">
                  WoW-CMS is provided "as is" without any warranties, expressed or implied.
                  We do not warrant that the service will be uninterrupted, secure, or error-free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            For questions about these terms, contact us at{" "}
            <a href="mailto:legal@wow-cms.com" className="text-blue-400 hover:underline">
              legal@wow-cms.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;