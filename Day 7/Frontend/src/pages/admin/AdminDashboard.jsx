// import React from 'react';
// import AdminLayout from '../../layouts/admin/AdminLayout';
// import UpcomingEvents from '../../components/admin/UpcomingEvents';
// import EventDetails from '../../components/admin/EventDetails';
// import BarCharts from '../../components/admin/BarChart';
// import PieCharts from '../../components/admin/PieChart';

// function AdminDashboard() {
//   return (
//     <AdminLayout>
//      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
//         <div className='flex flex-col'>
//          <div className='flex flex-row'>
//           <div className='flex flex-col'>
//             <UpcomingEvents />
//             <PieCharts/>
//           </div>
//           <div>
//             <EventDetails/>
//           </div>
//          </div>
//          <div>
//             <BarCharts/>
//          </div>
//         </div>
//      </div>
//     </AdminLayout>
//   );
// }

// export default AdminDashboard;
import React from 'react';
import AdminLayout from '../../layouts/admin/AdminLayout'
import UpcomingEvents from '../../components/admin/UpcomingEvents';
import EventDetails from '../../components/admin/EventDetails';
import BarCharts from '../../components/admin/BarChart';
import PieCharts from '../../components/admin/PieChart';

function AdminDashboard() {
  return (
    <AdminLayout>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', marginTop:'70px' }}>
        <div className='flex flex-col'>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <div style={{ marginBottom: '20px' }}>
              <UpcomingEvents />
            </div>
            <div style={{marginLeft:'280px'}}>
              <PieCharts/>
            </div>
          </div>

          <div className='flex flex-col' style={{ marginLeft: '20px' }}>
            <div>
              <EventDetails/>
            </div>
          </div>
        </div>
            <div style={{ marginTop: '0px', marginLeft:'430px' }}>
              <BarCharts/>
            </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
