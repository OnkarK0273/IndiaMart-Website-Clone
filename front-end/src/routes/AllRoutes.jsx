import { Heading } from '@chakra-ui/react';
import React from 'react'
import { Route, Routes } from "react-router-dom";
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
        </Routes>
    </>
  )
}
