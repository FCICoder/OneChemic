'use client';
import Image from "next/image";
import React from "react";
import fStyle from "./footer.module.css";
import logo from "../../../../assets/logo.png";
import Link from "next/link";

const Footer = () => {

  return (
    <div style={{ backgroundColor: "#1f44ab" }}>
      <div className="container-fluid d-lg-flex d-block px-5 py-2">
        <div className="  d-flex m-auto justify-content-center me-2">
          <div className="">
            <Image
              src={logo.src}
              width={80}
              height={80}
              className="rounded-circle img-fluid"
              alt="one Chemic logo"
            ></Image>
          </div>
          <div className="position-relative">
            <div className={`${fStyle.titleLogo} ms-3 p-1 my-auto`}>
              <p className={`${fStyle.responsiveLink}`}>OneChemic</p>
              <p className={`${fStyle.responsiveLink}`}> since 2012</p>
            </div>
          </div>
        </div>
        <div className="row mt-2 p-0 w-100" id="footerContent">
          <div className="col-md-4 col-6 ">
            <h1 className={`${fStyle.responsiveText}`}>Discover</h1>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  OneChemic
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-6 ">
            <h1 className={`${fStyle.responsiveText}`}>our Products</h1>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  Contact us
                </Link>
              </li>

            </ul>
          </div>
          <div className="col-md-4  col-6 ">
            <h1 className={`${fStyle.responsiveText}`}>headquarters</h1>
            <p className={`${fStyle.responsiveLink} mt-3 mb-1`}  >
                            <i className=' fas fa-location-dot me-2'></i>
                            Alexandria agricultural Slow Road,<br />
                            Qalyoub
                            Qalyoubia,<br /> Egypt.
                        </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="d-md-flex justify-content-between px-5 ">
        <div>
          <span className={`${fStyle.responsiveLink} text-dark `} style={{fontSize:'18px'}}>© 2024 OneChemic</span>
        </div>
        <div className="flex-end" onClick={()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

        }}>
        <i className="fa-solid fa-circle-arrow-up fs-4 px-1"></i>
          <span className={`${fStyle.responsiveLink} fs-6`}>Back to top</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
