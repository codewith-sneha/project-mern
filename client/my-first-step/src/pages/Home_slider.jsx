import React, { useState } from 'react'
import {RxDotFilled} from 'react-icons/rx'
import { BsChevronCompactRight,BsChevronCompactLeft } from 'react-icons/bs';

function Home_slider() {

const [currentindex,setcurrentindex]=useState(0);
const prev=()=>{
    let isfirstslide = currentindex==0;
    let newindex=isfirstslide ? slide.length-1 :currentindex-1;
    setcurrentindex(newindex);
}
const next=()=>{
    let islastslide = currentindex==slide.length-1;
    let newindex= islastslide?0:currentindex+1;
    setcurrentindex(newindex);
}
const gotoslide=(idx)=>{
    setcurrentindex(idx);
}

    const slide=[
        {url:"./src/assets/slider-img/img1.jpg"},
        {url:"https://t4.ftcdn.net/jpg/00/88/05/73/360_F_88057372_aiKcqNKZaCMwXCSo470sgEJx1zEZtokK.jpg"},
       
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSVMLJAybwkPi2a8EjrNSjQySErCvnOH1Kg&s"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX36lyut_yCq3V-BxtzxpDXljpNcdF2XvOzw&s"},
    {url:"https://www.parents.com/thmb/595334Wl0HQnRAxfMv6Fy7bf9ME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_172261862-2--d36510500ca044e1bd9bb51f798b3141.jpg"}]


  return (
    <div className='max-w-[1400px] h-[600px] w-[100] m-auto py-4 px-4 relative group mb-2'>
        <div style={{backgroundImage:`url(${slide[currentindex].url})`}} className='h-full w-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xlrounded-full p-2 bg-black/20 cursor-pointer text-white'>
        <BsChevronCompactLeft onClick={prev} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xlrounded-full p-2 bg-black/20 cursor-pointer text-white'>
            <BsChevronCompactRight onClick={next} size={30} />
        </div>
        {/* dot of slider*/}
        <div className='flex justify-center top-4 py-2 hover:bg-blue mb-3'>
           {slide.map((slide,i)=>{
            return(
                <>
                <div class='text-2xl cursor-pointer ' key={i} onClick={()=>gotoslide(i)}>
                <RxDotFilled/>
                </div>
                </>
            )
           })}
        </div>
    </div>
  )
}

export default Home_slider