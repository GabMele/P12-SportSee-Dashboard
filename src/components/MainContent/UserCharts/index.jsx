import PropTypes from "prop-types";
import ActivityChart from "./ActivityChart";
import ScoreChart from "./ScoreChart";
import SessionChart from "./SessionChart";
import PerformanceChart from "./PerformanceChart";
import styles from "./UserCharts.module.scss";

const UserCharts = ({ activityData, scoreData, sessionData, performanceData }) => (
  <div className={styles.chartsContainer}>
    <div className={styles.chartsFullWidthRow}>
      <div className={styles.chartContainer}>
        <ActivityChart activityData={activityData} />
      </div>
    </div>
    <div className={styles.chartsSmallsRow}>
      <div className={styles.chartContainer}>
        <SessionChart sessionData={sessionData} />
      </div>
      <div className={styles.chartContainer}>
        <PerformanceChart performanceData={performanceData} />
      </div>
      <div className={styles.chartContainer}>
        <ScoreChart scoreData={scoreData} />
      </div>
    </div>
  </div>
);

UserCharts.propTypes = {
  activityData: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
  }).isRequired,
  scoreData: PropTypes.number.isRequired,
  sessionData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
};

export default UserCharts;
