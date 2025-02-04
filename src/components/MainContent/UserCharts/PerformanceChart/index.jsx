// src/components/MainContent/UserCharts/PerformanceChart/index.jsx
import PropTypes from "prop-types";
import {
  ResponsiveContainer, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Tooltip
} from "recharts";
import COLORS from "@/config/colors";
import CONFIG from "@/config/constants";
import styles from "./PerformanceChart.module.scss";

const chartWidth = CONFIG.SMALL_CHART_WIDTH;
const chartHeight = CONFIG.SMALL_CHART_HEIGHT;

const PerformanceChart = ({ performanceData }) => (
  <div className={styles.performanceChartContainer}>
    <ResponsiveContainer width={chartWidth} height={chartHeight}> {/* Increased height */}
      <RadarChart outerRadius={(chartWidth + chartHeight)/7.5} 
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
