import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_parent_reviews from './About_parent_reviews';
import Slider from "react-slick";
function About() {
  
  const data=[
    {name:"health",desc:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iste aperiam quaerat magni cumque laborum!",img:"./src/assets/about/1.jpg"},
    {name:"safety",desc:"",img:"./src/assets/about/1.jpg"},
    {name:"purified water",desc:"",img:"./src/assets/about/1.jpg"},
    {name:"full attention",desc:"",img:"./src/assets/about/1.jpg"},
    {name:"television for rhymes",desc:"",img:"./src/assets/about/1.jpg"},
    {name:"play area",desc:"",img:"./src/assets/about/1.jpg"},
    {name:"play based learning study",desc:"",img:"./src/assets/about/1.jpg"},
  ];
 
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
      
      <div >
        <img src="./src/assets/about_school-pic.jpg" alt="schoolpic" className='w-full h-[500px]' />
      </div>
      {/* // what we offer section */}

      <div className='min-h-[600px] w-full bg-slate-100 p-6 flex items-center justify-center flex-col py-5'>
      <div className='text-3xl home_heading mb-4 capitalize mt-5'>
          <p>facilities we offer</p>
        </div>
        <div className=' w-4/5 m-auto bg-white-800 mb-5'>
          <div className=''>
            <Slider {...settings}>
              {data.map((v) => {
                return (
                  <div className='bg-white h-[420px] text-black rounded-xl scale slider-card-shadow m-1'>
                    <div className='h-50 rounded-t-xl bg-slate-300 flex justify-center items-center'>
                      <img src={v.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='gap-4 flex-col flex justify-center items-center p-4'>
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
      {/* parents review section  */}
     <About_parent_reviews/>
    </div>
   
  )
}


export default About