import React from "react";
import "./style.css";
const LoadingPage = async () => {
  return (
    <div className="relative h-screen w-full items-center justify-center">
      <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[60%]">
        <div className="containers">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
