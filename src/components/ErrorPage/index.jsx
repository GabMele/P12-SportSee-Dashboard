// src/components/ErrorPage/index.jsx

/**
 * @module ErrorPage
 * 
 * @category Visual Components
 * 
 * @description
 * Displays an error page with a customizable error message.
 * 
 * This component relies on translations loaded from the `ERRORPAGE_LABELS` object, 
 * which is sourced from the configuration file (`@/config/translations`). 
 * 
 * The `message` prop is used to display specific error messages:
 * - `"dataNotFound"` will render a specific data error message.
 * - Any other string or null will render a generic error message.
 * 
 * @param {string} [props.message] - A string indicating the specific error type. Accepts `"dataNotFound"` 
 *                                    for a data-related error, or any other string for a generic error.
 * 
 * @returns {JSX.Element} The rendered error page with the error message.
 * 
 */
import styles from './ErrorPage.module.scss';
import { FaRegSadTear } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ERRORPAGE_LABELS } from '@/config/translations';

function ErrorPage({ message }) {
  return (
    <div className={styles.container}>
      <FaRegSadTear size={80} className={`${styles.icon} ${styles.sadIcon}`} />
      <h1 className={styles.title}>
        {ERRORPAGE_LABELS.title}
      </h1>
      <p className={styles.message}>
        {ERRORPAGE_LABELS.error} <br /><br />
        {message === "dataNotFound"
          ? ERRORPAGE_LABELS.dataNotFound 
          : ERRORPAGE_LABELS.errorGeneric}  
      </p>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

export default ErrorPage;
