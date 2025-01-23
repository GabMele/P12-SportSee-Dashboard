import DataLoader from './DataLoader';
import DataDisplay from './DataDisplay';
import UserCharts from './UserCharts';

const MainContent = () => {
  return (
    <DataLoader>
      {({ userData, userActivity, userAverageSession, userPerformance, error }) => (
        <>
          <DataDisplay
            userData={userData}
            userActivity={userActivity}
            userAverageSession={userAverageSession}
            userPerformance={userPerformance}
            error={error}
          />
          <div className="welcome">
            <h1>Bonjour <span className="welcomeName">{userData?.userInfos?.firstName}</span></h1>
            <p>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <UserCharts
            userData={userData}
            userActivity={userActivity}
            userAverageSession={userAverageSession}
            userPerformance={userPerformance}
          />
        </>
      )}
    </DataLoader>
  );
};

export default MainContent;
