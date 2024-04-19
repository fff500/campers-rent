import { Link, NavLink } from 'react-router-dom';

import logo from '../../../images/logo.png';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Campers Rent logo" width="64" />
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
