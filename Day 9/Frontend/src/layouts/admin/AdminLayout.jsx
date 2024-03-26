// import React from 'react';
// import Sidenav from '../../components/admin/Sidenav';

// function AdminLayout({ children }) {
//   return (
//     <div>
//       <Sidenav />
//       <div className=""> 
//         {children}
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;
import React from 'react';
import Sidenav from '../../components/admin/Sidenav';

function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidenav />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
