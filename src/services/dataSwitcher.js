// src/services/dataSwitcher.js

/**
 * @module userDataService
 * 
 * @category Services
 * 
 * @description
 * The `getUserData` function retrieves user data from either a mock service 
 * or an API service (for development or testing), depending on the `USE_MOCK` 
 * flag in the configuration (`@/config/data`).
 * 
 * If `USE_MOCK` is `true`, it calls `fetchMockUserData` to get mock data, 
 * else it calls `fetchUserData` to fetch data from the API.
 * 
 * @param {number} userId - The unique identifier of the user whose data 
 * should be fetched.
 * 
 * @returns {Promise<Object>} A promise that resolves with the user data, 
 * which includes various details like personal information, activity, and 
 * performance.
 */

import { fetchUserData } from './apiService';
import { fetchMockUserData } from './mockService';
import { USE_MOCK } from '@/config/dataSource';

export const getUserData = async (userId) => {
  return USE_MOCK ? fetchMockUserData(userId) : fetchUserData(userId);
};
