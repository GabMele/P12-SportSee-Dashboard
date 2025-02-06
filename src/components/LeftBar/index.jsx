import { GiMeditation } from 'react-icons/gi';       // Yoga icon
import { FaSwimmer, FaBiking, FaDumbbell } from 'react-icons/fa';
import styles from './LeftBar.module.scss';

const LeftBar = () => {
  return (
    <div className={styles.leftBar}>
      <div className={styles.iconContainer}>
        <div className={styles.iconWrapper}>
          <GiMeditation size={36} title="Yoga" />
        </div>
        <div className={styles.iconWrapper}>
          <FaSwimmer size={36} title="Swim" />
        </div>
        <div className={styles.iconWrapper}>
          <FaBiking size={36} title="Biking" />
        </div>
        <div className={styles.iconWrapper}>
          {/* Apply the oblique rotation only to the icon */}
          <FaDumbbell size={36} title="Weights" className={styles.oblique} />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
