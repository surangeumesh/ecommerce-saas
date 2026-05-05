"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: unknown) => {
    e.preventDefault();

    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        name,
        price: Number(price),
      }),
    });

    setName("");
    setPrice("");

    window.location.reload(); // simple refresh
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2"
      />
      <button className="bg-black text-white px-4">Add</button>
    </form>
  );
}