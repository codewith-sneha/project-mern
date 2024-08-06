import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About_parent_reviews from './About_parent_reviews';
import Slider from "react-slick";
function About() {
  
  const data=[
    {name:"Hygiene",desc:"School hygiene is a part of school health education that aims to improve behavior and create a safe and healthy environment for students and educators. It includes personal hygiene, classroom sanitation, and hygiene education",img:"./src/assets/about/1.jpg"},
    {name:"safety",desc:"CCTV can help improve the overall security of a school's premises, deterring criminals and making it harder for them to carry out illegal activities",img:"./src/assets/about/1.jpg"},
    {name:"purified water",desc:"Purified water in schools is important for the health and education of students and staff. It can help prevent waterborne diseases and dehydration, which can affect children's learning and well-being.",img:"./src/assets/about/1.jpg"},
    {name:"television for rhymes",desc:"The use of television in the classroom has been found to have a positive impact on student learning. Kid's listen rhymes, it is important for language acquisition and help with speech development",img:"./src/assets/about/1.jpg"},
    {name:"play area",desc:"Play areas in preschools can help children develop important skills and habits that will shape their future. Play can improve children's physical, cognitive, social, and emotional well-being.",img:"./src/assets/about/1.jpg"},
    {name:"play based learning",desc:"Play-based learning is a critical aspect of early childhood education. It provides young children with opportunities to develop very important developmental skills, capabilities, knowledge, and behaviors through play and hands-on experiences.",img:"./src/assets/about/1.jpg"},
  ];
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,             // Enable auto-swipe
    autoplaySpeed: 2000,        // Speed of auto-swipe in milliseconds (2 seconds)
    pauseOnHover: true,  
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
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

      <div className='min-h-[600px] w-full bg-slate-100 p-6 flex items-center  justify-center flex-col py-5'>
      <div className='text-3xl home_heading mb-4 capitalize mt-5'>
          <p>facilities we offer</p>
        </div>
        <div className=' w-11/12 m-auto bg-white-800 mb-5'>
          <div className=''>
            <Slider {...settings}>
              {data.map((v) => {
                return (
                  <div className='bg-white min-h-[500px] lg-h-[460px]  text-black rounded-xl scale slider-card-shadow m-1 sm:m-0'>
                    <div className='h-[200px] rounded-t-xl bg-slate-300 flex justify-center items-center'>
                      <img src={v.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='gap-2 lg:gap-2 flex-col flex justify-center items-center lg:p-2  p-4'>
                      <p className='font-bold text-xl  capitalize'>{v.name}</p>
                      <p className='h-[230px] overflow-hidden text-ellipsis flex  '>{v.desc}</p>

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