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
      weight: "Poids",
      calories: "Calories brûlées",
      activity: "Activité quotidienne"
    },
    EN: {
      weight: "Weight",
      calories: "Calories burned",
      activity: "Daily activity"
    }
  }
};

export const getLanguage = () => {
  return localStorage.getItem('language') || 'FR';
};

// Export language-specific constants
export const DAYS_ABREVIATIONS = TRANSLATIONS.DAYS_ABREVIATIONS[getLanguage()];
export const PERFORMANCE_LABELS = TRANSLATIONS.PERFORMANCE_LABELS[getLanguage()];
export const CHARTS_LABELS = TRANSLATIONS.CHARTS_LABELS[getLanguage()];
