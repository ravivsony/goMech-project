import React from "react";

const ProductInfo = () => {
  const products = {
    id: 1,
    data: [
     "Car Vacuum Cleaner",
      "Car Sterio",
      "Car Windsheild",
      "Car Headlights",
      "Car Seat Covers",
    ],
  };

  return products.data.map((item) => {
    return <h2>{item}</h2>;
  });
};

export default ProductInfo;
