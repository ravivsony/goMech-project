import React from "react";

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
    return <h2>{item}</h2>;
  });
};

export default CompanyInfo;
