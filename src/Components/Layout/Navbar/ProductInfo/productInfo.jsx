import React from "react";
import "../navbar.css";
const ProductInfo = () => {
  const products = [
    "Car Vacuum Cleaner",
    "Car Sterio",
    "Car Windsheild",
    "Car Headlights",
    "Car Seat Covers",
  ];
  function clickHandler() {}

  return products.map((item) => {
    return (
      <div className="product-item" onClick={clickHandler}>
        <h2>{item}</h2>
      </div>
    );
  });
};

export default ProductInfo;
