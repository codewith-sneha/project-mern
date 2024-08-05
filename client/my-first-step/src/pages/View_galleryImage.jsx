import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function View_galleryImage() {
    const [data,setData]=useState([]);
    const id=useParams("id").id;
    const getApi=async()=>{
        let res=await axios.get(`http://localhost:3387/api/get_image/${id}`);
        let dataa=res.data;
        setData(dataa);
    }
    useEffect(()=>{
        getApi();
    },[id]);
  return (
    <div className="flex justify-center items-center px-4 bg-slate-200">
        {console.log(data.image)}
<img src={`http://localhost:3387/${data.image}`} alt="image" className="object-contain w-full h-[600px] border-2 border-black rounded-lg shadow-lg" />
    </div>
  )
}
