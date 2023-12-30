import React from "react";
import style from "./contact.module.css";
import Link from "next/link";

const ContactLink = () => {
  return (
    <>
      <div className="container-fluid bg-light m-0">
        <div className="d-lg-flex p-4 justify-content-evenly">
          <div>
            <h3 className="pb-2">Can't find what you are looking for?</h3>
            <p>Our specialists will be happy to help you!</p>
          </div>
          <div>
            <p className="text-primary mb-4 mt-5">
              <i className="fa fa-phone me-2"></i>
              (+20 ) 10 22 64 1805
            </p>
          </div>

          <div className=" border border-0 rounded text-light d-flex align-items-center ">
            <Link
              href="../../Contactus"
              className="btn bg-primary mt-2 mx-2 text-uppercase "
              style={{ fontWeight: "600" }}
            >
         
              contact form
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLink;
