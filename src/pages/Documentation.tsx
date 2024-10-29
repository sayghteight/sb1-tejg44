import React from 'react';
import { Book, Code, Terminal, Rocket } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Documentation
        </h1>
        <p className="text-xl text-gray-400">
          Everything you need to know about WoW-CMS
        </p>
      </section>

      {/* Quick Start */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">Installation</h3>
          <div className="bg-gray-900 p-4 rounded-lg mb-4">
            <code className="text-green-400">
              git clone https://github.com/wow-cms/wow-cms.git
            </code>
          </div>
          <p className="text-gray-400 mb-4">
            After cloning the repository, install the dependencies:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <code className="text-green-400">
              cd wow-cms && npm install
            </code>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Book className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Introduction</li>
              <li>• Installation Guide</li>
              <li>• Basic Configuration</li>
              <li>• First Steps</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Code className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Core Concepts</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Architecture</li>
              <li>• Data Models</li>
              <li>• Authentication</li>
              <li>• Permissions</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Terminal className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Advanced Usage</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Custom Themes</li>
              <li>• Plugins</li>
              <li>• API Reference</li>
              <li>• Webhooks</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Rocket className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Deployment</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Production Setup</li>
              <li>• Performance</li>
              <li>• Security</li>
              <li>• Monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* API Reference Preview */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">API Reference</h2>
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">GET /api/users</h3>
            <p className="text-gray-400 mb-4">Retrieve a list of users</p>
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-green-400">
                {`curl -X GET https://api.wow-cms.com/users \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">POST /api/auth/login</h3>
            <p className="text-gray-400 mb-4">Authenticate a user</p>
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-green-400">
                {`curl -X POST https://api.wow-cms.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username": "user", "password": "pass"}'`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;