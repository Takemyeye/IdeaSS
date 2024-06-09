import React from "react";
import './styles/Home.css';
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Header from './Header';

const Home = () => {
  return (
    <div className="main">
      <Header />
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Home;