import React from "react";
import "../navbar.css";
const CompanyInfo = () => {
  const aboutUs = [
    "Company Name",
    "Company Country",
    "Company Growth",
    "Factory",
    "Certifications",
    "Achievements",
  ];
  return aboutUs.map((item) => {
    return (
      <div className="company-about">
        <h2>{item}</h2>
      </div>
    );
  });
};

export default CompanyInfo;
