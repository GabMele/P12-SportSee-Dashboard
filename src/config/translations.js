// src/config/translations.js

const language = "FR"; // Language setting

// Define translations for each language
export const TRANSLATIONS = {
  FR: {
    PERFORMANCE_KINDS: {
      1: 'Cardio',
      2: 'Énergie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    },
    SESSION_DAYS: {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    },
  },
  EN: {
    PERFORMANCE_KINDS: {
      1: 'Cardio',
      2: 'Energy',
      3: 'Endurance',
      4: 'Strength',
      5: 'Speed',
      6: 'Intensity',
    },
    SESSION_DAYS: {
      1: 'M',
      2: 'T',
      3: 'W',
      4: 'T',
      5: 'F',
      6: 'S',
      7: 'S',
    },
  },
};

// Select the current language translation
export const currentTranslations = TRANSLATIONS[language] || TRANSLATIONS.EN; 
