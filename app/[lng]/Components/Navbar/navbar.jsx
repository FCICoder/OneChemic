"use client";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import styles from "./navbar.module.css";
import Image from "next/image";
import img from "../../../../assets/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = ({ lng }) => {
  var myLang = lng;
  const router = usePathname();

 function select(e){
  if(window.location.search !== e.target.search ){
    window.location.href = e.target.href;
  }

}
  return (
    <>
      <section>
        <nav className={`navbar navbar-expand-sm navbar-light ${styles.nav}`}>
          <div className="container">
            <div className={`${styles.image}`}>
              <Link className="navbar-brand" href={`/${lng}`}>
                <Image src={img} alt="OneChemic logo" className="img-fluid" />
              </Link>
            </div>

            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="   collapse navbar-collapse" id="collapsibleNavId">
              <div className=" w-100 d-flex justify-content-center">
                <ul className={` navbar-nav  mt-2 mt-lg-0 translate-50`}>
                  <li className="nav-item">
                    <Link
                      className={`${
                        router == `/${lng}` ? `${styles.active}` : ""
                      } ${styles.nav_link}  `}
                      href={`/${lng}`}
                    >
                      {myLang == "en" ? "Home" : "الصفحة الرئيسيه"}
                      {/* {t('navbar.part1')} */}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${
                        router == `/${lng}/about-us` ? `${styles.active}` : ""
                      } ${styles.nav_link}`}
                      href={`/${lng}/about-us`}
                    >
                      {myLang == "en" ? "About Us" : "نبذة عنا"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${
                        router == `/${lng}/Contactus` ? `${styles.active}` : ""
                      } ${styles.nav_link}`}
                      href={`/${lng}/Contactus`}
                    >
                      {myLang == "en" ? "Contactus" : "تواصل معنا"}
                    </Link>
                  </li>{" "}
                  <li className="nav-item dropdown" >
                    <Link
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      
                    >
                      Categories
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <Link 
                        className="dropdown-item"
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Solevants" },
                        }}
                        onClick={(e)=>select(e)}
                      >
                        Solevants
                      </Link>
                      <Link className="dropdown-item" 
                       href={{
                        pathname: `/${lng}/Category`,
                        query: { category: "Polymers" },
                      }}
                      onClick={(e)=>select(e)}
                      >
                        Polymers
                      </Link>
                      <Link className="dropdown-item" 
                       href={{
                        pathname: `/${lng}/Category`,
                        query: { category: "Chemical Additives and Processing Aids" },
                      }}
                      onClick={(e)=>select(e)}
                      >
                        Chemical Additives and Processing Aids
                      </Link>
                      <Link className="dropdown-item" 
                       href={{
                        pathname: `/${lng}/Category`,
                        query: { category: "Preservatives and Chemical Processing" },
                      }}
                      onClick={(e)=>select(e)}
                      >
                        Preservatives and Chemical Processing
                      </Link>
                      <Link className="dropdown-item" 
                       href={{
                        pathname: `/${lng}/Category`,
                        query: { category: "Pigments and Fillers" },
                      }}
                      onClick={(e)=>select(e)}
                      >
                        Pigments and Fillers
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
