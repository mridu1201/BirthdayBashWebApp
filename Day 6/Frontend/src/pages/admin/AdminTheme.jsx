import React, { useState } from 'react';
import AdminLayout from '../../layouts/admin/AdminLayout';
import ThemeComponents from '../../components/admin/ThemeComponents';
import { FaPlus } from "react-icons/fa";

function AdminTheme() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    theme: '',
    price: '',
    imageUrl: '',
    adults: false,
    children: false
  });
  
  const data = [
    {
      title: 'Theme 1',
      theme: 'Theme Description 1',
      person: 'Person 1',
      price: '$10',
      img: 'https://example.com/image1.jpg'
    },
    {
      title: 'Theme 2',
      theme: 'Theme Description 2',
      person: 'Person 2',
      price: '$20',
      img: 'https://example.com/image2.jpg'
    },
    // Add more objects as needed
  ];

  const handleAddThemeClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <AdminLayout>
      <div className="flex justify-center mt-20 ml-30 relative">
        <div className='flex flex-wrap'>
          {data.map((item, index) => (
            <ThemeComponents
              key={index}
              title={item.title}
              theme={item.theme}
              person={item.person}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
        <button 
          className="fixed bottom-5 right-5 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full group animate-bounce"
          onClick={handleAddThemeClick}
        >
          <FaPlus className='' />
        </button>
        {isFormOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center " style={{marginTop:'25px', marginLeft:'70px'}}>
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Add Theme</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-2">
                  <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Theme</label>
                  <input type="text" id="theme" name="theme" value={formData.theme} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                  <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-2">
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                  <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-2">
                  <input type="checkbox" id="adults" name="adults" checked={formData.adults} onChange={handleChange} className="mr-2" />
                  <label htmlFor="adults" className="inline-block text-sm font-medium text-gray-700">Adults</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" id="children" name="children" checked={formData.children} onChange={handleChange} className="mr-2" />
                  <label htmlFor="children" className="inline-block text-sm font-medium text-gray-700">Children</label>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                  <button type="button" onClick={handleFormClose} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full ml-2">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminTheme;
