import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import LoginModalExample from './login/LoginModal';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Agrolab</h1>
      <ul style={styles.ul}>
        <li>
          <Button label="Home" className="p-button-text" onClick={() => navigate('/')} />
        </li>
        <li>
          <Button label="Index" className="p-button-text" onClick={() => navigate('/index')} />
        </li>
         <li>
          <Button label="Tecnología" className="p-button-text" onClick={() => navigate('/tecnología')} />
        </li>
         <li>
          <Button label="Acerca de" className="p-button-text" onClick={() => navigate('/acerca')} />
        </li>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <LoginModalExample />
        </li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backgroundColor: 'white',
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  title: { margin: 0 },
  ul: {
    display: "flex",
    listStyle: "none",
    gap: "1rem",
    margin: 0,
    padding: 0,
    alignItems: "center"
  },
};

export default Navbar;
