// src/config/constants.js

const TRANSLATIONS = {
    DAYS_ABREVIATIONS: {
      FR: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      EN: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    },
    PERFORMANCE_LABELS: {
      FR: {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité'
      },
      EN: {
        1: 'Cardio',
        2: 'Energy',
        3: 'Endurance',
        4: 'Force',
        5: 'Speed',
        6: 'Intensity'
      }   
    }
  };

const LANGUAGE = 'FR';

const CONFIG = {
    API_BASE_URL: 'http://localhost:3000',
    DAYS_ABREVIATIONS: TRANSLATIONS.DAYS_ABREVIATIONS[LANGUAGE],
    PERFORMANCE_LABELS: TRANSLATIONS.PERFORMANCE_LABELS[LANGUAGE],
};

export default CONFIG;
