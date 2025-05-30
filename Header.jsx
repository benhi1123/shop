import React from "react";
export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold">🛍️ Cửa Hàng Online</h1>
      <div className="flex gap-2">
        <span className="text-sm text-gray-600">👤 khách (customer)</span>
        <button className="bg-black text-white px-3 py-1 text-sm rounded">Đăng xuất</button>
      </div>
    </header>
  );
}