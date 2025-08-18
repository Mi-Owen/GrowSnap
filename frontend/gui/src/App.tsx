import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./lib/firebase";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Tecnologia from "./pages/Tecnologia";
import Acercade from "./pages/Acercade";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/acercade" element={<Acercade />} />
      </Routes>
    </Router>
  );
};

export default App;
