import { Link } from 'react-router-dom';
import styles from './Header.module.scss'; // Import the SCSS module
import logoSportSee from '@/assets/logoSportSee.png';

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logoSportSee} className={styles.logo} alt="Logo SportSee" />
        <nav className={styles.nav}>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profil</Link>
            </li>
            <li>
                <Link to="/settings">Réglage</Link>
            </li>
            <li>
                <Link to="/community">Communauté</Link>
            </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
