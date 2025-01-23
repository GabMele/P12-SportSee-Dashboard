// src/utils/getUserId.js
export const getUserId = () => {
    // Retrieve userId from localStorage, or return 12 if not found
    return localStorage.getItem('userId') || '12'; // Default mock userId is 12
  };
  
  