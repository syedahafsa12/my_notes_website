

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
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">Docker Notes</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Purpose of Docker</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">What It Does:</strong> Docker helps run apps in special environments called containers. This ensures your app works the same everywhere.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Installing Docker</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Install Docker:</strong> First, install Docker. For Windows, enable WSL (Windows Subsystem for Linux) too.</li>
              <li><strong className="font-semibold">Check Installation:</strong> Type <code>docker --version</code> in your terminal. It should show the Docker version number.</li>
              <li><strong className="font-semibold">Open Docker:</strong> Use Docker software or the Docker extension in VS Code.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Using Docker Without Installing Python Locally</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Python in Docker:</strong> With Docker, you can run Python inside containers without installing Python on your computer.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Creating a Dockerfile</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Dockerfile Example:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`FROM python
COPY . .
CMD ["python", "main.py"]`}
                </pre>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Building and Running Images</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Build Image:</strong> Use <code>docker build -t python-test .</code> to create an image named <code>python-test</code>.</li>
              <li><strong className="font-semibold">Run Container:</strong> Use <code>docker run python-test</code>. For interactive mode, use <code>docker run -it python-test</code>.</li>
              <li><strong className="font-semibold">Open Bash:</strong> Use <code>docker run -it [image ID] bash</code> to open a bash session inside the container.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Managing Containers and Images</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Delete Container and Image:</strong> First delete the container using <code>docker container rm [container ID]</code>, then the image using <code>docker image rm [image ID]</code>.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Managing Dependencies with Poetry</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Install Poetry:</strong> Use <code>pip install poetry</code> to install it. Poetry helps manage project dependencies.</li>
              <li><strong className="font-semibold">Configure Dependencies:</strong> Use <code>pyproject.toml</code> to list dependencies for your project.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Handling Code Changes</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Rebuild Image:</strong> After changing your code, rebuild the Docker image with <code>docker build -t [new-image-name] .</code> to include updates.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Viewing Files in Container</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Access Files:</strong> Open a bash session with <code>docker exec -it [container ID] bash</code> to see files inside the container.</li>
              <li><strong className="font-semibold">Commands:</strong>
                <ul className="list-inside list-disc mt-2">
                  <li><code>ls</code> to list files.</li>
                  <li><code>cat</code> to view file contents.</li>
                  <li><code>clear</code> instead of <code>cls</code> in Linux terminals.</li>
                  <li><code>exit</code> to exit the container session.</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Notes);
