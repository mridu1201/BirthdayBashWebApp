import React, { useState } from 'react';

export default function UserTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const usersPerPage = 7;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the users based on the search query for name and email
  const filteredUsers = data.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col justify-center items-center ml-20">
      <input
        type="text"
        placeholder="Search by Name or Email"
        value={searchQuery}
        onChange={handleSearch}
        className="block border p-2 rounded-md mb-4 focus:border-sky-500"
      />

      <table className="table-auto ">
        <thead>
          <tr>
            <th className="px-4 py-2">S.No</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Events Booked</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-gray-200">
              <td className="border px-4 py-2">{index + 1 + indexOfFirstUser}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.eventsBooked}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <ul className="flex justify-center">
          {Array(Math.ceil(filteredUsers.length / usersPerPage))
            .fill()
            .map((_, index) => (
              <li key={index} className={`mx-1 ${index + 1 === currentPage ? "font-bold" : ""}`}>
                <button onClick={() => paginate(index + 1)} className="px-4 py-2 rounded-md bg-violet-400 text-white">
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
