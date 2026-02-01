import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Manage from "../layouts/Manage";

// Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import MenuList from "../pages/menu/MenuList";
import Order from "../pages/order/Order";
import MenuPage from "../pages/menus/MenuPage";
import StaffPage from "../pages/staff/StaffPage";
import Integrations from "../pages/integrations/IntegrationsPage";
import Rating from "../pages/rating/RatingsPage";
import Inventory from "../pages/inventory/InventoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      
      {/* Layout Route */}
      <Route path="/" element={<Manage />}>
        
        {/* Default page */}
        <Route index element={<Dashboard />} />

        {/* Pages inside layout */}
        <Route path="menu" element={<MenuList />} />
        <Route path="orders" element={<Order />} />
        <Route path="menus" element={<MenuPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="rating" element={<Rating />} />
        <Route path="inventory" element={<Inventory />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
