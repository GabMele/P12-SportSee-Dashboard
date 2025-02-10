import { useState, useEffect } from "react";
import { getUserData as fetchUserData } from "../services/dataService";
import {
  formatUserData,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
} from "../services/dataFormatters";
import { getUserId } from "../utils/getUserId"; // Keep function for default ID

const useUserData = (userIdProp) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = userIdProp || getUserId(); // Use prop if available, else default

    if (!userId) {
      setError("No user ID available");
      setLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        const { user, activity, averageSessions, performance } =
          await fetchUserData(userId);
        setData({
          user: formatUserData(user),
          activity: formatUserActivity(activity),
          averageSessions: formatUserAverageSessions(averageSessions),
          performance: formatUserPerformance(performance),
        });
      } catch (err) {
        setError(err.message + " - stack: " + err.stack);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [userIdProp]); // Only re-run if userIdProp changes

  return { data, error, loading };
};

export default useUserData;
