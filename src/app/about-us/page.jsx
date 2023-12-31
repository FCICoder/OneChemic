'use client'
import React from "react";
import ImageGallery from "../Components/Gallery/Gallery";
import "./aboutStyle.css";
import Link from "next/link";
import parol from "../about-us/2w.jpg";
import factory from "../about-us/factory.jpg";
import { Helmet } from "react-helmet";

const Page = () => {
  const images = [
    {
      url: factory.src,
      description: "Description 1",
    },
    {
      url: "https://bdcinternational.com/content/uploads/2022/03/szyte_na_miare-e1648642841245-1400x934.jpg",
      description: "Description 2",
    },
    {
      url: "https://bdcinternational.com/content/uploads/2022/03/oil_drilling.jpg",
      description: "Description 3",
    },
  ];
  return (
    <>
    <Helmet>
        <title>
            About us
        </title>
    </Helmet>
      <div className="container" id="about-us">
        <section>
          <div className="row m-0 p-1 shadow p-3 mb-1 bg-white rounded ">
            <div className="col-md-5 pt-1">
              <div className="px-4 py-1 position-relative fw-bold title-1">
                <p className="fs-3 " style={{ overflow: "hidden" }}>
                  About OneChemic<span className="d-flex">since 2012</span>
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <p className="text-muted p-2">
                Welcome to OneChemic, your premier partner in the chemical raw
                materials industry. Established in 2012, our journey began with
                a commitment to providing unparalleled quality and service to
                the Egyptian market. Over nearly a decade, we have evolved into
                a trusted name, sourcing top-tier materials globally from China,
                Korea, Turkey, Brazil, India, and the European Union. Our
                foundation rests on a dedication to excellence, making us the
                go-to supplier for factories and distributors in Egypt. With a
                steadfast belief in reliability and customer satisfaction,
                OneChemic stands as a testament to a decade of unwavering
                commitment to our clients and the chemical industry
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="shadow p-3 mb-2 bg-white rounded">
            <ImageGallery images={images} />
          </div>
        </section>
        <section>
          <div className="my-1    container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="ps-2 py-2">
              <h2>Why OneChemic?</h2>
              <p>
                Direct Imports: We cut out the middlemen to bring you products
                directly from reputable suppliers in China, India, Turkey, and
                the European Union
              </p>
              <p>
                Highest Quality: Our commitment to excellence means we only deal
                in products of the highest standards, meeting and exceeding
                industry expectations.
              </p>
              <p>
                Best Prices: By establishing strong partnerships with
                international suppliers, we secure competitive prices, allowing
                you to optimize your budget without compromising quality
              </p>
              <p className="text-muted">
                Join the countless businesses that have elevated their
                operations with [Your Company Name]. Trust us for unrivaled
                quality, direct imports, and unbeatable prices.
              </p>
              <Link href="  #">more information</Link>
            </div>
            <div className="w-100 p-3">
              <img className="img-fluid" src={parol.src} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="w-100 p-3 text-center pt-5">
              <img
                className="img-fluid"
                src="https://bdcinternational.com/content/uploads/2022/03/bdc_uslugi-1-1400x700.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h2>WHAT WE DO FOR YOU?</h2>
              <p>
                Embarking on a transformative partnership with OneChemic opens
                the door to a comprehensive array of services designed to
                elevate your business in the dynamic landscape of chemical raw
                materials.</p>
                <p>
                  {" "}
                  Our commitment extends far beyond the mere act of importation;
                </p>{" "}
                <p>
                  it is a pledge to be your steadfast ally in the pursuit of
                  success.
                </p>{" "}
                <p>
                  At the heart of our services is the meticulous sourcing of
                  premium chemical raw materials from leading global suppliers
                  in China, Korea, Turkey, Brazil, India, and the European
                  Union.
                </p>{" "}
                We orchestrate a seamless process, ensuring that your business
                has access to the highest quality materials that meet global
                standards.
                <p>
                  As a conduit between international excellence and the vibrant
                  industries of Egypt, OneChemic not only simplifies but
                  enhances your supply chain dynamics.
                </p>
             
              <Link href="  #">more information</Link>
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="   p-3">
              <h2>What sets us apart is our adaptability.</h2>
              <p>
                OneChemic is not confined by the limits of a static catalog;
              </p>
              <p>
                {" "}
                rather, we offer the unique advantage of on-demand imports.
                Should your specific needs require a material beyond our
                existing repertoire,
              </p>
              <p>
                our team is poised to explore and secure the exact chemical
                solution your business demands.
              </p>{" "}
              <p>
                This flexibility is coupled with a commitment to personalized
                customer service — an assurance that your individual
                requirements will be met with precision and care
              </p>
              <Link href="  #">more information</Link>
            </div>
            <div className="w-100    p-3">
              <img
                className="img-fluid"
                src="https://bdcinternational.com/content/uploads/2022/03/szeroka_gama.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="   p-3">
              <h4>
                Whether you operate within the realms of manufacturing prowess
                or commercial distribution
              </h4>
              <p>
                we are architects of tailored solutions. We understand the
                intricate nuances of your industry and stand ready to provide
                not just chemicals but strategic partnerships.
              </p>
              <p>
                In choosing OneChemic, you align your business with a beacon of
                quality, reliability, and unparalleled service excellence,
                ensuring that your journey to success is not just efficient but
                transformative.
              </p>{" "}
              <p>
                Your growth is our priority, and our suite of services is
                designed to catalyze your ascent to new echelons of achievement.
              </p>
              <p>
                {" "}
                Welcome to a partnership where your success is not just a goal;
                it's a shared journey, and OneChemic is your steadfast companion
                on this path of excellence.
              </p>
              <Link href="  #">more information</Link>
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className=" p-3">
              <div className="px-4 py-1 position-relative fw-bold title-2 fs-3">
                <span>OneChemic. A global brand.</span>
              </div>

              <p>
                <span className="fs-4">since 12 years,</span>
                our journey began with a commitment to providing unparalleled
                quality and service to the Egyptian market. Over nearly a
                decade, we have evolved into a trusted name, sourcing top-tier
                materials globally from China, Korea, Turkey, Brazil, India, and
                the European Union..
              </p>
              <Link href="  #">more information</Link>
            </div>
            <div className="w-100    p-3">
              <img
                className="img-fluid"
                src="https://bdcinternational.com/content/uploads/2021/09/frame.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
