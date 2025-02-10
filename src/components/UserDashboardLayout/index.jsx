import PropTypes from "prop-types";
import LeftBar from "@/components/LeftBar";
import styles from "./UserDashboardLayout.module.scss";


const UserDashboardLayout = ({ children }) => (
  <div className={styles.layoutContainer}>
    <LeftBar />
    {children}
  </div>
);

UserDashboardLayout.propTypes = {
  children: PropTypes.node
}

export default UserDashboardLayout;