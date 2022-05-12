import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Goods from '../pages/Goods';
import Cart from '../pages/Cart';

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Goods />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
