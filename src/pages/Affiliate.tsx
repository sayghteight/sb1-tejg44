import React from 'react';
import { DollarSign, Users, BarChart, Gift } from 'lucide-react';

const Affiliate = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="text-center max-w-4xl mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold mb-4">Affiliate Program</h1>
        <p className="text-xl text-gray-400">
          Join our affiliate program and earn rewards by promoting WoW-CMS
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">30% Commission</h3>
            <p className="text-gray-400">Earn for every successful referral</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lifetime Referrals</h3>
            <p className="text-gray-400">Earn from all future purchases</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <BarChart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-400">Track your earnings instantly</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
            <Gift className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bonus Rewards</h3>
            <p className="text-gray-400">Extra perks for top performers</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm mb-12">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <p className="text-gray-300">Sign up for our affiliate program</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <p className="text-gray-300">Get your unique referral link</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <p className="text-gray-300">Share with your audience</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <p className="text-gray-300">Earn commissions on successful referrals</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg inline-flex items-center gap-2">
              Join Affiliate Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;