// src/services/dataFormatters.js
import CONFIG from '@/config/constants';

const {  
  DAYS_ABREVIATIONS,
  PERFORMANCE_LABELS
} = CONFIG;


// Format user personal informations
const formatUserData = ({ userInfos, todayScore, score, keyData }) => ({
  firstName: userInfos.firstName,
  lastName: userInfos.lastName,
  age: userInfos.age,
  todayScore: todayScore !== undefined ? todayScore : score,
  keyData: {
    calorieCount: keyData.calorieCount,
    proteinCount: keyData.proteinCount,
    carbohydrateCount: keyData.carbohydrateCount,
    lipidCount: keyData.lipidCount,
  },
});


// Format user activity data (sessions) with sequential days
const formatUserActivity = ({ sessions }) => ({
  sessions: sessions.map((session, index) => ({
    day: index + 1,  // Sequential days: 1, 2, 3, ...
    kilogram: session.kilogram,
    calories: session.calories,
  })),
});


// Format user average session data
const formatUserAverageSessions = ({ sessions }) =>
  sessions.map(({ day, sessionLength }) => ({
    day: DAYS_ABREVIATIONS[day-1],
    sessionLength,
  }));

// Format user performance data
// const formatUserPerformance = ({ data }) => ({
//   data: data.map(({ kind: kindIndex, value }) => ({
//     kind: PERFORMANCE_LABELS[kindIndex], 
//     value,
//   })),
// });

// Format user performance data
const formatUserPerformance = ({ data }) => 
  data.map(({ kind: kindIndex, value }) => ({
    kind: PERFORMANCE_LABELS[kindIndex], 
    value,
  }))



export { 
  formatUserData, 
  formatUserActivity, 
  formatUserAverageSessions, 
  formatUserPerformance 
};
