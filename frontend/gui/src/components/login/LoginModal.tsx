import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Message } from 'primereact/message';

interface LoginModalProps {
  visible: boolean;
  onHide: () => void;
  onLogin?: (credentials: { email: string; password: string; rememberMe: boolean }) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible, onHide, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    // Validación básica
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onLogin) {
        onLogin({ email, password, rememberMe });
      }
      
      // Limpiar formulario
      setEmail('');
      setPassword('');
      setRememberMe(false);
      onHide();
    } catch (err) {
      setError('Error al iniciar sesión. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
    setError('');
    onHide();
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '1.5rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 0.5rem 0'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#666',
    margin: '0'
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  };

  const fieldGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#333'
  };

  const checkboxContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const checkboxLabelStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#555',
    cursor: 'pointer'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem'
  };

  const linkStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666'
  };

  const linkButtonStyle: React.CSSProperties = {
    color: '#007ad9',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: '500'
  };

  return (
    <Dialog
      visible={visible}
      onHide={handleClose}
      modal
      closable
      draggable={false}
      resizable={false}
      style={{ width: '90vw', maxWidth: '400px' }}
      contentStyle={{ padding: '2rem' }}
      header={null}
      className="login-modal"
    >
      <div>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Iniciar Sesión</h2>
          <p style={subtitleStyle}>Accede a tu cuenta para continuar</p>
        </div>

        {/* Error Message */}
        {error && (
          <Message 
            severity="error" 
            text={error} 
            style={{ width: '100%', marginBottom: '1rem' }}
          />
        )}

        {/* Form */}
        <div style={formStyle}>
          {/* Email Field */}
          <div style={fieldGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
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

          {/* Password Field */}
          <div style={fieldGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
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

          {/* Remember Me Checkbox */}
          <div style={checkboxContainerStyle}>
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.checked || false)}
              disabled={loading}
            />
            <label htmlFor="rememberMe" style={checkboxLabelStyle}>
              Recordarme
            </label>
          </div>

          {/* Buttons */}
          <div style={buttonContainerStyle}>
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

        {/* Footer Links */}
        <div style={linkStyle}>
          <p style={{ margin: '1.5rem 0 0.5rem 0' }}>
            ¿Olvidaste tu contraseña?{' '}
            <span style={linkButtonStyle}>
              Recuperar contraseña
            </span>
          </p>
          <p style={{ margin: '0.5rem 0 0 0' }}>
            ¿No tienes cuenta?{' '}
            <span style={linkButtonStyle}>
              Crear cuenta
            </span>
          </p>
        </div>
      </div>
    </Dialog>
  );
};

// Componente de ejemplo para mostrar cómo usar el LoginModal
const LoginModalExample: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (credentials: { email: string; password: string; rememberMe: boolean }) => {
    console.log('Login credentials:', credentials);
    // Aquí harías la lógica de autenticación real
    alert(`Bienvenido! Email: ${credentials.email}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button 
        label="Ingresar" 
        onClick={() => setShowLogin(true)}
        severity="info"
        size="large"
      />
      
      <LoginModal
        visible={showLogin}
        onHide={() => setShowLogin(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default LoginModalExample;