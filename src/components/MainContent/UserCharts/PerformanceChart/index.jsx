// src/components/MainContent/UserCharts/PerformanceChart/index.jsx

/**
 * @module PerformanceChart
 * @category Visual Components
 * 
 * @description
 * The PerformanceChart component renders a radar chart that visualizes 
 * performance data across different categories (e.g., speed, strength, endurance). 
 * The chart displays data for various performance metrics using a radar format.
 * 
 * Uses recharts to render the radar chart and supports dynamic customization 
 * of the chart size, colors, and labels. Provides tooltips to display detailed 
 * information for each data point.
 * 
 * @see PropTypes definition for detailed props documentation
 * 
 * @example
 * const performanceData = [
 *   { kind: "Speed", value: 120 },
 *   { kind: "Strength", value: 180 },
 *   { kind: "Endurance", value: 200 }
 * ];
 * 
 * return <PerformanceChart performanceData={performanceData} />;
 * 
 * @returns {JSX.Element} A radar chart displaying performance data.
*/

import { performanceDataType } from "../chartPropTypes";
import {
  RadarChart, Radar, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  Tooltip
} from "recharts";
import { COLORS } from '@/config';
import { SMALL_CHART_WIDTH, SMALL_CHART_HEIGHT } from '@/config';
import styles from "./PerformanceChart.module.scss";

const PerformanceChart = ({ performanceData }) => (
  <div className={styles.performanceChartContainer}>
    <RadarChart
      width={SMALL_CHART_WIDTH + 20}
      height={SMALL_CHART_HEIGHT + 20}
      outerRadius={(SMALL_CHART_WIDTH + SMALL_CHART_HEIGHT) / 7.2}
      data={performanceData}
    > 
      <PolarGrid stroke={COLORS.TERTIARY} />
      <PolarAngleAxis 
        dataKey="kind" 
        tick={{ fill: COLORS.TERTIARY, fontSize: 10 }} 
        tickLine={false}
      />
      <PolarRadiusAxis 
        angle={30} 
        domain={[0, 250]} 
        stroke={COLORS.TERTIARY} 
        tick={{ fontSize: 12, fill: COLORS.TERTIARY }} 
      />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: COLORS.SECONDARY, 
          color: COLORS.TERTIARY 
        }} 
      />
      <Radar 
        name="Performance" 
        dataKey="value" 
        stroke={COLORS.PRIMARY} 
        fill={COLORS.PRIMARY} 
        fillOpacity={0.6} 
      />
    </RadarChart>
  </div>
);

PerformanceChart.propTypes = {
  performanceData: performanceDataType
};

export default PerformanceChart;
