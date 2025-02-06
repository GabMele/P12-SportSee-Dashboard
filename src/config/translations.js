const DEFAULT_LANGUAGE = 'FR';

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
  },
  KEYDATA_LABELS: {
    FR: {
      calorie: { label: "Calories", unit: "kCal" },
      protein: { label: "Proteines", unit: "g" },
      carbohydrate: { label: "Glucides", unit: "g" },
      lipid: { label: "Lipides", unit: "g" }
    },
    EN: {
      calorie: { label: "Calories", unit: "kCal" },
      protein: { label: "Proteins", unit: "g" },
      carbohydrate: { label: "Carbohydrates", unit: "g" },
      lipid: { label: "Lipids", unit: "g" }
    }
  },
  HOMEPAGE_LABELS: {
    FR: {
      greeting: "Bonjour",
      congratulations: "Félicitation ! Vous avez explosé vos objectifs hier 👏",
    },
    EN: {
      greeting: "Hello",
      congratulations: "Congratulations! You crushed your goals yesterday 👏",
    }
  },
  ERRORPAGE_LABELS: {
    FR: {
      title: "Oooops !",
      error: "Une erreur s’est produite !",
      errorgeneric: "Nous avions tout prévu... ou presque...",
      dataNotFound: "Données introuvables",
      gobackhome: "Retourner sur la page d'accueil"
    },
    EN: {
      title: "Oops!",
      error: "Sorry, something went wrong!",
      errorgeneric: "We had everything planned... or almost...",
      dataNotFound: "Data not found",
      gobackhome: "Return to the homepage"
    }
  }
};

export const getLanguage = () => {
  return localStorage.getItem('language') || DEFAULT_LANGUAGE;
};

// Export language-specific constants
export const HOMEPAGE_LABELS = TRANSLATIONS.HOMEPAGE_LABELS[getLanguage()];
export const DAYS_ABREVIATIONS = TRANSLATIONS.DAYS_ABREVIATIONS[getLanguage()];
export const PERFORMANCE_LABELS = TRANSLATIONS.PERFORMANCE_LABELS[getLanguage()];
export const CHARTS_LABELS = TRANSLATIONS.CHARTS_LABELS[getLanguage()];
export const KEYDATA_LABELS = TRANSLATIONS.KEYDATA_LABELS[getLanguage()];
export const ERRORPAGE_LABELS = TRANSLATIONS.ERRORPAGE_LABELS[getLanguage()];

