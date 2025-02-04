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
    },
    CHARTS_LABELS: {
      FR: {
        "weight": "Poids",
        "calories": "Calories brulées",
        "activity": "Activité quotidienne"

      }   
    }
  };

export const getLanguage = () => {
  const language = localStorage.getItem('language');
  return language ? language : 'FR';
};

const CONFIG = {
    API_BASE_URL: 'http://localhost:3000',
    DAYS_ABREVIATIONS: TRANSLATIONS.DAYS_ABREVIATIONS[getLanguage()],
    PERFORMANCE_LABELS: TRANSLATIONS.PERFORMANCE_LABELS[getLanguage()],
    CHARTS_LABELS: TRANSLATIONS.CHARTS_LABELS[getLanguage()],
    SMALL_CHART_WIDTH: 200,
    SMALL_CHART_HEIGHT: 200
  };

export default CONFIG;
