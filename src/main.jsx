import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './Home.jsx';  

console.log('Index.js is rendering');  

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
