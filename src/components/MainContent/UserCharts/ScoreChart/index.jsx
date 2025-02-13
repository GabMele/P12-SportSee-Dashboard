// src/components/MainContent/UserCharts/ScoreChart/index.jsx

/**
 * @module ScoreChart
 * @category Visual Components
 * 
 * @description
 * The `ScoreChart` component renders a radial bar chart to visualize the 
 * user's progress toward a goal, represented as a score. The chart displays 
 * a circular progress bar, where the value is given as a percentage of the 
 * total score, allowing the user to visually track their performance. 
 * The component also displays the score value as a percentage along with a label 
 * describing the goal (e.g., "de votre objectif").
 * 
 * The score is passed as a decimal value (e.g., `0.75` for 75%) via the 
 * `scoreData` prop, and it is dynamically converted to a percentage to fill 
 * the radial bar. The chart size and color can be customized by adjusting 
 * the `SMALL_CHART_WIDTH`, `SMALL_CHART_HEIGHT`, and color settings.
 * 
 * @example
 * const scoreData = 0.75; // 75% score
 * return <ScoreChart scoreData={scoreData} />;
 * 
 * @returns {JSX.Element} A radial bar chart displaying the score.
 */

import { scoreDataType } from '../chartPropTypes';
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
  scoreData: scoreDataType
};

export default ScoreChart;
