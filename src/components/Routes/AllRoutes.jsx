import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/home';
import ShoppingCartComp from '../Cart/ShoppingCart';
import Signin from '../CommonComp/Signin/Signin';
export default function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/cart"} element={<ShoppingCartComp/>} />
        <Route path={"/signin"} element={<Signin/>} />
    </Routes>
  )
}
