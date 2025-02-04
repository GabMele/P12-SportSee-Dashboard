// src/components/MainContent/UserCharts/Charts/SessionChart.jsx
import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { COLORS }from "@/config";
import { SMALL_CHART_WIDTH, SMALL_CHART_HEIGHT } from '@/config';
import styles from "./SessionChart.module.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: COLORS.TERTIARY, color: COLORS.SECONDARY, padding: "5px", borderRadius: "5px" }}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

// ✅ Add PropTypes validation for CustomTooltip
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ),
};

const SessionChart = ({ sessionData }) => {
  return (
    <div className={styles.sessionChartContainer}>
      <ResponsiveContainer 
        width={SMALL_CHART_WIDTH} 
        height={SMALL_CHART_HEIGHT - 20} 
        className="chart"> 
        <LineChart data={sessionData}>
          <XAxis dataKey="day" tick={{ fill: COLORS.TERTIARY }} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" 
            dataKey="sessionLength" 
            stroke={COLORS.TERTIARY} 
            strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// ✅ Add PropTypes validation for SessionChart
SessionChart.propTypes = {
  sessionData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SessionChart;
