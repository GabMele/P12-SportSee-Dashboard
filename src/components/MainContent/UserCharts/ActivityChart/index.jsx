// src/components/MainContent/UserCharts/ActivityChart/index.jsx
import PropTypes from "prop-types";
import { ResponsiveContainer, 
    BarChart, Bar,
    XAxis, YAxis, 
    CartesianGrid, 
    Tooltip, Legend 
} from "recharts";
import COLORS from "@/config/colors";
import CONFIG from "@/config/constants";
import styles from "./ActivityChart.module.scss";

const { CHARTS_LABELS } = CONFIG;
const barWidth = 8;
const radius = [10, 10, 0, 0];

const ActivityChart = ({ activityData }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h3>{CHARTS_LABELS["activity"]}</h3>
    </div>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart 
        data={activityData.sessions} 
        barGap={8}
        >
        <XAxis dataKey="day" />
        {/* Left Y-Axis for Kilograms (Hidden) */}
        <YAxis 
          yAxisId="left" 
          axisLine={false}  // Hide the axis line
          tick={false}      // Hide the ticks/labels
        />
        {/* Right Y-Axis for Calories */}
        <YAxis 
          yAxisId="right" 
          orientation="right"
          tickFormatter={(value) => `${value}`} />
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <Legend 
          layout="horizontal" 
          align="right" 
          verticalAlign="top"
          wrapperStyle={{
            position: 'absolute', 
            top: -30,      
            right: 20,         
        }}
          iconType="circle" 
          iconSize={8}
          formatter={(value) => 
            value === "kilogram" 
            ? `${CHARTS_LABELS["weight"]} (kg)` 
            : `${CHARTS_LABELS["calories"]} (kCal)` 
          }
        />
        <Tooltip />
        <Bar dataKey="kilogram" fill={COLORS.SECONDARY} barSize={barWidth} radius={radius} yAxisId="right"/>
        <Bar dataKey="calories" fill={COLORS.PRIMARY} barSize={barWidth} radius={radius} yAxisId="left"/>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

ActivityChart.propTypes = {
  activityData: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
  }).isRequired,
};

export default ActivityChart;
