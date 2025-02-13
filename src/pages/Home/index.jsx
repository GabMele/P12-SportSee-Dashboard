// src/pages/Home/index.jsx

import MainContent from "@/components/MainContent";
import UserDashboardLayout from "@/components/UserDashboardLayout";

/**
 * @module Home
 * @category Pages
 * 
 * @description
 * The `Home` component renders the home page, which displays data for the logged-in user.
 * It uses the `UserDashboardLayout` component to structure the page layout.
 * 
 * The `Home` page retrieves the `userId` from a utility function (see `@/utils/getUserId`) 
 * to display data for the current logged-in user.
 * 
 * @returns {JSX.Element} The rendered `Home` page.
 */
const Home = () => {
  return (
    <UserDashboardLayout>
      <MainContent />
    </UserDashboardLayout>
  );
};

export default Home;
