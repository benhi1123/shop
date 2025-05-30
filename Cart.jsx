import React from "react";

export default function Cart() {
  const items = [
    { name: "Quần jeans nữ", price: 350000 },
    { name: "Áo thun nam", price: 200000 },
  ];
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">🛒 Giỏ hàng</h2>
      {items.map((item, i) => (
        <div key={i} className="flex justify-between text-sm mb-1">
          <span>{item.name}</span>
          <span>{item.price.toLocaleString()}đ</span>
        </div>
      ))}
      <hr className="my-2" />
      <div className="flex justify-between font-bold text-sm">
        <span>Tổng cộng:</span>
        <span>{total.toLocaleString()}đ</span>
      </div>
      <button className="w-full mt-3 bg-black text-white py-2 rounded">Đặt hàng</button>
    </div>
  );
}