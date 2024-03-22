import React, { useState } from 'react';
import AdminLayout from '../../layouts/admin/AdminLayout';
import { FaPlus } from 'react-icons/fa';

function MenuItem({ name, category, price, image }) {
  return (
    <div className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-md mb-4 max-w-xs ml-10 transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-blue-200">
      <img src={image} alt={name} className="w-16 h-16 mr-4" />
      <div>
        <h5 className="text-lg font-bold">{name}</h5>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <div>
        <p className="text-lg font-bold">Rs.{price}</p>
      </div>
    </div>
  );
}

function FloatingButton({ onClick }) {
  return (
    <button
      className="fixed bottom-10 right-10 bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-800 transition duration-300 animate-bounce"
      style={{ fontSize: '18px' }}
      onClick={onClick}
    >
      <FaPlus />
    </button>
  );
}

function AddMenuItemForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center " style={{marginTop:'22px', marginLeft:'65px'}}>
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Add Menu Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-inner dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Starters">Starters</option>
                <option value="Soups">Soups</option>
                <option value="Main Course">Main Course</option>
                <option value="Breads">Breads</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-inner dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-inner dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"
              >
                Add Item
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

function Menu() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const handleAddItemClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const menuItems = [
    {
      name: 'Caesar Salad',
      category: 'Starter',
      price: 899,
      image: 'https://cookingwithayeh.com/wp-content/uploads/2023/11/Healthy-Caesar-Salad-Without-Anchovies-SQ-5.jpg',
    },
    {
      name: 'Tomato Soup',
      category: 'Starter',
      price: 699,
      image: 'https://www.allrecipes.com/thmb/QijITeBBcE99Ur5kDoccAJ35WWo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/277311spicy-fresh-tomato-soupFranceC4x3-56454ad082214f33960f62665fc8c169.jpg',
    },
    {
      name: 'Grilled Salmon',
      category: 'Main Course',
      price: 1899,
      image: 'https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg',
    },
    {
      name: 'Pasta Alfredo',
      category: 'Main Course',
      price: 1499,
      image: 'https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg',
    },
    {
      name: 'Garlic Bread',
      category: 'Breads',
      price: 499,
      image: 'https://vjcooks.com/wp-content/uploads/2022/06/GarlicBread-735x735.jpg',
    },
    {
      name: 'Chocolate Cake',
      category: 'Dessert',
      price: 799,
      image: 'https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800',
    },
    {
      name: 'French Fries',
      category: 'Appetizers',
      price: 399,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG',
    },
    {
      name: 'Margherita Pizza',
      category: 'Main Course',
      price: 1299,
      image: 'https://www.onceuponachef.com/images/2020/06/Margherita-Pizza-scaled.jpg',
    },
    {
      name: 'Chicken Wings',
      category: 'Appetizers',
      price: 799,
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Chicken Burger',
      category: 'Main Course',
      price: 999,
      image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg',
    },
    {
      name: 'Margarita Cocktail',
      category: 'Beverages',
      price: 599,
      image: 'https://www.liquor.com/thmb/JQgDGy26Zsw-_cFGKH4zNH9PlXk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Frozen-Margarita-1500x1500-hero-191e49b3ab4f4781b93f3cfacac25136.jpg',
    },
  ];

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

  console.log("Current Page:", currentPage);
  console.log("Items Per Page:", itemsPerPage);
  console.log("Total Items:", menuItems.length);
  console.log("Current Items:", currentItems);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AdminLayout>
      <div className="container pl-[15rem] mx-auto mt-10 grid grid-cols-2 gap-4 " style={{ marginLeft: '0px', marginTop: '80px', overflowX: 'hidden' }}>
        {currentItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            category={item.category}
            price={item.price.toFixed(2)}
            image={item.image}
          />
        ))}
      </div>
      <FloatingButton onClick={handleAddItemClick} />
      <AddMenuItemForm isOpen={isFormOpen} onClose={handleCloseForm} />
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(menuItems.length / itemsPerPage)).keys()].map((number) => (
          <button key={number} onClick={() => paginate(number + 1)} className="mx-1 px-3 py-1 rounded-md bg-blue-500 text-white">
            {number + 1}
          </button>
        ))}
      </div>
    </AdminLayout>
  );
  
  
}

export default Menu;
