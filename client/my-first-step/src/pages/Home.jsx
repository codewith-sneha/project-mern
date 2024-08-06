import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Home_slider from './Home_slider';

function Home() {
  const faculty = [
    { name: "Yogita", designation: "Principal", desc: ["B.P.Ed  (bachelor of physical education)","M.P.Ed  (masters of Physical education)","B.Ed  ( bachelor of education)","Diploma in yoga ","Yoga teacher (12 years)"], img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "Geetika sharma", designation: "Head teacher", desc: ["Inter KVS (sports competitions)","B.A hons History ( bachelor of arts)","M.A  history ( master of arts)","B.Ed (bachelor of education)"], img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" }
  ]

  const classGroupData = [
    { name: "Play-Group", age : "1.5 to 2.5 years",desc: " Discovery and exploration, language development, new age skills, basic manners ( toiletries, hand-wash, packing own bags, how to eat ).", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "Nursery", age:"2.5 to 3.5 years", desc: " Enhancing interaction, cultivating creativity, alphabet recognition, basic education. ", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "LKG ", age:"3.5 to 4.5 years", desc: "Social and emotional development, beginning of formal education, writing skills, speaking skills, yoga and exercise. ", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "UKG ", age:"4.5 to 5.5 years", desc: " Last level of preschool. Focus on language development, environmental awareness,  creative activities, story telling and specially focus on discipline.", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" }
  ]

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
      <Home_slider />
      <div className='min-h-[600px] w-full  bg-lime-100 p-6 flex items-center justify-center flex-col py-5'>
      <div className='text-3xl home_heading mb-4 capitalize mt-5'>
          <p>we offer following class groups</p>
        </div>
        <div className=' w-11/12 m-auto bg-white-800 mb-5'>
          <div className=''>
            <Slider {...settings}>
              {classGroupData.map((v) => {
                return (
                  <div className='bg-white h-[490px] lg:h-[450px] md:h-400px text-black rounded-xl md:w-[60vw] scale slider-card-shadow m-1'>
                    <div className='h-[200px] rounded-t-xl bg-[#9CDBA6] flex justify-center items-center'>
                      <img src={v.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='gap-1 flex-col h-[300px] flex  items-center p-4'>
                      <p className='font-bold text-xl'>{v.name}</p>
                      <p>{v.age}</p>
                      <div className='flex justify-center items-center flex-col text-justify gap-2 mt-3'>
                     
                      <p>{v.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>

        </div>
      </div>
      <div className='flex flex-col items-center justify-center bg-[#DAFEBD] min-h-[600px] py-3 mediaheight my-1 '>
        <div className='text-3xl home_heading my-4 mt-6'>
          <p>Our Head Faculty</p>
        </div>
        <div className='media flex w-[70vw] md:w-[80vw] sm:w-[90vw] justify-center items-center m-auto my-2 gap-4 '>
          {faculty.map((v) => {
            return (
              <div className='bg-lime-200 min-h-[500px] md:h-[500px] text-black  w-[90vw] md:w-[380px] lg:w-[400px] rounded-xl m-2 scale shadow '>
                <div className='h-60 rounded-t-xl bg-[#609C56] flex justify-center items-center'>
                  <img src={v.img} alt="faculty" className='h-[200px] w-[200px] rounded-full' />
                </div>
                <div className='gap-2 flex-col flex justify-center items-center p-2'>
                  <p className='font-bold text-xl capitalize'>{v.designation}</p>
                  
                  <p className='text-[18px]'>Name : {v.name}</p>
                  <ul className='list-disc list-inside p-3'>
                  {v.desc.map((v)=>{
                    return(
                      <>
                      <li>{v}</li>
                      </>
                    )
                    
                  })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
      )
}

      export default Home;