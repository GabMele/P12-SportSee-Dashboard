import DataLoader from './DataLoader';
import UserCharts from './UserCharts';
import KeyDataSidebar from "./KeyDataSidebar";
import { SMALL_CHART_WIDTH } from '@/config';
import styles from './MainContent.module.scss';

const MainContent = () => {
  const defaultKeyData = {
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  };

  return (
    <div className={styles.mainContainer}>
      <DataLoader>
        {({ data, error, loading }) => {
          if (loading) 
            return (
              <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
              </div>
            );
          if (error) return <p>Error loading data: {error}</p>;
          if (!data || !data.user) return <p>No data available.</p>;

          return (
            <div className={styles.content}>

              <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>
                  Bonjour,&nbsp;
                  <span className={styles.mainTitle__name}>
                    {data.user.firstName}
                  </span>
                </h1>
                <p className={styles.mainTitle__subtitle}>
                  Félicitations ! Vous avez explosé vos objectifs hier 👏
                </p>
              </div>

              <div className={styles.dataDisplay}>

                <div className={styles.charts}  
                  style={{ minWidth: `${(SMALL_CHART_WIDTH / 180) * 550}px` }}>
                  <UserCharts 
                    activityData={data.activity}
                    scoreData={data.user.todayScore}
                    sessionData={data.averageSessions}
                    performanceData={data.performance}  
                  />
                </div>
                
                <div className={styles.rightBar}>
                  <KeyDataSidebar keyData={data.user.keyData || defaultKeyData} />
                </div>

              </div>

            </div>
          );
        }}
      </DataLoader>
    </div>
  );
};

export default MainContent;