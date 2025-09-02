import React, { useState, type JSX } from "react";
import styles from "./styles/Menu.module.css";

import SubMenu from "./SubMenu.tsx";

import { type Pagina } from "../configs/menuConfig.ts";
import { customerConfig } from "../configs/customerConfig.ts";

interface MenuProps {
  user: string;
  menuCompleto: Pagina[];
}

const Menu: React.FC<MenuProps> = ({ user, menuCompleto }): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menuItem: string) => {
    setActiveMenu(menuItem);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.logo}>
          <img
            src={customerConfig.logoPrincipal.src}
            alt={customerConfig.logoPrincipal.alt}
          />
        </div>
        <ul className={styles.navLinks}>
          {menuCompleto.map((menuItem) => (
            <li
              key={menuItem.id}
              onMouseEnter={() => handleMouseEnter(menuItem.nombre)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={menuItem.url}>{menuItem.nombre}</a>
              {/* Renderiza el SubMenu solo si tiene hijos y está activo */}
              {menuItem.hijos && activeMenu === menuItem.nombre && (
                <SubMenu items={menuItem.hijos} />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <span className={styles.userInfo}>{user} | Salir</span>
      </div>
    </nav>
  );
};

export default Menu;
