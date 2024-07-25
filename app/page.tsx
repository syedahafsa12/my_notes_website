import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
          Welcome to My Notes Website
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          <a href="https://www.linkedin.com/in/syedahafsa12/" target="_blank"><span className="font-semibold text-purple-600"> Created by Syeda Hafsa</span></a>
        </p>
        <Link href="/login">
          <p className="inline-block mt-2 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors">
            Login
          </p>
        </Link>
        
      </div>
      
    </div>
  );
};
export default Home;
