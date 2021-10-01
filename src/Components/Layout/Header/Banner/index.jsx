import React, { useState, useEffect } from "react";
import "../headerStyle/header.css";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const classNames = ["first-banner", "second-banner", "third-banner"];
  const [className, setClassName] = useState(classNames[index]);
  let latestIndex = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    const timer = setInterval(latestIndex, 3000);
    setClassName(classNames[index]);
    if (index > 2) {
      setIndex(0);
      setClassName(classNames[index]);
    }

    return () => clearInterval(timer);
  });

  return (
    <>
      <div className={className} style={{ minHeight: "80vh" }}></div>
    </>
  );
};

export default Banner;
