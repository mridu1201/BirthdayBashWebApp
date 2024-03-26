import React from 'react';
import AdminLayout from '../../layouts/admin/AdminLayout';
import UserTable from '../../components/admin/UserTable';

function AdminUsers() {
  const data = [
    { name: 'Love Story', email: 'Taylor Swift', eventsBooked: '2008' },
    { name: 'You Belong with Me', email: 'Taylor Swift', eventsBooked: '2008' },
    { name: 'Fearless', email: 'Taylor Swift', eventsBooked: '2008' },
    { name: 'Mine', email: 'Taylor Swift', eventsBooked: '2010' },
    { name: 'Back to December', email: 'Taylor Swift', eventsBooked: '2010' },
    { name: 'Speak Now', email: 'Taylor Swift', eventsBooked: '2010' },
    { name: 'Red', email: 'Taylor Swift', eventsBooked: '2012' },
    { name: 'Shake It Off', email: 'Taylor Swift', eventsBooked: '2014' },
    { name: 'Blank Space', email: 'Taylor Swift', eventsBooked: '2014' },
    { name: 'Lover', email: 'Taylor Swift', eventsBooked: '2019' }
  ];

  return (
    <AdminLayout>
      <div className="flex justify-center items-center h-full" >
        <UserTable data={data} />
      </div>
    </AdminLayout>
  );
}

export default AdminUsers;
