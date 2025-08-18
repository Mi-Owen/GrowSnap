import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Message } from "primereact/message";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../lib/firebase";

interface LoginModalProps {
  visible: boolean;
  onHide: () => void;
  onLogin?: (credentials: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  visible,
  onHide,
  onLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor ingresa un email válido");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Persistencia según "Recordarme"
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );

      // 🔹 Autenticación real con Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Usuario autenticado:", userCredential.user);

      if (onLogin) {
        onLogin({ email, password, rememberMe });
      }

      navigate("/index");

      // Limpiar formulario y cerrar modal
      setEmail("");
      setPassword("");
      setRememberMe(false);
      onHide();
    } catch (err: any) {
      console.error(err);
      switch (err.code) {
        case "auth/user-not-found":
          setError("No existe un usuario con ese email");
          break;
        case "auth/wrong-password":
          setError("Contraseña incorrecta");
          break;
        default:
          setError("Error al iniciar sesión. Inténtalo de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setRememberMe(false);
    setError("");
    onHide();
  };

  return (
    <Dialog
      visible={visible}
      onHide={handleClose}
      modal
      closable
      draggable={false}
      resizable={false}
      style={{ width: "90vw", maxWidth: "400px" }}
      contentStyle={{ padding: "2rem" }}
      header={null}
      className="login-modal"
    >
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#333" }}>
          Iniciar Sesión
        </h2>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          Accede a tu cuenta para continuar
        </p>
      </div>

      {error && (
        <Message
          severity="error"
          text={error}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {/* Email */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label
            htmlFor="email"
            style={{ fontSize: "0.9rem", fontWeight: 500, color: "#333" }}
          >
            Email
          </label>
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full"
            disabled={loading}
          />
        </div>

        {/* Password */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label
            htmlFor="password"
            style={{ fontSize: "0.9rem", fontWeight: 500, color: "#333" }}
          >
            Contraseña
          </label>
          <Password
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Tu contraseña"
            className="w-full"
            inputClassName="w-full"
            feedback={false}
            toggleMask
            disabled={loading}
          />
        </div>

        {/* Remember Me */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.checked || false)}
            disabled={loading}
          />
          <label
            htmlFor="rememberMe"
            style={{ fontSize: "0.9rem", color: "#555", cursor: "pointer" }}
          >
            Recordarme
          </label>
        </div>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Button
            type="button"
            label={loading ? "Iniciando..." : "Iniciar Sesión"}
            loading={loading}
            className="w-full"
            severity="info"
            size="large"
            onClick={handleSubmit}
          />
          <Button
            type="button"
            label="Cancelar"
            onClick={handleClose}
            className="w-full"
            outlined
            severity="secondary"
            disabled={loading}
          />
        </div>
      </div>

      
    </Dialog>
  );
};

export default LoginModal;
