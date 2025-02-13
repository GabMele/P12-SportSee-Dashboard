// src/config/dataSource.js
/**
 * @module Config
 * 
 * @category Configuration
 * 
 * @description
 * This module exports configuration constants that control data fetching 
 * source and define a fallback default user ID.
 * 
 * The `USE_MOCK` flag is set to `false` to indicate that data should 
 * be fetched from the API. 
 * The `USER_ID` provides a fallback default user ID.
 * 
 * @constant {boolean} USE_MOCK - Flag that determines if mock data should 
 * be used (default: false).
 * @constant {number} USER_ID - The default user ID used for testing or 
 * initial setup (default: 12, available 12 or 18).
 */

export const USE_MOCK = false;
export const USER_ID = 12;
