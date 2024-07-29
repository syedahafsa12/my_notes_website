"use client";

import { useRouter } from 'next/navigation';
import withAuth from '@/app/components/withAuth'; // Adjust the path if needed
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react';

const AIPage: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    router.push('/login');
  };

  const data:any = {
    "Deep Learning": {
      "title": "Deep Learning",
      "items": [
        { "title": "What It Is", "description": "A way for computers to learn from data using neural networks." },
        {
          "title": "Characteristics",
          "items": [
            { "title": "Learns by Itself", "description": "Neural networks improve by themselves." },
            { "title": "Generative AI", "description": "A type of deep learning that creates new data similar to what it was trained on." }
          ]
        }
      ]
    },
    "LLM": {
      "title": "LLM (Large Language Model)",
      "items": [
        { "title": "What It Is", "description": "Models that understand and generate text like humans." },
        { "title": "Use", "description": "Helps in creating content, answering questions, and making intelligent responses." }
      ]
    },
    "Applied Generative AI": {
      "title": "Applied Generative AI",
      "items": [
        { "title": "What It Is", "description": "Using generative AI in specific areas." },
        { "title": "Characteristics", "description": "Tailors AI to do special tasks and produce specific results." }
      ]
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">AI and Machine Learning</h1>
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
                {data[key].items.map((item: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; items: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }[]; }, index: Key | null | undefined) => (
                  <li key={index}>
                    <strong className="font-semibold">{item.title}:</strong> {item.description}
                    {item.items && (
                      <ul className="list-inside list-disc mt-2">
                        {item.items.map((subItem: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, subIndex: Key | null | undefined) => (
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
          <section className="bg-white p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Additional Notes</h2>
  <ul className="list-disc pl-5 text-gray-800">
    <li><strong className="font-semibold">Custom GPT:</strong> Made to fit your specific needs and likes.</li>
    <li><strong className="font-semibold">AQ (Action Quotient):</strong> How well you deal with real-life situations.</li>
    <li><strong className="font-semibold">FastAPI vs Django:</strong> FastAPI is for making APIs, Django is for building complete websites.</li>
    <li><strong className="font-semibold">Computer Power:</strong> Includes the CPU (brain of the computer) and RAM (short-term memory).</li>
    <li><strong className="font-semibold">CUI vs GUI:</strong> CUI is for talking with the computer, GUI is for clicking on pictures and buttons.</li>
    <li><strong className="font-semibold">IQ, EQ, AQ:</strong> IQ is smartness, EQ is handling emotions, AQ is taking action.</li>
    <li><strong className="font-semibold">LLM Interaction:</strong> Talk to Large Language Models (LLMs) using prompts or questions.</li>
  </ul>
</section>

        </div>
      </div>
    </div>
  );
};

export default withAuth(AIPage);
