// src/services/mockService.js

const mockFiles = ['user', 'activity', 'sessions', 'performance'];

const fetchMockUserData = async (userId) => {
  try {
    const dataEntries = await Promise.all(
      mockFiles.map(async (file) => {
        const module = await import(`@/data/user${userId}_${file}.json`);
        // console.log(module.default.data);
        return [file, module.default.data];
      })
    );

    const data = Object.fromEntries(dataEntries);

    console.log(data);

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
