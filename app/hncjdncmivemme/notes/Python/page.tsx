"use client";

import { useRouter } from 'next/navigation';
import withAuth from '@/app/components/withAuth'; // Adjust the path if needed

const Notes: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">My Notes</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Python</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Name the file:</strong> hello.py</li>
              <li><strong className="font-semibold">To run the file:</strong> py hello.py</li>
              <li><strong className="font-semibold">To print:</strong> <code>print(&apos;hello&apos;)</code></li>
              <li><strong className="font-semibold">Environment Creation:</strong></li>
              <ul className="list-inside list-disc mt-2">
                <li><code>conda create -n python12 python==3.12 -y</code> (Write all these commands in anaconda terminal 
                Here you can add any other name instead of python12, in every folder)</li>
                <li><code>conda activate python12</code> (This will change the folder name from (base) to (python12))</li>
              </ul>
              <li><strong className="font-semibold">Make requirements.txt file:</strong> In the root folder, not in any subfolder</li>
              <li><strong className="font-semibold">requirements.txt:</strong></li>
              <ul className="list-inside list-disc mt-2">
                <li>numpy</li>
                <li>pandas</li>
                <li>jupyter</li>
                <li>mypy</li>
              </ul>
              <li><strong className="font-semibold">Install requirements:</strong> <code>pip install -r requirements.txt</code></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Notes);
