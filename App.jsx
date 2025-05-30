import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}