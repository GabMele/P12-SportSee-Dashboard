// src/services/mockService.js

/**
 * @module mockService
 * 
 * @category Services
 * 
 * @description
 * The `fetchMockUserData` function retrieves mock user data for a given userId. 
 * It dynamically imports JSON files corresponding to different data categories 
 * (user, activity, sessions, performance) and compiles them into a single object.
 * 
 * This service is used when the `USE_MOCK` flag is enabled, allowing developers 
 * to simulate API data without making real network requests. 
 * 
 * @param {number} userId - The unique identifier of the user whose mock data 
 * should be fetched.
 * 
 * @returns {Promise<Object>} A promise that resolves with an object containing 
 * mock data for the user, including user details, activity, session averages, 
 * and performance metrics.
 * 
 * @throws {Error} Throws an error if no mock data is found for the provided 
 * `userId`.
 * 
 * @param {number} userId - The unique identifier of the user.
 * 
 * @returns {Promise<Object>} A promise that resolves with mock user data.
 */

const mockFiles = ['user', 'activity', 'sessions', 'performance'];

const fetchMockUserData = async (userId) => {
  try {
    const dataEntries = await Promise.all(
      mockFiles.map(async (file) => {
        const module = await import(`@/data/user${userId}_${file}.json`);
        return [file, module.default.data];
      })
    );

    const data = Object.fromEntries(dataEntries);

    return {
      user: data.user,
      activity: data.activity,
      averageSessions: data.sessions,
      performance: data.performance,
    };
  } catch {
    throw new Error(`No mock data found for user ID: ${userId}`);
  }
};

export { fetchMockUserData };
