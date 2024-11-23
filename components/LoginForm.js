import { useState } from "react";
import axios from "../services/api";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/auth/login", { email, password });
      console.log("Respuesta del backend:", data);

      // Extraer el roleId del usuario
      const roleId = data.user.roleId;

      // Guardar el token en localStorage
      localStorage.setItem("token", data.token);

      // Redirigir al usuario según su roleId
      if (roleId === 1) {
        router.push("/user"); // Redirige a la página del usuario
      } else if (roleId === 2) {
        router.push("/admin"); // Redirige a la página del administrador
      } else {
        setError("Role not recognized"); // Rol no válido
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError(err.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
}
