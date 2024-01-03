"use client";
import React, { useEffect, useState } from "react";
import products from "./products.json";
import styles from './category.module.css'
import Link from "next/link";
const Page = ({ params: { lng } }) => {
  const [category, setCategory] = useState('');
  const myProducts = products;
  if(typeof window !== undefined){
    const urlSearchParams = new URLSearchParams(window.location.search);
    let categoryParam = urlSearchParams.get("category");
  
    useEffect(()=>{
      if (categoryParam !== category) {
        categoryParam = urlSearchParams.get("category");
        setCategory(categoryParam);
      }
    },[category])
  
  }
  
  // function select(e){

  //   // setTimeout(()=>{
  //   //   console.log(e);
  //   //   console.log(window.location);
  //   //   console.log(e.target.baseURI);
  //   //   console.log(e.target.baseURI);
  //   //   if(window.location.href === e.target.baseURI ){
  //   //     // window.location.href = e.target.baseURI
  //   //     location.reload();
  //   //     console.log('qewwqqqqqqq');
  //   //   }
  //   // },1000)
   
  // }
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {myProducts[category] &&
            myProducts[category]?.map((item, index) => (
              <div key={index} className="col-md-4 mb-4 ">
                <Link 
                href={{
                  pathname: `/${lng}/ProductDetails`,
                  query: { product: `${item.id}`, category : `${category}` },
                }}
                // onClick={(e)=>select(e)} 
                >
                <div className={`${styles.card} card rounded-4  text-center shadow`}>
                  <div className="card-body">
                    {item.ImageUrl && (
                      <img
                        src={item.ImageUrl}
                        className={`img-fluid ${styles.image}`}
                        alt="ImageCard"
                        style={{height:'270px', borderRadius:'20px'}}
                      />
                    )}
                    {lng === "en" ? (
                      <>
                        <h5 className="card-title mt-4">{item.en.title}</h5>
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
                </Link>
                
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Page;
