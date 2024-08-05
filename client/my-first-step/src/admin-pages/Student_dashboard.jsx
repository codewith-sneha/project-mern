import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Student_dashboard() {
  // const id =localStorage.getItem('id');
  const id = '66b04f0c1fa3d48c7931ad23';
  const [data, setData] = useState([]);

  const getApi = async () => {
    let res = await axios.get(`http://localhost:3387/api/get_student/${id}`);
    setData(res.data);
  };

  useEffect(() => {
    getApi();
  }, [id]);

  return (
<div>
<div className='capitalize text-3xl font-bold m-4 heading flex justify-center items-center'>welcome to student dashboard</div>
    <div className="w-full max-w-4xl bg-green-100 flex flex-col my-3 justify-center items-center p-8 px-10 gap-4 rounded-lg shadow m-auto">
     
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        <div>
          <img
            src={`http://localhost:3387/${data.profile_image}`}
            alt="studentImage"
            className="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px]  student-image"
          />
        </div>
        <div className="flex flex-col border p-4 rounded-lg text-lg bg-white capitalize w-full md:w-auto shadow">
          <p>name: {data.name}</p>
          <p>email: {data.email}</p>
          <p>D.O.B: {data.dob}</p>
          <p>class: {data.class}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border p-4 rounded-lg text-lg bg-gray-100  w-full md:w-auto">
        <p className='font-bold'>Progress:</p>
        <p>{data.progress}</p>
      </div>
    </div>
    </div>
  );
}
