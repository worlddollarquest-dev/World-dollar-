// Ensure window.fetch has a setter if an injected environment script or dev tool reassigns it
try {
  if (typeof window !== 'undefined') {
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch') ||
                 Object.getOwnPropertyDescriptor(Window.prototype, 'fetch');
    if (!desc || !desc.set) {
      let currentFetch = window.fetch ? window.fetch.bind(window) : undefined;
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        enumerable: true,
        get: () => currentFetch,
        set: (newFetch) => {
          currentFetch = newFetch;
        },
      });
    }
  }
} catch {
  // Silent fallback
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
