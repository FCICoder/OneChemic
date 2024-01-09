import Image from "next/image";
import React from "react";
import fStyle from "./footer.module.css";
import logo from "../../../../assets/logo3.png";
import { useTranslation } from "../../../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import Link from "next/link";

export const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container-fluid  px-5 mt-2 py-2 shadow">
        <div className="row mt-2 p-0 w-100">
          <div className="col-lg-3 col-md-6 m-auto justify-content-center ">
            <div className="">
              <Image
                src={logo.src}
                width={200}
                height={200}
                className="rounded-circle img-fluid bg-light"
                alt="one Chemic logo"
              ></Image>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 ">
            <h1 className={`${fStyle.responsiveText} ${fStyle.decorate}`}>
              {t("part9")}
            </h1>
            <p className={`${fStyle.address} mt-3 `}>
              <i className=" fas fa-location-dot me-2"></i>
              {t("part10")}
              {t("part11")}
              {t("part12")}
              {t("part13")}
            </p>
            <div className="d-flex mt-1 mb-1">
              <p className="me-1 text-muted  mt-1">
                <i className="fa fa-phone me-2 "></i>
                {t("part21")}
              </p>
              <a href="tel:+20102241805" className="text-decoration-none ">
                <p className={`${fStyle.responsiveLink}  me-2   `}>
                  {lng === "en"
                    ? "(+20 ) 10 22 64 1805"
                    : "1805 64 22 10 (20+)"}
                </p>
              </a>
            </div>
            <div className="d-flex  mb-1">
              <p className="me-1 text-muted mt-1">
                <i className="fas fa-envelope me-2 text-muted "></i>{" "}
                {t("part22")}
              </p>
              <a
                href="mailto:info@onechemic.com"
                className="text-decoration-none text-muted "
              >
                <p className={`${fStyle.responsiveLink}  me-2  `}>
                  info@onechemic.com
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ">
            <h1 className={`${fStyle.responsiveText} ${fStyle.decorate} mx-2`}>
              {t("part6")}
            </h1>
            <ul className="list-unstyled p-1 m-1">
              <li>
                <div className="d-flex ">
                  <p className="me-1 text-muted  mt-1">
                    <i className="fa fa-phone me-2 "></i>
                    {t("part21")}
                  </p>
                  <a href="tel:+201010207764" className="text-decoration-none ">
                    <p className={`${fStyle.responsiveLink}  me-2 `}>
                      {lng == "en"
                        ? "(+20 ) 10 10 20 7764"
                        : "7764 20 10 10 (20+)"}
                    </p>
                  </a>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <p className="me-1 text-muted  mt-1">
                    <i className="fa fa-phone me-2 "></i>
                    {t("part21")}
                  </p>
                  <a href="tel:+201010202218" className="text-decoration-none ">
                    <p className={`${fStyle.responsiveLink}  me-2    `}>
                      {lng == "en"
                        ? "(+20 ) 10 10 20 2218"
                        : "2218 20 10 10 (20+)"}
                    </p>
                  </a>
                </div>
              </li>
              <li></li>
            </ul>
            <div className=" ">
              <h1
                className={`${fStyle.responsiveText} ${fStyle.decorate} mx-2`}
              >
               { t('part23')}
              </h1>
              <div className="d-flex">
                <p className="me-1 text-muted  mt-1">
                  <i className="fa fa-phone me-2 "></i>
                  {t("part21")}
                </p>
                <a href="tel:+201070097779" className="text-decoration-none ">
                  <p className={`${fStyle.responsiveLink}  me-2   `}>
                    {lng === "en"
                      ? "(+20 ) 10 70 09 7779"
                      : "7779 09 70 10 (20+)"}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <h1 className={`${fStyle.responsiveText}  ${fStyle.decorate} mx-2`}>
              {t("part1")}
            </h1>
            <ul className="list-unstyled p-2 m-1">
              <li>
                <Link href="#" className={`${fStyle.responsiveLink}`}>
                  {t("part2")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lng}/about-us`}
                  className={`${fStyle.responsiveLink}`}
                >
                  {t("part3")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lng}/Contactus`}
                  className={`${fStyle.responsiveLink}`}
                >
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
        </div>
        <hr style={{color:"GrayText"}}></hr>
        <div className="d-md-flex justify-content-center px-5 ">
          <div>
            <span
              className={`${fStyle.address}  text-dark `}
              style={{ fontWeight: "100" }}
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
    </div>
  );
};
