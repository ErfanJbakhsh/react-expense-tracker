import { useState } from "react";
import Form from "./Components/ProductForm";
import Table from "./Components/Table";
import type { product } from "./Components/Categories";
import "./App.css";

function App() {
  const [products, setProducts] = useState<product[]>([]);
  return (
    <>
      <Form
        onSubmit={(product) =>
          setProducts([...products, { ...product, id: products.length + 1 }])
        }
      />
      <Table
        products={products}
        onDelete={(id) => setProducts(products.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
