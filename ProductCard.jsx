import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow text-sm">
      <img src="#" alt={product.name} className="h-32 w-full bg-gray-200 rounded mb-2" />
      <h2 className="font-semibold">{product.name}</h2>
      <p className="mb-2">Giá: {product.price.toLocaleString()}đ</p>
      <button className="bg-black text-white px-4 py-1 rounded text-sm">Thêm vào giỏ</button>
    </div>
  );
}