import React from 'react';
import LandingPage from './components/LandingPage';
import PhotoUploadSystem from './components/PhotoUploadSystem';
import CardDesigner from './components/CardDesigner';
import PrivacyControls from './components/PrivacyControls';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LandingPage />
      {/* Additional components will be rendered based on routing */}
    </div>
  );
}

export default App;