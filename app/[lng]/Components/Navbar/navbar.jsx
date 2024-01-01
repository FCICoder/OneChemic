"use client";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import styles from "./navbar.module.css";
import Image from "next/image";
import img from "../../../../assets/OneChmeicLogo.jpg";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useTranslation } from '../../../i18n'

export  const Navbar =  ({lng}) => {
  // const { t } = await useTranslation(lng, 'navbar')
var myLang=lng
  //   const { t } =  useTranslation(lng, 'navbar')

  const router = usePathname();
  return (
    <>
      <section>
        <nav className={`navbar navbar-expand-sm navbar-light ${styles.nav}`}>
          <div className="container">
            <div className={`${styles.image}`}>
              <Link className="navbar-brand" href="/">
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
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className={`${styles.navbar_nav} me-auto mt-2 mt-lg-0`}>
                <li className="nav-item">
                  <Link
                    className={`${router == `/${lng}` ? `${styles.active}` : ""} ${
                      styles.nav_link
                    } `}
                    href="/"
                  >
                   home
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
                    {(myLang=='en')?"About Us":"نبذة عنا"}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`${
                      router == `/${lng}/Contactus` ? `${styles.active}` : ""
                    } ${styles.nav_link}`}
                    href={`/${lng}/Contactus`}
                  >
                    Contact Us
                  </Link>
                </li>{" "}
                <li className="nav-item dropdown">
                  <Link
                    className={`${styles.nav_link} dropdown-toggle`}
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <Link className="dropdown-item" href="#">
                      Action 1
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Action 2
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
