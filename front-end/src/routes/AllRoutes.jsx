import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminNavbar from '../Components/AdminNavbar';
import AddProduct from '../pages/Admin/AddProduct';
import Dashboard from '../pages/Admin/Dashboard';
// import Home from '../pages/Home';

export default function AllRoutes() {
  return (
    <>
        <Routes>
            {/* <Route path={"/"} element={<Home />} /> */}
            <Route path="*" element={<h1>Page not found</h1>} />
            <Route path='/adminDashboard' element={<><AdminNavbar/><Dashboard/></>}/>

            <Route path='/addProduct' element={<><AdminNavbar/><AddProduct/></>}/>
           
            <Route/>
        </Routes>
    </>
  )
}
