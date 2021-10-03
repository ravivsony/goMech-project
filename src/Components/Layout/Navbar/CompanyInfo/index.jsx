import React from "react";

const CompanyInfo = () => {
  const aboutUs = {
    id: 2,
    data: [
      "Company Name",
      "Company Country",
      "Company Growth",
      "Factory",
      "Certifications",
      "Achievements",
    ],
  };
  return aboutUs.data.map((item) => {
    return <h2>{item}</h2>;
  });
};

export default CompanyInfo;
