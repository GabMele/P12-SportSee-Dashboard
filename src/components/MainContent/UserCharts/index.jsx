// src/components/MainContent/UserCharts/index.jsx
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  RadialBarChart, RadialBar, LineChart, Line,
  ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";
import styles from "./UserCharts.module.scss";


const UserCharts = ({ activityData, scoreData, sessionData, performanceData }) => (
    <div className={styles.charts}>

      {/* Activity chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={activityData.sessions}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>

      {/* Score chart */}
      <ResponsiveContainer width="100%" height={250}>
        <RadialBarChart innerRadius="70%" outerRadius="90%" 
          data={[{ name: "Score", value: scoreData * 100, fill: "#E60000" }]}
        >
          <RadialBar minAngle={15} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Session chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={sessionData}>
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" 
            stroke="#FF0000" strokeWidth={2} 
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Performance chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={performanceData}>
          <XAxis dataKey="kind" />
          <YAxis hide />
          <Tooltip />
          <Tooltip />
          <Line type="monotone" dataKey="value" 
          stroke="#FF0000" strokeWidth={2} 
          />
          </LineChart>
      </ResponsiveContainer>
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
