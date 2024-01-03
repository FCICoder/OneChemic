'use client'
import React, { useEffect, useState } from 'react'
import products from '../Category/products.json'
import styles from './prdDetails.module.css'
export default function page({ params: { lng } }) {
    const [product, setProduct] = useState('');
    let prd;
    const urlSearchParams = new URLSearchParams(window.location.search);
    let productParam = urlSearchParams.get("product");
    let categoryParam = urlSearchParams.get("category");

    useEffect(() => {
        if (categoryParam && productParam) {
            prd = products[categoryParam].filter((prd) => prd.id == productParam)
            setProduct(prd);
        }
    }, [])

    useEffect(() => {
        prd = products[categoryParam].filter((prd) => prd.id == productParam)
        setProduct(prd);
    }, [categoryParam, productParam])

    return (
        <div className='container mt-3 mb-5'>
            <div className='row'>
                <div className="col-md-5 d-flex justify-content-center">
                    <div className={`${styles.card} card rounded-4 text-center shadow `}>
                        <div className="card-body">
                            {product[0]?.ImageUrl && (
                                <img
                                    src={product[0]?.ImageUrl}
                                    className={`${styles.image} img-fluid `}
                                    alt="ImageCard"
                                    style={{ height: '260px', borderRadius: '20px' }}
                                />
                            )}

                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className='mt-4'>
                        {lng === "en" ? (
                            <>
                                <h3 className="card-title  mb-4">{product[0]?.en.title}</h3>
                                {/* <p className='text-lowercase'>
                        </p> */}
                                <p className='text-lowercase text-black-50' dangerouslySetInnerHTML={{ __html: product[0]?.en.description }} ></p>

                            </>
                        ) : (
                            <>
                                <h3 className="card-title  mb-4">{product[0]?.ar.title}</h3>
                                {/* <p className='text-lowercase'>
                        </p> */}
                                <p className='text-lowercase text-black-50' dangerouslySetInnerHTML={{ __html: product[0]?.ar.description }} ></p>

                            </>)}
                    </div>

                </div>
            </div>
        </div>
    )
}
