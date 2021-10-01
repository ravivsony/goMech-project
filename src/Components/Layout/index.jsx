import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header/index";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import Products from "../Pages/Products/products";
import Home from "../Pages/Home/home";
import AboutUs from "../Pages/AboutUs/aboutUs";
import ContactPage from "../Pages/ContactPage/contactPage";
import "../Pages/Content/index.css"

const index = () => {
  return (
    <>
      <Header />
      <Navbar />
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
     
      <Footer />
    </>
  );
};

export default index;
