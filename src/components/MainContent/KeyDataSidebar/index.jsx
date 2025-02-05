import PropTypes from "prop-types";
import { KEYDATA_LABELS } from "@/config";
import {
  FaFire, 
  FaDrumstickBite, 
  FaAppleAlt, 
  FaHamburger,
} from "react-icons/fa";
import styles from "./KeyDataSidebar.module.scss";

// Store COMPONENT REFERENCES, not JSX elements
const keyDataIcons = {
  calorieCount: FaFire,       
  proteinCount: FaDrumstickBite,
  carbohydrateCount: FaAppleAlt,
  lipidCount: FaHamburger,
};

const getKeyData = (key) => KEYDATA_LABELS[key.replace("Count", "")];
const formatLabel = (key) => getKeyData(key).label;
const formatUnit = (key) => getKeyData(key).unit;

const KeyDataSidebar = ({ keyData }) => {
  return (
    <div className={styles.keyDataSidebar}>
      {Object.entries(keyData).map(([key, value]) => {
        const IconComponent = keyDataIcons[key]; // Get component reference
        return (
          <div key={key} className={styles.keyDataItem}>
            {/* Render component dynamically with classes */}
            <IconComponent 
              className={`${styles.icon} ${styles[key]}`} 
            />
            <div>
              <p className={styles.keyDataValue}>{value}{formatUnit(key)}</p>
              <p className={styles.keyDataLabel}>{formatLabel(key)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

KeyDataSidebar.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
};

export default KeyDataSidebar;