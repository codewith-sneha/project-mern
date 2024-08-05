import React from 'react'
import { Image_gallery } from './Image_gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useState,useEffect } from 'react';
import Slider from "react-slick";

function Curriculum() {
  // const activity=[
  //   {name:"swimming",desc:"swimming is a fun, relaxing activity that fuels brain, health and built strong bodies.",img:"./src/assets/photogallery/A1.jpeg"},
  //   {name:"colouring",desc:"Colouring is a great way to help children build fine motor skills and  hand strength. It builds concentration. ",img:"./src/assets/photogallery/A2.jpeg"},
  //   {name:"festive celebration",desc:"A special event that's meant to be enjoyable and create happy feeling.",img:"./src/assets/photogallery/A3.jpeg"},
  //   {name:"birthday celebration",desc:" birthdays are very memorable days in a person's life, the celebration and oganization of a happy birthday party are what makes it more fun.",img:"./src/assets/photogallery/A4.jpeg"},
  //   {name:"dining",desc:" It is important to make children sit together and share the food with them. When we sit together and eat, everyone is equal.",img:"./src/assets/photogallery/A5.jpeg"},
  // ]

  const [activity, setActivity] = useState([]);
  const getPosts = async () => {
    try {
      let res = await axios.get("http://localhost:3387/api/get_all_post");
      let data = res.data;
      setActivity(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };


  useEffect(() => {
    getPosts();
  }, []);

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
                console.log(v.image)
                return (
                  
                  
                  <div className='bg-white h-[420px] text-black rounded-xl scale'>
                    <div className='h-50 rounded-t-xl bg-emerald-400 flex justify-center items-center'>
                      <img src={`http://localhost:3387/${v.image}`} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='gap-3 flex-col flex justify-center items-center p-4'>
                      <p className='font-bold text-xl capitalize'>{v.title}</p>
                      <p>{v.description}</p>

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