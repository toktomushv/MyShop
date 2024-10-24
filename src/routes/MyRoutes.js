import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import Add from "../pages/Add/Add";
import Edit from "../pages/Edit/Edit";
import Cart from "../pages/Cart/Cart";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/cart" element={<Cart />} />
          
      </Routes>
    </>
  );
}

export default MyRoutes;
