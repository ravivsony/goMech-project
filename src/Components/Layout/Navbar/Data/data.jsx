import React from 'react'

const data = () => {
    const productData=[
        "Company Name",
        "Company Country",
        "Company Growth",
        "Factory",
        "Certifications",
        "Achievements",
    ]
    const companyData=[
        "Car Vacuum Cleaner",
      "Car Sterio",
      "Car Windsheild",
      "Car Headlights",
      "Car Seat Covers",
    ]
    return (
        <div>
            productData.map((item) => {
    return <h2>{item}</h2>;
  });
        </div>
    )
}

export default data
