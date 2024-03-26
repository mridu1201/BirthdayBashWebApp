import React from 'react';
import AdminCards from './AdminCards';

function EventDetails() {
  
  return (
    <div className="flex flex-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop:'5px'}}>
        <AdminCards title={'Number of Users'} value={'10'} />
        <AdminCards title={'Total Events'} value={'10'} />
        <AdminCards title={'Themes'} value={'10'} />
        <AdminCards title={'Requested Events'} value={'10'} />
        <AdminCards title={'Completed Events'} value={'10'} />
    </div>
  );
}

export default EventDetails;
