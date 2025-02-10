// src/pages/Home/index.jsx

import MainContent from "@/components/MainContent";
import UserDashboardLayout from "@/components/UserDashboardLayout";

const Home = () => {
  return (
    <UserDashboardLayout>
      <MainContent />
    </UserDashboardLayout>
  );
};

export default Home;
