import { Heading } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";


import AdminNavbar from '../Components/AdminNavbar';
import AddAdmin from '../pages/Admin/AddAdmin';
import AddNewMachines from "../pages/Admin/AddNewMachines";
import AddNewProduct from '../pages/Admin/AddNewProduct';

import AddProduct from '../pages/Admin/AddProduct';
import AdminsPage from '../pages/Admin/AdminsPage';
import Dashboard from '../pages/Admin/Dashboard';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Sign from '../pages/Sign';


export default function AllRoutes() {
  return (
    <>

        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/sign"} element={<Sign/>}/>
            <Route path="*" element={<Heading h='55vh' >Page not found</Heading>} />
            <Route path='/adminDashboard' element={<><AdminNavbar/><Dashboard/></>}/>
            <Route path='/addProduct' element={<><AdminNavbar/><AddProduct/></>}/>
            <Route path='/admin' element={<><AdminNavbar/><AdminsPage/></>}/>
            <Route path='/admin/:id' element={<><AdminNavbar/><AdminsPage/></>}/>
            <Route path='/addAdmin' element={<><AdminNavbar/><AddAdmin/></>}/>

            <Route path='/addProduct/:id' element={<><AdminNavbar/><AddProduct/></>}/>
            <Route path='/addNewProduct' element={<><AdminNavbar/><AddNewProduct/></>}/>
            <Route path='/addNewMachines' element={<><AdminNavbar/><AddNewMachines/></>}/>
        <Route />
      </Routes>
    </>
  );
}
