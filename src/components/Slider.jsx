import React from 'react';
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useNavigate } from "react-router-dom";
import { Button } from './Button';
import styled, { css } from 'styled-components/macro';
import {IoMdArrowRoundForward} from 'react-icons/io';
import { motion } from 'framer-motion'





// const titleAnim = {
//   hidden:{opacity:0},
//   show: {opacity:1, transition: {duration:2 }},
// }
// const paragraphAnim = {
//   hidden:{opacity:0, y: -50},
//   show: {opacity:1,y:0 ,transition: {duration:2 }},
// }
// const buttonAnim = {
//   hidden:{opacity:0, y:-100},
//   show: {opacity:1,y:0, transition: {duration:2 }},
// }
// const container = {
//   show:{y:0, transition:{duration:2, ease: "easeOut", staggerChildren: 0.25}}
// }

const Slider = () => {
  const [listings,setListings] = useState(null)
  const [loading,setLoading] = useState(true)
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      // console.log(listings)
       setLoading(false);
    }
    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return <></>;
  }
  return (

  listings && (
    <>
     <Swiper
      slidesPerView={1}
      navigation
      // pagination={{ type: "progressbar" }}
      effect="fade"
      modules={[EffectFade]}
      autoplay={{ delay: 3000 }}
      >
     {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
               
                style={{
                  background: `url(${data.imgUrls[0]}) center, no-repeat`,
                  backgroundSize: "cover",backgroundColor:'#000'
                }}
                className="relative w-full h-[600px] overflow-hidden object-cover bg-blend-exclusion"
              ></div>
               {/* <p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%]
               bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
                {data.name}
              </p>
              <p className="text-[#f1faee] absolute left-1 bottom-1 font-semibold max-w-[90%]
               bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
                ${data.discountedPrice ?? data.regularPrice}
                {data.type === "rent" && " / month"}
              </p>   */}
             
              <p  className="lg:text-6xl font-normal uppercase mb-[0.8rem]
              absolute text-[#f1faee] left-10 top-[12rem] sm:text-xs md:text-2xl opacity-100">
                {data.name}
              </p>
              <p className="lg:text-2xl font-normal uppercase mb-[0.8rem]
              absolute text-[#f1faee] left-10 top-[16rem] sm:text-xs md:text-2xl opacity-100">
                ${data.discountedPrice ?? data.regularPrice}
                {data.type === "rent" && " / month"}
              </p> 
             <button className='bg-[#000d1a] px-10 py-3 border-none absolute 
             left-10 top-[19rem] text-[#f1faee]'>View Home</button>
                       
            </SwiperSlide>
          ))}
     </Swiper>
    </>
  )
  );
}

export default Slider