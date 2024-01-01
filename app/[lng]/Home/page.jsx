import Link from 'next/link'
import React from 'react'
import ShopNowCard from '../Components/ShopNowCard/ShopNowCard';
import styles from './home.module.css'
import factory from "../about-us/factory.jpg";
import ImageGallery from "../Components/Gallery/Gallery";
import { useTranslation } from "../../i18n";


export default async function Content( { lng } ) {
  const { t } = await useTranslation(lng,'home');

  const cards = [
    {
      imgURL:
        "https://bdcinternational.com/content/uploads/2022/06/oleje-1400x766.png",
      title: "Drilling chemicals and other BDC products",
    },
    {
      imgURL: "https://bdcinternational.com/content/uploads/2021/12/hero_2-scaled.jpg",
      title: 'Chemicals materials',
    },
    {
      imgURL:'https://bdcinternational.com/content/uploads/2021/12/hero_3-scaled.jpg',
      title:'Chemicals materials.'
    },
    {
      imgURL:'https://bdcinternational.com/content/uploads/2021/12/istock-1309776274-1-1400x682.jpg',
      title:'Unique original recipes'
    },
    {
      imgURL:'https://bdcinternational.com/content/uploads/2021/09/group-123-1.png',
      title:"A wide range of BDC products."
    },
    // {
    //   imgURL:'https://bdcinternational.com/content/uploads/2021/12/obszar-kompozycji-13-1400x793.jpg',
    //   title:'BDC drilling chemicals'
    // },
    {
      imgURL:'https://bdcinternational.com/content/uploads/2022/03/proszek-1-1400x700.jpg',
      title:'Laboratory testing of drilling fluids'
    },
    {
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17rPAQLtXIqW_vbejL_ZQj7tQ2k_353saYg&usqp=CAU",
      title:'HEDP'
    },
    {
      imgURL: "https://5.imimg.com/data5/QY/DE/CC/SELLER-23613198/methylene-chloride-500x500.jpg",
      title:'METHYLENE CHLORIDE'
    },
    {
      imgURL: "https://alliancechemical.com/app/uploads/2023/01/citric-acid-monohydrate-5-lb-bottle.jpg",
      title:'CITRIC ACID (FOOD GRADE)'
    },
    {
      imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9lta6zi7nA4FFCULBWuW6CgHbUIN_GQ0RA&usqp=CAU',
      title:'METHYLENE CHLORIDE formula'
    },

  ];
  const images = [
    {
      url: factory.src,
      description: "Best drilling chemicals",
      desc:`
      We don’t just sell chemical products – we create effective solutions. 
      We save our clients’ time and increase the safety of the work carried out.
      `
    },
    {
      url: "https://bdcinternational.com/content/uploads/2021/09/group-123-1.png",
      description: 'Product for drilling',
      desc:'BDC drilling products arose from our experience and practical knowledge of drilling work. The BDC technology meets the highest quality control standards. Our long-term presence on the market and successfully completed engineering challenges'
    },
    {
      url: "https://bdcinternational.com/content/uploads/2021/12/istock-1309776274-1-1400x682.jpg",
      description: "Unique original recipes",
      desc:`
      Each technical issue is carefully analyzed by our specialists,
       and recipes are created for individual engineering challenges. 
      This is how we ensure that our clients are certain that the solution presented to them is best suited to their working conditions.
      `
    },
  ];
  return <>
      <div className="d-flex flex-column gap-4 align-items-center w-100 mt-1" >
       {/* Grid */}
     <div className="row d-flex w-100 justify-content-center ">
     <div className="d-flex align-items-center flex-column gap-4 col-6 col-md-6 col-xl-3 col-lg-3 mb-4">
       <ShopNowCard src={cards[0].imgURL} title={cards[0].title}/>
       <ShopNowCard txtColor='white' src={cards[1].imgURL} title={cards[1].title}/>
       <ShopNowCard src={cards[2].imgURL} title={cards[2].title}/>
       {/* <ShopNowCard src={cards[10].imgURL} title={cards[10].title}/> */}

     </div>
     <div className="d-lg-flex d-xl-flex flex-column gap-4 col-6 d-none ">
       <ShopNowCard src={cards[3].imgURL} title={cards[3].title}/>
       <div className="d-flex gap-4">
       <ShopNowCard txtColor='white' src={cards[4].imgURL} title={cards[4].title}/>
       <ShopNowCard  src={cards[5].imgURL} title={cards[5].title}/>
       </div>
       {/* <ShopNowCard src={cards[6].imgURL} titleWidth='500px' title={cards[6].title}/> */}
     </div>
     <div className="d-flex align-items-center flex-column gap-4 col-6 col-md-6 col-xl-3 col-lg-3 ">
       <ShopNowCard src={cards[7].imgURL} title={cards[7].title}/>
       <ShopNowCard txtColor='white' src={cards[8].imgURL} title={cards[8].title}/>
       {/* <ShopNowCard src={cards[9].imgURL} title={cards[9].title}/> */}
     </div>
   </div>
    <div>
        <div className='container'>
        <div>
            <div className='row '>
            <div className='col-md-5'>
                <div className='  border-start  border-2  border-primary'>
                <p className='h4 ms-5 pt-1 pb-4'>Tradition meets modernity {t('home.part1')}</p>
                </div>
            </div>
            <div className='col-md-7'>
                <p className='text-muted'>We have created a comprehensive drilling fluid system in which the chemicals complement each other in such a way as to achieve the maximum possible field efficiency.
                     We have obtained these results by taking utmost care of every single ingredient.</p>
            
            <div>
                    <Link className='text-decoration-none' href='../about-us' >
                    ABOUT US <i className="fa-solid fa-greater-than fa-fade ms-2" style={{fontSize:'14px'}}></i>
                    </Link>
            </div>
            </div>
            </div>
            <div></div>
        </div>
        </div>
    </div>
    </div>

    <section>
          <div className="shadow p-3 mb-2 bg-white rounded">
            <ImageGallery images={images} />
            <div className='container'>
                    <Link className='text-decoration-none' href='../Contactus' >
                    CONTACT US <i className="fa-solid fa-greater-than fa-fade ms-2" style={{fontSize:'14px'}}></i>
                    </Link>
            </div>
          </div>
          
        </section>

    <section className={`${styles.infoSection}`} >
          <div className="my-1 py-2  container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="w-100 p-3  text-center pt-5" style={{height:'500px'}}>
              <img
                className=" " style={{}}
                src="https://bdcinternational.com/content/uploads/2022/03/bdc_uslugi-1-1400x700.jpg"
                alt=""
              />
            </div>
            <div className={` p-4 ${styles.content}`}>
              <h2>Services tailored to your needs</h2>
              <p className='text-muted'>
              Our solutions have already been proven at many projects in various conditions.
               Because of that, we are certain that we offer the best possible products and services.
                We are ready for new challenges. Our team and laboratories will undertake any project, 
                even an extremely challenging and different from any previous job.
                </p>
                 
             
            </div>
          </div>
        </section>
    </>

}
