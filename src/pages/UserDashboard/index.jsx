import { useParams } from "react-router-dom";
import MainContent from "../../components/MainContent";
import UserDashboardLayout from "@/components/UserDashboardLayout";

/**
 * @module UserDashboard
 * @category Pages
 * 
 * @description
 * The `UserDashboard` component renders the user dashboard page for a specific user.
 * 
 * It shows the same content as Home page, but it retrieves the `userId` from the URL parameters 
 * using `useParams()` and passes it as a prop to the `MainContent` component.
 * 
 * This component is typically used when an Admin wants to view or manage data for a 
 * specific user while Home page, that retrive userId from utility function (see `@/utils/getUserId`),
 * is used to display data for the logged user.
 * 
 * This component is rendered by the route "/user/:userId" defined in the `AppRouter` component.
 * 
 * @returns {JSX.Element} The rendered `UserDashboard` component.
 */
const UserDashboard = () => {
  const { userId } = useParams(); // Get userId from URL

  return (
    <UserDashboardLayout>
      <MainContent userId={userId} />
    </UserDashboardLayout>
  );
};

export default UserDashboard;
