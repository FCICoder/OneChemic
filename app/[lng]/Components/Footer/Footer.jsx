import Image from "next/image";
import React from "react";
import fStyle from "./footer.module.css";
import logo from "../../../../assets/Logo.jpg";
import { useTranslation } from "../../../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import Link from "next/link";

export const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");

  return (
    <div style={{ backgroundColor: "#1f44ab" }}>
      <footer  className="text-center">
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && " or "}
                <Link className="text-dark fs-3 text-decoration-none" href={`/${l}`}>{lng=='ar'?"Browse in English ":" تصفح بالعربية"}</Link>
              </span>
            );
          })}
      </footer>
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
              {/* <p className={`${fStyle.responsiveLink}`}>{t('part15')}</p> */}
              <p className={`${fStyle.responsiveLink}`}>{t('part16')}</p>
            </div>
          </div>
        </div>
        <div className="row mt-2 p-0 w-100" id="footerContent">
          <div className="col-md-4 col-6 ">
            <h1 className={`${fStyle.responsiveText} mx-2`}>{t("part1")}</h1>
            <ul className="list-unstyled p-2 m-1">
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  {t("part2")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/about-us`} className={`${fStyle.responsiveLink}`}>
                  {t("part3")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/Contactus`} className={`${fStyle.responsiveLink}`}>
                  {t("part4")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/`} className={`${fStyle.responsiveLink}`}>
                  {t("part5")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-6 ">
            <h1 className={`${fStyle.responsiveText} mx-2`}>{t("part6")}</h1>
            <ul className="list-unstyled p-2 m-1">
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  {t("part7")}
                </Link>
              </li>
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  {t("part8")}
                </Link>
              </li>
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  {t("part8.1")}
                  <br></br>
                  {t("part8.2")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4  col-6 ">
            <h1 className={`${fStyle.responsiveText}`}>{t("part9")}</h1>
            <p className={`${fStyle.responsiveLink} mt-3 mb-1`}>
              <i className=" fas fa-location-dot me-2"></i>
              {t("part10")} <br />
              {t("part11")}
              {t("part12")}
              <br />
              {t("part13")}
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="d-md-flex justify-content-center px-5 ">
        <div>
          <span
            className={`${fStyle.responsiveLink} text-dark `}
            style={{ fontSize: "18px" }}
          >
            {" "}
            {t("part14")}
          </span>
        </div>
        {/* <div className="flex-end" onClick={()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

        }}>
        <i className="fa-solid fa-circle-arrow-up fs-4 px-1"></i>
          <span className={`${fStyle.responsiveLink} fs-6`}>Back to top</span>
        </div> */}
      </div>
    </div>
  );
};
