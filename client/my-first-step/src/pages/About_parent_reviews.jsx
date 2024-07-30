import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function About_parent_reviews() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          }
        ]
      };
      const parentReview=[
        {name:"abc",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
        {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"}
      ]
  return (
    <div>
         <div className='min-h-[600px] w-full bg-slate-200 p-6 flex items-center justify-center flex-col py-5'>
      <div className='text-3xl home_heading mb-4 capitalize mt-5'>
          <p>parent's reviews</p>
        </div>
        <div className=' w-[90%] m-auto bg-white-800 mb-5'>
          <div className=''>
            <Slider {...settings}>
              {parentReview.map((v) => {
                return (
                  <div className='bg-white h-[420px] text-black rounded-xl scale slider-card-shadow m-1'>
                    <div className='h-50 rounded-t-xl bg-slate-400 flex justify-center items-center'>
                      <img src={v.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='gap-3 flex-col flex justify-center items-center p-4'>
                      <p className='font-bold text-xl capitalize'>{v.name}</p>
                      <p className='bg-gray-200 p-2 min-h-[100px] w-full roboto font-base font-medium flex justify-center text-center items-center text-black'>{v.desc}</p>

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