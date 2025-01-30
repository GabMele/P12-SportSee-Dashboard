// src/components/MainContent/index.jsx
import DataLoader from './DataLoader';
import DataRawDisplay from './DataRawDisplay';
// import UserCharts from './UserCharts';
import KeyDataSidebar from "./KeyDataSidebar";
import styles from './MainContent.module.scss';

const MainContent = () => {

  const defaultKeyData = {
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  };

  return (
    <DataLoader>
      {({ data, error, loading }) => {
        if (loading) return <div className={styles.spinner}></div>;
        if (error) return <p>Error loading data: {error}</p>;
        if (!data || !data.user) return <p>No data available.</p>;

        return (
          <>
            <h1 className={styles.mainTitle}>Bonjour,&nbsp;
            <span className={styles.mainTitle__name}>
                { data.user.firstName }
              </span>
            </h1>

            <DataRawDisplay data={data} error={error} loading={loading} />

            {/*}
            <UserCharts 
              activityData={ data.activity }
              scoreData={ data.user.todayScore }
              sessionData={ data.averageSessions }
              performanceData={ data.performance }  
            />
            */}
            
            <KeyDataSidebar keyData={data.user.keyData || defaultKeyData} />

          </>
        )
      }}
    </DataLoader>
  );
};

export default MainContent;
