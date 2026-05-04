const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

export default function ProductsPage() {
  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{p.name}</h2>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}