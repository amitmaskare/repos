

import React from "react";
import { Routes,Route } from "react-router-dom";
// Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import MenuList from "../pages/menu/MenuList";

const AppRoutes = () => {

  return (
    <Routes> 
        <Route path="/" element={<Dashboard />} />      
        <Route path="/menu" element={<MenuList />} />      
    </Routes>
  );
};

export default AppRoutes;
