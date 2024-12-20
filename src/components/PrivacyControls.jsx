import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Bell, Check, X } from 'lucide-react';

const PrivacyControls = () => {
  const [settings, setSettings] = useState({
    requireApproval: true,
    autoApproveContacts: false,
    notifyOnShare: true,
    defaultVisibility: 'private'
  });

  const [pendingRequests] = useState([
    { id: 1, user: 'Sarah Smith', type: 'share', content: 'Christmas 2024 Album' },
    { id: 2, user: 'Mike Johnson', type: 'view', content: 'Holiday Card Draft' }
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Main Settings */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Privacy Settings</h2>
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Approval Required</h3>
                  <p className="text-sm text-gray-600">Require your approval when others want to share your content</p>
                </div>
                <button 
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    settings.requireApproval ? 'bg-red-500' : 'bg-gray-200'
                  }`}
                  onClick={() => setSettings(s => ({ ...s, requireApproval: !s.requireApproval }))}
                >
                  <span 
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.requireApproval ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Auto-approve Contacts</h3>
                  <p className="text-sm text-gray-600">Automatically approve sharing requests from your contacts</p>
                </div>
                <button 
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    settings.autoApproveContacts ? 'bg-red-500' : 'bg-gray-200'
                  }`}
                  onClick={() => setSettings(s => ({ ...s, autoApproveContacts: !s.autoApproveContacts }))}
                >
                  <span 
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.autoApproveContacts ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Share Notifications</h3>
                  <p className="text-sm text-gray-600">Get notified when someone shares content with you</p>
                </div>
                <button 
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    settings.notifyOnShare ? 'bg-red-500' : 'bg-gray-200'
                  }`}
                  onClick={() => setSettings(s => ({ ...s, notifyOnShare: !s.notifyOnShare }))}
                >
                  <span 
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.notifyOnShare ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Requests */}
        <h2 className="text-2xl font-bold mb-6">Pending Requests</h2>
        <div className="space-y-4">
          {pendingRequests.map(request => (
            <Card key={request.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{request.user}</p>
                    <p className="text-sm text-gray-600">
                      Wants to {request.type} "{request.content}"
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-green-500 hover:bg-green-50 rounded">
                      <Check className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyControls;