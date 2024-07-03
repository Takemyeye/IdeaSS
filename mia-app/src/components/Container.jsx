import React from "react";
import RightPanel from "./component/RightPanel";
import LeftPanel from "./component/LeftPanel";

const Container = () => {
  return (
    <>
    <div className="main">
      <LeftPanel/>
      <RightPanel/>
    </div>
    </>
  );
};

export default Container;