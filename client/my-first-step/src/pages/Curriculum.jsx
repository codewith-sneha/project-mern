import React from 'react'
import { Image_gallery } from './Image_gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Curriculum() {
  const activity=[
    {name:"swimming",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint placeat tenetur id quam vitae!",img:"./src/assets/photogallery/A1.jpeg"},
    {name:"colouring",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint placeat tenetur id quam vitae!",img:"./src/assets/photogallery/A2.jpeg"},
    {name:"festive celebration",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint placeat tenetur id quam vitae!",img:"./src/assets/photogallery/A3.jpeg"},
    {name:"birthday celebration",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint placeat tenetur id quam vitae!",img:"./src/assets/photogallery/A4.jpeg"},
    {name:"dining",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint placeat tenetur id quam vitae!",img:"./src/assets/photogallery/A5.jpeg"},
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <div>
      
      <div className='h-[600px] w-full bg-[#A4CE95] p-6 flex items-center justify-center flex-col py-5'>
      <div className='text-4xl home_heading mb-4 capitalize mt-5'>
          <p>our curriculum activities</p>
        </div>
        <div className=' w-4/5 m-auto bg-white-800'>
          <div className=''>
            <Slider {...settings}>
              {activity.map((v) => {
                return (
                  <div className='bg-white h-[420px] text-black rounded-xl scale'>
                    <div className='h-50 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                      <img src={v.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='gap-3 flex-col flex justify-center items-center p-4'>
                      <p className='font-bold text-xl capitalize'>{v.name}</p>
                      <p>{v.desc}</p>

                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>

        </div>
      </div>
      <div>
<Image_gallery/>
      </div>

    </div>
  )
}

export default Curriculum