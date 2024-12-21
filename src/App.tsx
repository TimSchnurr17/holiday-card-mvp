import React from 'react';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
          Hello Holiday Cards! <Heart className="text-red-500" />
        </h1>
      </div>
    </div>
  );
}

export default App;