import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit_review() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    name: "",
    img: null,
    desc: "",
  });
  const nevigate = useNavigate();
  const id = useParams("id").id; //.id bcoz it returns obj

  const getOldDetail = async () => {
    let res = await axios.get(`http://localhost:3387/api/get_review/${id}`);
    let Data = res.data;
    setData(Data);
    setUpdateData({
      title:Data.title,
      description:Data.description,
      image:null
    })
  };

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name == "img") {
      setUpdateData({ ...updateData, [name]: files[0] });
    } else {
      setUpdateData({ ...updateData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", updateData.title);
    formData.append("description", updateData.description);
    if (updateData.img) {
      formData.append("image", updateData.img);
    }
    try {
      const response = await axios.put(
        `http://localhost:3387/api/update_review/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      nevigate("/Parent_review");
    } catch (error) {
      console.log(error);
    }}

    useEffect(() => {
      getOldDetail();
    }, [id]);

    return (
      <div className="w-full max-w-3xl m-auto bg-green-100 min-h-[400px] p-4 rounded-lg shadow-lg">
        <Link
          to="/Parent_review"
          className="text-black bg-gray-200 py-2 px-4 rounded-lg mb-4 inline-block"
        >
          Back
        </Link>
        <div className="flex justify-center items-center gap-6 m-1 mb-5 text-3xl capitalize">
          <h1 className="heading">Update Review</h1>
        </div>
        <form
          className="bg-gray-300 min-h-[300px] w-full md:w-3/4 lg:w-1/2 sm:w-[100vw] m-auto rounded-xl p-4 sm:p-1 align-justify flex flex-col justify-center items-center form-shadow space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label htmlFor="name" className="block text-lg mb-2">
              Parent Name:
            </label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              name="title"
              value={updateData.title}
              className="w-full p-2 border rounded-lg"
              onChange={handleInput}
            />
          </div>
          <div className="w-full">
            <label htmlFor="desc" className="block text-lg mb-2">
              Review:
            </label>
            <textarea
              name="description"
              id="desc"
              value={updateData.description}
              rows="4"
              cols="30"
              autoComplete="off"
              className="w-full p-2 border rounded-lg"
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="img" className="block text-lg mb-2">
              Add Image:
            </label>
            <input
              type="file"
              name="img"
              id="img"
              accept="image/*"
              onChange={handleInput}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
             
              className="bg-green-400 py-2 px-4 w-full rounded-lg capitalize text-white"
            >
              update Element
            </button>
          </div>
        </form>
      </div>
    );
  };

