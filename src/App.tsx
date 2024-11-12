import React, { useState } from 'react';
import Header from './components/Header';
import BudgetForm from './components/BudgetForm';
import PCBuild from './components/PCBuild';

function App() {
  const [showBuild, setShowBuild] = useState(false);

  const mockComponents = [
    {
      type: 'CPU',
      name: 'AMD Ryzen 5 5600X',
      price: 299,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=500',
      description: '6-core, 12-thread processor with excellent gaming performance'
    },
    {
      type: 'GPU',
      name: 'NVIDIA RTX 3060 Ti',
      price: 399,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=500',
      description: '8GB GDDR6 memory, perfect for 1440p gaming'
    },
    {
      type: 'RAM',
      name: 'Corsair Vengeance 16GB',
      price: 89,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=500',
      description: 'DDR4-3200MHz CL16 dual-channel kit'
    },
    {
      type: 'Storage',
      name: 'Samsung 970 EVO Plus 1TB',
      price: 129,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=500',
      description: 'NVMe M.2 SSD with blazing fast read/write speeds'
    }
  ];

  const handleBudgetSubmit = (budget: number) => {
    setShowBuild(true);
    // In a real app, we would fetch components based on the budget
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!showBuild ? (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Dream PC
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Enter your budget and let us recommend the perfect components for your build
            </p>
            <div className="flex justify-center">
              <BudgetForm onSubmit={handleBudgetSubmit} />
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Recommended Components
            </h2>
            <PCBuild components={mockComponents} />
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BuildOnBudget</h3>
              <p className="text-gray-400">Building your dream PC without breaking the bank</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/builds" className="hover:text-white">PC Builds</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/guides" className="hover:text-white">Building Guides</a></li>
                <li><a href="/compatibility" className="hover:text-white">Compatibility Check</a></li>
                <li><a href="/support" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with the latest tech news and deals</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;