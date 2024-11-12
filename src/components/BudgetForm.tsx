import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

export default function BudgetForm({ onSubmit }: { onSubmit: (budget: number) => void }) {
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(Number(budget));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <DollarSign className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="block w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your budget"
          min="500"
          max="10000"
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">Currency</label>
          <span className="text-gray-500 pr-3">USD</span>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Build My PC
      </button>
    </form>
  );
}