// src/components/MainContent/UserCharts/PerformanceChart/index.jsx
import PropTypes from "prop-types";
import {
  ResponsiveContainer, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Tooltip
} from "recharts";
import { COLORS } from '@/config';
import { SMALL_CHART_WIDTH, SMALL_CHART_HEIGHT } from '@/config';
import styles from "./PerformanceChart.module.scss";

// const chartWidth = SMALL_CHART_WIDTH;
// const chartHeight = SMALL_CHART_HEIGHT;
//    <ResponsiveContainer width={SMALL_CHART_WIDTH} height={SMALL_CHART_HEIGHT}>

const PerformanceChart = ({ performanceData }) => (
  <div className={styles.performanceChartContainer}>
<ResponsiveContainer width={SMALL_CHART_WIDTH+20} height={SMALL_CHART_HEIGHT+20}>
      <RadarChart outerRadius={(SMALL_CHART_WIDTH + SMALL_CHART_HEIGHT)/7.2} 
            data={performanceData}> 
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
        <Tooltip contentStyle={{ backgroundColor: COLORS.SECONDARY, color: COLORS.TERTIARY }} />
        <Radar name="Performance" 
            dataKey="value" 
            stroke={COLORS.PRIMARY} 
            fill={COLORS.PRIMARY} 
            fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

PerformanceChart.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceChart;
