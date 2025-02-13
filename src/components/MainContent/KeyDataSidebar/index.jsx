// src/components/MainContent/KeyDataSidebar/index.jsx

/**
 * @module KeyDataSidebar
 * 
 * @category Visual Components
 * 
 * @description
 * KeyDataSidebar component renders a sidebar displaying key nutritional data:
 * calories, proteins, carbohydrates, and lipids. It dynamically selects 
 * icons and applies styles based on the data type (e.g., calorie, protein, etc.). 
 * This component receives key data for different metrics (e.g., `calorieCount`, 
 * `proteinCount`) and renders the relevant icons, labels, and values with their 
 * corresponding units.
 * 
 * @example
 * const keyData = {
 *   calorieCount: 2000,
 *   proteinCount: 150,
 *   carbohydrateCount: 250,
 *   lipidCount: 80
 * };
 * 
 * return <KeyDataSidebar keyData={keyData} />;
 */
 
import PropTypes from "prop-types";
import { KEYDATA_LABELS } from "@/config";
import {
  FaFire, 
  FaDrumstickBite, 
  FaAppleAlt, 
  FaHamburger,
} from "react-icons/fa";
import styles from "./KeyDataSidebar.module.scss";

/**
 * @constant {Object} keyDataIcons
 * Icons associated with each key.
 */
const keyDataIcons = {
  calorie: FaFire,       
  protein: FaDrumstickBite,
  carbohydrate: FaAppleAlt,
  lipid: FaHamburger,
};

/**
 * @function formattedKey
 * 
 * @description
 * Formats the key name by removing "Count" from it
 * to match the format of the `KEYDATA_LABELS` and styles.
 *
 * @param {string} key - The key to format like "calorieCount".
 * @returns {string} - The formatted key like "calorie".
 */
const formattedKey = (key) => key.replace("Count", "");

/**
 * @function formattedLabel
 * 
 * @description
 * Retrieves the label for a given key from `KEYDATA_LABELS`.
 *
 * @param {string} key - The key to get the label for, like "carbohydrateCount".
 * @returns {string} - The label corresponding to the key, like "Glucides".
 */
const formattedLabel = (key) => 
  KEYDATA_LABELS[formattedKey(key)].label;

/**
 * @function formattedUnit
 * 
 * @description
 * Retrieves the unit for a given key from `KEYDATA_LABELS`.
 *
 * @param {string} key - The key to get the unit for.
 * @returns {string} - The unit corresponding to the key.
 */
const formattedUnit = (key) => 
  KEYDATA_LABELS[formattedKey(key)].unit;

/**
 * @function KeyDataSidebar
 * 
 * @description
 * Dynamically renders the key data, including icons, labels, units, and styles 
 * based on the data type.
 * 
 * @param {Object} keyData - The key data object with values for different metrics.
 * @returns {JSX.Element} - The sidebar component displaying the key data.
 */
const KeyDataSidebar = ({ keyData }) => {
  return (
    <div className={styles.keyDataSidebar}>
      {Object.entries(keyData).map(([key, value]) => {
        const IconComponent = keyDataIcons[formattedKey(key)];
        return (
          <div key={key} className={styles.keyDataItem}>
            {/* Render the dynamically chosen icon */}
            <IconComponent 
              className={`${styles.icon} ${styles[formattedKey(key)]}`} 
            />
            <div>
              <p className={styles.keyDataValue}>
                {value}{formattedUnit(key)}
              </p>
              <p className={styles.keyDataLabel}>
                {formattedLabel(key)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/**
 * @function propTypes
 * 
 * @description
 * PropTypes for the KeyDataSidebar component to enforce the shape of the `keyData` prop.
 */
KeyDataSidebar.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
};

export default KeyDataSidebar;
