import React, { useState, useEffect } from "react";
import Banner from "../Header/Banner";
import { NavLink } from "react-router-dom";
import ProductInfo from "./ProductInfo/index";
import Search from "../Header/Search";
import "./index.css";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [productCategory, setProductCategory] = useState();
  const [companyDetails, setCompanyDetails] = useState();

  const menu = ["products", "about", "contact"];
  useEffect(() => {
    setProductCategory(hovered ? <ProductInfo /> : <></>);
  }, [hovered]);

  return (
    <>
      <div className="nav-links">
        <div style={{ margin: "auto" }}>
          <ul style={{ width: "100%", margin: "auto" }}>
            <li>
              <NavLink
                to="/"
                className="navigation"
                style={{
                  fontSize: "1.3rem",
                  marginRight: "2rem",
                  marginLeft: "2rem",
                }}
              >
                Home
              </NavLink>
            </li>

            {menu.map((element) => {
              return (
                <>
                  <li>
                    <NavLink
                      to={`/${element}`}
                      className="navigation"
                      style={{
                        fontSize: "1.3rem",
                        marginRight: "2rem",
                        marginLeft: "2rem",
                      }}
                      onMouseEnter={() => {
                        setHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(false);
                      }}
                    >
                      {element}
                    </NavLink>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="linkInfo">{productCategory}</div>
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
