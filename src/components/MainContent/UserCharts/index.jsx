/**
 * @module UserCharts
 * @category Layout Components
 * 
 * @description
 * The UserCharts component aggregates multiple charts as sub components that 
 * display user-related data: it embeds various child components like ActivityChart,
 * PerformanceChart, SessionChart, and ScoreChart to visualize the user's data.
 * 
 * The props required for this component are detailed in the `chartPropTypes.js` 
 * file, which includes structures for activity data, session data, performance 
 * metrics, and score data.
 * 
 * @see PropTypes chartPropTypes.js file for props documentation
 * 
 * @returns {JSX.Element} A component that renders multiple charts displaying 
 * user data.
 */

import { sessionDataType, activityDataType, scoreDataType, 
  performanceDataType } from "./chartPropTypes";
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
  activityData: activityDataType,
  sessionData: sessionDataType,
  performanceData: performanceDataType,
  scoreData: scoreDataType,
};

export default UserCharts;
