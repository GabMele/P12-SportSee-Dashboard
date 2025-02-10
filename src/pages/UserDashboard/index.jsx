// src/pages/UserDashboard/index.jsx
import { useParams } from "react-router-dom";
import MainContent from "../../components/MainContent";
import UserDashboardLayout from "@/components/UserDashboardLayout";

const UserDashboard = () => {
  const { userId } = useParams(); // Get userId from URL

  return (
    <UserDashboardLayout>
      <MainContent userId={userId} />
    </UserDashboardLayout>
  );
};

export default UserDashboard;
