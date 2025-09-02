import React, { type JSX } from 'react';
import styles from './styles/SubMenu.module.css';

// Reusa la interfaz Pagina del archivo de configuración
export interface Pagina {
  id: number;
  nombre: string;
  url: string;
  hijos?: Pagina[];
}

interface SubMenuProps {
  items: Pagina[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }): JSX.Element => {
  return (
    <ul className={styles.subMenu}>
      {items.map((item) => (
        <li key={item.id} className={styles.subMenuItem}>
          <a href={item.url}>{item.nombre}</a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;