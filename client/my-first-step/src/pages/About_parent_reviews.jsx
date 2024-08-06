import React, {useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

import Slider from "react-slick";
function About_parent_reviews() {
  const [review, setReview] = useState([]);

  const getapi = async () => {
    try{
    let res = await axios.get("http://localhost:3387/api/get_all_reviews");
    let dataa = res.data;
    setReview(dataa);
  }
catch(error){
  console.log(error)
}
}
useEffect(()=>{
  getapi();
},[])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,             // Enable auto-swipe
        autoplaySpeed: 2000,        // Speed of auto-swipe in milliseconds (2 seconds)
        pauseOnHover: true,  
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      };
      // const parentReview=[
      //   {name:"abc",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
      //   {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"}
      // ]
  return (
    <div>
         <div className='min-h-[620px] w-full bg-slate-200 p-6 flex items-center justify-center flex-col py-5'>
      <div className='text-3xl home_heading mb-4 capitalize mt-5'>
          <p>parent's reviews</p>
        </div>
        <div className=' w-[95%] m-auto bg-white-800 mb-5'>
          <div className=''>
            <Slider {...settings}>
              {review.map((v,i) => {
                return (
                  <div className='bg-white min-h-[460px]  text-black rounded-xl scale slider-card-shadow m-1' key={i}>
                    <div className='h-[200px] rounded-t-xl bg-[#7EDFB5] flex justify-center items-center'>
                      <img src={`http://localhost:3387/${v.image}`} alt={`image ${i+1}`} className='h-44 w-44 object-cover rounded-full' />
                    </div>
                    <div className='gap-1 flex-col flex justify-center items-center px-1 py-1 flex-grow'>
                      <p className='font-bold text-xl capitalize'>{v.title}</p>
                      <p className='bg-gray-200 p-2 h-[190px] rounded-lg sm:font-base w-full  roboto text-sm  flex justify-center text-justify items-center text-black overflow-hidden text-ellipsis '>{v.description}</p>

                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About_parent_reviews