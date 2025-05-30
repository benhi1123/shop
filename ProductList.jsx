import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Áo thun nam", price: 200000 },
  { name: "Quần jeans nữ", price: 350000 },
  { name: "Giày thể thao", price: 500000 },
];

export default function ProductList() {
  return (
    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}