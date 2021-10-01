import React from "react";
import "../Content/index.css";

const Home = () => {
  return (
    <>
      <h2 >Our Products</h2>
      <div className="products">
        <div className="product-1">
          <img
            src="https://www.mountaineers.org/images/placeholder-images/placeholder-400-x-400/image_preview"
            alt="new"
          />
          <figCaption style={{ textAlign: "center" }}>Anything abc</figCaption>
        </div>

        <div className="product-2">
          <img
            src="https://www.mountaineers.org/images/placeholder-images/placeholder-400-x-400/image_preview"
            alt="new"
          />
          <figCaption style={{ textAlign: "center" }}>Anything abc</figCaption>
        </div>
        <div className="product-3">
          <img
            src="https://www.mountaineers.org/images/placeholder-images/placeholder-400-x-400/image_preview"
            alt="new"
          />
          <figCaption style={{ textAlign: "center" }}>Anything abc</figCaption>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Home;
