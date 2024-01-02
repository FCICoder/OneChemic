import Link from 'next/link'
import React from 'react'
import ShopNowCard from '../Components/ShopNowCard/ShopNowCard';
import styles from './home.module.css'
import factory from "../../../assets/factory1.jpg";
import ImageGallery from "../Components/Gallery/Gallery";
import { useTranslation } from "../../i18n";
import ContactLink from '../Components/Contact-link/Contact-link';


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
      description: (lng=='en')?`Best drilling chemicals` :`أفضل كيماويات الحفر`,
      desc:(lng=='en')?`
      We don’t just sell chemical products – we create effective solutions. 
      We save our clients’ time and increase the safety of the work carried out.
      ` :`نحن لا نبيع المنتجات الكيميائية فحسب، بل نبتكر حلولاً فعالة.
      نحن نوفر وقت عملائنا ونزيد من سلامة العمل المنجز.
      `
    },
    {
      url: "https://bdcinternational.com/content/uploads/2021/09/group-123-1.png",
      description: (lng=='en')?`WHAT WE DOFOR YOU?` :`ماذا نقدم لك ؟`,
      desc:
      (lng=='en')?`
      Embarking on a transformative partnership with OneChemic
opens the door to a comprehensive array of services designed to
elevate your business in the dynamic landscape of chemical raw
materials. Our commitment extends far beyond the mere act of
importation; it is a pledge to be your steadfast ally in the pursuit of
success` :
      `الشروع في شراكة تحويلية مع OneChemic
      يفتح الباب أمام مجموعة شاملة من الخدمات المصممة ل
      ارفع مستوى عملك في المشهد الديناميكي للمواد الكيميائية الخام
      مواد. إن التزامنا يمتد إلى ما هو أبعد من مجرد الفعل
      استيراد؛ إنه تعهد بأن تكون حليفك الثابت في السعي لتحقيق ذلك
      نجاح `
    
    },
    {
      url: "https://bdcinternational.com/content/uploads/2021/12/istock-1309776274-1-1400x682.jpg",
      description:(lng=='en')?`Unique original recipes` :`وصفات أصلية فريدة من نوعها`,
      desc:(lng=='en')?`
      Each technical issue is carefully analyzed by our specialists,
       and recipes are created for individual engineering challenges. 
      This is how we ensure that our clients are certain that the solution presented to them is best suited to their working conditions.
         ` :`يتم تحليل كل مشكلة فنية بعناية من قبل المتخصصين لدينا،
         ويتم إنشاء وصفات للتحديات الهندسية الفردية.
        هذه هي الطريقة التي نضمن بها أن عملائنا على يقين من أن الحل المقدم لهم هو الأنسب لظروف عملهم.`
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
                <p className='h4 ms-5 pt-1 pb-4'>{(lng=='en')? 'Tradition meets modernity':'التقليد يلتقي بالحداثة'} </p>
                </div>
            </div>
            <div className='col-md-7'>
                <p className='text-muted'></p>
                     {t('home.part1')}
            
            <div>
                    <Link className='text-decoration-none' href='../about-us' >
                    {(lng=='en')?'ABOUT US':'نبذه عنا'} <i className="fa-solid fa-greater-than fa-fade ms-2" style={{fontSize:'14px'}}></i>
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
            <ImageGallery images={images} lng={lng} />
            <div className='container'>
                    <Link className='text-decoration-none' href='../Contactus' >
                    {(lng=='en')?'CONTACTUS':'تواصل معنا'}<i className="fa-solid fa-greater-than fa-fade ms-2" style={{fontSize:'14px'}}></i>
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
              <h2>{(lng=='en')?'Services tailored to your needs':'خدمات مصممة خصيصا لاحتياجاتك'}</h2>
              <p className='text-muted'>
              {t('home.part2')}
                </p>
                 
             
            </div>
          </div>
        </section>
        <ContactLink lng={lng}/>
    </>

}
