import React from "react";
import "./index.css";
const Footer = () => {
  const products = [
    "Car Vacuum Cleaner",
    "Car Sterio",
    "Car Windsheild",
    "Car Headlights",
    "Car Seat Covers",
  ];
  const aboutUs = [
    "Company Name",
    "Company Country",
    "Company Growth",
    "Factory",
    "Certifications",
  ];
  const service = ["Sucess Cases", "News", "Webinar", "Technical Support"];
  const contacts = [
    "gomechanic.in",
    "Tel: 86-21-60345843",
    "Fax: 86-21-60955473",
    "Mob: 86-18267109953",
    "Address: Gurugram,Haryana,India",
  ];
  return (
    <>
      <div className="align">
        <div className="footer">
          <h3>Products</h3>
          <br />
          {products.map((item) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <h3>About Us</h3>
          <br />
          {aboutUs.map((item) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <h3>Services</h3>
          <br />
          {service.map((item) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <h3>Contacts</h3>
          <br />
          {contacts.map((item) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
