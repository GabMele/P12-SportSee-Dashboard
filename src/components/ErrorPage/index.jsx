/**
 * Displays a 404 error page with a message and a link to the homepage.
 * 
 * @returns {JSX.Element} The error page layout.
 */
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';
import PropTypes from 'prop-types';
import { ERRORPAGE_LABELS } from '@/config/translations';

function ErrorPage({ message }) {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorPage__title}>
        {ERRORPAGE_LABELS.title}
      </h1>
      <p className={styles.errorPage__message}>
        {ERRORPAGE_LABELS.error} <br /><br />
        {message === "dataNotFound" 
          ? ERRORPAGE_LABELS.dataNotFound 
          : ERRORPAGE_LABELS.errorgeneric}  
        </p>
      <Link to="/" className={styles.errorPage__link}>
        {ERRORPAGE_LABELS.gobackhome}
      </Link>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};


export default ErrorPage;
