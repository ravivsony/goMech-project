import React from "react";
import "./headerStyle/header.css";

const Header = () => {
  return (
    <div className="header">
      <h2
        style={{
          paddingLeft: "5rem",
          paddingTop: "0.3rem",
        }}
      >
        goMech
      </h2>
    </div>
  );
};

export default Header;
