// src/utils/getUserId.js

/**
 * @module getUserId
 *
 * @category Utilities
 *
 * @description
 * Retrieves the user ID from local storage. If no user ID is found, it 
 * falls back to the default `USER_ID` from the configuration.
 *
 * ⚠️ This is a basic solution to be replaced by a more robust 
 * state management approach (e.g., Redux or Context API) in the future.
 *
 * @returns {string} The user ID retrieved from local storage or the default value.
 */

import { USER_ID } from '../config/dataSource';

export const getUserId = () => {
  return localStorage.getItem('userId') || USER_ID;
};

  