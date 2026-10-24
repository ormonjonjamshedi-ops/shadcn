import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Contacte } from "./Contacte";

const api = "https://to-dos-api.softclub.tj";

export const Home = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function getData() {
    try {
      const { data } = await axios.get(api + "/api/to-dos");
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${api}/api/to-dos?id=${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUser(e) {
    e.preventDefault();
    try {
      await axios.put(api + "/api/to-dos", {
        id: editItem.id,
        name: editItem.name,
        description: editItem.description,
      });
      setEditItem(null);
      getData();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter((el) =>
    el.name?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>

      <div className="flex justify-center gap-20 p-10 bg-red-200">
        <div className="flex flex-col gap-10">
          <h1 className="text-7xl p-10">
            Enjoy studying with Createx Online Courses
          </h1>
          <button className="text-3xl border-2 border-red-600 text-red-600 p-5 hover:bg-red-700 hover:text-white rounded-4xl">
            About us
          </button>
          <button className="text-3xl bg-red-600 text-white p-5 hover:bg-red-200 hover:border-2 hover:border-red-500 hover:text-white rounded-4xl">
            Explore courses
          </button>
        </div>
        <img src="/people.png" alt="" className="p-10" />
      </div>

      <div className="flex gap-10 p-40">
        <img src="/image (32).png" alt="" />
        <div className="flex flex-col gap-10 p-10">
          <h1>Who we are</h1>
          <h1 className="text-5xl">Why Createx?</h1>
          <h1>A fermentum in morbi pretium aliquam adipiscing donec tempus.</h1>
          <h1>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</h1>
          <h1>Tincidunt sagittis neque sem ac eget.</h1>
          <h1>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</h1>
          <button className="text-3xl bg-red-600 text-white p-5 hover:bg-red-200 hover:border-2 hover:border-red-500 hover:text-white rounded-4xl">
            More about us
          </button>
        </div>
      </div>

      
      <div>
        <h1>Ready to learn?</h1>
        <div className="flex justify-between p-20 text-black text-3xl">
          <h1>Courses</h1>
          <button className="text-red-600 p-2 border-2 border-red-700">
            View all courses
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex gap-5 border-2">
            <img src="/image.png" alt="" />
            <div className="flex flex-col gap-10 pt-5">
              <button className="bg-amber-400 text-white p-2 border-2 w-40">Marketing</button>
              <h1 className="text-2xl">The Ultimate Google Ads Training Course</h1>
              <h1><span className="text-red-600">100$ </span> by Jerome Bell</h1>
            </div>
          </div>

          <div className="flex gap-5 border-2">
            <img src="/image.png" alt="" />
            <div className="flex flex-col gap-10 pt-5">
              <button className="bg-amber-400 text-white p-2 border-2 w-40">Marketing</button>
              <h1 className="text-2xl">The Ultimate Google Ads Training Course</h1>
              <h1><span className="text-red-600">100$ </span> by Jerome Bell</h1>
            </div>
          </div>

          <div className="flex gap-5 border-2">
            <img src="/image.png" alt="" />
            <div className="flex flex-col gap-10 pt-5">
              <button className="bg-amber-400 text-white p-2 border-2 w-40">Marketing</button>
              <h1 className="text-2xl">The Ultimate Google Ads Training Course</h1>
              <h1><span className="text-red-600">100$ </span> by Jerome Bell</h1>
            </div>
          </div>

          <div className="flex gap-5 border-2">
            <img src="/image.png" alt="" />
            <div className="flex flex-col gap-10 pt-5">
              <button className="bg-amber-400 text-white p-2 border-2 w-40">Marketing</button>
              <h1 className="text-2xl">The Ultimate Google Ads Training Course</h1>
              <h1><span className="text-red-600">100$ </span> by Jerome Bell</h1>
            </div>
          </div>

          <div className="flex gap-5 border-2">
            <img src="/image.png" alt="" />
            <div className="flex flex-col gap-10 pt-5">
              <button className="bg-amber-400 text-white p-2 border-2 w-40">Marketing</button>
              <h1 className="text-2xl">The Ultimate Google Ads Training Course</h1>
              <h1><span className="text-red-600">100$ </span> by Jerome Bell</h1>
            </div>
          </div>

          <div className="flex gap-5 border-2">
            <img src="/image.png" alt="" />
            <div className="flex flex-col gap-10 pt-5">
              <button className="bg-amber-400 text-white p-2 border-2 w-40">Marketing</button>
              <h1 className="text-2xl">The Ultimate Google Ads Training Course</h1>
              <h1><span className="text-red-600">100$ </span> by Jerome Bell</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <h1>Best tutors are all here</h1>
        <h1 className="text-3xl p-5">Meet our team</h1>

        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}placeholder="Search by name..."className="border-2 p-2 w-80 mb-6 outline-none"/>
        <div className="grid grid-cols-4 gap-6">
          {filteredData.map((el) => (
            <div key={el.id} className="border-4 p-3 text-center">
              {el.images?.map((img) => (
                <img key={img.id} src={`${api}/images/${img.imageName}`} alt={el.name} />
              ))}
              <h3 className="font-semibold mt-2">{el.name}</h3>
              <p>{el.description}</p>
              <p>{el.isCompleted ? "Active" : "Inactive"}</p>
              <div className="flex justify-center gap-2 mt-3">
                <button onClick={() => navigate(`/info/${el.id}`)}className="px-4 py-1 bg-green-600 text-white rounded">Info
                </button>
                <button onClick={() => setEditItem(el)} className="px-4 py-1 bg-blue-500 text-white rounded">Edit
                </button>
<button onClick={() => deleteUser(el.id)}className="px-4 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {editItem ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form onSubmit={updateUser}  className="bg-white p-8 rounded flex flex-col gap-4 w-96" >
            <h2 className="text-2xl">Edit</h2>
            <input value={editItem.name}  onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="border p-2" placeholder="Name" />
            <input value={editItem.description}  onChange={(e) => setEditItem({ ...editItem, description: e.target.value }) } className="border p-2"  placeholder="Description"/>
            <div className="flex gap-3">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
              <button type="button" onClick={() => setEditItem(null)} className="bg-gray-300 px-4 py-2 rounded"> Cancel</button>
            </div>
          </form>
        </div>
      ):null}
      <div>
      
        <div className="flex justify-between p-20 text-black text-3xl">
          <h1>Latest articles</h1>
          <button className="text-red-600 p-2 border-2 border-red-700">View all articles</button>
        </div>
    <div>
         <div className=" flex ">
          <div className="border-2   w-115 flex flex-col items-center p-5">
            <img src="/public/Eyes.png" alt="" />
            <div className="flex flex-col gap-5 w-110">
                <h1>What is traffic arbitrage and does it really make money?</h1>
                <h1>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h1>
                <button className="border-2 border-red-500 text-red rounded-4xl w-50">Listen</button>
            </div>
          </div>
          <div className="border-2   w-115 flex flex-col items-center p-5 gap-10">
            <img src="/public/Eyes.png" alt="" />
            <div className="flex flex-col gap-5 w-110">
                <h1>What is traffic arbitrage and does it really make money?</h1>
                <h1>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h1>
                <button className="border-2 border-red-500 text-red rounded-4xl w-50">Listen</button>
            </div>
          </div><div className="border-2   w-115 flex flex-col items-center p-5">
            <img src="/public/Eyes.png" alt="" />
            <div className="flex flex-col gap-5 w-110">
                <h1>What is traffic arbitrage and does it really make money?</h1>
                <h1>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h1>
                <button className="border-2 border-red-500 text-red rounded-4xl w-50">Listen</button>
            </div>
          </div>
      </div>
    </div>
      </div>

      <Contacte />
    </div>
  );
};