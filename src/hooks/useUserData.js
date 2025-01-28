// src/hooks/useUserData.js
import { useState, useEffect } from 'react';
import { fetchUserData } from '../services/apiService';
import {
  formatUserData,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
} from '../services/dataFormatters';
import { getUserId } from '../utils/getUserId';

const useUserData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const userId = getUserId();
      try {
        const { user, activity, averageSessions, performance } 
          = await fetchUserData(userId);
        setData({
          user: formatUserData(user),
          activity: formatUserActivity(activity),
          averageSessions: formatUserAverageSessions(averageSessions),
          performance: formatUserPerformance(performance),
        });
      } catch (err) {
        setError(err.message + 'With stack: ' + err.stack);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, error, loading };
};

export default useUserData;
