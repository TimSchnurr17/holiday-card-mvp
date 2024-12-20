import React, { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Image as ImageIcon, Users, Lock } from 'lucide-react';

const PhotoUploadSystem = () => {
  const [files, setFiles] = useState([]);
  const [shareSettings, setShareSettings] = useState({
    isPublic: false,
    selectedContacts: []
  });
  
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(prev => [...prev, ...acceptedFiles.map(file => ({
      file,
      id: Math.random().toString(36).substring(7),
      preview: URL.createObjectURL(file),
      sharing: [],
      approvalRequired: true
    }))]);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Upload Zone */}
      <div className="mb-8">
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-red-500 transition-colors cursor-pointer"
          onDrop={(e) => {
            e.preventDefault();
            onDrop(Array.from(e.dataTransfer.files));
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg text-gray-600">Drag and drop your photos here, or click to select</p>
          <input 
            type="file" 
            multiple 
            className="hidden" 
            onChange={(e) => onDrop(Array.from(e.target.files))}
          />
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <Card key={file.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <img 
                src={file.preview} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium truncate">{file.file.name}</span>
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center text-sm text-gray-600 hover:text-red-500">
                  <Users className="w-4 h-4 mr-1" />
                  Share
                </button>
                <button className="flex items-center text-sm text-gray-600 hover:text-red-500">
                  <ImageIcon className="w-4 h-4 mr-1" />
                  Create Card
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoUploadSystem;