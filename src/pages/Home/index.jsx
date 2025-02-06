// src/pages/Home/index.jsx

import LeftBar from "../../components/LeftBar";
import MainContent from "../../components/MainContent";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <LeftBar />
      <MainContent />
    </div>
  );
};

export default Home;
