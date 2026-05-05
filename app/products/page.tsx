import ProductsList from "../components/ProductsList";
import AddProductForm from "../components/AddProductForm";

export default function ProductsPage() {
  return (
    <div className="p-6">
      <AddProductForm />
      <ProductsList />
    </div>
  );
}