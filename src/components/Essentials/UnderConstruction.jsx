import React from 'react';
import { Loader2 } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center max-w-md w-full">
        <Loader2 className="w-16 h-16 text-green-600 animate-spin mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Under Construction</h2>
        <p className="text-gray-600 text-center text-lg">We are working very hard to bring this feature out.</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
