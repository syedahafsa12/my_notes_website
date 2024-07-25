"use client";

import { useRouter } from 'next/navigation';
import withAuth from '@/app/components/withAuth'; // Adjust the path if needed
import { ReactElement, Key } from 'react';

interface DataItem {
  title: string;
  description?: string;
  items?: DataItem[];
}

const data: { [key: string]: DataItem } = {
  CPU: {
    title: "CPU (Central Processing Unit)",
    items: [
      { title: "What It Is", description: "The brain of the computer." },
      {
        title: "Four Basic Jobs",
        items: [
          { title: "Fetch", description: "Get the instructions." },
          { title: "Decode", description: "Understand what to do." },
          { title: "Execute", description: "Do the task." },
          { title: "Store", description: "Save the results." }
        ]
      }
    ]
  },
  GPU: {
    title: "GPU (Graphics Processing Unit)",
    items: [
      { title: "What It Is", description: "Specially made for graphics and high-resolution tasks." },
      { title: "Basic Work", description: "Handles gaming and high-quality images quickly." },
      { title: "Example", description: "Gaming might take 5 minutes; on a CPU, it could take 50 hours." },
      {
        title: "Characteristics",
        items: [
          { title: "Handles Many Tasks Together", description: "Good at doing many things at once." },
          { title: "Used in AI", description: "Helps with fast number processing for AI tasks." }
        ]
      }
    ]
  },
  NPU: {
    title: "NPU (Neural Processing Unit)",
    items: [
      { title: "What It Is", description: "Special chip for machine learning and AI." },
      { title: "Basic Work", description: "Speeds up tasks like text processing in AI." },
      {
        title: "Characteristics",
        items: [
          { title: "Power Efficient", description: "Uses less power compared to CPUs." },
          { title: "Long Battery Life", description: "Devices with NPU (e.g., M1, M2 chips) can last 20 hours on battery." },
          { title: "Role", description: "Makes machine learning faster and more efficient." }
        ]
      }
    ]
  }
};

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
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">Hardware Components</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-8">
          {Object.keys(data).map((key) => (
            <section key={key} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">{data[key].title}</h2>
              <ul className="list-disc pl-5 text-gray-800">
                {data[key].items?.map((item, index) => (
                  <li key={index}>
                    <strong className="font-semibold">{item.title}:</strong> {item.description}
                    {item.items && (
                      <ul className="list-inside list-disc mt-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <strong className="font-semibold">{subItem.title}:</strong> {subItem.description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Notes);
