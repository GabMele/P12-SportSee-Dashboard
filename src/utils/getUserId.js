// src/utils/getUserId.js
import { USER_ID } from '../config/data';
export const getUserId = () => {
    return localStorage.getItem('userId') || USER_ID;
  };
  
  