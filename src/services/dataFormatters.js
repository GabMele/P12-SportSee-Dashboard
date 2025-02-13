// src/services/dataFormatters.js
/**
 * @module dataFormatters
 * @category Services
 * 
 * @description
 * This module provides functions to format and structure user data for various sections,
 * such as personal information, activity data, average sessions, and performance data.
 */

import { DAYS_ABREVIATIONS, PERFORMANCE_LABELS } from '@/config';

/**
 * Formats the user's personal information including their score and key data.
 * 
 * @param {Object} userData - The user data object.
 * @param {Object} userData.userInfos - The user's personal information (firstName, lastName, age).
 * @param {number} userData.todayScore - The user's score for today.
 * @param {number} userData.score - The user's score if `todayScore` is undefined.
 * @param {Object} userData.keyData - Key health data (calories, proteins, carbs, lipids).
 * 
 * @returns {Object} The formatted user data.
 */
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

/**
 * Formats the user activity data with sequential day indices.
 * 
 * @param {Object} activityData - The activity data object.
 * @param {Array} activityData.sessions - The user's activity sessions.
 * 
 * @returns {Object} The formatted activity data with sequential day indices.
 */
const formatUserActivity = ({ sessions }) => ({
  sessions: sessions.map((session, index) => ({
    day: index + 1,  // Sequential days: 1, 2, 3, ...
    kilogram: session.kilogram,
    calories: session.calories,
  })),
});

/**
 * Formats the user's average session data, mapping the day to its corresponding abbreviation.
 * 
 * @param {Object} averageSessionsData - The average session data object.
 * @param {Array} averageSessionsData.sessions - The user's average sessions.
 * 
 * @returns {Array} The formatted session data with day abbreviations.
 */
const formatUserAverageSessions = ({ sessions }) => (
  sessions.map(({ day, sessionLength }) => ({
    day: DAYS_ABREVIATIONS[day - 1],  // Day abbreviation (e.g., Mon, Tue)
    sessionLength,
  }))
);

/**
 * Formats the user's performance data by mapping each kind index to a corresponding label.
 * 
 * @param {Object} performanceData - The performance data object.
 * @param {Array} performanceData.data - The user's performance data.
 * 
 * @returns {Array} The formatted performance data with labels.
 */
const formatUserPerformance = ({ data }) =>
  data.map(({ kind: kindIndex, value }) => ({
    kind: PERFORMANCE_LABELS[kindIndex],  // Performance label mapped from kind index
    value,
  }));

export { 
  formatUserData, 
  formatUserActivity, 
  formatUserAverageSessions, 
  formatUserPerformance 
};
