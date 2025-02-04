// src/components/DataRawDisplay.js
import PropTypes from 'prop-types';

const DataRawDisplay = ({ data, error, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h3>User Raw Data</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Add prop validation
DataRawDisplay.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.object,
    activity: PropTypes.object,
    averageSessions: PropTypes.array,
    performance: PropTypes.array,
  }),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DataRawDisplay;
