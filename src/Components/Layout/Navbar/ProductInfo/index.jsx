import React from "react";

const ProductInfo = () => {
  const products = [
    "Car Vacuum Cleaner",
    "Car Sterio",
    "Car Windsheild",
    "Car Headlights",
    "Car Seat Covers",
  ];

  return products.map((item) => {
    return <h2>{item}</h2>;
  });
};

export default ProductInfo;
