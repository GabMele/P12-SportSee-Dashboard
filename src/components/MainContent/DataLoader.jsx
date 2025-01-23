import { useEffect, useState } from 'react';
import { getUserId } from '../../utils/getUserId';
import { getUserData, getUserActitivy, getUserAverageSession, getUserPerformance } from '../../services/apiservice';

const DataLoader = ({ children }) => {
  const [data, setData] = useState({
    userData: null,
    userActivity: null,
    userAverageSession: null,
    userPerformance: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = getUserId();

        const [dataResponse, activityResponse, averageSessionResponse, performanceResponse] = await Promise.all([
          getUserData(userId),
          getUserActitivy(userId),
          getUserAverageSession(userId),
          getUserPerformance(userId),
        ]);

        setData((prevState) => ({
          ...prevState,
          userData: dataResponse.data,
          userActivity: activityResponse.data,
          userAverageSession: averageSessionResponse.data,
          userPerformance: performanceResponse.data,
          error: null,
        }));
      } catch (error) {
        setData((prevState) => ({ ...prevState, error: 'Error fetching data' }));
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return children(data);
};

export default DataLoader;
