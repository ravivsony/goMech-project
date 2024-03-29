import React, { useState, useEffect } from "react";
import Banner from "../Header/Banner";
import { NavLink } from "react-router-dom";
import ProductInfo from "./ProductInfo/productInfo";
import CompanyInfo from "./CompanyInfo/companyInfo";
import Search from "../Header/Search";
import "./navbar.css";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [productCategory, setProductCategory] = useState();
  const [companyDetails, setCompanyDetails] = useState();
  const [targetId, setTargetId] = useState();

  const menu = ["products", "about", "contact"];

  useEffect(() => {
    setProductCategory(
      targetId === "products" && hovered ? <ProductInfo /> : <></>
    );

    setCompanyDetails(
      targetId === "about" && hovered ? <CompanyInfo /> : <></>
    );
  }, [targetId, hovered]);

  function handleMouseEnter(e) {
    setHovered(true);
    setTargetId(e.currentTarget.id);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <>
      <div className="nav-links">
        <div style={{ margin: "auto" }}>
          <ul style={{ width: "100%", margin: "auto" }}>
            <li>
              <div
                className="navigation"
                style={{ height: "5.5em", width: "90px" }}
              >
                <NavLink className="link" to="/">
                  Home
                </NavLink>
              </div>
            </li>

            {menu.map((element) => {
              return (
                <>
                  <li>
                    <div
                      className="navigation"
                      id={element}
                      onMouseEnter={(e) => handleMouseEnter(e)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        height: "5.5em",
                        width: "90px",
                        marginLeft: "35px",
                      }}
                    >
                      <NavLink className="link" to={`/${element}`}>
                        {element}
                      </NavLink>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="linkInfo" onMouseEnter={() => setHovered(true)}>
            {productCategory}
          </div>
          <div className="linkInfo" onMouseEnter={() => setHovered(true)}>
            {companyDetails}
          </div>
        </div>

        <div>
          <Search />
        </div>
      </div>

      <Banner />
    </>
  );
};

export default Navbar;
