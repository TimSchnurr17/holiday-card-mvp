import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Layout, Type, Image as ImageIcon, Save } from 'lucide-react';

const CardDesigner = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [cardText, setCardText] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  
  const templates = [
    { id: 1, name: 'Classic Holiday', layout: 'single', color: 'red' },
    { id: 2, name: 'Photo Grid', layout: 'grid', color: 'green' },
    { id: 3, name: 'Modern Minimal', layout: 'split', color: 'white' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-6">
        {/* Template Selector */}
        <div className="w-64 shrink-0">
          <h3 className="text-lg font-semibold mb-4">Choose Template</h3>
          <div className="space-y-4">
            {templates.map(template => (
              <Card 
                key={template.id}
                className={`cursor-pointer transition-shadow hover:shadow-lg ${
                  selectedTemplate?.id === template.id ? 'ring-2 ring-red-500' : ''
                }`}
                onClick={() => setSelectedTemplate(template)}
              >
                <CardContent className="p-4">
                  <Layout className="w-6 h-6 mb-2 text-gray-600" />
                  <span className="font-medium">{template.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Card Preview */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-lg aspect-[7/5] mb-6">
            <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-300">
              {selectedTemplate ? (
                <div className="w-full h-full p-8">
                  {/* Template Preview */}
                  <div className={`w-full h-full bg-${selectedTemplate.color}-50 rounded`}>
                    {/* Photo Placeholders */}
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                    {/* Text Area */}
                    <div className="p-4">
                      <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Add your holiday message..."
                        value={cardText}
                        onChange={(e) => setCardText(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Select a template to begin</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
              <Type className="w-5 h-5 inline-block mr-2" />
              Edit Text
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
              <ImageIcon className="w-5 h-5 inline-block mr-2" />
              Add Photos
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              <Save className="w-5 h-5 inline-block mr-2" />
              Save Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesigner;