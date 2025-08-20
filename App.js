export function App() {
  const main = document.createElement('main');
  main.className = 'flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black';

  const textContainer = document.createElement('div');
  textContainer.className = 'text-center';
  main.appendChild(textContainer);

  const h1 = document.createElement('h1');
  h1.className = 'text-6xl md:text-8xl font-extrabold text-white tracking-tighter';
  textContainer.appendChild(h1);

  const span = document.createElement('span');
  span.className = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300';
  span.textContent = 'Hello World';
  h1.appendChild(span);

  const p = document.createElement('p');
  p.className = 'mt-4 text-lg md:text-xl text-gray-400';
  p.textContent = 'Welcome to your vanilla JavaScript application.';
  textContainer.appendChild(p);

  const aloha = document.createElement('p');
  aloha.className = 'mt-8 text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600';
  aloha.textContent = 'Aloha';
  textContainer.appendChild(aloha);

  return main;
};