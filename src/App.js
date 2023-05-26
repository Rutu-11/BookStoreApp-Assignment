import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import your components
import BookListing from './components/BookListing';
import BookDetails from './components/BookDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/books"} element={<BookListing/>} />
        <Route path={"/books/:id" }element={<BookDetails/>} />
        <Route path={"/cart"} element={<ShoppingCart/>} />
        <Route path={"/checkout"} element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default App;
