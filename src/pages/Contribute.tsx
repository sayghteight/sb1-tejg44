import React from 'react';
import { Code2, Bug, FileEdit, Gift, Heart, Users, Trophy } from 'lucide-react';

const Contribute = () => {
  const topContributors = [
    { level: 'Diamond', commits: 100, color: 'text-blue-400' },
    { level: 'Platinum', commits: 75, color: 'text-purple-400' },
    { level: 'Gold', commits: 50, color: 'text-yellow-400' },
    { level: 'Silver', commits: 25, color: 'text-gray-400' }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contribute to WoW-CMS
        </h1>
        <p className="text-xl text-gray-400">
          Help us make WoW-CMS better for everyone. Every contribution counts!
        </p>
      </section>

      {/* Ways to Contribute */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Code2 className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Code Contributions</h3>
            <p className="text-gray-400 mb-4">
              Submit pull requests to improve functionality, fix bugs, or add new features.
            </p>
            <a
              href="https://github.com/wow-cms/wow-cms"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
            >
              View Repository
            </a>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Bug className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Report Issues</h3>
            <p className="text-gray-400 mb-4">
              Help us identify bugs and suggest improvements to make WoW-CMS better.
            </p>
            <a
              href="/bugtracker"
              className="inline-block bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Submit Issue
            </a>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <FileEdit className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Documentation</h3>
            <p className="text-gray-400 mb-4">
              Help improve our documentation to make it more comprehensive and clear.
            </p>
            <a
              href="/docs"
              className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
            >
              View Docs
            </a>
          </div>
        </div>
      </section>

      {/* Contribution Guidelines */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-8">Contribution Guidelines</h2>
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li>Fork the repository</li>
              <li>Create a new branch for your feature or fix</li>
              <li>Make your changes following our coding standards</li>
              <li>Write or update tests as needed</li>
              <li>Submit a pull request with a clear description of changes</li>
            </ol>

            <h3 className="text-xl font-semibold mt-8 mb-4">Code Standards</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Follow the existing code style and conventions</li>
              <li>Write clear, documented, and tested code</li>
              <li>Keep commits focused and write meaningful commit messages</li>
              <li>Update documentation for any new features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-8">Recognition Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Gift className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Rewards</h3>
            <p className="text-gray-400 mb-4">
              Active contributors receive exclusive benefits, recognition, and access to special features.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400" />
                Special mention in our documentation
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                Access to contributor-only Discord channels
              </li>
              <li className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-400" />
                Early access to new features
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <Users className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Hall of Fame</h3>
            <p className="text-gray-400 mb-4">
              Top contributors are featured in our Hall of Fame and receive special recognition.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg">
                  <Trophy className={`w-10 h-10 ${contributor.color}`} />
                  <div>
                    <p className="font-medium">{contributor.level}</p>
                    <p className="text-sm text-gray-400">{contributor.commits} commits</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Contribute?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Join our community and start making a difference today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/wow-cms/wow-cms"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            Start Contributing
          </a>
          <a
            href="https://discord.gg/wow-cms"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2"
          >
            Join Discord
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contribute;