import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
const api = "https://to-dos-api.softclub.tj";

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getById() {
      try {
        const { data } = await axios.get(`${api}/api/to-dos/${id}`);
        setUser(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getById();
  }, [id]);

  if (!user) return <h2 className="p-10">Loading...</h2>;

  return (
    <div className="p-10">
      <div className="flex gap-10">
        <div className="bg-yellow-400 w-80 h-96 flex items-end justify-center overflow-hidden">
          {user.images?.[0] ? (
            <img
              src={`${api}/images/${user.images[0].imageName}`}
              alt={user.name}
              className="h-full object-cover"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{user.name}</h1>
          <p className="text-xl text-gray-600">{user.description}</p>
          <p>Status: {user.isCompleted ? "Active" : "Inactive"}</p>
          <p className="text-sm text-gray-400">ID: {user.id}</p>
          <button className="px-4 py-1 bg-red-500 text-white rounded">Delete</button>
          <button className="px-4 py-1 bg-blue-500 text-white rounded">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Info;