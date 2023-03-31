import { Heading } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminNavbar from "../Components/AdminNavbar";
import AddNewProduct from "../pages/Admin/AddNewProduct";

import AddProduct from "../pages/Admin/AddProduct";
import Dashboard from "../pages/Admin/Dashboard";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Sign from "../pages/Sign";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sign"} element={<Sign />} />
        <Route path="*" element={<Heading h="55vh">Page not found</Heading>} />
        <Route
          path="/adminDashboard"
          element={
            <>
              <AdminNavbar />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/addProduct"
          element={
            <>
              <AdminNavbar />
              <AddProduct />
            </>
          }
        />

        <Route
          path="/addProduct/:id"
          element={
            <>
              <AdminNavbar />
              <AddProduct />
            </>
          }
        />
        <Route
          path="/addNewProduct"
          element={
            <>
              <AdminNavbar />
              <AddNewProduct />
            </>
          }
        />

        <Route />
      </Routes>
    </>
  );
}
