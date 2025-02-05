import { fetchUserData } from './apiService';
import { fetchMockUserData } from './mockService';
import { USE_MOCK } from '@/config/data';

export const getUserData = async (userId) => {
  return USE_MOCK ? fetchMockUserData(userId) : fetchUserData(userId);
};
