import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
} from 'recharts';
import styles from './MainContent.module.scss';

const UserCharts = ({ userData, userActivity, userAverageSession, userPerformance }) => {
  return (
    <main className={styles.charts}>

      {/* Daily Activity */}
      <section className={styles.chartContainer}>
        <h3>Activité quotidienne</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userActivity?.sessions || []}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#8884d8" name="Weight (kg)" />
            <Bar dataKey="calories" fill="#82ca9d" name="Calories burned" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Average Sessions */}
      <section className={styles.chartContainer}>
        <h3>Average Session Duration</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userAverageSession?.sessions || []}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Performance */}
      <section className={styles.chartContainer}>
        <h3>User Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={userPerformance?.data || []}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={(kind) => userPerformance?.kind?.[kind] || 'N/A'}
            />
            <Radar
              name="Performance"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </section>

      {/* Today Score */}
      <section className={styles.chartContainer}>
        <h3>Today’s Score</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart
            innerRadius="10%"
            outerRadius="80%"
            data={
              userData?.todayScore
                ? [{ name: 'Score', value: userData.todayScore * 100, fill: '#8884d8' }]
                : [{ name: 'Score', value: 0, fill: '#8884d8' }]
            }
            startAngle={90}
            endAngle={450}
          >
            <RadialBar minAngle={15} dataKey="value" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </section>

    </main>
  );
};

UserCharts.propTypes = {
  userData: PropTypes.object,
  userActivity: PropTypes.object,
  userAverageSession: PropTypes.object,
  userPerformance: PropTypes.object,
};

export default UserCharts;
