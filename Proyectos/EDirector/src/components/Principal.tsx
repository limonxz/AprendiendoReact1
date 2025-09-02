import { type JSX } from "react";
import { useMsal } from "@azure/msal-react";

import { customerConfig } from "../configs/customerConfig.ts";

// Importa un archivo CSS si es necesario para los estilos personalizados
import styles from "./styles/Principal.module.css";

// Tipamos el componente como un Functional Component (React.FC)
function MainComponent(): JSX.Element {
  const { instance, accounts } = useMsal();

  // Tipamos el manejador de eventos con 'void'
  const handleLogout = (): void => {
    // Lógica para cerrar la sesión
    instance.logoutPopup();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainCard}>
        <div className={styles.cardRow}>
          <div className={styles.logoSection}>
            <img
              src={customerConfig.logoCliente.src}
              alt={customerConfig.logoCliente.alt}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.contentSection}>
            <div className={styles.cardBody}>
              <h2 className={styles.title}>
                ¡Hola, {accounts?.[0]?.username}!{" "}
              </h2>
              <p>Has iniciado sesión correctamente.</p>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
