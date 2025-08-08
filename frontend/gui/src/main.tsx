import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'; // <-- agrégalo si no está
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Tema
import 'primereact/resources/primereact.min.css';                // Estilos base
import 'primeicons/primeicons.css';                              // Iconos

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
