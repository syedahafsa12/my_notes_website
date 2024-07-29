

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login: React.FC = () => {
  const [secretKey, setSecretKey] = useState('');
  const [error, setError] = useState('');
  const [showSecretKey, setShowSecretKey] = useState(false); // State to toggle visibility
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Example secret key check (replace with your actual authentication logic)
    const correctSecretKey = 'syedahafsa12@'; // Replace with your actual secret key

    if (secretKey !== correctSecretKey) {
      setError('Incorrect secret key. Please try again.');
      return;
    }

    // Clear the error and redirect if the secret key is correct
    setError('');
    sessionStorage.setItem('authenticated', 'true');

    // Redirect to the notes page with a default category
    router.push('/hncjdncmivemme'); // Adjust the path as needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="relative mb-4">
            <label htmlFor="secretKey" className="block text-gray-700 text-sm md:text-base font-medium mb-2">
              Secret Key
            </label>
            <input
              type={showSecretKey ? 'text' : 'password'} // Toggle between text and password
              id="secretKey"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowSecretKey(!showSecretKey)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showSecretKey ? (
                <EyeSlashIcon className="h-5 w-5 mt-8 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 mt-8 text-gray-500" />
              )}
            </button>
          </div>
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded-md">
              <p className="text-sm">{error}</p>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
