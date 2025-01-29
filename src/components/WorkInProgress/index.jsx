// sportsee-frontend/src/components/WorkInProgress/index.jsx
import PropTypes from 'prop-types';
import styles from './WorkInProgress.module.scss';

const WorkInProgress = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children && (
          <div className={styles.additionalContent}>
            {children}
          </div>
        )}
        <div className={styles.wipMessage}>
          <p>🚧 Cette page n&apos;est pas disponible pour l&apos;instant 🚧</p>
        </div>
      </div>
    </div>
  );
};

WorkInProgress.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default WorkInProgress;