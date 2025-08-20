import { App } from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Clear any existing content
rootElement.innerHTML = '';

// Build the app elements and append them to the root
const appElement = App();
rootElement.appendChild(appElement);
