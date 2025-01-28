// src/services/apiService.js
import axios from 'axios';
import CONFIG from '../config/constants';

const api = axios.create({
  baseURL: CONFIG.API_BASE_URL,
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
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
};
