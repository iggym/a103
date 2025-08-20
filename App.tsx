
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            Hello World
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Welcome to your first React & TypeScript application.
        </p>
      </div>
    </main>
  );
};

export default App;
