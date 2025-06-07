import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dashboard/AdminLogin.css"

import logo from "/img/logo-violeta.png"
import leftImg from "/img/consultorio.jpg";

import { toast } from "react-toastify";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const res = await fetch("https://backend-cios.onrender.com/api/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await res.json();
  //     if (!res.ok) return setError(data.message || "Error al iniciar sesión");

  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("user", JSON.stringify(data.user));
  //     navigate("/dashboard");
  //   } catch (err) {
  //     console.error(err);
  //     setError("Error del servidor");
  //   }
  // };



  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Mostrar el toast de "Cargando..."
    toast.info("Iniciando Sesion", {
      autoClose: false, // No se cierra automáticamente
      closeOnClick: false, // No se cierra al hacer click
      draggable: false, // No es arrastrable
    });

    try {
      const res = await fetch("https://backend-cios.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Error al iniciar sesión");
        toast.dismiss(); // Cerrar el toast de cargando
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");

      toast.dismiss(); // Cerrar el toast de cargando
    } catch (err) {
      console.error(err);
      setError("Error del servidor");
      toast.dismiss(); // Cerrar el toast de cargando
    }
  };
  return (
    <div className="admin-login-wrapper_765584">
      {/* Columna izquierda */}
      <div className="admin-login-image_765584">
        <img src={leftImg} alt="Consultorio dental" />
      </div>

      {/* Columna derecha */}
      <div className="admin-login-container_765584">
        <img src={logo} alt="Logo" className="admin-login-logo_765584" />
        <div>
          <h2 className="admin-login-title_765584">Iniciar Sesión</h2>

          <p className="admin-login-subtext_765584">
            Bienvenido al panel de administración del consultorio.<br />
            Por favor inicia sesión
          </p>
        </div>


        <form onSubmit={handleLogin} className="admin-login-form_765584">
          <label htmlFor="email">Ingresa tu email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="admin-login-input_765584"
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-login-input_765584"
            required
          />
          <button type="submit" className="admin-login-button_765584">
            Iniciar Sesión
          </button>
          {error && <p className="admin-login-error_765584">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
