import PropTypes from "prop-types";
import LeftBar from "@/components/LeftBar";
import styles from "./UserDashboardLayout.module.scss";

/**
 * @module UserDashboardLayout
 * @category Layout Components
 * 
 * @description
 * The `UserDashboardLayout` component provides the main layout for the app,
 * consisting of a left sidebar and the main content section.
 * 
 * It's used both by Home page and UserDashboard page, 
 * the first one is used to display data for logged user,
 * retrieving userId from utility function (see `@/utils/getUserId`),
 * the second one is used to display data for a specific user passing userId as a prop, 
 * typically used when an Admin wants to view or manage data for a specific user.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to render within the layout.
 * 
 * @returns {JSX.Element} The rendered `UserDashboardLayout` component.
 */
const UserDashboardLayout = ({ children }) => (
  <div className={styles.layoutContainer}>
    <LeftBar />
    {children}
  </div>
);

UserDashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default UserDashboardLayout;
