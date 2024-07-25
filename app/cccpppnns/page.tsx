"use client";

import Link from 'next/link';

const Categories: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="categories/notes/Docker" className="block p-6 bg-purple-100 rounded-lg shadow-md hover:bg-purple-200 transition-colors">
            <h2 className="text-xl font-semibold text-purple-800">Docker</h2>
          </Link>
          <Link href="categories/notes/Python" className="block p-6 bg-purple-100 rounded-lg shadow-md hover:bg-purple-200 transition-colors">
            <h2 className="text-xl font-semibold text-purple-800">Python</h2>
          </Link>
          <Link href="categories/notes/HardwareComponents" className="block p-6 bg-purple-100 rounded-lg shadow-md hover:bg-purple-200 transition-colors">
            <h2 className="text-xl font-semibold text-purple-800">Hardware Components</h2>
          </Link>
          <Link href="categories/notes/AI" className="block p-6 bg-purple-100 rounded-lg shadow-md hover:bg-purple-200 transition-colors">
            <h2 className="text-xl font-semibold text-purple-800">AI and Machine Learning Concepts</h2>
          </Link>
          <Link href="categories/notes/Typescript" className="block p-6 bg-purple-100 rounded-lg shadow-md hover:bg-purple-200 transition-colors">
            <h2 className="text-xl font-semibold text-purple-800">Typescript</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
