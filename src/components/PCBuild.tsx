import React from 'react';
import { Cpu, HardDrive, Memory, Power, Fan } from 'lucide-react';

interface Component {
  type: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface PCBuildProps {
  components: Component[];
}

export default function PCBuild({ components }: PCBuildProps) {
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'cpu': return <Cpu className="h-6 w-6" />;
      case 'storage': return <HardDrive className="h-6 w-6" />;
      case 'ram': return <Memory className="h-6 w-6" />;
      case 'psu': return <Power className="h-6 w-6" />;
      default: return <Fan className="h-6 w-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="relative h-48">
            <img
              src={component.image}
              alt={component.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
              ${component.price}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              {getIcon(component.type)}
              <h3 className="text-lg font-semibold">{component.name}</h3>
            </div>
            <p className="text-gray-600">{component.description}</p>
            <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}