import { useState, type ChangeEvent, type JSX } from "react";
import { useMsal } from "@azure/msal-react";

import { customerConfig } from "../configs/customerConfig.ts";
import { loginRequest } from "../configs/authConfigs.ts";

// Importa un archivo CSS si es necesario para los estilos personalizados
import styles from "./styles/Login.module.css";

function Login(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { instance } = useMsal();

  const handleLogin = (): void => {
    // Lógica para login con usuario y contraseña
    console.log("Login con usuario:", username, "y contraseña");
  };

  const handleSsoLogin = async (): Promise<void> => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during SSO login:", error.message);
      } else {
        console.error("Unknown error during SSO login:", error);
      }
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginCard}>
        <div className={styles.cardRow}>
          <div className={styles.logoSection}>
            <img
              src={customerConfig.logoCliente.src}
              alt={customerConfig.logoCliente.alt}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.formSection}>
            <div className={styles.formBody}>
              <h2 className={styles.formTitle}>{customerConfig.title}</h2>
              <div className={styles.inputGroup}>
                <label htmlFor="username">Usuario</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Usuario"
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Contraseña"
                />
              </div>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleLogin}
              >
                Entrar
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={handleSsoLogin}
              >
                Iniciar sesión con SSO
              </button>
              <img
                src={customerConfig.logoPrincipal.src}
                alt={customerConfig.logoPrincipal.alt}
                className={styles.footerLogoImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
