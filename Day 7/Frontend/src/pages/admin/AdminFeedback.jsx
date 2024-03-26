import React from 'react';
import AdminLayout from '../../layouts/admin/AdminLayout';
import FeedbackCard from '../../components/admin/FeedbackCard';

function AdminFeedback() {
  const data = [
    {
      name: 'John Doe',
      date: '2024-03-20',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sit? Itaque velit nihil possimus eos modi dolore beatae quam culpa a corporis vero ab sapiente omnis, debitis consequuntur aspernatur alias?',
    },
    {
      name: 'Jane Smith',
      date: '2024-03-25',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sit? Itaque velit nihil possimus eos modi dolore beatae quam culpa a corporis vero ab sapiente omnis, debitis consequuntur aspernatur alias?',
    },
  ];


  return (
    <AdminLayout>
      <div className="flex justify-center mt-20 ml-30">
        <div className="w-full ml-auto">
          {data.map((item, index) => (
            <FeedbackCard 
              key={index}
              name={item.name}
              date={item.date}
              message={item.message}
            />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminFeedback;
