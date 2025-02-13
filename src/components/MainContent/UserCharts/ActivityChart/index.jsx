// src/components/MainContent/UserCharts/ActivityChart/index.jsx

/**
 * @module ActivityChart
 * @category Visual Components
 * 
 * @description
 * The ActivityChart component renders a bar chart that displays activity data 
 * such as weight (kilograms) and calories burned during sessions. It uses 
 * recharts to visualize the data, showing two bars per session.
 * 
 * The labels for the chart are dynamically loaded from the CHARTS_LABELS 
 * configuration, allowing for easy updates and localization.
 * 
 * @see PropTypes definition for detailed props documentation
 * 
 * @example
 * const activityData = {
 *   sessions: [
 *     { day: 1, kilogram: 70, calories: 300 },
 *     { day: 2, kilogram: 71, calories: 350 },
 *     { day: 3, kilogram: 70, calories: 320 }
 *   ]
 * };
 * 
 * return <ActivityChart activityData={activityData} />;
 * 
 * @returns {JSX.Element} A bar chart displaying activity data.
 */

import { activityDataType } from '../chartPropTypes';
import { 
  ResponsiveContainer, 
  BarChart, Bar,
  XAxis, YAxis, 
  CartesianGrid, 
  Tooltip, Legend 
} from "recharts";
import { COLORS } from '@/config';
import { CHARTS_LABELS } from '@/config';
import styles from "./ActivityChart.module.scss";

/**
 * The width of each bar in the BarChart
 * @constant
 * @type {number}
 */
const barWidth = 8;

/**
 * Radius of the bar corners for rounded edges
 * @constant
 * @type {Array<number>}
 */
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
        <YAxis 
          yAxisId="left" 
          axisLine={false}
          tick={false}
          width={10} 
        />
        <YAxis 
          yAxisId="right" 
          orientation="right"
          width={40} 
          tickFormatter={(value) => `${value}`} 
        />
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
        <Bar 
          dataKey="kilogram" 
          fill={COLORS.SECONDARY} 
          barSize={barWidth} 
          radius={radius} 
          yAxisId="right"
        />
        <Bar 
          dataKey="calories" 
          fill={COLORS.PRIMARY} 
          barSize={barWidth} 
          radius={radius} 
          yAxisId="left"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

ActivityChart.propTypes = {
  activityData: activityDataType
};

export default ActivityChart;
