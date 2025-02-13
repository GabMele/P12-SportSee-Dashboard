// src/components/Header/index.jsx

/**
 * @module Header
 * 
 * @category Visual Components
 * 
 * @description
 * Renders the header of the application.
 * 
 * The header includes:
 * - A logo for branding.
 * - A navigation menu with links to different sections of the app.
 * 
 * @returns {JSX.Element} The header component.
 */

import { Link } from 'react-router-dom';
import styles from './Header.module.scss'; // Import the SCSS module
import logoSportSee from '@/assets/logoSportSee.png';

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logoSportSee} className={styles.logo} alt="Logo SportSee" />
        <nav className={styles.nav} aria-label="Navigation principale">
            <ul role="list">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/profile">Profil</Link></li>
                <li><Link to="/settings">Réglage</Link></li>
                <li><Link to="/community">Communauté</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
