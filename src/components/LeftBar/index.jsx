// src/components/LeftBar/index.jsx

/**
 * @module LeftBar
 * 
 * @category Visual Components
 * 
 * @description
 * Renders the left sidebar with activity icons using "react-icons" library.
 * 
 * @returns {JSX.Element} The left sidebar component.
 */

import { GiMeditation } from 'react-icons/gi';       // Yoga icon
import { FaSwimmer, FaBiking, FaDumbbell } from 'react-icons/fa';
import styles from './LeftBar.module.scss';

const LeftBar = () => {
  const iconSize = 36;

  return (
    <div className={styles.leftBar}>
      <div className={styles.iconContainer}>
        <div className={styles.iconWrapper}>
          <GiMeditation size={iconSize} title="Yoga" />
        </div>
        <div className={styles.iconWrapper}>
          <FaSwimmer size={iconSize} title="Swim" />
        </div>
        <div className={styles.iconWrapper}>
          <FaBiking size={iconSize} title="Biking" />
        </div>
        <div className={styles.iconWrapper}>
          {/* Apply the oblique rotation to the icon */}
          <FaDumbbell size={iconSize} title="Weights" className={styles.oblique} />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
