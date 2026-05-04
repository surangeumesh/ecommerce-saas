import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">E-Commerce</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </div>
    </nav>
  );
}