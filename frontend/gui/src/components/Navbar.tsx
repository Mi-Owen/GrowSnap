//import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import LoginModalExample from './login/LoginModal';

const Navbar = () => {
  //const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Agrolab</h1>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/index" style={styles.link}>Index</Link></li>
        <li>
          <DarkModeToggle/>
        </li>
        <li>
          <LoginModalExample/>
        </li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
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
  link: {
    textDecoration: "none"
  }
};

export default Navbar;
