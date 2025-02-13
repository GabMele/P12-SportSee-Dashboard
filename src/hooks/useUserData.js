// src/hooks/useUserData.js

/**
 * @hook useUserData
 * @category Data Retrieval
 * 
 * @description
 * Custom hook that handles the fetching, formatting, and management of user data. 
 * It retrieves information related to the user’s profile, activity, average sessions, 
 * and performance metrics. This hook manages loading, error, and data states, ensuring 
 * that the component using it can respond to changes in state (such as showing a loading 
 * indicator or error message).
 * 
 * The hook accepts an optional `userId` prop. If the `userId` is not provided, it 
 * defaults to fetching the ID from a utility function (see `@/utils/getUserId`), 
 * which contains the logic of retrieving the user ID.
 * 
 * The hook relies on several services and utilities:
 * - `fetchUserData`: A function from the `dataSwitcher` service that makes API calls 
 *   to retrieve the raw user data.
 * - `formatUserData`, `formatUserActivity`, `formatUserAverageSessions`, 
 *   `formatUserPerformance`: Functions from the `dataFormatters` service that format 
 *   and structure the raw data into a format usable by the component.
 * - `getUserId`: A utility function that retrieves the user ID (if not provided as a prop).
 * 
 * The function `loadData`, defined inside the `useEffect` hook, depends on the `userId` 
 * (either passed as a prop or defaulted to the value returned from `getUserId`). When the 
 * `userIdProp` value changes, the `useEffect` hook triggers the `loadData` function to fetch 
 * and update the user data.
 * 
 * @param {string} [userIdProp] - The user ID passed as a prop (optional). If not provided, 
 * defaults to the user ID fetched from `getUserId()`.
 * 
 * @returns {Object} An object containing:
 * - `data`: The formatted user data, activity, average sessions, and performance. 
 *   Returns `null` if the data is still loading or an error occurred.
 * - `error`: The error message, if any occurred during the data fetching process. 
 *   `null` if no error occurred.
 * - `loading`: A boolean indicating whether the data is still being fetched.
 */


import { useState, useEffect } from "react";
import { getUserData as fetchUserData } from "../services/dataSwitcher";
import {
  formatUserData,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
} from "../services/dataFormatters";
import { getUserId } from "@/utils/getUserId";

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
