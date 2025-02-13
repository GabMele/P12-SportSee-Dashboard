import { FaExclamationTriangle } from 'react-icons/fa';  // Using a hammer icon for construction
import PropTypes from 'prop-types';
import styles from './WorkInProgress.module.scss';

/**
 * @module WorkInProgress
 * @category Components
 * 
 * @description
 * The `WorkInProgress` component is used to display a placeholder message 
 * indicating that the page or section is under construction or unavailable. 
 * It renders a customizable title and optionally accepts additional content 
 * that will be displayed below the main message.
 * 
 * This component can be used in any part of the application where a page 
 * is temporarily unavailable or still in progress.
 * 
 * @example
 * const MyPage = () => (
 *   <WorkInProgress title="Mon Page en Construction">
 *     <p>Nous y travaillons actuellement, revenez plus tard !</p>
 *   </WorkInProgress>
 * );
 * 
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display at the top of the page.
 * @param {React.ReactNode} [props.children] - Optional additional content to display below the title.
 * 
 * @returns {JSX.Element} The rendered `WorkInProgress` component.
 */
const WorkInProgress = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children && (
          <div className={styles.additionalContent}>
            {children}
          </div>
        )}
        <div className={styles.wipMessage} aria-label="Page under construction">
          <FaExclamationTriangle size={40} className={styles.icon} />
          <p>Cette page n&apos;est pas disponible pour l&apos;instant</p>
        </div>
      </div>
    </div>
  );
};

WorkInProgress.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default WorkInProgress;

