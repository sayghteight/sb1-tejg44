import React from 'react';
import { Bug, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const Bugtracker = () => {
  const issues = [
    {
      id: "WCMS-123",
      title: "Authentication error on login",
      status: "open",
      priority: "high",
      date: "2024-03-15"
    },
    {
      id: "WCMS-122",
      title: "Dashboard statistics not updating",
      status: "in-progress",
      priority: "medium",
      date: "2024-03-14"
    },
    {
      id: "WCMS-121",
      title: "Mobile menu not responsive",
      status: "resolved",
      priority: "low",
      date: "2024-03-13"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Bug Tracker</h1>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg inline-flex items-center gap-2">
            <Bug className="w-5 h-5" />
            Report Issue
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-400" />
              <div>
                <p className="text-sm text-gray-400">Open Issues</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-400">In Progress</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Resolved</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Bug className="w-8 h-8 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Total Issues</p>
                <p className="text-2xl font-bold">192</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Issues</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Priority</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {issues.map((issue) => (
                  <tr key={issue.id} className="hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm">{issue.id}</td>
                    <td className="px-6 py-4">{issue.title}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        issue.status === 'open' ? 'bg-red-400/20 text-red-400' :
                        issue.status === 'in-progress' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-green-400/20 text-green-400'
                      }`}>
                        {issue.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        issue.priority === 'high' ? 'bg-red-400/20 text-red-400' :
                        issue.priority === 'medium' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-green-400/20 text-green-400'
                      }`}>
                        {issue.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{issue.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bugtracker;