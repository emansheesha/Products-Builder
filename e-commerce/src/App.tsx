import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { products } from "./data";

function App() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
