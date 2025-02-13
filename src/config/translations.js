// src/config/translations.js

/**
 * @module Translations
 * 
 * @category Configuration
 * 
 * @description
 * The `translations` module provides language-specific strings used 
 * throughout the application to avoid hardcoding. It contains translations 
 * for various UI elements and messages, such as days of the week, performance 
 * types, key data, homepage greetings, and error messages.
 * 
 * This module supports multiple languages (currently French and English), 
 * defaulting to French if no language is specified in localStorage.
 * 
 * @constant {string} DEFAULT_LANGUAGE - The default language to use 
 * when none is specified in localStorage.
 * 
 * @constant {object} TRANSLATIONS - Contains translations for different 
 * languages, organized into categories (e.g., days, performance, charts, 
 * key data, homepage, and error page).
 * 
 * @constant {object} DAYS_ABREVIATIONS - Translated abbreviations for 
 * days of the week.
 * @constant {object} PERFORMANCE_LABELS - Translated performance metrics.
 * @constant {object} CHARTS_LABELS - Translated chart labels (e.g., weight, 
 * calories, activity).
 * @constant {object} KEYDATA_LABELS - Translated key data labels with 
 * units (e.g., calories, proteins, carbs).
 * @constant {object} HOMEPAGE_LABELS - Translated strings for the homepage.
 * @constant {object} ERRORPAGE_LABELS - Translated strings for the error page.
 * 
 * @function getLanguage
 * @description
 * Retrieves the user's preferred language from localStorage, falling 
 * back to the default language (FR) if none is set.
 * 
 * @returns {string} - The language code ('FR' or 'EN').
 */

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
      weight: 'Poids',
      calories: 'Calories brûlées',
      activity: 'Activité quotidienne'
    },
    EN: {
      weight: 'Weight',
      calories: 'Calories burned',
      activity: 'Daily activity'
    }
  },
  KEYDATA_LABELS: {
    FR: {
      calorie: { label: 'Calories', unit: 'kCal' },
      protein: { label: 'Proteines', unit: 'g' },
      carbohydrate: { label: 'Glucides', unit: 'g' },
      lipid: { label: 'Lipides', unit: 'g' }
    },
    EN: {
      calorie: { label: 'Calories', unit: 'kCal' },
      protein: { label: 'Proteins', unit: 'g' },
      carbohydrate: { label: 'Carbohydrates', unit: 'g' },
      lipid: { label: 'Lipids', unit: 'g' }
    }
  },
  HOMEPAGE_LABELS: {
    FR: {
      greeting: 'Bonjour',
      congratulations: 'Félicitation ! Vous avez explosé vos objectifs hier 👏'
    },
    EN: {
      greeting: 'Hello',
      congratulations: 'Congratulations! You crushed your goals yesterday 👏'
    }
  },
  ERRORPAGE_LABELS: {
    FR: {
      title: 'Oooops !',
      error: 'Une erreur s’est produite !',
      errorGeneric: 'Nous avions tout prévu... ou presque...',
      dataNotFound: 'Données introuvables',
      gobackhome: 'Retourner sur la page d\'accueil'
    },
    EN: {
      title: 'Oops!',
      error: 'Sorry, something went wrong!',
      errorGeneric: 'We had everything planned... or almost...',
      dataNotFound: 'Data not found',
      gobackhome: 'Return to the homepage'
    }
  }
};

/**
 * @function getLanguage
 * @description Retrieves the user's preferred language from localStorage, 
 * defaulting to `DEFAULT_LANGUAGE` (FR) if none is set.
 * 
 * @returns {string} - The user's preferred language ('FR' or 'EN').
 */
export const getLanguage = () => {
  return localStorage.getItem('language') || DEFAULT_LANGUAGE;
};

// Exporting language-specific constants
export const HOMEPAGE_LABELS = TRANSLATIONS.HOMEPAGE_LABELS[getLanguage()];
export const DAYS_ABREVIATIONS = TRANSLATIONS.DAYS_ABREVIATIONS[getLanguage()];
export const PERFORMANCE_LABELS = TRANSLATIONS.PERFORMANCE_LABELS[getLanguage()];
export const CHARTS_LABELS = TRANSLATIONS.CHARTS_LABELS[getLanguage()];
export const KEYDATA_LABELS = TRANSLATIONS.KEYDATA_LABELS[getLanguage()];
export const ERRORPAGE_LABELS = TRANSLATIONS.ERRORPAGE_LABELS[getLanguage()];
