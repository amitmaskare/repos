import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Manage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      {/* Header */}
      <Header />

      {/* Body */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >

        {/* Page Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            p: 2,
            overflowY: "auto",
            bgcolor: "background.paper",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Manage;
