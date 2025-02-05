import PropTypes from "prop-types";
import { SMALL_CHART_WIDTH, SMALL_CHART_HEIGHT } from '@/config';
import { COLORS } from '@/config';
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import styles from "./ScoreChart.module.scss";

const ScoreChart = ({ scoreData }) => {
  // Convert score to percentage and create data for radial bar
  const data = [
    { name: "Score", value: scoreData * 100, fill: COLORS.PRIMARY }
  ];

  return (
    <div className={styles.scoreChartContainer}>
          <RadialBarChart
            width={SMALL_CHART_WIDTH}
            height={SMALL_CHART_HEIGHT}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            barSize={10}
            data={data}
            startAngle={180}
            endAngle={-180}
          >
          <RadialBar
            minAngle={15}
            dataKey="value"
            cornerRadius={10}
            background={{ fill: COLORS.TERTIARY }}
            domain={[0, 100]}
          />
          <PolarAngleAxis 
            type="number"
            domain={[0, 100]}
            tick={false}
          />
        </RadialBarChart>
      <div className={styles.scoreLabel}>
        {(scoreData * 100).toFixed(0)}%
        <div className={styles.scoreDescription}>de votre objectif</div>
      </div>
      <h3 className={styles.scoreTitle}>Score</h3>
    </div>
  );
};

ScoreChart.propTypes = {
  scoreData: PropTypes.number.isRequired,
};

export default ScoreChart;