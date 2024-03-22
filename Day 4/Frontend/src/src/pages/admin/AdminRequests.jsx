import React from 'react';
import AdminLayout from '../../layouts/admin/AdminLayout';
import HorizontalCards from '../../components/admin/HorizontalCards';

function AdminRequests() {
  const data = [
    {
      name: 'John Doe',
      date: '2024-03-20',
      location: 'New York',
      theme: 'Birthday',
      img: 'https://t4.ftcdn.net/jpg/05/23/82/37/360_F_523823772_rENIlsWUhzgdojXgODNZZd9WtiQokv72.jpg'
    },
    {
      name: 'Jane Smith',
      date: '2024-03-25',
      location: 'Los Angeles',
      theme: 'Anniversary',
      img: 'https://t4.ftcdn.net/jpg/05/23/82/37/360_F_523823772_rENIlsWUhzgdojXgODNZZd9WtiQokv72.jpg'
    },
  ];


  return (
    <AdminLayout>
      <div className="flex justify-center mt-20 ml-30">
        <div className="w-full ml-auto">
          {data.map((item, index) => (
            <HorizontalCards 
              key={index}
              name={item.name}
              date={item.date}
              location={item.location}
              theme={item.theme}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminRequests;
