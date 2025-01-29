// src/components/MainContent/index.jsx
import DataLoader from './DataLoader';
import DataRawDisplay from './DataRawDisplay';
// import UserCharts from './UserCharts';

const MainContent = () => {
  return (
    <DataLoader>
      {({ data, error, loading }) => (
        <>
          <DataRawDisplay data={data} error={error} loading={loading} />
          {/* <UserCharts data={data} /> */}
        </>
      )}
    </DataLoader>
  );
};

export default MainContent;
