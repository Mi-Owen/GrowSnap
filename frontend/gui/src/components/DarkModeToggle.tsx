import { useState, useEffect } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import 'primereact/resources/themes/saga-blue/theme.css'; // o el tema que uses
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Aplicar o quitar clase en body cuando cambia darkMode
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span>{darkMode ? '🌙' : '☀️'}</span>
      <InputSwitch checked={darkMode} onChange={(e) => setDarkMode(e.value)} />
    </div>
  );
};

export default DarkModeToggle;
