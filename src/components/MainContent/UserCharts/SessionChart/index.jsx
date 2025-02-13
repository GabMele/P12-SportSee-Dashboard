// src/components/MainContent/UserCharts/Charts/SessionChart.jsx

/**
 * @module SessionChart
 * @category Visual Components
 * 
 * @description
 * The `SessionChart` component renders a line chart to visualize the length of 
 * activity sessions over a series of days. The chart uses `recharts` to 
 * display the session lengths in minutes, with each point representing the 
 * duration of the session for a given day. The chart includes a custom tooltip 
 * that displays the session length when hovered over.
 * 
 * @component
 * @example
 * const sessionData = [
 *   { day: "M", sessionLength: 30 },
 *   { day: "T", sessionLength: 45 },
 *   { day: "W", sessionLength: 50 },
 *   // More sessions...
 * ];
 * 
 * return <SessionChart sessionData={sessionData} />;
 * 
 * @returns {JSX.Element} The rendered SessionChart component
 */
import { PropTypes } from "prop-types";
import { sessionDataType } from "../chartPropTypes";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { COLORS } from "@/config";
import { SMALL_CHART_WIDTH, SMALL_CHART_HEIGHT } from '@/config';
import styles from "./SessionChart.module.scss";

/**
 * Custom Tooltip component that displays the session length in minutes
 * when hovering over a data point in the chart.
 *
 * @param {Object} props - The component props
 * @param {boolean} props.active - Indicates whether the tooltip is active
 * @param {Array} props.payload - The data associated with the tooltip
 * @returns {JSX.Element|null} The rendered tooltip or null if inactive
 */
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

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ),
};

const SessionChart = ({ sessionData }) => (
  <div className={styles.sessionChartContainer}>
    <LineChart 
      data={sessionData} 
      margin={{ top: 10, right: 10, bottom: 0, left: 10 }}
      width={SMALL_CHART_WIDTH} 
      height={SMALL_CHART_HEIGHT}
    >
      <XAxis dataKey="day" tick={{ fill: COLORS.TERTIARY }} />
      <YAxis hide />
      <Tooltip content={<CustomTooltip />} />
      <Line 
        type="monotone" 
        dataKey="sessionLength"
        stroke={COLORS.TERTIARY} 
        strokeWidth={2} 
      />
    </LineChart>
  </div>
);

SessionChart.propTypes = {
  sessionData: sessionDataType
};

export default SessionChart;
