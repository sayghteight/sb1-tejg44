import React from 'react';
import { FileText, Check, Shield, Globe } from 'lucide-react';

const Licensing = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Open Source License</h1>
          <p className="text-xl text-gray-400">
            WoW-CMS is released under the MIT License
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">MIT License</h2>
                <p className="text-gray-300 mb-4">
                  Copyright (c) 2024 WoW-CMS
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Permission is hereby granted, free of charge, to any person obtaining a copy
                  of this software and associated documentation files (the "Software"), to deal
                  in the Software without restriction, including without limitation the rights
                  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                  copies of the Software, and to permit persons to whom the Software is
                  furnished to do so, subject to the following conditions:
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Check className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">What You Can Do</h2>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" /> Use commercially
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" /> Modify the source code
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" /> Distribute
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" /> Use privately
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Limitations</h2>
                <p className="text-gray-400 mb-4">
                  The above copyright notice and this permission notice shall be included in all
                  copies or substantial portions of the Software.
                </p>
                <p className="text-gray-400">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Third-Party Components</h2>
                <p className="text-gray-400 mb-4">
                  WoW-CMS includes third-party open source software components. Each of these
                  software components has its own license. Please review them when using WoW-CMS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licensing;