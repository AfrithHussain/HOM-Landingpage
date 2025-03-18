// UserList.jsx (Adapted for Team Members)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserCircle } from "react-icons/fa";
import SearchBar from './SearchBar';

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (data)=>{
       const filtered = users.filter((user)=>
        user.name.toLowerCase().includes(data.toLowerCase())
       )
       setFilteredUsers(filtered);
      
  }

  return (
    <div className="p-8 ">
      <h2 className="text-4xl font-semibold  text-center mb-6 text-gray-800">Our Team</h2>
      <SearchBar onSearch={handleSearch} />
      {
        filteredUsers.length > 0 ? <div className="flex flex-wrap justify-evenly  gap-6 mt-14">
        {filteredUsers.map((user) => (
          <div key={user.id} className="hover:bg-neutral-100 cursor-pointer hover:scale-105 hover:shadow-xl w-96 py-8 p-6 rounded-lg shadow-md text-center">
           <FaUserCircle  className="w-16 h-16 text-neutral-300 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold mt-1">{user.name}</h3>
            <p className="text-neutral-600 font-semibold mt-1 ">{user.company.name}</p>
            <p className="text-neutral-500  text-sm mt-2">{user.email}</p>
          </div>
        ))}
      </div> : <p className="text-center text-2xl mt-10">User Not Found...</p>
      }
    </div>
  );
};

export default UserCard;