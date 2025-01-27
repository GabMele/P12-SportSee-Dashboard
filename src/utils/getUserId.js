// src/utils/getUserId.js
export const getUserId = () => {
    // Retrieve userId from localStorage, or return 12 if not found
    // mockups are available only for userId 12 and userId 18
    return localStorage.getItem('userId') || '18'; // Default mock userId is 12
  };
  
  