import React, { useState } from 'react';
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/user/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminRequests from './pages/admin/AdminRequests'
import AdminFeedback from './pages/admin/AdminFeedback'
import AdminTheme from './pages/admin/AdminTheme'
import AdminMenu from './pages/admin/AdminMenu'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<AdminDashboard/>} />
      <Route path='/users' element={<AdminUsers/>} />
      <Route path='/birthdayrequests' element={<AdminRequests/>} />
      <Route path='/feedbacks' element={<AdminFeedback/>} />
      <Route path='/themes' element={<AdminTheme/>} />
      <Route path='/foodmenu' element={<AdminMenu/>} />
    </Routes>
    </>
  );
};

export default App;
