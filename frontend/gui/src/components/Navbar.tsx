import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LoginModal from "./login/LoginModal";
import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { MdHome } from "react-icons/md";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Detectar cambios de usuario logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Redirige a home al deslogearse
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Agrolab</h1>
      <ul style={styles.ul}>
        {!user ? (
          <>
            <li>
              <Button
                className="p-button-text p-button-rounded"
                onClick={() => navigate("/")}
                aria-label="Home"
              >
                <MdHome size={24} />
              </Button>
            </li>
            <li>
              <Button
                label="Tecnología"
                className="p-button-text"
                onClick={() => navigate("/tecnologia")}
              />
            </li>
            <li>
              <Button
                label="Acerca de"
                className="p-button-text"
                onClick={() => navigate("/acercade")}
              />
            </li>
            <li>
              <DarkModeToggle />
            </li>
            <li>
              <Button label="Login" onClick={() => setShowLogin(true)} />
            </li>
          </>
        ) : (
          <li>
            <Button
              label="Logout"
              className="p-button-danger"
              onClick={handleLogout}
            />
          </li>
        )}
      </ul>

      {/* Modal de Login */}
      {!user && (
        <LoginModal visible={showLogin} onHide={() => setShowLogin(false)} />
      )}
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
    backgroundColor: "white",
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
    alignItems: "center",
  },
};

export default Navbar;
