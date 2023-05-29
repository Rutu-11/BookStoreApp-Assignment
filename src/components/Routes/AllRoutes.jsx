import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/home';
import ShoppingCart from '../CartComp';
import ShoppingCartComp from '../ShoppingCart';
export default function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/cart"} element={<ShoppingCartComp/>} />

      </Routes>
  )
}
