
import { Product } from "../types/ProductInterface";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((p: Product) => (
        <div key={p._id} className="border p-4 rounded">
          <h2 className="font-bold">{p.name}</h2>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}