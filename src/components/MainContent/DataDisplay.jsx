import PropTypes from 'prop-types';
import styles from './MainContent.module.scss';

const DataDisplay = ({ userData, userActivity, userAverageSession, userPerformance, error }) => {
  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.debug}>
      <h2>Debug Data:</h2>
      <pre>User Data: {JSON.stringify(userData, null, 2)}</pre>
      <pre>User Activity: {JSON.stringify(userActivity, null, 2)}</pre>
      <pre>User Average Sessions: {JSON.stringify(userAverageSession, null, 2)}</pre>
      <pre>User Performance: {JSON.stringify(userPerformance, null, 2)}</pre>
    </div>
  );
};

DataDisplay.propTypes = {
  userData: PropTypes.object,
  userActivity: PropTypes.object,
  userAverageSession: PropTypes.object,
  userPerformance: PropTypes.object,
  error: PropTypes.string,
};

export default DataDisplay;
