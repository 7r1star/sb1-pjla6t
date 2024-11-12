import React from 'react';
import { Menu, X, Monitor, User, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">BuildOnBudget</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-blue-400 transition">Home</a>
            <a href="/builds" className="hover:text-blue-400 transition">Builds</a>
            <a href="/blog" className="hover:text-blue-400 transition">Blog</a>
            <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-800 rounded-full transition">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-slate-800 rounded-full transition">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <a href="/" className="block px-3 py-2 hover:bg-slate-800 rounded-lg">Home</a>
            <a href="/builds" className="block px-3 py-2 hover:bg-slate-800 rounded-lg">Builds</a>
            <a href="/blog" className="block px-3 py-2 hover:bg-slate-800 rounded-lg">Blog</a>
            <a href="/contact" className="block px-3 py-2 hover:bg-slate-800 rounded-lg">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}