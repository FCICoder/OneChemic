"use client";
import React, { useEffect, useState } from "react";
import products from "./products.json";
import { useRouter } from "next/router";

const Page = ({ params: { lng } }) => {
  const [category, setCategory] = useState();
  const myProducts = products;
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const categoryParam = urlSearchParams.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>{category}</h1>
          {myProducts[category] &&
            myProducts[category].map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    {/* Add an image if there is a URL */}
                    {item.ImageUrl && (
                      <img
                        src={item.ImageUrl}
                        className="img-fluid"
                        alt="Card"
                      />
                    )}
                    {lng === "en" ? (
                      <>
                        <h5 className="card-title">{item.en.title}</h5>
                        {/* <p className="card-title">{item.en.description}</p> */}

                        {/* <p dangerouslySetInnerHTML={{ __html: item.en.test }} /> */}

                      </>
                    ) : (
                      <>
                        <h5 className="card-title">{item.ar.title}</h5>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Page;
