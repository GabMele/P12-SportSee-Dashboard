// src/services/apiService.js

/**
 * @module apiService
 * @category Services
 * 
 * @description
 * The `apiService` module provides a `fetchUserData` function that interacts 
 * with the backend API using `axios` to retrieve user-related data. The function 
 * fetches several pieces of user data, such as user profile information, 
 * activity data, average session lengths, and performance scores.
 * 
 * These requests are made concurrently using `axios.all`, ensuring that all 
 * necessary data is fetched in parallel to optimize performance.
 * 
 * If any error occurs during the fetching process (such as network issues or 
 * server errors), the function will log the error and throw an exception.
 *
 * @param {string} userId - The unique identifier of the user whose data is 
 * fetched from the API.
 * 
 * @returns {Promise<Object>} A promise that resolves to an object containing 
 * the following properties:
 *   - `user`: The user’s profile data and key metrics.
 *   - `activity`: The user's activity data.
 *   - `averageSessions`: The user's average session length data.
 *   - `performance`: The user's performance scores across different categories.
 * 
 * @throws {Error} If an error occurs while fetching the user data, an error is 
 * thrown with the message `'Failed to fetch user data'`.
 */


import axios from 'axios';
import { API_BASE_URL } from '@/config';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
});

export const fetchUserData = async (userId) => {
  try {
    const [user, activity, averageSessions, performance] = 
      await axios.all([
        api.get(`/user/${userId}`),
        api.get(`/user/${userId}/activity`),
        api.get(`/user/${userId}/average-sessions`),
        api.get(`/user/${userId}/performance`),
      ]);
    return {
      user: user.data.data,
      activity: activity.data.data,
      averageSessions: averageSessions.data.data,
      performance: performance.data.data,
    };
  } catch (error) {
    console.error('Error fetching user data from API:', error);
    throw new Error('Failed to fetch user data');
  }
};

