/**
 * @module MainContent
 * @category Layout Components
 * 
 * @description 
 * This component serves as the main content section of the application;
 * it fetches user data and wraps the chart components that display this data.
 * 
 * It renders the UserCharts component, which aggregates multiple chart components,
 * and the KeyDataSidebar component, which displays key health data.
 * 
 * The component uses the `DataLoader` component, which calls the `useUserData`
 * hook to fetch the data. After fetching, it passes the data to the chart components 
 * for visualization.
 *
 * If any error occurs during data fetching or if data is missing, an error page
 * is displayed instead of the main content.
 *
 * @example
 * <MainContent userId="123" />
 */


import DataLoader from "./DataLoader";
import UserCharts from "./UserCharts";
import KeyDataSidebar from "./KeyDataSidebar";
import ErrorPage from "@/components/ErrorPage";
import { SMALL_CHART_WIDTH, CHARTS_GAPS } from "@/config";
import { HOMEPAGE_LABELS } from "../../config";
import styles from "./MainContent.module.scss";
import PropTypes from "prop-types";

/**
 * Renders the main content section, displaying user-related data.
 *
 * @param {Object} props - Component props.
 * @param {string} props.userId - The ID of the user whose data is fetched.
 *
 * @returns {JSX.Element} Main content layout with user data.
 */

const MainContent = ({ userId }) => {
  const defaultKeyData = {
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  };

  return (
    <div className={styles.mainContentContainer}>
      <DataLoader userId={userId}>
        {({ data, error, loading }) => {
          if (loading)
            return (
              <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
              </div>
            );

          if (error || !data || !data.user) {
            return <ErrorPage message={"dataNotFound"} />;
          }

          return (
            <div className={styles.content}>
              <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>
                  {HOMEPAGE_LABELS.greeting},&nbsp;
                  <span className={styles.mainTitle__name}>
                    {data.user.firstName}
                  </span>
                </h1>
                <p className={styles.mainTitle__subtitle}>
                  {HOMEPAGE_LABELS.congratulations}
                </p>
              </div>

              <div className={styles.dataDisplay}>
                <div
                  className={styles.charts}
                  style={{
                    minWidth: `${SMALL_CHART_WIDTH * 3 + CHARTS_GAPS}px`,
                  }}
                >
                  <UserCharts
                    activityData={data.activity}
                    scoreData={data.user.todayScore}
                    sessionData={data.averageSessions}
                    performanceData={data.performance}
                  />
                </div>

                <KeyDataSidebar
                  keyData={data.user.keyData || defaultKeyData}
                />
              </div>
            </div>
          );
        }}
      </DataLoader>
    </div>
  );
};

MainContent.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default MainContent;
