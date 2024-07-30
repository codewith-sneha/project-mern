import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Home_slider from './Home_slider';

function Home() {
  const faculty = [
    { name: "Yogita", designation: "Principal", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti inventore fugit officii", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "Geetika sharma", designation: "Head teacher", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti inventore fugit officiis ", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" }
  ]

  const classGroupData = [
    { name: "Play-Group", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati, nobis maxime et soluta error.", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "Play-Group", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati, nobis maxime et soluta error.", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "Play-Group", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati, nobis maxime et soluta error.", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" },
    { name: "Play-Group", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati, nobis maxime et soluta error.", img: "https://thumbs.dreamstime.com/b/group-babies-mothers-playgroup-playing-toys-135684039.jpg" }
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
    <div >
      <Home_slider />
      <div className='min-h-[600px] w-full bg-yellow-100 p-6 flex items-center justify-center flex-col py-5'>
      <div className='text-3xl home_heading mb-4 capitalize mt-5'>
          <p>we offer following class groups</p>
        </div>
        <div className=' w-4/5 m-auto bg-white-800 mb-5'>
          <div className=''>
            <Slider {...settings}>
              {classGroupData.map((v) => {
                return (
                  <div className='bg-white h-[420px] text-black rounded-xl scale slider-card-shadow m-1'>
                    <div className='h-50 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                      <img src={v.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='gap-4 flex-col flex justify-center items-center p-4'>
                      <p className='font-bold text-xl'>{v.name}</p>
                      <p>{v.desc}</p>

                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>

        </div>
      </div>
      <div className='flex flex-col items-center justify-center bg-[#D6EFD8] min-h-[600px] py-3 mediaheight my-1 '>
        <div className='text-3xl home_heading my-4 mt-6'>
          <p>Our Head Faculty</p>
        </div>
        <div className='media flex w-[70vw] justify-center items-center m-auto my-2 gap-4 '>
          {faculty.map((v) => {
            return (
              <div className='bg-lime-200 h-[470px] text-black rounded-xl m-2 scale shadow'>
                <div className='h-60 rounded-t-xl bg-lime-300 flex justify-center items-center'>
                  <img src={v.img} alt="faculty" className='h-[200px] w-[200px] rounded-full' />
                </div>
                <div className='gap-3 flex-col flex justify-center items-center p-4'>
                  <p className='font-bold text-xl capitalize'>{v.designation}</p>
                  <p className='text-base'>{v.name}</p>
                  <p>{v.desc}</p>
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